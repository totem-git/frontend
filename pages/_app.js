import App from "next/app";
import Head from "next/head";
import ErrorPage from "next/error";
import { DefaultSeo } from "next-seo";
import { getStrapiMedia } from "utils/media";
import { getGlobalData } from "utils/api";
import "../styles/index.css";
import { AppWrapper } from "context/state";

const MyApp = ({ Component, pageProps }) => {
  // Extract the data we need
  const { global } = pageProps;
  if (global == null) {
    return <ErrorPage statusCode={404} />;
  }

  const { metadata } = global;

  let shareImageHasFormats = true;
  if (!metadata.shareImage.formats) {
    shareImageHasFormats = false;
  }

  return (
    <>
      {/* Favicon */}
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MKSQ7M5');",
          }}
        ></script>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HM5SS2Q65F"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-HM5SS2Q65F');gtag('config', 'AW-11015503833');",
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` var _ctct_m = "f933157e869725a69d68244387787886"; `,
          }}
        ></script>
        <script
          id="signupScript"
          src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
          async
          defer
        ></script>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon.url)} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,300&display=swap"
          rel="stylesheet"
        />
        <link href="/fonts/russo.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/viewerjs/1.10.4/viewer.min.css"
          integrity="sha512-OgbWuZ8OyVQxlWHea0T9Bdy1oDhs380WxLMaLZbuitQ/mdntHBPnApxbTebB9N5KoHZd3VMkk3G2cTY563nu5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
        titleTemplate={`%s${!!global.metaTitleSuffix && " | "}${
          global.metaTitleSuffix
        }`}
        title="Page"
        description={metadata.metaDescription}
        openGraph={{
          images: shareImageHasFormats
            ? Object.values(metadata.shareImage.formats).map((image) => {
                return {
                  url: getStrapiMedia(image.url),
                  width: image.width,
                  height: image.height,
                };
              })
            : [
                {
                  url: getStrapiMedia(metadata.shareImage.url),
                  width: metadata.shareImage.width,
                  height: metadata.shareImage.height,
                },
              ],
        }}
        twitter={{
          cardType: metadata.twitterCardType,
          handle: metadata.twitterUsername,
        }}
      />
      {/* Display the content */}
      <AppWrapper googleReviews={global.googleReviews}>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (appContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  //check if locale is undefined
  if (appContext.router.locale == null) {
    appContext.router.locale = "en";
  }
  const globalLocale = await getGlobalData(appContext.router.locale);

  return {
    ...appProps,
    pageProps: {
      global: globalLocale,
    },
  };
};

export default MyApp;
