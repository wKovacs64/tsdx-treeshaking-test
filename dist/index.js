
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tsdx-treeshaking-test.cjs.production.min.js')
} else {
  module.exports = require('./tsdx-treeshaking-test.cjs.development.js')
}
