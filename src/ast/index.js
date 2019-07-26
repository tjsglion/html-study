const acorn = require('acorn');
const walk = require('acorn-walk');
const MagicString = require('magic-string');
const source = '"use strict"; console.log("hello world"); const a = 123;';
const result = acorn.parse(source);
const path = require("path");
const fs = require('fs');
let _result = '';

fs.readFile(path.resolve(__dirname, './commons.js'), {encoding: 'utf-8'}, function (err, data) {
  if (err) console.log(err);
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
  console.log('返回结果============', _result.toString());
});
