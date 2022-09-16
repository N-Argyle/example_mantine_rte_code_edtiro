/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();
const nextConfig = removeImports({
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
