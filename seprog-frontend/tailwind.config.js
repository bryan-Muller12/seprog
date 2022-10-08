const { isRegularExpressionLiteral } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "snas": ["Product Sans Regular", "Helvetica", "Arial", "sans-serif"]
    },
    colors:{
      "white": "#FFFFFF",
      "black": "#000000",
      "yellow": "#F3BC18",
      "blue":{
        "lightest":"#48AADF",
        "light":"#345D8F",
        "dark":"#2D3E51",
      },
      "gray":"#354455"
    },
    extend: {},
  },
  plugins: [],
}
//Cinza escuro 354455
//azul escuro 2D3E51
//azul claro 345D8F
//azul mais claro 48AADF
//amarelo F3BC18
//branco FFFFFF
//preto 000000