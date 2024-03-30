/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            pirata: ["Pirata One", "swap"],
        },
        extend: {},
    },
    plugins: [],
    extend: {
        backgroundImage: {
            logo: "url('../public/logo512.png')",
        },
    },
});
