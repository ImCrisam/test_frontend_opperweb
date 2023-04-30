/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    color: {
      "primary":"#CA38ED",
      "light": "#E487FB",
      "dark": "#3E1149",
      "gray":"#BCB1BF",
      "darkgray":"#574E5A"
    },
    extend: {
      colors:{
        fuchsia: {
          200:"#E487FB",
          400:"#CA38ED",
          600:"#3E1149"
        },
        Gray:{
          200:"#BCB1BF",
          600:"#574E5A"
        }
    }
    },
  },
  plugins: [],
}

