/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './node_modules/preline/preline.js',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      
      '2lg': '1240px',
      // => @media (min-width: 1240px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
        noto: ['Noto Sans Thai', 'sans-serif']
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
      backgroundSize: ({ theme }) => ({
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        ...theme('spacing')
      }),
    },
  },
  plugins: [
    require("daisyui"),
    require('preline/plugin'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0040d4",
          "primary-content": "#fbfdff",

          "secondary": "#1f487e",
          "secondary-content": "#c6d9f1",

          "accent": "#376996",
          "accent-content": "#d2e1ee",

          "neutral": "#6290c8",
          "neutral-content": "#dfe9f4",

          "base-100": "#fffbff",
          "base-200": "#c0bdc0",
          "base-300": "#807e80",
          "base-content": "#313031",

          "info": "#0093ff",
          "info-content": "#ffffff",

          "success": "#00b885",
          "success-content": "#ffffff",

          "warning": "#ffa700",
          "warning-content": "#ffffff",

          "error": "#f4002d",
          "error-content": "#ffffff",
        },
      },
    ],
  },
}

