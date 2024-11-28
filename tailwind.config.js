/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'D-primary-pink' : '#FFA2A2',
      'D-secondary-pink' : '#FF8181',
      'D-grey' : '#808F85',
      'D-white' : '#F8F7FF',
      'D-black' : '#222222',
    },
    fontFamily: {
      Primary: ['Rowdies', 'sans-serif'],
      Secondary: ['Dosis', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}