module.exports = {
  plugins: [require("autoprefixer")({
    // 兼容浏览器的最近两个大版本
    // 兼容市场占有率大雨1%的浏览器(世界的)
    overrideBrowserslist: [
      "last 2 versions",
      ">1%"
    ]
  })]
}
