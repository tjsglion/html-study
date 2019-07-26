const loaderUtils = require('loader-utils');

const PluginName = 'ConsoleLogOnBuildWebpack';
class ConsoleLogOnBuildWebpack {
  apply (compiler) {
    const options = loaderUtils.getOptions(this);

    compiler.hooks.run.tap(PluginName, compilation => {
      console.log('webpack构建开始')
    });
  }
}

module.exports = ConsoleLogOnBuildWebpack;