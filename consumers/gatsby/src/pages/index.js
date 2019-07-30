import * as React from "react"
import { Thing1 } from "tsdx-treeshaking-test"

const IndexPage = () => {
  return (
    <div>
      Here is Thing1: <Thing1>I am unstyled.</Thing1>
    </div>
  )
}

export default IndexPage
