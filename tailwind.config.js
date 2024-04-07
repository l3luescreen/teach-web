/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f3f4f6",
        
"secondary": "#ff00ff",
        
"accent": "#00ffff",
        
"neutral": "#ff00ff",
        
"base-100": "#262626",
        
"info": "#0000ff",
        
"success": "#00ff00",
        
"warning": "#EBD91A",
        
"error": "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
};