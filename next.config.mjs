import fetch from "node-fetch";
let imageHosts = process.env.IMAGE_HOSTS || "";
imageHosts = imageHosts.split(", ");

export default {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "ec2-3-128-207-161.us-east-2.compute.amazonaws.com",
      "localhost",
      "totemresorts.com",
    ].concat(imageHosts),
  },
  async rewrites() {
    const articleCategories = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/pages/list-article-categories`
    ).then((res) => res.json());

    return articleCategories.map((category) => ({
      source: `/${category}/:slug`,
      destination: `/article/:slug?category=${category}`,
    }));
  },
};
