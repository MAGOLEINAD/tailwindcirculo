module.exports = {
  content: [
    "index.html",
    "./src/**/*.{html,js,jsx}"],
    theme: {
      container: {
        center: true,
      },
    },

    extend: {
      backgroundImage: {
        'cubiletes': "url('/img/blocks_background.jpg')",
      }
    },
    plugins: [
      require('tailwindcss-textshadow')
    ]
  };
  
