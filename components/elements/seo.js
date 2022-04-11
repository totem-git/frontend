import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import { getStrapiMedia } from "utils/media";
import { mediaPropTypes } from "utils/types";
import { useRouter } from "next/router";

const Seo = ({ metadata }) => {
  // Prevent errors if no metadata was set
  if (!metadata) return null;
  const router = useRouter();

  let shareImageHasFormats = true;
  if (!metadata.shareImage?.formats) {
    shareImageHasFormats = false;
  }

  return (
    <NextSeo
      title={metadata.metaTitle}
      description={metadata.metaDescription}
      openGraph={{
        // Title and description are mandatory
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        // Only include OG image if we have it
        // Careful: if you disable image optimization in Strapi, this will break
        ...(metadata.shareImage && {
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
        }),
        locale: "en_EN",
        site_name: "Totem Resorts",
        type: router.asPath.split("?")[0] == "/" ? "website" : "article",
        url: `https://totemresorts.com${router.asPath}`,
        article: {
          modifiedTime: metadata.updatedAt,
        },
      }}
      // Only included Twitter data if we have it
      twitter={{
        ...(metadata.twitterCardType && { cardType: metadata.twitterCardType }),
        // Handle is the twitter username of the content creator
        ...(metadata.twitterUsername && { handle: metadata.twitterUsername }),
      }}
    />
  );
};

Seo.propTypes = {
  metadata: PropTypes.shape({
    metaTitle: PropTypes.string.isRequired,
    metaDescription: PropTypes.string.isRequired,
    shareImage: mediaPropTypes,
    twitterCardType: PropTypes.string,
    twitterUsername: PropTypes.string,
  }),
};

export default Seo;
