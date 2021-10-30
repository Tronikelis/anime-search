/* eslint-disable quotes */
module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    '"Inter"',
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    '"Segoe UI"',
                    "Roboto",
                    '"Helvetica Neue"',
                    "Arial",
                    '"Noto Sans"',
                    "sans-serif",
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
            },
            colors: {
                nord: {
                    50: "#eceff4",
                    100: "#e5e9f0",
                    200: "#d8dee9",
                    300: "#4c566a",
                    400: "#434c5e",
                    500: "#3b4252",
                    600: "#2e3440",
                },
                frost: {
                    50: "#5e81ac",
                    100: "#81a1c1",
                    200: "#88c0d0",
                    300: "#8fbcbb",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
