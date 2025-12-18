// const path = require('path')
const isProd = process.env.NODE_ENV === 'production';


module.exports = { basePath: isProd ? 'usermigrated' : '', 
  assetPrefix: isProd ? 'usermigrated/' : '', 
  images: { unoptimized: true, // GitHub Pages does not support Next.js image optimization 
  }, 
};
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