import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wizard from "../form//Wizard";
import Contact from "../form/steps/Contact";
import Message from "../form/steps/Message";

const FormWizard = () => (
  <Layout>
    <SEO title="Form Wizard" />
    <h1>Form Wizard demo</h1>
    <Wizard>
      <Contact initialValues={{'firstName': '', 'lastName': '', 'email': ''}} />

      <Message initialValues={{'message': ''}} />
    </Wizard>
  </Layout>
)

export default FormWizard