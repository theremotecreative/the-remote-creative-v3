import React from "react"
import styled from "styled-components"

const testimonials = [
  {
    quote:
      "They translated our vague AI ideas into a clear roadmap and shipped the first automation in a week. Lead response time dropped from hours to minutes.",
    name: "Marta R.",
    title: "Head of Growth, B2B SaaS",
  },
  {
    quote:
      "The new site launched faster than any previous redesign and already converts 30% more demo requests. Their playbooks made training the team effortless.",
    name: "Daniel W.",
    title: "Director of Marketing, Professional Services",
  },
]

const SocialProofSection = () => {
  return (
    <Section className="three-bg-change">
      <div className="container">
        <header className="heading">
          <p className="eyebrow">Trusted outcomes</p>
          <h2>Proof that AI + web done right drives results</h2>
          <p className="lede">
            Clients rely on us to move quickly, ship reliably, and leave them with automations and web systems that measurably impact revenue.
          </p>
        </header>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p className="quote">“{item.quote}”</p>
              <p className="name">{item.name}</p>
              <p className="title">{item.title}</p>
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
    font-size: 42px;
    font-weight: 800;
    margin: 0 0 12px;
  }

  .lede {
    margin: 0;
    color: #cdd8ff;
    font-size: 18px;
    line-height: 1.6;
  }

  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .testimonial-card {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 22px 24px;
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .quote {
    font-size: 18px;
    line-height: 1.6;
    color: #e6edff;
    margin: 0 0 12px;
  }

  .name {
    margin: 0;
    font-weight: 700;
    color: #fff;
  }

  .title {
    margin: 4px 0 0;
    color: #c4d2ff;
    font-size: 14px;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 32px;
    }

    .testimonial-grid {
      grid-template-columns: 1fr;
    }
  }
`

export default SocialProofSection
