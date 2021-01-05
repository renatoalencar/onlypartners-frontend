module.exports = function (env, argv) {
  const build = argv.mode === 'production' ? 'min' : 'out';
  return {
    entry: `./resources/public/js/compiled/${build}/index.js`,
    output: {
	  path: __dirname + "/resources/public/js/compiled",
	  filename: "onlypartners.js"
    }
  }
}
