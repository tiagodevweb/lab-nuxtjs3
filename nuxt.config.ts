// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        '/spa': { ssr: false },
        '/static': { static: true },
        '/swr': { swr: true },
        '/api/posts': { cors: true, headers: { 'access-control-allowed-methods': 'POST' } },
    }
})
