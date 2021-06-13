const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  // 入口
  entry: './src/index.js',
  // 等价于如下：
  // entry: {
  //   main: './src/index.js'
  // },
  // entry: {
  //   main: './src/index.js',
  //   other: './src/other.js'
  // },
  // 出口
  // output: './dist',
  output: {
    // 输出资源的存放位置，必须是绝对路径
    path: path.resolve(__dirname, './dist'),
    // 输出后的文件名称，将所有依赖的模块合并输出到main.js，默认为main.js
    filename: 'main.js',
    // 占位符
    // filename: '[name]-[chunkhash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: "css-loader"
        // 多个loader 是有执行顺序的，自后往前
        use: [ "xy-style-loader", "xy-css-loader" ]
      },
      {
        test: /.less$/,
        use: [ 
          "xy-style-loader", 
          // MiniCssExtractPlugin.loader,
          "xy-css-loader", "postcss-loader", "xy-less-loader"
        ]
      },
      {
        test: /.js$/,
        // use: path.resolve(__dirname, './src/myLoaders/replace-loader.js'),
        // use: {
        //   loader: path.resolve(__dirname, './src/myLoaders/replace-loader.js'),
        //   options: {
        //     name: '小杨'
        //   }
        // }
        use: [
          'replace-loader',
          {
            loader: 'replace-loader-async',
            options: {
              name: '小杨'
            }
          }
        ]
      }
    ]
  },
  // 让loader以简短的名称存在，使用resolveLoader:
  resolveLoader: {
    modules: ["node_modules", "./src/myLoaders"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    // new HtmlWebpackPlugin({
    //   template: './public/other.html',
    //   filename: 'other.html',
    //   chunks: ['other']
    // }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/index-[chunkhash:6].css',
    })
  ]
}
