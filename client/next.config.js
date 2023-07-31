/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com']
    },
    publicRuntimeConfig: {
        CLIENT_ID: process.env.CLIENT_ID
    },
    serverRuntimeConfig: {

    },
};

module.exports = nextConfig
