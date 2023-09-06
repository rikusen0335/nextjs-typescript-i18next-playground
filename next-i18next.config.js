/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
  ns: ["general"],
  returnNull: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development'
};