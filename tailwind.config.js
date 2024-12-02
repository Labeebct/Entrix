/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box': '0px 0px 8px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        cagliostro: ['Cagliostro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        poiretOne: ['Poiret One', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'scope-one': ['Scope One', 'sans-serif'],
      },
      theme: {
        screens: {

          'xs': '500px',
          
          'sm': '640px',
    
          'md': '868px',
    
          'lg': '1004px',
    
          'xl': '1280px',
    
          '2xl': '1536px',
          
        }
      }
    },
  },
  plugins: [],  
}
