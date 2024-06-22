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
    prependData: `@use "@/styles/_color.module.scss" as color;`,
  },
  env: {
    VERSION: version,
  },
}

module.exports = nextConfig
