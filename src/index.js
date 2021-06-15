// import indexCss from './index.less';
// import pic from '../assets/images/xiaowu.jpeg';
// import axios from 'axios';

// console.log('hello, webpack');

// let img = new Image();
// img.src = pic;
// let root = document.querySelector("#root");
// root.append(img);

// axios.get('/api/info').then(res => {
//   console.log(res);
// })

// import css from './index.css';

// console.log("hello hahha");

// var btn = document.createElement("button");
// btn.innerHTML = "新增";
// document.body.appendChild(btn);

// btn.onclick = function () {
//   var div = document.createElement("div");
//   div.innerHTML = "item";
//   document.body.appendChild(div);
// }


// import counter from './counter';
// import number from './number';

// counter();
// number();

// // 通过监听文件，达到js热更新
// if (module.hot) {
//   module.hot.accept('./number', () => {
//     document.body.removeChild(document.getElementById('number'));
//     number();
//   })
// }

//import "@babel/polyfill";

// const arr = [new Promise(() => {}), new Promise(() => {})]

// arr.map(item => {
//   console.log(item);
// })

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>hello React</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
