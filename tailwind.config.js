module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a10550',
        secondary: '#f48cb79c',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'], // 👈 Set Poppins as default sans font
        poppins: ['var(--font-poppins)'], // (Optional: Keep if you want explicit usage)
        montserrat: ['var(--font-montserrat)'], // (Optional: For secondary font)
      },
      borderRadius: {
        DEFAULT: '0.625rem',
      },
      letterSpacing: {
        space1: '1px',
        space2: '2px',
        space3: '3px',
        space4: '4px',
      },
    },
  },
  plugins: [],
};
