import React, { useEffect } from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const HomePortfolio = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let sThreeTl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#three_bg_change",
                start: 'top 70%',
                end: 'top 70%',
                id: 's3-background',
                toggleActions: "play play reverse reverse",
                },
            })
        sThreeTl.to('.one-bg-change', { background: '#060b29', delay: 0.2, duration: 2 }, 0)
        sThreeTl.to('.two-bg-change', { background: '#060b29', delay: 0.2, duration: 2 }, 0)
        sThreeTl.to('.three-bg-change', { background: '#060b29', delay: 0.2, duration: 2 }, 0)
        sThreeTl.to('.four-bg-change', { background: '#060b29', delay: 0.2, duration: 2 }, 0)

        let rowOnetl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_portfolio_row_one",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_portfolio_row_one',
                toggleActions: "play reverse play reverse",
                },
            })
        rowOnetl.to('.row-one-fadein', { opacity: '1', delay: 0.2, duration: 2 })

        let rowTwotl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_portfolio_row_two",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_portfolio_row_two',
                toggleActions: "play reverse play reverse",
                },
            })
        rowTwotl.to('.row-two-fadein', { opacity: '1', delay: 0.2, duration: 2 })

        let rowThreetl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_portfolio_row_three",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_portfolio_row_three',
                toggleActions: "play reverse play reverse",
                },
            })
        rowThreetl.to('.row-three-fadein', { opacity: '1', delay: 0.2, duration: 2 })

    }, []);

    const data = useStaticQuery(graphql`
        query {
            pixelThumb: file(relativePath: { eq: "the-pixel-lab.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                      width: 1200
                      placeholder: TRACED_SVG
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
            }
            optomiThumb: file(relativePath: { eq: "optomi-thumb.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                      width: 956
                      placeholder: TRACED_SVG
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
            }
            provalusThumb: file(relativePath: { eq: "provalus-tall.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                      width: 380
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
            cakeThumb: file(relativePath: { eq: "ten-pound-cake.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                      width: 380
                      placeholder: TRACED_SVG
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
            }
            marbleThumb: file(relativePath: { eq: "marble-2x.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1000
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            chronicThumb: file(relativePath: { eq: "chronic-square.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 380
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
        }
    `)

    return(
        <SectionMain id="three_bg_change" className="three-bg-change">
            <PortfolioMain>
                <MobileTitle className={"row-one-fadein"}>
                    <h2>Featured Projects</h2>
                </MobileTitle>
                <RowOne id="home_portfolio_row_one">
                    <PortfolioSquare className={"row-one-fadein"}>
                        <ThumbImg image={data.pixelThumb.childImageSharp.gatsbyImageData} alt={"The Pixel Lab Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://www.thepixellab.net/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>The Pixel Lab</h3>
                                    <p>e-Store | Graphic Design Products</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioSquare>
                    <PortfolioLong className={"row-one-fadein"}>
                        <ThumbImg image={data.optomiThumb.childImageSharp.gatsbyImageData} alt={"Optomi Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://optomi.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Optomi</h3>
                                    <p>AI & WordPress CMS</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioLong>
                </RowOne>
                <RowTwo id="home_portfolio_row_two">
                    <PortfolioTall className={"row-two-fadein"}>
                        <ThumbImg image={data.provalusThumb.childImageSharp.gatsbyImageData} alt={"Provalus Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://provalus.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Provalus</h3>
                                    <p>AI-Powered App | Speed and Animation</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioTall>
                    <RowTwoMain>
                        <TitleSection className={"row-two-fadein"}>
                            <h2>Featured <br/><span>Projects</span></h2>
                        </TitleSection>
                        <PortfolioSquare className={"row-two-fadein"}>
                            <ThumbImg image={data.wlionThumb.childImageSharp.gatsbyImageData} alt={"White Lion Digital Interactive"}/>
                            <HoverCopy>
                                <a href="https://wlion.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>White Lion</h3>
                                        <p>AI & WordPress CMS</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-two-fadein"}>
                            <ThumbImg image={data.cakeThumb.childImageSharp.gatsbyImageData} alt={"Ten Pound Cake Company Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://tenpoundcakecompany.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Ten Pound Cake Company</h3>
                                        <p>Food Blog | WordPress & Google Ads</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                    </RowTwoMain>
                </RowTwo>
                <RowThree id="home_portfolio_row_three">
                    <PortfolioLong className={"row-three-fadein"}>
                        <ThumbImg image={data.marbleThumb.childImageSharp.gatsbyImageData} alt={"Marble Mattresses Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://marble.sg/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Marble</h3>
                                        <p>WordPress | Custom Checkout Page</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                    </PortfolioLong>
                    <PortfolioSquare className={"row-three-fadein"}>
                        <ThumbImg image={data.chronicThumb.childImageSharp.gatsbyImageData} alt={"Chronic Conditions Center Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://chronicpa.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Chronic Conditions Center</h3>
                                    <p>AI-Powered App | Fast PageSpeed Performance</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioSquare>
                </RowThree>
            </PortfolioMain>
            <BottomButton>
                <Link
                    to="/project-portfolio/"
                >
                View More
                </Link>
            </BottomButton>
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
        color: #272727;
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
    }
    p {
        font-family: "Poppins";
        color: #272727;
        margin: 0;
        font-size: 16px;
        font-weight: 400;
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
    min-height: 100vh;
    width: 100%;
    background: #030e3b;
    padding: 100px 20px;
`

const PortfolioMain = styled.div`
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    @media(max-width: 1240px) {
        max-width: 780px;
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
    }
    @media(max-width: 860px) {
        max-width: 100%;
        > div {
            &:first-child {
                margin-right: 20px;
            }
        }
    }
    @media(max-width: 767px) {
        flex-wrap: wrap;
        max-width: 380px;
        margin-bottom: 0;
        > div {
            &:first-child {
                margin-right: 0px;
            }
        }
    }
`

const PortfolioSquare = styled.div`
    background-color: rgb(0 255 244);
    height: 380px;
    max-width: 380px;
    width: 100%;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transition-duration: .5s;
    ${ThumbImg} {
        max-width: 380px;
        width: 100%;
        height: 380px;
    }
    &:hover {
        box-shadow: 0px 0px 20px rgb(0 255 244 / 50%);
        ${ThumbImg} {
            opacity: .9;
            transform: scale3d(1.1,1.1,1);
        }
        ${HoverCopy} {
            opacity: 1;
        }
    }
    @media(max-width: 860px) {
        opacity: 1;
        margin-bottom: 20px;
    }
`

const PortfolioLong = styled.div`
    background-color: rgb(0 255 244);
    height: 380px;
    width: 780px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transition-duration: .5s;
    ${ThumbImg} {
        max-width: 780px;
        width: 100%;
        height: 380px;
    }
    &:hover {
        box-shadow: 0px 0px 20px rgb(0 255 244 / 50%);
        ${ThumbImg} {
            opacity: .9;
            transform: scale3d(1.1,1.1,1);
        }
        ${HoverCopy} {
            opacity: 1;
        }
    }
    @media(max-width: 1240px) {
        max-width: 380px;
        ${ThumbImg} {
            max-width: 380px;
        }
    }
    @media(max-width: 860px) {
        opacity: 1;
        margin-bottom: 20px;
    }
`

const RowTwo = styled.div`
    max-width: 1180px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    @media(max-width: 1240px) {
        max-width: 780px;
    }
    @media(max-width: 860px) {
        max-width: 100%;
        > div {
            &:first-child {
                margin-right: 20px;
            }
        }
    }
    @media(max-width: 767px) {
        flex-wrap: wrap;
        max-width: 380px;
        margin-bottom: 0;
        > div {
            &:first-child {
                margin-right: 0px;
            }
        }
    }
`

const PortfolioTall = styled.div`
    background-color: rgb(0 255 244);
    height: 780px;
    width: 380px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transition-duration: .5s;
    ${ThumbImg} {
        max-width: 380px;
        width: 100%;
        height: 780px;
    }
    &:hover {
        box-shadow: 0px 0px 20px rgb(0 255 244 / 50%);
        ${ThumbImg} {
            opacity: .9;
            transform: scale3d(1.1,1.1,1);
        }
        ${HoverCopy} {
            opacity: 1;
        }
    }
    @media(max-width: 860px) {
        opacity: 1;
    }
    @media(max-width: 767px) {
        height: 380px;
        margin-bottom: 20px;
        ${ThumbImg} {
            height: 380px;
        }
    }
`

const RowTwoMain = styled.div`
    height: 780px;
    width: 780px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    @media(max-width: 1240px) {
        max-width: 380px;
        > div {
            margin-bottom: 20px;
        }
    }
    @media(max-width: 860px) {
        margin-bottom: 20px;
    }
`

const TitleSection = styled.div`
    height: 380px;
    width: 780px;
    margin-bottom: 20px;
    opacity: 0;
    position: relative;
    z-index: 10;
    h2 {
        font-family: Roboto;
        font-size: 120px;
        font-weight: 700;
        padding-top: 20px;
        padding-left: 20px;
        color: #fff;
        span {
            padding-left: 100px;
        }
    }
    @media(max-width: 1240px) {
        display: none;
    }
`

const MobileTitle = styled.div`
    display: none;
    margin-bottom: 20px;
    opacity: 0;
    h2 {
        font-family: Roboto;
        font-size: 72px;
        text-align: center;
        color: #fff;
    }
    @media(max-width: 1240px) {
        display: block;
    }
    @media(max-width: 860px) {
        opacity: 1;
        h2 {
            font-size: 36px;
        }
    }
`

const RowThree = styled.div`
    max-width: 1180px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1240px) {
        max-width: 780px;
    }
    @media(max-width: 860px) {
        max-width: 100%;
        > div {
            &:first-child {
                margin-right: 20px;
            }
        }
    }
    @media(max-width: 767px) {
        flex-wrap: wrap;
        max-width: 380px;
        margin-bottom: 0;
        > div {
            &:first-child {
                margin-right: 0px;
            }
        }
    }
`

const BottomButton = styled.div`
    text-align: center;
    margin-top: 35px;
    position: relative;
    z-index: 1;
    a {
        font-family: "Poppins";
        padding: 5px 20px;
        display: inline-block;
        background-color: #00ffff;
        text-decoration: none !important;
        color: #000 !important;
        border-radius: 25px;
        transition-duration: .3s;
        opacity: .8;
        &:hover {
            opacity: 1;
            box-shadow: 0px 9px 12px rgb(0 255 255 / 45%);
        }
    }
`

export default HomePortfolio