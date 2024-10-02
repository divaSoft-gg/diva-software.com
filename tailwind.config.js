const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'section-background': '#161616', // Example color (you can replace with your preferred color)
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
    nextui({
      prefix: 'ui',
      defaultTheme: 'dark',
      addCommonColors: false,
      themes: { light: {}, dark: {} },
    }),
  ]
}
