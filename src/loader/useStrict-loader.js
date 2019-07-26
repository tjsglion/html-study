const path = require("path");
const fs = require('fs');
const loaderUtils = require('loader-utils');
const acorn = require('acorn');
const walk = require('acorn-walk');
const MagicString = require('magic-string');
let _result = '';

module.exports = function (content, map, meta) {
  const options = loaderUtils.getOptions(this);
  let data = fs.readFileSync(path.resolve(__dirname, '../ast/commons.js'), {encoding: 'utf-8'});

  const temp = data.toString();
  const _source = acorn.parse(temp);
  _result = new MagicString(temp);
  walk.simple(_source, {
    ExpressionStatement (node) {
      const { expression } = node;
      if (expression.value === 'use strict') {
        const {start, end} = expression;
        _result.overwrite(start, end, '');
      }
    },
    VariableDeclaration (node) {}
  });
  return _result.toString();
}