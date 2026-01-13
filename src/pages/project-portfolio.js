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
        description={"A look at select digital projects delivered by The Remote Creative LLC."}
        keywords={"project portfolio, web development, digital experiences, The Remote Creative LLC"}
        ogTitle={"Project Portfolio | The Remote Creative"}
        ogDescription={"A look at select digital projects delivered by The Remote Creative LLC."}
        ogImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        twitterTitle={"Project Portfolio | The Remote Creative"}
        twitterDescription={"A look at select digital projects delivered by The Remote Creative LLC."}
        twitterImage={data.jasonThumb.childImageSharp.gatsbyImageData}
      />
      <FeaturedPortfolio/>
    </SubLayout>
  );
}
