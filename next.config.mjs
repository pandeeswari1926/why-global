/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  env: {
    API_URL: "http://localhost:3010/api",
    // API_URL: "https://antiapi.w8loss.uk/api",
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;



// module.exports = {
//     images: {
//       domains: ['cdn.sanity.io'],
//     },
//   };