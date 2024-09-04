/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily:{
       cp:['Courier Prime', 'monospace']
      },
      screens:{
      'xsmx': {'max': '465px'},
       'smx': {'max': '640px'},
       'mdx': {'max': '768px'},
       'lgx': {'max': '1023px'},
      },
      animation: {
        "loop-scroll": "loop-scroll 12s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        }
      },
      opacity: {
        0: '0',
        100: '1',
      },
    },
  },
  plugins: [],
}

