const jsonConcat = require('json-concat');
const glob = require('glob');

const langs = ['en', 'es'];

langs.forEach(function(lang) {
  jsonConcat(
    {
      src: glob.sync(`./src/**/lang/${lang}.json`),
      dest: `./lang/${lang}.json`,
    },
    function() {
      console.log('Created translation file for:', lang);
    }
  );
});
