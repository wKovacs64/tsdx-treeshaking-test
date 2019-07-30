import { createElement } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

var Thing1 = function Thing1(props) {
  return createElement("button", Object.assign({
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
  return jsx(StyledButton, Object.assign({
    type: "button"
  }, props));
};

export { Thing1, Thing2 };
//# sourceMappingURL=tsdx-treeshaking-test.esm.js.map
