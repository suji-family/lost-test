const path = require('path')
const { version } = require('./package.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/')],
    // prependData: `@use "@/styles/_variables.module.scss" as variables; @use "@/styles/_mixins.module.scss" as mixins; @use "@/styles/_utils.module.scss" as utils;`,
  },
  env: {
    VERSION: version,
  },
}

module.exports = nextConfig
