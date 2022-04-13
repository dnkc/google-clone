module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: ["www.google.co.uk"],
  },
};
