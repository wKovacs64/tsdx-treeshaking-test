import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing1 } from 'tsdx-treeshaking-test';

const App = () => {
  return (
    <div>
      Here is Thing1: <Thing1>I am unstyled.</Thing1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
