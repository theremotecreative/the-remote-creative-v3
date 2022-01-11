import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {

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
    <Layout>
      <Seo 
        title={"404: Not Found | The Remote Creative"} 
        description={"Modern Web Development with WordPress and Gatsby.js. Building lightning fast web apps with the latest react libraries and content management systems."}
        keywords={"Gatsby.js, WordPress, GSAP, GreenSock, Modern Web Development, Fast Websites, Headless CMS, A/B Testing, Split Testing"}
        ogTitle={"404: Not Found | The Remote Creative"} 
        ogDescription={"Modern Web Development with WordPress and Gatsby.js. Building lightning fast web apps with the latest react libraries and content management systems."}
        ogImage={data.jasonThumb.childImageSharp.fluid}
        twitterTitle={"404: Not Found | The Remote Creative"} 
        twitterDescription={"Modern Web Development with WordPress and Gatsby.js. Building lightning fast web apps with the latest react libraries and content management systems."}
        twitterImage={data.jasonThumb.childImageSharp.fluid}
        />
        <MainSection>
          <div>
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </MainSection>
    </Layout>
  );
  
}

const MainSection = styled.section`
  background: #030e3b;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
    h1 {
      font-family: Roboto;
      font-weight: 900;
      font-size: 72px;
      line-height: 1.2;
      color: #fff;
      max-width: 960px;
      text-shadow: 2px 2px 4px rgba(0,0,0,.5);
      transform: translateZ(60px);
      transition-duration: .3s;
      text-align: center;
      &:hover {
          transform: translateZ(120px);
      }
  }
  p {
      font-family: Poppins;
      font-weight: 400;
      font-size: 36px;
      line-height: 1.3;
      max-width: 500px;
      color: #fff;
      transform: translateZ(60px);
      text-shadow: 1px 1px 2px rgba(0,0,0,.5);
      text-align: center;
  }
  @media(max-width:960px) {
      h1 {
          font-size: 56px;
      }
      p {
          margin: 0 auto;
          font-size: 32px;
      }
  }
  @media(max-width:767px) {
      h1 {
          font-size: 36px;
      }
      p {
          margin: 0 auto;
          font-size: 24px;
      }
  }
`

export default NotFoundPage
