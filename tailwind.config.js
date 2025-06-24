/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#33BAC6',
          '50': '#E6F6F7',
          '100': '#CEEDF0',
          '200': '#9DDBE0',
          '300': '#6CC9D1',
          '400': '#3BB7C1',
          '500': '#33BAC6',
          '600': '#2895A0',
          '700': '#1E7078',
          '800': '#144A50',
          '900': '#0A2528',
        }
      }
    },
  },
  plugins: [],
};