/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                mont: ['Montserrat', 'sans-serif'],
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                custom: 'repeat(3, auto)',
            },
        },
    },
    plugins: [],
};
