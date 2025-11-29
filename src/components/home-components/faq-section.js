import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const FaqSection = ({ faqs }) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    const faqTimeline = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: "#faq",
        start: "top 70%",
        end: "top 70%",
        id: "faq-background",
        toggleActions: "play play reverse reverse",
      },
    })

    faqTimeline.to(
      ".one-bg-change",
      { background: "#030e3b", delay: 0.2, duration: 2 },
      0
    )
    faqTimeline.to(
      ".two-bg-change",
      { background: "#030e3b", delay: 0.2, duration: 2 },
      0
    )
    faqTimeline.to(
      ".three-bg-change",
      { background: "#030e3b", delay: 0.2, duration: 2 },
      0
    )
    faqTimeline.to(
      ".four-bg-change",
      { background: "#030e3b", delay: 0.2, duration: 2 },
      0
    )
  }, [])

  return (
    <Section id="faq" className="four-bg-change">
      <div className="container">
        <header className="heading">
          <p className="eyebrow">Answers for decision makers</p>
          <h2>Frequently asked questions</h2>
          <p className="lede">
            Clear answers about how we deliver AI-enabled web builds, automation systems, and hands-on training.
          </p>
        </header>
        <div className="faq-grid">
          {faqs.map(item => (
            <article className="faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  background: #030e3b;
  color: #f3f6ff;
  padding: 80px 20px;
  font-family: "Poppins", "Roboto", sans-serif;

  .container {
    max-width: 1180px;
    margin: 0 auto;
  }

  .heading {
    text-align: center;
    max-width: 760px;
    margin: 0 auto 48px;
  }

  .eyebrow {
    color: #7adeff;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 800;
    margin: 0 0 12px;
  }

  h2 {
    font-family: "Roboto", "Poppins", sans-serif;
    font-size: 48px;
    font-weight: 800;
    margin: 0 0 12px;
  }

  .lede {
    margin: 0;
    color: #cdd8ff;
    font-size: 20px;
    line-height: 1.7;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .faq-card {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 24px 28px;
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0 0 10px;
    font-family: "Poppins", "Roboto", sans-serif;
    font-size: 22px;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: #d9e4ff;
    font-size: 16px;
    line-height: 1.7;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 36px;
    }

    .faq-grid {
      grid-template-columns: 1fr;
    }
  }
`

FaqSection.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default FaqSection
