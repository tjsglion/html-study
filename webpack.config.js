const path = require('path');
const ConsoleLogOnBuildWebpack = require('./src/plugins/ConsoleLogOnBuildWebpack');
const WebpackPluginDemo = require('./src/plugins/WebpackPluginDemo');
const WebpackAsyncPluginDemo = require('./src/plugins/WebpackAsyncPluginDemo');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: path.join(__dirname, './src/loader/useStrict-loader'),
            options: {
              data: 'test'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ConsoleLogOnBuildWebpack(),
    new WebpackPluginDemo(),
    new WebpackAsyncPluginDemo(function () {
      console.log('异步插件构建完成!!!!');
    })
  ]
}
