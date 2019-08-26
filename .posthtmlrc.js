const glob = require('glob');

const dataFiles = glob.sync('./src/**/data.json');
const locals = dataFiles.reduce((acc, file) => {
  return { ...acc, ...require(file) };
}, {});

module.exports = {
  plugins: {
    'posthtml-include': {
      root: './src',
      encoding: 'utf-8',
    },
    'posthtml-expressions': {
      locals,
    },
  },
};
