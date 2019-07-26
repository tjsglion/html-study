class WebpackAsyncPluginDemo {

  apply (compile) {

    compile.hooks.run.tap('emit', (compilation, callback) => {

      setTimeout(function () {
        console.log('webpacy async plugin');
        console.log(compilation.assets);
        callback && callback();
      }, 1000);
    })
  }
}

module.exports = WebpackAsyncPluginDemo;