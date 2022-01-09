import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const HomeLogo = () => {

    const data = useStaticQuery(graphql`
        query {
            SiteLogo: file(relativePath: { eq: "logo-white-1x.png" }) {
                childImageSharp {
                    gatsbyImageData (
                        width: 220
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
    `)

    const MainLogo = getImage(data.SiteLogo.childImageSharp.gatsbyImageData)

    return(
        <LogoContainer>
            <GatsbyImage image={MainLogo} alt={"The Remote Creative Logo"}/>
        </LogoContainer>
    )

}

const LogoContainer = styled.div`
  height: 76px;
  width: 220px;
  img {
      margin-bottom: 0;
  }
  @media(max-width:767px) {
    height: 45px;
    width: 130px;
  }
`

export default HomeLogo