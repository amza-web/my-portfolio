/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        dblue: "#2d2e32",
        lblue: "#147efb",
        llp: "#555555",
        lp: "#767676",
      }
    },
  },
  plugins: [],
}
