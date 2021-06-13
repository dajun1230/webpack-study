// 函数 声明式函数 不可以式箭头函数
// 函数 必须有返回值
// 如何返回多值 this.callback()
// 如何处理异步逻辑 this.async()

module.exports = function(source) {
  // console.log(this.query) // 取传递的参数
  // console.log(source);
  // return source.replace('hello', '哇塞');
  // const result = source.replace('hello', '哇塞');
  // 可以使用this.callback()来返回值
  // this.callback(null, result);
  // 处理异步
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace('hello', 'oooo');
    callback(null, result);
  }, 2000)
}
