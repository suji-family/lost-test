const path = require('path')
const { version } = require('./package.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-lostark.game.onstove.com',
      },
      {
        protocol: 'https',
        hostname: 'img.lostark.co.kr',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/')],
    prependData: `@use "@/styles/_color.module.scss" as color; @use "@/styles/_variables.module.scss" as variables; @use "@/styles/_mixins.module.scss" as mixins;`,
  },
  env: {
    VERSION: version,
  },
}

module.exports = nextConfig
