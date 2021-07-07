module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'dummyimage.com'],
  },
  eslint: {
    dirs: ['pages'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
