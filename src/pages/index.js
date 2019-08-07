import React from "react"
import Container from '@material-ui/core/Container'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from '../components/about'
import Experience from '../components/experience'
import SocialIcons from "../components/socialIcons";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div >
      <Image />=
    </div>
    <Container style={{ textAlign: 'center' }}>
      <div style={{ marginTop: '2em' }} id="about_me">
        <About />
      </div>
      <div style={{ marginTop: '2em' }} id="experience">
        <Experience />
      </div>
      <div style={{ marginTop: '2em' }} id="experience">
        <Experience />
      </div>
      <div style={{ marginTop: '2em' }} id="experience">
        <Experience />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
