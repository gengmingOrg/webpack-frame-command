 require('./world.js')
//import {world} from './world.js'
//这个的语法就是 在引用 css的时候选择相应的loader
 require('style-loader!css-loader!./style.css')
var hello = function(str) {
  alert(str)
}
hello('hello world')
