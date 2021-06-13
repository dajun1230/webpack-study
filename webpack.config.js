const path = require('path');

module.exports = {
  mode: 'development',
  // 入口
  // entry: './src/index.js',
  // 等价于如下：
  // entry: {
  //   main: './src/index.js'
  // },
  entry: {
    main: './src/index.js',
    other: './src/other.js'
  },
  // 出口
  // output: './dist',
  output: {
    // 输出资源的存放位置，必须是绝对路径
    path: path.resolve(__dirname, './dist'),
    // 输出后的文件名称，将所有依赖的模块合并输出到main.js，默认为main.js
    // filename: 'main.js',
    // 占位符
    filename: '[name]-[chunkhash:8].js'
  },
  module: {},
  plugins: []
}
