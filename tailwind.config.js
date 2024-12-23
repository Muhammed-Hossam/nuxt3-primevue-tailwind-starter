/** @type {import('tailwindcss').Config} */
export default {
  content: [
      // all directories and extensions will correspond to your Nuxt config
      "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/plugins/**/*.{js,ts,mjs}",
      "{srcDir}/composables/**/*.{js,ts,mjs}",
      "{srcDir}/utils/**/*.{js,ts,mjs}",
      "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/app.config.{js,ts,mjs}"
  ],
  darkMode: "class",
  theme: {

    container: {
      center: true, // Center the container
      padding: {
        DEFAULT: '1rem', // Default padding
        sm: '1.25rem',      // Padding for `sm` breakpoint
        lg: '1.5rem',      // Padding for `lg` breakpoint
        xl: '2rem',      // Padding for `xl` breakpoint
        '2xl': '3rem',   // Padding for `2xl` breakpoint
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },

    extend: {
      colors: {
        primary: {
          light: '#F4CE7C', // Light mode
          dark: '#F4CE7C',  // Dark mode
        },
        primarylight: {
          light: '#EFE2B8',
          dark: '#2A2314',
        },
        alert: {
          light: '#C11013',
          dark: '#C11013',
        },
        alertlight: {
          light: '#FFDBE2',
          dark: '#311C20',
        },
        text: {
          light: '#272727',
          dark: '#E8E8E8',
        },
        texthint: {
          light: '#636363',
          dark: '#949494',
        },
        gray1: {
          light: '#D4D4D4',
          dark: '#363636',
        },
        gray2: {
          light: '#F0F0F0',
          dark: '#272727',
        },
        gray3: {
          light: '#FAFAFA',
          dark: '#1A1A1A',
        },
        black: {
          light: "#1A1A1A",
          dark: "#1A1A1A"
        },
        blueLink: {
          light: "#2C00CC",
          dark: "#2C00CC"
        }
      },
      backgroundColor: {
        light: "#FFFFFF",
        dark: "#141414"
      }
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.primary.light'),
          '--color-primarylight': theme('colors.primarylight.light'),
          '--color-alert': theme('colors.alert.light'),
          '--color-alertlight': theme('colors.alertlight.light'),
          '--color-text': theme('colors.text.light'),
          '--color-texthint': theme('colors.texthint.light'),
          '--color-gray1': theme('colors.gray1.light'),
          '--color-gray2': theme('colors.gray2.light'),
          '--color-gray3': theme('colors.gray3.light'),
          '--color-black': theme('colors.black.light'),
          '--color-blueLink': theme('colors.blueLink.light'),
          '--bg-light': theme('colors.backgroundColor.light'),
        },
        '[data-theme="dark"]': {
          '--color-primary': theme('colors.primary.dark'),
          '--color-primarylight': theme('colors.primarylight.dark'),
          '--color-alert': theme('colors.alert.dark'),
          '--color-alertlight': theme('colors.alertlight.dark'),
          '--color-text': theme('colors.text.dark'),
          '--color-texthint': theme('colors.texthint.dark'),
          '--color-gray1': theme('colors.gray1.dark'),
          '--color-gray2': theme('colors.gray2.dark'),
          '--color-gray3': theme('colors.gray3.dark'),
          '--color-black': theme('colors.black.dark'),
          '--color-blueLink': theme('colors.blueLink.dark'),
          '--bg-dark': theme('colors.backgroundColor.dark'),
        },
      });
    },
  ],
}

