import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import SubLayout from "../components/sub-layout"
import Seo from "../components/seo"
import FeaturedPortfolio from "../components/featured-portfolio"

const ProjectPage = () => {

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
        title={"Project Portfolio | The Remote Creative"} 
        description={"Modern Web Development with WordPress and Gatsby.js. View all of my latest projects and contact me if you're interested in working together."}
        keywords={"Gatsby.js, WordPress, GSAP, GreenSock, Modern Web Development, Fast Websites, Headless CMS, A/B Testing, Split Testing"}
        ogTitle={"Project Portfolio | The Remote Creative"} 
        ogDescription={"Modern Web Development with WordPress and Gatsby.js. View all of my latest projects and contact me if you're interested in working together."}
        ogImage={data.jasonThumb.childImageSharp.gatsbyImageData.fluid}
        twitterTitle={"Project Portfolio | The Remote Creative"} 
        twitterDescription={"Modern Web Development with WordPress and Gatsby.js. View all of my latest projects and contact me if you're interested in working together."}
        twitterImage={data.jasonThumb.childImageSharp.gatsbyImageData.fluid}
      />
      <FeaturedPortfolio/>
    </SubLayout>
  );

}

export default ProjectPage