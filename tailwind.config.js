module.exports = {
  daisyui: {
    themes: [
      {
        kodepos: {
          primary: '#EA8414',
          secondary: '#666666',
          accent: '#666666',
          neutral: '#EB5F27',
          'base-100': '#F2F0F5',
          info: '#839BE2',
          success: '#159382',
          warning: '#E8B130',
          error: '#F96678',
        },
      },
    ],
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
