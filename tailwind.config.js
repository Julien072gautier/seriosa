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
          DEFAULT: '#87B946',
          '50': '#F0F7E8',
          '100': '#E1EFD1',
          '200': '#C3DFA3',
          '300': '#A5CF75',
          '400': '#87B946',
          '500': '#87B946',
          '600': '#6C9438',
          '700': '#516F2A',
          '800': '#364A1C',
          '900': '#1B250E',
        },
        'secondary': {
          DEFAULT: '#55524D',
          '50': '#F5F4F3',
          '100': '#EBE9E7',
          '200': '#D7D3CF',
          '300': '#C3BDB7',
          '400': '#AFA79F',
          '500': '#55524D',
          '600': '#44413E',
          '700': '#33302F',
          '800': '#221F20',
          '900': '#110E11',
        }
      }
    },
  },
  plugins: [],
};