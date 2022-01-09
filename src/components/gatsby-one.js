import React, { useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const GatsbyOne = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let gatsbyOnetl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#gatsby_row_one",
                start: 'top bottom',
                end: 'bottom top',
                id: 'gatsby_row_one',
                toggleActions: "play reverse play reverse",
                },
            })
        gatsbyOnetl.to('.gatsby-one-fadein', { opacity: '1', delay: 0.2, duration: 2 })

    }, []);

    const data = useStaticQuery(graphql`
        query {
            resultsImage: file(relativePath: { eq: "results-compiled.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 761
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
        }
    `)

    return(
        <SectionMain id="gatsby_row_one">
            <SectionRow className={"gatsby-one-fadein"}>
                <SectionCol>
                    <GatsbyImg image={data.resultsImage.childImageSharp.gatsbyImageData} alt={"Gatsby.js Pagespeed Results"}/>
                </SectionCol>
                <SectionCol>
                    <h1>The Benefits of Gatsby.js</h1>
                    <p>Udemy named Gatsby.js the <a href="https://business.udemy.com/resources/5-workplace-learning-trends-2020/" target="_blank" rel="noreferrer">number one emerging tech trend of 2020.</a> As a static site generator built with React, Gatsby creates blazing fast websites and web apps. Combined with an easy Content Management System (CMS) like WordPress, Gatsby is a powerful tool you can use to enhance your web strategy in 2020.</p>
                </SectionCol>
            </SectionRow>
        </SectionMain>
    )

}

const SectionMain = styled.div`
    padding: 180px 20px 100px;
    background-color: #f2f2f2;
`

const SectionRow = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    @media(max-width:1100px) {
        opacity: 1;
        flex-wrap: wrap;
    }
`

const SectionCol = styled.div`
    width: 50%;
    h1 {
        text-align: right;
    }
    p {
        font-family: "Poppins";
        color: #272727;
        margin: 0;
        font-size: 16px;
        line-height: 26px;
        text-align: right;
    }
    @media(max-width:1100px) {
        width: 100%;
        &:first-child {
            order: 2;
        }
        &:last-child {
            order: 1;
            margin-bottom: 50px;
            h1 {
                text-align: left;
            }
            p {
                text-align: left;
            }
        }
    }
    @media(max-width:767px) {
        &:last-child {
            h1 {
                font-size: 36px;
                text-align: center;
            }
            p {
                text-align: center;
            }
        }
    }
`

const GatsbyImg = styled(GatsbyImage)`
    width: 500px !important;
    height: 442px;
    margin: 0 auto;
    img {
        margin: 0 auto;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 11px;
    }
    @media(max-width:580px) {
        width: 100% !important;
        img {
            width: 100%;
            height: auto;
            box-shadow: none;
        }
    }
`

export default GatsbyOne