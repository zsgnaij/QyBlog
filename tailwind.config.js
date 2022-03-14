module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.tsx',
  ],
  content: [],
  theme: {
    extend: {},
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '1/3': '33.333333%',
      full: '100%',
    },
  },
  plugins: [],
};
