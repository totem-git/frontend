let imageHosts = process.env.IMAGE_HOSTS || "";
imageHosts = imageHosts.split(", ");

module.exports = {
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
};
