module.exports = {
  siteUrl: "https://orisabiyi-lab.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404", "/_not-found"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
