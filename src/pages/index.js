import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/home-components/hero-section"
import AboutSection from "../components/home-components/about-section"
import FaqSection from "../components/home-components/faq-section"

const faqItems = [
  {
    question: "What does The Remote Creative LLC do?",
    answer:
      "We operate a portfolio of projects that includes a web development studio, an AI automation and marketing service, a merchandise storefront, and new service ideas in development.",
  },
  {
    question: "Where can I learn about your AI automation service?",
    answer:
      "Our AI automation and marketing service is branded as ScalarOps Agency, and the main site is at scalarops.agency.",
  },
  {
    question: "Are you still available for web development work?",
    answer:
      "Yes. We continue to build websites and digital experiences for clients alongside our owned projects.",
  },
  {
    question: "Do you sell physical products?",
    answer:
      "We offer original T-shirt designs through our Redbubble storefront as part of our merchandise line.",
  },
  {
    question: "Are there new projects on the horizon?",
    answer:
      "We are exploring a party planning service and additional collaborations that align with our portfolio strategy.",
  },
]

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <FaqSection faqs={faqItems} />
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

  return (
    <Layout>
      <Seo
        title={"Home | The Remote Creative"}
        description={"The Remote Creative LLC operates a portfolio of web, AI automation, and creative ventures."}
        keywords={"The Remote Creative LLC, portfolio company, web development, AI automation, marketing, merch, Redbubble"}
        ogTitle={"Home | The Remote Creative"}
        ogDescription={"The Remote Creative LLC operates a portfolio of web, AI automation, and creative ventures."}
        ogImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        twitterTitle={"Home | The Remote Creative"}
        twitterDescription={"The Remote Creative LLC operates a portfolio of web, AI automation, and creative ventures."}
        twitterImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        faqItems={faqItems}
      />
      <HeroSection />
      <AboutSection />
    </Layout>
  )
}
