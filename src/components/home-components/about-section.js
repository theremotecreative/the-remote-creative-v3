import React, { useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const AboutSection = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let sFourTl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_contact_row_one",
                start: 'top 70%',
                end: 'top 70%',
                id: 's4-background',
                toggleActions: "play play reverse reverse",
                },
            })
        sFourTl.to('.one-bg-change', { background: '#111', delay: 0.2, duration: 2 }, 0)
        sFourTl.to('.two-bg-change', { background: '#111', delay: 0.2, duration: 2 }, 0)
        sFourTl.to('.three-bg-change', { background: '#111', delay: 0.2, duration: 2 }, 0)
        sFourTl.to('.four-bg-change', { background: '#111', delay: 0.2, duration: 2 }, 0)

        let contacttl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_contact_row_one",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_contact_row_one',
                toggleActions: "play reverse play reverse",
                },
            })
        contacttl.to('.contact-fadein', { opacity: '1', delay: 0.2, duration: 2 })

    }, []);

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
        <SectionMain id="home_contact_row_one" className="four-bg-change">
            <ContactRow className={"contact-fadein"}>
                <CopyCol>
                    <h2>About <br/>
                        <span>the creative</span></h2>
                    <p>Jason has over 5 years of experience working remotely on various web development projects. He specializes in WordPress and Gatsby.js development. Jason is an Iraq War veteran with a Masters Degree in International Relations, is a self-taught coder, and is the founder and CEO of The Remote Creative.</p>
                    <p>Toolkit:</p>
                    <Toolkit>
                        <p class="lang">HTML</p>
                        <p class="lang">CSS</p>
                        <p class="lang">JavaScript</p>
                        <p class="lang">PHP</p>
                        <p class="frame">React</p>
                        <p class="frame">Gatsby.js</p>
                        <p class="frame">GreenSock</p>
                        <p class="cms">WordPress</p>
                        <p class="cms">WooCommerce</p>
                        <p class="cms">Squarespace</p>
                        <p class="cms">Shopify</p>
                        <p class="builder">Elementor</p>
                        <p class="builder">WPbakery</p>
                        <p class="builder">Avada</p>
                        <p class="design">Adobe XD</p>
                        <p class="design">Inkscape</p>
                        <p class="proj">Trello</p>
                        <p class="proj">Slack</p>
                    </Toolkit>
                </CopyCol>
                <ImageCol>
                    <JasonImg image={data.jasonThumb.childImageSharp.gatsbyImageData} alt={"Jason Vanderheyden"}/>
                    <h3>Jason Vanderheyden</h3>
                    <p>Contact Me:</p>
                    <p>jason@theremotecreative.com</p>
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
    @media(max-width:1100px) {
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
    @media(max-width:1100px) {
        width: 100%;
        margin-bottom: 50px;
    }
    @media(max-width:900px) {
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
    @media(max-width:860px) {
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
        transition-duration: .3s;
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
        font-weight: 100;
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
    @media(max-width:1100px) {
        width: 100%;
    }
`

const JasonImg = styled(GatsbyImage)`
    height: 384px;
    width: 384px;
    border-radius: 50%;
    margin: 0 auto;
    @media(max-width:450px) {
        height: 200px;
        width: 200px;
    }
`

export default AboutSection