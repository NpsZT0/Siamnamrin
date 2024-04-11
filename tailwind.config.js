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
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
        noto: ['Noto Sans Thai', 'sans-serif']
      },
    },
    // colors: {
    //   'delft_blue': {
    //     DEFAULT: '#1d3461',
    //     100: '#060a14',
    //     200: '#0c1527',
    //     300: '#121f3b',
    //     400: '#172a4f',
    //     500: '#1d3461',
    //     600: '#2f549d',
    //     700: '#4e78ca',
    //     800: '#89a5dc',
    //     900: '#c4d2ed'
    //   },
    //   'polynesian_blue': {
    //     DEFAULT: '#1f487e',
    //     100: '#060f19',
    //     200: '#0c1d33',
    //     300: '#122c4c',
    //     400: '#193a66',
    //     500: '#1f487e',
    //     600: '#2d69b8',
    //     700: '#558dd6',
    //     800: '#8eb3e4',
    //     900: '#c6d9f1'
    //   },
    //   'lapis_lazuli': {
    //     DEFAULT: '#376996',
    //     100: '#0b151e',
    //     200: '#162a3c',
    //     300: '#213f59',
    //     400: '#2c5477',
    //     500: '#376996',
    //     600: '#4c88bd',
    //     700: '#79a6cd',
    //     800: '#a6c4de',
    //     900: '#d2e1ee'
    //   },
    //   'silver_lake_blue': {
    //     DEFAULT: '#6290c8',
    //     100: '#0f1c2c',
    //     200: '#1f3858',
    //     300: '#2e5483',
    //     400: '#3e71af',
    //     500: '#6290c8',
    //     600: '#80a5d2',
    //     700: '#a0bcde',
    //     800: '#c0d2e9',
    //     900: '#dfe9f4'
    //   },
    //   'vista_blue': {
    //     DEFAULT: '#829cbc',
    //     100: '#161f29',
    //     200: '#2c3d52',
    //     300: '#425c7b',
    //     400: '#597ba4',
    //     500: '#829cbc',
    //     600: '#9aafc9',
    //     700: '#b3c3d6',
    //     800: '#cdd7e4',
    //     900: '#e6ebf1'
    //   },
    //   'alice_blue': {
    //     DEFAULT: '#ecf5ff',
    //     100: '#002e62',
    //     200: '#005bc4',
    //     300: '#278cff',
    //     400: '#89c0ff',
    //     500: '#ecf5ff',
    //     600: '#eff6ff',
    //     700: '#f3f8ff',
    //     800: '#f7fbff',
    //     900: '#fbfdff'
    //   }
    // }
  },
  plugins: [
    require("daisyui"),
    require('preline/plugin'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1d3461",
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

