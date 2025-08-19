import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SubLayout from "../components/sub-layout"
import Seo from "../components/seo"
import FeaturedPortfolio from "../components/featured-portfolio"

const ProjectPage = () => (
  <SubLayout>
    <FeaturedPortfolio />
  </SubLayout>
)

export default ProjectPage

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
    <SubLayout>
      <Seo
        title={"Project Portfolio | The Remote Creative"}
        description={"Senior developers delivering AI‑enhanced web and app solutions. View our latest projects and contact us to work together."}
        keywords={"senior developers, AI development, AI consulting, machine learning, automation, web development"}
        ogTitle={"Project Portfolio | The Remote Creative"}
        ogDescription={"Senior developers delivering AI‑enhanced web and app solutions. View our latest projects and contact us to work together."}
        ogImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        twitterTitle={"Project Portfolio | The Remote Creative"}
        twitterDescription={"Senior developers delivering AI‑enhanced web and app solutions. View our latest projects and contact us to work together."}
        twitterImage={data.jasonThumb.childImageSharp.gatsbyImageData}
      />
      <FeaturedPortfolio/>
    </SubLayout>
  );
}
