import indexCss from './index.less';
import pic from '../assets/images/xiaowu.jpeg';

console.log('hello, webpack');

let img = new Image();
img.src = pic;
let root = document.querySelector("#root");
root.append(img);
