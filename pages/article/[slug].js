import Seo from "@/components/elements/seo";
import Layout from "@/components/layout";
import { useAppContext } from "context/state";
import { fetchAPI } from "utils/api";
import ErrorPage from "next/error";
import ArticleHero from "@/components/customSections/ArticleHero";
import RichText from "@/components/sections/rich-text";
import Breadcrumbs from "@/components/customSections/Breadcrumbs";
import CardsList from "@/components/customSections/CardsList";
import ReservationPopup from "@/components/elements/ReservationPopup";

const cardsListData = {
  cards: [
    {
      image: {
        url: "/uploads/small_19_f_7_BCBBE_77_C09_F_47_DA_A16_B_51368206_F27_D_1be302e5cd.jpg",
      },
      title: "Fishing Report",
      text: "Save time and find our latest news before arriving. Our fishing guides are constantly on the water on top of the fish. Totem Resorts fishing report contains all the main information updated, so you can know first what's going on at Lake of the Woods.",
      CTA: {
        url: "/fishing-reports",
        newTab: false,
        text: "Read more",
        type: "primary",
      },
    },
    {
      image: {
        url: "/uploads/small_IMAGE_00014_0eda1ecb76.jpg",
      },
      title: "Fishing Packaging",
      text: "All inclusive fishing packages which include boats, guides, bates, gas for boats, non-alcoholic beverages, lodging (usage of facilities) to enjoy an entire day in the middle of the Lake of the Woods",
      CTA: {
        url: "/the-fishing-experience/fishing-packages",
        newTab: false,
        text: "View details",
        type: "primary",
      },
    },
    {
      image: {
        url: "/uploads/small_vacation_packages_d666d9fc0c.jpg",
      },
      title: "Be our Guest",
      text: "We've got exactly what you are looking for! Schedule your new adventures or inquire more information.",
      CTA: {
        url: ":reservationForm",
        newTab: false,
        text: "Book now",
        type: "primary",
      },
    },
  ],
};

const ArticlePage = ({
  errorStatus,
  metadata,
  article,
  global,
  pageContext,
}) => {
  const appContext = useAppContext();

  if (errorStatus) return <ErrorPage statusCode={errorStatus} />;

  return (
    <Layout global={global} pageContext={pageContext}>
      <Seo metadata={metadata} />
      <div id="contentSections" className="flex flex-col">
        <ArticleHero articleDate={article.created_at} data={article.hero} />
        <Breadcrumbs />
        <RichText data={article.content} />
        {article.iframe && (
          <div
            className="container prose prose-lg"
            dangerouslySetInnerHTML={{ __html: article.iframe }}
          />
        )}
        <CardsList data={cardsListData} />
      </div>
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
          googleReviews={global.googleReviews}
        />
      )}
    </Layout>
  );
};

export const getServerSideProps = async ({ params, query, res }) => {
  let article = await fetchAPI(
    `/articles?slug=${params.slug}&page.slug=${query.category}&status=published`
  ).then((articles) => articles[0]);

  if (!article) {
    res.statusCode = 404;
    return {
      props: {
        errorStatus: 404,
      },
    };
  }

  let global = await fetchAPI("/global");

  const pageContext = {
    slug: `${query.category}/${params.slug}`,
  };

  return {
    props: {
      metadata: { ...article.metadata, updatedAt: article.updated_at },
      article,
      global,
      pageContext,
    },
  };
};

export default ArticlePage;
