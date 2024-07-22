/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'primary':'#34DCC6',
        'bluegreen':'#00D0E1',
        'greenaqua':'#13C1CC',
        'greensoft':'#6CCCAC',
        'lime':'#D4F689',
        'yellow':'#F9F871',
      },
    },
  },
  plugins: [],
}

