import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/home-components/hero-section"
import SectionTwo from "../components/home-components/section-two"
import PortfolioSection from "../components/home-components/portfolio-section"
import AboutSection from "../components/home-components/about-section"

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <SectionTwo />
    <PortfolioSection />
    <AboutSection />
  </Layout>
)

export default IndexPage

export const Head = () => {
  const data = useStaticQuery(graphql`
    {
      jasonThumb: file(relativePath: { eq: "Jason-Vanderheyden.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: TRACED_SVG
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return(
    <Layout>
      <Seo 
        title={"Home | The Remote Creative"} 
        description={"AI development and consulting services. Building intelligent web apps with modern technologies."}
        keywords={"AI development, AI consulting, machine learning, automation, web development"}
        ogTitle={"Home | The Remote Creative"} 
        ogDescription={"AI development and consulting services. Building intelligent web apps with modern technologies."}
        ogImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        twitterTitle={"Home | The Remote Creative"} 
        twitterDescription={"AI development and consulting services. Building intelligent web apps with modern technologies."}
        twitterImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        />
      <HeroSection />
      <SectionTwo />
      <PortfolioSection />
      <AboutSection />
    </Layout>
  );
}
