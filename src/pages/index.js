import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/home-components/hero-section"
import SectionTwo from "../components/home-components/section-two"
import PortfolioSection from "../components/home-components/portfolio-section"
import AboutSection from "../components/home-components/about-section"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
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
        description={"Modern Web Development with WordPress and Gatsby.js. Building lightning fast web apps with the latest react libraries and content management systems."}
        keywords={"Gatsby.js, WordPress, GSAP, GreenSock, Modern Web Development, Fast Websites, Headless CMS, A/B Testing, Split Testing"}
        ogTitle={"Home | The Remote Creative"} 
        ogDescription={"Modern Web Development with WordPress and Gatsby.js. Building lightning fast web apps with the latest react libraries and content management systems."}
        ogImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        twitterTitle={"Home | The Remote Creative"} 
        twitterDescription={"Modern Web Development with WordPress and Gatsby.js. Building lightning fast web apps with the latest react libraries and content management systems."}
        twitterImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        />
      <HeroSection />
      <SectionTwo />
      <PortfolioSection />
      <AboutSection />
    </Layout>
  );

}

export default IndexPage