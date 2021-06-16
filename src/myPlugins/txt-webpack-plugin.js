class txtWebpackPlugin {
  constructor(options) {
    console.log(options)
  };

  // 如何引入hooks
  apply(compiler) {
    compiler.hooks.emit.tapAsync('txtWebpackPlugin', (compilation, cb) => {
      compilation.assets['test.txt'] = {
        source: function() {
          return "hello webpack 第四节"
        },
        size: function() {
          return 1024;
        }
      }
      cb();
    })
    compiler.hooks.compile.tap("txtwebpackPlugin", (compilation) => {
      console.log("hello compiler hook");
    });
  }
}

module.exports = txtWebpackPlugin;
