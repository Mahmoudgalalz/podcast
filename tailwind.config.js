/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
			center:true,
			padding:'10rem',
    },
    colors:{
      main:'#eeeee4',
      sub:'#eab676',
      accent:'#76b5c5',
      text:'#154c79',
    },
     extend: {},
  },
  plugins: [],
}
