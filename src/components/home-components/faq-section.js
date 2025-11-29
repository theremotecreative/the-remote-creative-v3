import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const FaqSection = ({ faqs }) => (
  <Section id="faq">
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

const Section = styled.section`
  background: #010924;
  color: #f3f6ff;
  padding: 80px 20px;

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
    font-size: 13px;
    font-weight: 700;
    margin: 0 0 12px;
  }

  h2 {
    font-size: 42px;
    margin: 0 0 12px;
  }

  .lede {
    margin: 0;
    color: #cdd8ff;
    font-size: 18px;
    line-height: 1.6;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .faq-card {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 20px 24px;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0 0 10px;
    font-size: 20px;
  }

  p {
    margin: 0;
    color: #d9e4ff;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 32px;
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
