import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

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
        ogImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        twitterTitle={"404: Not Found | The Remote Creative"} 
        twitterDescription={"Modern Web Development with WordPress and Gatsby.js. Building lightning fast web apps with the latest react libraries and content management systems."}
        twitterImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
  
}

export default NotFoundPage
