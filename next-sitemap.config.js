/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mslyn.com",
  generateRobotsTxt: true, // This generates robots.txt alongside the sitemap
  exclude: ["/server-sitemap.xml"], // Exclude paths if you mix dynamic/static
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "BadBot", disallow: "/private" },
    ],
  },
};
