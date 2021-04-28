import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ConfirmedPage = () => (
  <Layout>
    <SEO title="Sending confirmation" />
    <h1>Done!</h1>
    <p>Your information was sent perfectly :{')'}</p>
    
    <Link to="/">Go back Home</Link>
  </Layout>
)

export default ConfirmedPage