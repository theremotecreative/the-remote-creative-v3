import React, { useEffect } from "react"
import styled from "styled-components"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const AboutSection = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    let sFourTl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: "#portfolio-overview",
        start: "top 70%",
        end: "top 70%",
        id: "s4-background",
        toggleActions: "play play reverse reverse",
      },
    })
    sFourTl.to(
      ".one-bg-change",
      { background: "#111", delay: 0.2, duration: 2 },
      0,
    )
    sFourTl.to(
      ".two-bg-change",
      { background: "#111", delay: 0.2, duration: 2 },
      0,
    )
    sFourTl.to(
      ".three-bg-change",
      { background: "#111", delay: 0.2, duration: 2 },
      0,
    )
    sFourTl.to(
      ".four-bg-change",
      { background: "#111", delay: 0.2, duration: 2 },
      0,
    )

    let overviewTl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: "#portfolio-overview",
        start: "top bottom",
        end: "bottom top",
        id: "portfolio-overview",
        toggleActions: "play reverse play reverse",
      },
    })
    overviewTl.to(".overview-fadein", { opacity: "1", delay: 0.2, duration: 2 })
  }, [])

  return (
    <SectionMain id="portfolio-overview" className="four-bg-change">
      <ContactRow className={"overview-fadein"}>
        <CopyCol>
          <h2>
            About <br />
            <span>our portfolio</span>
          </h2>
          <p>
            The Remote Creative LLC is a parent company that owns and operates
            multiple projects. We focus on building dependable digital
            experiences, launching new service lines, and supporting each
            venture with a shared operations backbone.
          </p>
          <p>
            Our current initiatives span client web development, AI automation
            and marketing through ScalarOps, ecommerce merchandise, and a party
            planning concept in incubation.
          </p>
          <p>How we think:</p>
          <Toolkit>
            <p className="lang">Portfolio-first operations</p>
            <p className="frame">Repeatable systems</p>
            <p className="cms">Customer-focused delivery</p>
            <p className="builder">Automation where it counts</p>
            <p className="design">Simple, scalable design</p>
            <p className="proj">Fast iteration cycles</p>
          </Toolkit>
        </CopyCol>
        <ImageCol>
          <h3>Active initiatives</h3>
          <InitiativeCard>
            <h4>ScalarOps Agency</h4>
            <p>AI automation and marketing services.</p>
            <a href="https://scalarops.agency" target="_blank" rel="noreferrer">scalarops.agency</a>
          </InitiativeCard>
          <InitiativeCard>
            <h4>Web development studio</h4>
            <p>Custom websites and web experiences for clients.</p>
          </InitiativeCard>
          <InitiativeCard>
            <h4>Redbubble merchandise</h4>
            <p>Original T-shirt designs in our online storefront.</p>
          </InitiativeCard>
          <InitiativeCard>
            <h4>Party planning (in development)</h4>
            <p>Upcoming service focused on curated celebrations.</p>
          </InitiativeCard>
        </ImageCol>
      </ContactRow>
    </SectionMain>
  )
}

const SectionMain = styled.div`
  width: 100%;
  background: #030e3b;
  padding: 150px 20px;
`

const ContactRow = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  position: relative;
  z-index: 1;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    opacity: 1;
  }
`

const CopyCol = styled.div`
  width: 60%;
  h2 {
    font-family: "Poppins";
    font-size: 72px;
    font-weight: 700;
    padding-top: 20px;
    padding-left: 20px;
    color: #fff;
    span {
      padding-left: 100px;
    }
  }
  p {
    font-family: "Poppins";
    color: #fff;
    margin: 0;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 20px;
  }
  @media (max-width: 1100px) {
    width: 100%;
    margin-bottom: 50px;
  }
  @media (max-width: 900px) {
    text-align: center;
    h2 {
      padding-left: 0;
      br {
        display: none;
      }
      span {
        padding-left: 0;
      }
    }
  }
  @media (max-width: 860px) {
    h2 {
      font-size: 36px;
    }
  }
`

const Toolkit = styled.div`
  p {
    font-family: Poppins;
    position: relative;
    display: inline-block;
    font-size: 16px;
    line-height: 20px;
    padding: 5px 20px;
    border-radius: 20px;
    margin: 5px;
    margin-right: 15px;
    margin-bottom: 15px;
    color: #bec8b7;
    transition-duration: 0.3s;
    &.lang {
      background-color: #333;
    }
    &.frame {
      background-color: #666;
    }
    &.cms {
      background-color: #444;
    }
    &.builder {
      background-color: #1a1a1a;
    }
    &.design {
      background-color: #808080;
    }
    &.proj {
      background-color: #555;
    }
    &:hover {
      cursor: pointer;
      box-shadow: 0px 9px 12px rgb(0 255 255 / 45%);
    }
  }
`

const ImageCol = styled.div`
  width: 40%;
  text-align: center;
  h3 {
    font-family: "Poppins";
    font-size: 27px;
    color: #fff;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 0px;
    line-height: 1.3em;
  }
  p {
    font-family: "Poppins";
    color: #fff;
    margin: 0;
    font-size: 16px;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`

const InitiativeCard = styled.div`
  margin-top: 20px;
  padding: 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  text-align: left;
  h4 {
    margin: 0 0 8px;
    font-size: 18px;
    color: #fff;
    font-family: "Poppins";
  }
  p {
    margin: 0 0 8px;
    color: #d9e4ff;
  }
  a {
    color: #7adeff;
    text-decoration: none;
    font-weight: 600;
  }
`

export default AboutSection
