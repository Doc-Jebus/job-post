/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './src/index.html',
    './index.html',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1080px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        cream: '#FCF8E8',
        darkBlue: '#082032',
        darkCream: '#F6E3C5',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        darkGreen: '#53BF9D',
        dirtyGreen: '#94B49F',
        lightBrown: '#ECB390',
        lightGreen: '#A0D995',
        orange: '#DF7861',
        lightBlack: 'rgba(0,0,0,0.5)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightBlue: '#DFF6FF',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}
