export default {
    theme: {
        fontFamily: {
            sans: ['Source Sans Pro'],
        },
        extend: {
            colors: {},
            fontSize: {
                base: '0.9rem',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                md: '2rem',
            },
        },
    },
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './App.{js,ts,vue}',
        './app.{js,ts,vue}',
        './Error.{js,ts,vue}',
        './error.{js,ts,vue}',
    ],
};
