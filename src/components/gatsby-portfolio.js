import React, { useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const GatsbyPortfolio = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let gatsbyPortfoliotl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#gatsby_portfolio",
                start: 'top bottom',
                end: 'bottom top',
                id: 'gatsby_portfolio_fade',
                toggleActions: "play reverse play reverse",
                },
            })
        gatsbyPortfoliotl.to('.gatsby-portfolio-fadein', { opacity: '1', delay: 0.2, duration: 2 })

    }, []);

    const data = useStaticQuery(graphql`
        query {
            optomiThumb: file(relativePath: { eq: "optomi-thumb.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 956
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            wlionThumb: file(relativePath: { eq: "wlion.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 500
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            ArchitectThumb: file(relativePath: { eq: "person-holding-black-pen.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1200
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
        }
    `)

    return(
        <SectionMain id="gatsby_portfolio">
            <PortfolioMain className={"gatsby-portfolio-fadein"}>
                <MobileTitle>
                    <h2>My Gatsby Portfolio</h2>
                </MobileTitle>
                <RowOne>
                    <PortfolioSquare>
                        <ThumbImg image={data.wlionThumb.childImageSharp.gatsbyImageData} alt={"White Lion Digital Interactive"}/>
                        <HoverCopy>
                            <a href="https://wlion.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>White Lion</h3>
                                    <p>Digital Experience Developers</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioSquare>
                    <PortfolioSquare>
                        <ThumbImg image={data.optomiThumb.childImageSharp.gatsbyImageData} alt={"Optomi Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://optomi.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Optomi</h3>
                                    <p>Technology Consultants</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioSquare>
                    <PortfolioSquare>
                        <ThumbImg image={data.ArchitectThumb.childImageSharp.gatsbyImageData} alt={"Architectural Dynamics Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://architecturaldynamics.net/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Architectural Dynamics</h3>
                                    <p>Architect Portfolio</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioSquare>
                </RowOne>
            </PortfolioMain>
        </SectionMain>
    )

}

const ThumbImg = styled(GatsbyImage)`
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 1s,transform 1s,-webkit-transform 1s;
`

const HoverCopy = styled.div`
    background-color: rgb(255 255 255 / .3);
    transition-duration: .5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    a {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    @media(max-width: 860px) {
        background-color: transparent;
        opacity: 1;
    }
`

const HoverText = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    h3 {
        font-family: "Poppins";
        font-weight: 700;
        color: #272727;
        margin: 0;
        font-size: 20px;
        line-height: 30px;
    }
    p {
        font-family: "Poppins";
        color: #272727;
        margin: 0;
        font-size: 16px;
        line-height: 26px;
    }
    @media(max-width: 860px) {
        background-color: #272727;
        padding: 5px 10px;
        h3,
        p {
            color: #fff;
        }
    }
`

const SectionMain = styled.div`
    width: 100%;
    background-color: #f2f2f2;
    padding: 100px 20px;
`

const PortfolioMain = styled.div`
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    opacity: 0;
    @media(max-width: 1240px) {
        max-width: 780px;
    }
    @media(max-width: 1100px) {
        opacity: 1;
    }
    @media(max-width: 860px) {
        max-width: 100%;
    }
    @media(max-width: 767px) {
        max-width: 380px;
    }
`

const RowOne = styled.div`
    max-width: 1180px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    @media(max-width: 1240px) {
        max-width: 780px;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media(max-width: 860px) {
        max-width: 100%;
        > div {
            &:first-child {
                margin-right: 10px;
            }
        }
    }
    @media(max-width: 767px) {
        flex-wrap: wrap;
        max-width: 380px;
        margin-bottom: 0;
        > div {
            &:first-child {
                margin-right: 10px;
            }
        }
    }
`

const PortfolioSquare = styled.div`
    background-color: #fff;
    height: 380px;
    max-width: 380px;
    width: 100%;
    position: relative;
    overflow: hidden;
    ${ThumbImg} {
        max-width: 380px;
        width: 100%;
        height: 380px;
    }
    &:hover {
        ${ThumbImg} {
            opacity: .9;
            transform: scale3d(1.1,1.1,1);
        }
        ${HoverCopy} {
            opacity: 1;
        }
    }
    @media(max-width: 1240px) {
        &:first-child {
            margin-right: 20px;
        }
        margin-bottom: 20px;
    }
    @media(max-width: 860px) {
        &:first-child {
            margin-right: 10px;
        }
        margin: 10px;
    }
`

const MobileTitle = styled.div`
    margin-bottom: 20px;
    h2 {
        font-size: 48px;
        text-align: center;
    }
    @media(max-width: 1240px) {
        display: block;
    }
    @media(max-width: 860px) {
        h2 {
            font-size: 36px;
        }
    }
`


export default GatsbyPortfolio