'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var core = require('@emotion/core');
var styled = _interopDefault(require('@emotion/styled'));

var Thing1 = function Thing1(props) {
  return React.createElement("button", Object.assign({
    type: "button"
  }, props));
};

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled.button(_templateObject());
var Thing2 = function Thing2(props) {
  return core.jsx(StyledButton, Object.assign({
    type: "button"
  }, props));
};

exports.Thing1 = Thing1;
exports.Thing2 = Thing2;
//# sourceMappingURL=tsdx-treeshaking-test.cjs.development.js.map
