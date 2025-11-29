import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/home-components/hero-section"
import SectionTwo from "../components/home-components/section-two"
import PortfolioSection from "../components/home-components/portfolio-section"
import AboutSection from "../components/home-components/about-section"
import FaqSection from "../components/home-components/faq-section"

const faqItems = [
  {
    question: "What kinds of projects do you take on?",
    answer:
      "We build high-performance marketing sites, automation systems for lead capture and outreach, custom AI agents, and training programs so your team can operate and extend what we deliver.",
  },
  {
    question: "Do you work with existing tools and data?",
    answer:
      "Yes. We integrate with your CRM, analytics stack, knowledge bases, and marketing automations so new AI features and workflows keep your current systems as the source of truth.",
  },
  {
    question: "How do engagements work across time zones?",
    answer:
      "Our senior developers are remote-first. We set a weekly cadence for demos, async status, and decision-making so you always know what shipped and what's next.",
  },
  {
    question: "Can you coach our team on AI tools?",
    answer:
      "We run workshops and pair-with-your-team sessions that cover prompt design, workflow automation, and governance so your staff can ship AI-backed features confidently.",
  },
  {
    question: "How do we get started?",
    answer:
      "Share your goals in the contact form and we'll reply with a short scope, suggested architecture, and a kickoff path tailored to your budget and timeline.",
  },
]

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <SectionTwo />
    <PortfolioSection />
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
        description={"Senior developers delivering AI‑enhanced web and app solutions."}
        keywords={"senior developers, AI development, AI consulting, machine learning, automation, web development"}
        ogTitle={"Home | The Remote Creative"}
        ogDescription={"Senior developers delivering AI‑enhanced web and app solutions."}
        ogImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        twitterTitle={"Home | The Remote Creative"}
        twitterDescription={"Senior developers delivering AI‑enhanced web and app solutions."}
        twitterImage={data.jasonThumb.childImageSharp.gatsbyImageData}
        faqItems={faqItems}
      />
      <HeroSection />
      <SectionTwo />
      <PortfolioSection />
      <AboutSection />
    </Layout>
  )
}
