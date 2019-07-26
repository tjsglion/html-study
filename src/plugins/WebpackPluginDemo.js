const loaderUtils = require('loader-utils');

// 指定事件名
const eventHook = 'webpackEventPlugins';
/**
 * @description webpack plugin 组成部分
 * 1、 创建一个命名函数  WebpackPluginDemo
 * 2、 原型对象上添加一个 apply 方法
 * 3、 指定一个事件钩子并挂载到 webpack 上
 * 4、 处理 webpack 内部实例的特定数据
 * 5、 功能完成后调用 webpack 提供的回调函数
 */
// 创建命名函数
// class WebpackPluginDemo {
//   // 添加 apply 方法 并接收 compiler 参数
//   apply (compiler) {
//     // 指定一个事件并挂载到webpack上
//     // compiler.plugin('webpackEventPlugins', (compilation, callback) => {
//     //   console.log('this is an example plugin!!!');
//     //   // TODO

//     //   // 功能完成后，调用webpack提供的回调
//     //   callback && callback();
//     // });
//   }
// }
function WebpackPluginDemo () {}

WebpackPluginDemo.prototype.apply = function (compiler) {
  // compiler.plugin 已弃用， 应用 hooks 替换
  compiler.plugin('done', function () {
    console.log('webpackPluginDemo');
  })
}

module.exports = WebpackPluginDemo;
