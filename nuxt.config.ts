// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        '/spa': { ssr: false },
        '/static': { static: true },
        '/swr': { swr: 60 },
        '/api/posts': { cors: true, headers: { 'access-control-allowed-methods': 'POST' } },
    }
})
