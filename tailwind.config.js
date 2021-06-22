module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accentMain: '#76BB86',
        accentSecondary: '#B0DAB9',
        redMain: '#BC4646',
        redLight: '#D66565',
        dark: {
            bgMain: '#1E2327',
            bgSecondary: '#16191C',
            bgTertiary: '#282E34',
            textMain: '#FFFFFF',
            textSecondary: '#DEDEDE',
            textDark: '#606060'
        },
        light: {
            bgMain: '#1E2327',
            bgSecondary: '#16191C',
            bgTertiary: '#282E34',
            textMain: '#FFFFFF',
            textSecondary: '#DEDEDE',
            textDark: '#606060'
        },
      },
    }
  },
  variants: {
    extend: {
      ringWidth: ['hover']
    },
  },
  plugins: [],
}
