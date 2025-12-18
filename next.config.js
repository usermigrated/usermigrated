// const path = require('path')
 
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media.dev.to',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media2.dev.to',
//         pathname: '**',
//       },
//     ],
//   },
// }


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for static export
  },
  // optional: fix routing if your repo is not at the root of the domain
  // basePath: "/<repo-name>",
  // assetPrefix: "/<repo-name>/",
};

module.exports = nextConfig;
