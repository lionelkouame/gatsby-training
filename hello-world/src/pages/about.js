import React from "react"
import Header from "../components/headers"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <div style={{ color: `teal` }}>
            <Header headerText="About Gatsby"/>
            <p>Such wow. Very React.</p>
        </div>
    </Layout>
)