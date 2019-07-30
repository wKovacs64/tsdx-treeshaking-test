'use strict';

var React = require('react');
var core = require('@emotion/core');

var Thing1 = function Thing1(props) {
  return React.createElement(
    'button',
    Object.assign(
      {
        type: 'button',
      },
      props
    )
  );
};

var Thing2 = function Thing2(props) {
  return core.jsx(
    'button',
    Object.assign(
      {
        type: 'button',
        css: {
          padding: '1rem',
        },
      },
      props
    )
  );
};

exports.Thing1 = Thing1;
exports.Thing2 = Thing2;
//# sourceMappingURL=tsdx-treeshaking-test.cjs.development.js.map
