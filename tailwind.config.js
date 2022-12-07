/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 5s cubic-bezier(1, 1, 0.2, 1) infinite',

      },
    },
  },
  plugins: [],
}
