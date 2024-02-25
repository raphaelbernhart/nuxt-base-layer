// import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    theme: {
        // screens: {
        // xs: '380px',
        // ...defaultTheme.screens,
        // },
        fontFamily: {
            sans: ['Source Sans Pro'],
        },
        extend: {
            colors: {
                primary: '#442615',
                primaryLight: '#A18276',
                secondary: '#233E3C',
                secondaryLight: '#7A9E7E',
                light: '#F3EED1',
                background: '#271812',
                backgroundLight: '#3D2920',
            },
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
