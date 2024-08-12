// Nuxt configuration file
// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindForms from '@tailwindcss/forms';
// import tailwindTypography from '@tailwindcss/typography';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxt/image',
        'nuxt-icon',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@vueuse/nuxt',
        'dayjs-nuxt',
        '@nuxtjs/plausible',
        '@nuxtjs/seo',
    ],
    runtimeConfig: {
        public: {
            plausibleUrl: '',
            mode:
                process.env.NODE_ENV === 'development'
                    ? 'development'
                    : 'production',
        },
    },
    css: [join(currentDir, './assets/styling/main.scss')],
    site: {
        // @nuxtjs/seo module config
        // https://www.nuxtseo.com/nuxt-seo/guides/configuring-modules
        name: 'My Cool Nuxt App',
        description: '', // can be set via translations when i18n is installed
        defaultLocale: 'en',
        indexable: true,
        identity: {
            type: 'Organization',
        },
        trailingSlash: false,
        // url is set by "NUXT_SITE_URL" .env variable
    },
    robots: {
        allow: '*',
    },
    image: {
        format: ['webp'],
        quality: 80,
        ipx: {
            maxAge: 60 * 60, // 1h cache control max age
        },
    },
    plausible: {
        domain: 'example.com',
        apiHost: process.env.NUXT_PLAUSIBLE_URL,
        autoOutboundTracking: true,
    },
    dayjs: {
        locales: ['en'],
        plugins: ['relativeTime', 'utc', 'timezone'],
        defaultLocale: 'en',
        defaultTimezone: 'Europe/Vienna',
    },
    pinia: {
        autoImports: ['defineStore'],
    },
    tailwindcss: {
        viewer: false,
        config: {
            // plugins: [tailwindForms, tailwindTypography],
        },
        // Needed to keep the bundle size small in case of config import
        // Sample code: >>import { theme } from "#tailwind-config";<<
        exposeConfig: {
            level: 1,
        },
    },
    googleFonts: {
        families: {
            'Source Sans Pro': {
                wght: [200, 400, 600, 700],
                ital: [200, 400, 600, 700],
            },
        },
        display: 'swap',
        prefetch: true,
        preconnect: true,
        download: true,
        base64: false,
        useStylesheet: false,
    },
    devtools: { enabled: true },
    vite: {
        build: {
            rollupOptions: {
                // output: {
                //     manualChunks: true,
                // },
            },
        },
    },
    compatibilityDate: '2024-08-12',
});
