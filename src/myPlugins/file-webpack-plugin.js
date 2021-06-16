class fileWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("fileWebpackPlugin", (compilation, cb) => {
      // console.log(compilation.assets); {"文件1": "","文件2": ""}
      // console.log(Object.keys(compilation.assets))
      const len = Object.keys(compilation.assets).length;
      let content = `文件的数量：${len};\n`;
      for (let filename in compilation.assets) {
        // content += console.log(filename);
        content += `文件：${filename}\n`;
      };
      compilation.assets["file.txt"] = {
        source: function () {
          // return "hello webpack第四节";
          return content;
        },
        size: function () {
          return 1024;
        },
      };
      cb();
    });
  }
}

module.exports = fileWebpackPlugin;
