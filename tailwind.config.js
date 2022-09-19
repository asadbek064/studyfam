const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      primary: {
        1: '#5A80FE',
      },
      blue: {
        1: '#5A80FE'
      },
      white: {
        1: '#F6F7FB',
      },
      gray: {
        1: '#586380',
      },
      black: {
        1: '#303535',
      },
      // TODO: Add colors
      // Make sure that they are prepared in the Figma and follow the naming primary/secondary/gray-${number}
      // Example of correctly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586876-5e834233-9639-4166-9811-b00e63820d98.png
      // Example of incorrectly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586974-6986149f-aee3-450c-a1dd-26e73e3aca02.png
      // black: '',
      // white: '',
      // primary: {
      //   1: '',
      // },
      // secondary: {
      //   1: '',
      // },
      // gray: {
      //   1: '',
      // },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '359px' },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
