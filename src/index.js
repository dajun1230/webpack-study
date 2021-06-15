import indexCss from './index.less';
import pic from '../assets/images/xiaowu.jpeg';
import axios from 'axios';

console.log('hello, webpack');

let img = new Image();
img.src = pic;
let root = document.querySelector("#root");
root.append(img);

axios.get('/api/info').then(res => {
  console.log(res);
})
