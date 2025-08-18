import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <MainSection>
      <div>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </MainSection>
  </Layout>
)

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
        title={"404: Not Found | The Remote Creative"} 
        description={"AI development and consulting services. Building intelligent web apps with modern technologies."}
        keywords={"AI development, AI consulting, machine learning, automation, web development"}
        ogTitle={"404: Not Found | The Remote Creative"} 
        ogDescription={"AI development and consulting services. Building intelligent web apps with modern technologies."}
        ogImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        twitterTitle={"404: Not Found | The Remote Creative"} 
        twitterDescription={"AI development and consulting services. Building intelligent web apps with modern technologies."}
        twitterImage={data.jasonThumb.childImageSharp.gatsbyImageData}
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
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transform: translateZ(60px);
    transition-duration: 0.3s;
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
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
  @media (max-width: 960px) {
    h1 {
      font-size: 56px;
    }
    p {
      margin: 0 auto;
      font-size: 32px;
    }
  }
  @media (max-width: 767px) {
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
