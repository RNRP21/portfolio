/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily:{
       cp:['Courier Prime', 'monospace']
      },
      screens:{
       'smx': {'max': '640px'},
       'mdx': {'max': '768px'},
      }
    },
  },
  plugins: [],
}

