/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "product-swiper": "1fr 2fr",
            },
            dropShadow: {
                "nav-shadow": "0 4px 10px #1A001F",
                "login-register": "0 1px 5px #1A001F",
                "product-card": "0 0.01em 0.1em #1A001F",
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
            },
            backgroundColor: {
                "swiper-back": "linear-gradient(to right, #bfdbfe 50%, #ffffff 75%)",
            },
            fontWeight: {
                "product-home": 400,
            },
        },
    },
    plugins: [],
};
