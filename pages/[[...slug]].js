import ErrorPage from "next/error";
import { getPageData, fetchAPI, getGlobalData } from "utils/api";
import Sections from "@/components/sections";
import Seo from "@/components/elements/seo";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { getLocalizedPaths } from "utils/localize";
import ReservationPopup from "@/components/elements/ReservationPopup";
import { useAppContext } from "context/state";

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({ sections, metadata, preview, global, pageContext }) => {
  const router = useRouter();
  const appContext = useAppContext();

  // Check if the required data was provided
  if (!router.isFallback && !sections?.length) {
    return <ErrorPage statusCode={404} />;
  }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>;
  }

  return (
    <Layout global={global} pageContext={pageContext}>
      {/* Add meta tags for SEO*/}
      <Seo metadata={metadata} />
      {/* Display content sections */}
      <Sections sections={sections} preview={preview} />
      {appContext.reservationPopupState.visible && (
        <ReservationPopup
          closeSelf={() => {
            appContext.setReservationPopupState({
              visible: false,
              selectedPackage: "",
            });
          }}
          title={appContext.reservationPopupState.title}
          submitButtonLabel={appContext.reservationPopupState.submitButtonLabel}
          selectedPackage={appContext.reservationPopupState.selectedPackage}
          gaSubmitEventLabel={
            appContext.reservationPopupState.gaSubmitEventLabel
          }
          googleReviews={global.googleReviews}
          emailSubject={appContext.reservationPopupState.emailSubject}
        />
      )}
    </Layout>
  );
};

export async function getStaticPaths(context) {
  // Get all pages from Strapi
  const allPages = context.locales.map(async (locale) => {
    const localePages = await fetchAPI(`/pages?_locale=${locale}`);
    return localePages;
  });

  const pages = (await Promise.all(allPages)).flat();

  const paths = pages.map((page) => {
    // Decompose the slug that was saved in Strapi
    const slugArray = !page.slug ? false : page.slug.split("/");

    return {
      params: { slug: slugArray },
      // Specify the locale to render
      locale: page.locale,
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context;

  const globalLocale = await getGlobalData(locale);
  // Fetch pages. Include drafts if preview mode is on
  const pageData = await getPageData(
    { slug: !params.slug ? [""] : params.slug },
    locale,
    preview
  );

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { notFound: true };
  }

  // We have the required page data, pass it to the page component
  const { contentSections, metadata, localizations, slug } = pageData;

  // contentSections is an array of objects, each object represents a section
  for (const section of contentSections) {
    if (section.__component === "sections.restaurant-menu-section") {
      const menuData = await fetchAPI(`/menus/${section.menu.id}`);

      section.menu = menuData;
      break;
    }
  }

  const pageContext = {
    locale: pageData.locale,
    locales,
    defaultLocale,
    slug,
    localizations,
  };

  const localizedPaths = getLocalizedPaths(pageContext);

  return {
    props: {
      preview,
      sections: contentSections,
      metadata: { ...metadata, updatedAt: pageData.updated_at },
      global: globalLocale,
      pageContext: {
        ...pageContext,
        localizedPaths,
      },
    },
  };
}

export default DynamicPage;
