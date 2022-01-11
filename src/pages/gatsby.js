import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import SubLayout from "../components/sub-layout"
import Seo from "../components/seo"
import GatsbyOne from "../components/gatsby-one"
import GatsbyTwo from "../components/gatsby-two"
import GatsbyPortfolio from "../components/gatsby-portfolio"
import GatsbyContact from "../components/gatsby-contact"

const GatsbyPage = () => {

  const data = useStaticQuery(graphql`
    query {
        jasonThumb: file(relativePath: { eq: "Jason-Vanderheyden.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                  width: 800
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
                )
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
        }
    }
  `)

  return(
    <SubLayout>
      <Seo 
        title={"Gatsby.js Website Development | The Remote Creative"} 
        description={"Gatsby website development. Combine the Gatsby.js framework with the WordPress dashboard to create a lightning fast, App-like, and secure website."}
        keywords={"gatsby website development, Gatsby.js, WordPress, GSAP, GreenSock, Modern Web Development, Fast Websites, Headless CMS, A/B Testing, Split Testing"}
        ogTitle={"Gatsby.js Website Development | The Remote Creative"} 
        ogDescription={"Combine the Gatsby.js framework with the WordPress dashboard to create a lightning fast, App-like, and secure website."}
        ogImage={data.jasonThumb.childImageSharp.fluid}
        twitterTitle={"Gatsby.js Website Development | The Remote Creative"} 
        twitterDescription={"Combine the Gatsby.js framework with the WordPress dashboard to create a lightning fast, App-like, and secure website."}
        twitterImage={data.jasonThumb.childImageSharp.fluid}
      />
      <GatsbyOne/>
      <GatsbyTwo/>
      <GatsbyPortfolio/>
      <GatsbyContact/>
    </SubLayout>
  );
  
}

export default GatsbyPage