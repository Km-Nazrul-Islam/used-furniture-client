/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
      themes: [
        {
          mytheme: {
          
                "primary": "#C69050",
                          
                "secondary": "#b2ed6f",
                          
                "accent": "#efa5b5",
                          
                "neutral": "#1E2033",
                          
                "base-100": "#E8E1EA",
                          
                "info": "#99DDF0",
                          
                "success": "#1B9D90",
                          
                "warning": "#D1B00A",
                          
                "error": "#F0141F",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}