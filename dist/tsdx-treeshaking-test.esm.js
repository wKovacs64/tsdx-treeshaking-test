import { createElement } from 'react';
import { jsx } from '@emotion/core';

var Thing1 = function Thing1(props) {
  return createElement(
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
  return jsx(
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

export { Thing1, Thing2 };
//# sourceMappingURL=tsdx-treeshaking-test.esm.js.map
