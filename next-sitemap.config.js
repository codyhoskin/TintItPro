/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tintitpro.ca',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
    ],
  },
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === '/' ? 'weekly' : config.changefreq,
    priority: path === '/' ? 1 : config.priority,
    lastmod: new Date().toISOString(),
  }),
};
