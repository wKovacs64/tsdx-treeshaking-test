import React from "react"
import { Thing1 } from "tsdx-treeshaking-test"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    Here is Thing1: <Thing1>I am unstyled.</Thing1>
  </Layout>
)

export default IndexPage
