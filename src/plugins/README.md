## 创建插件

  ### 插件组成:
   
    1. 一个 JavaScript 命名函数
    2. 在插件函数的 prototype 上定义一个 apply 方法
    3. 指定一个绑定到 webpack 自身的事件钩子 (Tapable钩子)
    4. 处理webpack内部实例的特定数据
    5. 功能完成后调用webpack提供的回调

  ### compiler 和 compilation

    compiler:
      compiler对象代表了完整的webpack环境配置。 这个对象在启动 webpack 时被一次性建立， 并配置好所有可操作的设置， 包括 options, loader 和 plugin. 当在 webpack环境中应用一个插件时，插件将收到此 compiler 对象的引用。 可以使用它来访问 webpack 的主环境

    compilation:
      compilation 对象代表了一次资源版本构建。 当运行 webpack 开发环境中间件时， 每当检测到一个文件变化， 就会把创建一个新的 compilation, 从而生成一组新的编译资源。 一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。 compilation 对象也提供了很多关键时机的回调， 以供插件做自定义处理时选择使用。