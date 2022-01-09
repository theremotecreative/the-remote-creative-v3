import React, { useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const FeaturedPortfolio = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

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

        let rowFourtl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_portfolio_row_four",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_portfolio_row_four',
                toggleActions: "play reverse play reverse",
                },
            })
        rowFourtl.to('.row-four-fadein', { opacity: '1', delay: 0.2, duration: 2 })

        let rowFivetl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_portfolio_row_five",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_portfolio_row_five',
                toggleActions: "play reverse play reverse",
                },
            })
        rowFivetl.to('.row-five-fadein', { opacity: '1', delay: 0.2, duration: 2 })

        let rowSixtl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#home_portfolio_row_six",
                start: 'top bottom',
                end: 'bottom top',
                id: 'home_portfolio_row_six',
                toggleActions: "play reverse play reverse",
                },
            })
        rowSixtl.to('.row-six-fadein', { opacity: '1', delay: 0.2, duration: 2 })

    }, []);

    const data = useStaticQuery(graphql`
        query {
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
            tgbThumb: file(relativePath: { eq: "tgb-square.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 380
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            threeThumb: file(relativePath: { eq: "three-rivers.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 380
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            chestersThumb: file(relativePath: { eq: "chesters-bbq.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 380
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            habitatThumb: file(relativePath: { eq: "habitatins-sq.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 380
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
            vabienThumb: file(relativePath: { eq: "mobile-bra-longer.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1800
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
            baizaarThumb: file(relativePath: { eq: "baizaar-shop.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1200
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            corsourceThumb: file(relativePath: { eq: "corsource-thumb.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1440
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            twistThumb: file(relativePath: { eq: "twist-thumb.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1380
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            EAThumb: file(relativePath: { eq: "eaworkforce.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1100
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            ScarabThumb: file(relativePath: { eq: "nail-white-bg.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1600
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            RefreshThumb: file(relativePath: { eq: "refresh-interiors.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1167
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            RefineThumb: file(relativePath: { eq: "refine-search.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 800
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            BeautyThumb: file(relativePath: { eq: "beautyrest.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1800
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            CakeThumb: file(relativePath: { eq: "ten-pound-cake.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 802
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
            DivenereThumb: file(relativePath: { eq: "divenere-law.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 593
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
        }
    `)

    return(
        <SectionMain>
            <PortfolioMain>
                <MobileTitle className={"row-one-fadein"}>
                    <h1>Project Portfolio</h1>
                </MobileTitle>
                <RowOne id="home_portfolio_row_one">
                    <PortfolioLong className={"row-one-fadein"}>
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
                    <PortfolioSquare className={"row-one-fadein"}>
                        <ThumbImg image={data.chronicThumb.childImageSharp.gatsbyImageData} alt={"Chronic Conditions Center Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://chronicpa.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Chronic Conditions Center</h3>
                                    <p>Gatsby.js | Fast PageSpeed Performance</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioSquare>
                </RowOne>
                <RowTwo id="home_portfolio_row_two">
                    <RowTwoMain>
                        <PortfolioSquare className={"row-two-fadein"}>
                            <ThumbImg image={data.tgbThumb.childImageSharp.gatsbyImageData} alt={"The TGB Foundation Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://thetgbfoundation.org/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>The TGB Foundation</h3>
                                        <p>Gatsby.js with WordPress CMS</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-two-fadein"}>
                            <ThumbImg image={data.threeThumb.childImageSharp.gatsbyImageData} alt={"Three Rivers Weight Loss Thumbnail"}/>
                            <HoverCopy>
                                <a href="http://www.threeriversweightloss.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Three Rivers Weight Loss</h3>
                                        <p>WordPress | Landing Page</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-two-fadein desktop-only"}>
                            <ThumbImg image={data.chestersThumb.childImageSharp.gatsbyImageData} alt={"Chesters BBQ Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://chestersbbq.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Chesters BBQ</h3>
                                        <p>WordPress | Online Menu and Ordering</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-two-fadein desktop-only"}>
                            <ThumbImg image={data.habitatThumb.childImageSharp.gatsbyImageData} alt={"HabitatIns Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://habitatins.io/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Habitat Insurance</h3>
                                        <p>WordPress | Custom Product Templates</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                    </RowTwoMain>
                    <PortfolioTall className={"row-two-fadein"}>
                        <ThumbImg image={data.provalusThumb.childImageSharp.gatsbyImageData} alt={"Provalus Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://provalus.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Provalus</h3>
                                    <p>Gatsby.js | Speed and Animation</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioTall>
                    <MobileRow className={"row-two-fadein mobile-only"}>
                        <PortfolioSquare className={"row-two-fadein mobile-only"}>
                            <ThumbImg image={data.twistThumb.childImageSharp.gatsbyImageData} alt={"Twist Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://www.twistintegrations.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Twist</h3>
                                        <p>Marketing Integration</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-two-fadein mobile-only"}>
                            <ThumbImg image={data.baizaarThumb.childImageSharp.gatsbyImageData} alt={"Baizaar Jewelry Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://baizaarjewelry.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Baizaar</h3>
                                        <p>e-Store | Jewelry Shop</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                    </MobileRow>
                </RowTwo>
                <RowThree id="home_portfolio_row_three">
                    <PortfolioSquare className={"row-three-fadein"}>
                        <ThumbImg image={data.ScarabThumb.childImageSharp.gatsbyImageData} alt={"Sacred Scarab Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://www.sacredscarabnails.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Sacred Scarab Nail Boutique</h3>
                                    <p>Salon | Squarespace Site</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioSquare>
                    <PortfolioLong className={"row-three-fadein"}>
                        <ThumbImg image={data.RefreshThumb.childImageSharp.gatsbyImageData} alt={"Refresh Interiors Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://refresh-interiors.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Refresh Interiors</h3>
                                        <p>Vacation Rentals | Interior Design</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                    </PortfolioLong>
                </RowThree>
                <RowFour id="home_portfolio_row_four">
                    <PortfolioTall className={"row-four-fadein"}>
                        <ThumbImg image={data.corsourceThumb.childImageSharp.gatsbyImageData} alt={"CorSource Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://www.corsource.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>CorSource</h3>
                                    <p>Technology Group</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioTall>
                    <RowTwoMain>
                        <PortfolioSquare className={"row-four-fadein"}>
                            <ThumbImg image={data.RefineThumb.childImageSharp.gatsbyImageData} alt={"Refine Search Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://refinesearch.net/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Refine Search</h3>
                                        <p>Talent Acquisition</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-four-fadein"}>
                            <ThumbImg image={data.BeautyThumb.childImageSharp.gatsbyImageData} alt={"Beautyrest Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://beautyresthospitality.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Beautyrest Hospitality</h3>
                                        <p>Mattress Supplier</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-four-fadein desktop-only"}>
                            <ThumbImg image={data.CakeThumb.childImageSharp.gatsbyImageData} alt={"Ten Pound Cake Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://tenpoundcakecompany.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Ten Pound Cake Company</h3>
                                        <p>Food Blog | WordPress & Google Ads</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-four-fadein desktop-only"}>
                            <ThumbImg image={data.DivenereThumb.childImageSharp.gatsbyImageData} alt={"DiVenere Law Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://divenerelaw.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>DiVenere Law Firm</h3>
                                        <p>Chicagoland Law Office</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                    </RowTwoMain>
                    <MobileRow>
                        <PortfolioSquare className={"row-four-fadein mobile-only"}>
                            <ThumbImg image={data.CakeThumb.childImageSharp.gatsbyImageData} alt={"Ten Pound Cake Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://tenpoundcakecompany.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Ten Pound Cake Company</h3>
                                        <p>Food Blog | Recipes & Pinterest</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-four-fadein mobile-only"}>
                            <ThumbImg image={data.DivenereThumb.childImageSharp.gatsbyImageData} alt={"DiVenere Law Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://divenerelaw.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>DiVenere Law Firm</h3>
                                        <p>Chicagoland Law Office</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                    </MobileRow>
                </RowFour>


                <RowOne id="home_portfolio_row_five">
                    <PortfolioLong className={"row-five-fadein"}>
                        <ThumbImg image={data.optomiThumb.childImageSharp.gatsbyImageData} alt={"Optomi Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://optomi.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Optomi</h3>
                                    <p>Gatsby.js with WordPress CMS</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioLong>
                    <PortfolioSquare className={"row-five-fadein"}>
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
                </RowOne>
                <RowTwo id="home_portfolio_row_six">
                    <RowTwoMain>
                        <PortfolioSquare className={"row-six-fadein"}>
                            <ThumbImg image={data.wlionThumb.childImageSharp.gatsbyImageData} alt={"White Lion Digital Interactive"}/>
                            <HoverCopy>
                                <a href="https://wlion.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>White Lion</h3>
                                        <p>Gatsby.js with WordPress CMS</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-six-fadein"}>
                            <ThumbImg image={data.EAThumb.childImageSharp.gatsbyImageData} alt={"EA Workforce Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://eaworkforce.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>EA Workforce</h3>
                                        <p>Staffing Agency</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-six-fadein desktop-only"}>
                            <ThumbImg image={data.twistThumb.childImageSharp.gatsbyImageData} alt={"Twist Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://www.twistintegrations.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Twist</h3>
                                        <p>Marketing Integration</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-six-fadein desktop-only"}>
                            <ThumbImg image={data.baizaarThumb.childImageSharp.gatsbyImageData} alt={"Baizaar Jewelry Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://baizaarjewelry.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Baizaar</h3>
                                        <p>e-Store | Jewelry Shop</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                    </RowTwoMain>
                    <PortfolioTall className={"row-six-fadein"}>
                        <ThumbImg image={data.vabienThumb.childImageSharp.gatsbyImageData} alt={"Vabien Thumbnail"}/>
                        <HoverCopy>
                            <a href="https://vabienusa.com/" target="_blank" rel="noopener noreferrer">
                                <HoverText>
                                    <h3>Vabien</h3>
                                    <p>e-Store | Lingerie</p>
                                </HoverText>
                            </a>
                        </HoverCopy>
                    </PortfolioTall>
                    <MobileRow className={"row-six-fadein mobile-only"}>
                        <PortfolioSquare className={"row-two-fadein mobile-only"}>
                            <ThumbImg image={data.twistThumb.childImageSharp.gatsbyImageData} alt={"Twist Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://www.twistintegrations.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Twist</h3>
                                        <p>Marketing Integration</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                        <PortfolioSquare className={"row-six-fadein mobile-only"}>
                            <ThumbImg image={data.baizaarThumb.childImageSharp.gatsbyImageData} alt={"Baizaar Jewelry Thumbnail"}/>
                            <HoverCopy>
                                <a href="https://baizaarjewelry.com/" target="_blank" rel="noopener noreferrer">
                                    <HoverText>
                                        <h3>Baizaar</h3>
                                        <p>e-Store | Jewelry Shop</p>
                                    </HoverText>
                                </a>
                            </HoverCopy>
                        </PortfolioSquare>
                    </MobileRow>
                </RowTwo>
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
        opacity: 1 !important;
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
    min-height: 100vh;
    width: 100%;
    background-color: #f2f2f2;
    padding: 50px 20px;
    padding-top: 150px;
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
        margin-bottom: 0;
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
    background-color: #fff;
    height: 380px;
    max-width: 380px;
    width: 100%;
    position: relative;
    overflow: hidden;
    opacity: 0;
    &.mobile-only {
        display: none;
    }
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
    @media(max-width:1240px) {
        &.desktop-only {
            display: none;
        }
        &.mobile-only {
            display: block;
        }
    }
    @media(max-width: 860px) {
        margin-bottom: 20px;
        opacity: 1 !important;
    }
`

const PortfolioLong = styled.div`
    background-color: #fff;
    height: 380px;
    width: 780px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    ${ThumbImg} {
        max-width: 780px;
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
        max-width: 380px;
        ${ThumbImg} {
            max-width: 380px;
        }
    }
    @media(max-width: 860px) {
        margin-bottom: 20px;
        opacity: 1 !important;
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
        flex-wrap: wrap;
    }
    @media(max-width: 860px) {
        max-width: 100%;
        margin-bottom: 0;
        > div {
            &:first-child {
                width: calc(50% - 20px);
                margin-bottom: 0;
            }
            &:nth-child(2) {
                width: 50%;
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
                max-width: 380px;
                width: 100%;
            }
            &:nth-child(2) {
                max-width: 380px;
                width: 100%;
            }
        }
    }
`

const PortfolioTall = styled.div`
    background-color: #aaa;
    height: 780px;
    width: 380px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    ${ThumbImg} {
        max-width: 380px;
        width: 100%;
        height: 780px;
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
    @media(max-width:860px) {
        opacity: 1 !important;
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
        height: auto;
        margin-bottom: 20px;
    }
    ${PortfolioSquare} {
        margin-bottom: 20px;
    }
`

const MobileRow = styled.div`
    display: none;
    width: 780px;
    justify-content: space-between;
    margin-top: 20px;
    @media(max-width:1240px) {
        display: flex;
    }
    @media(max-width: 860px) {
        width: 100%;
        margin-top: 0;
        > div {
            &:first-child {
                width: 50%;
            }
            &:last-child {
                width: calc(50% - 20px);
            }
        }
    }
    @media(max-width: 767px) {
        flex-wrap: wrap;
        > div {
            &:first-child {
                max-width: 380px;
                width: 100%;
            }
            &:last-child {
                max-width: 380px;
                width: 100%;
            }
        }
    }
`

const MobileTitle = styled.div`
    margin-bottom: 20px;
    opacity: 0;
    h1 {
        font-size: 72px;
        text-align: center;
    }
    @media(max-width: 1240px) {
        display: block;
    }
    @media(max-width: 860px) {
        opacity: 1 !important;
        h1 {
            font-size: 36px;
        }
    }
`

const RowThree = styled.div`
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
        margin-bottom: 0;
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

const RowFour = styled.div`
    max-width: 1180px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    @media(max-width: 1240px) {
        max-width: 780px;
        flex-wrap: wrap;
    }
    @media(max-width: 860px) {
        max-width: 100%;
        > div {
            &:first-child {
                width: calc(50% - 20px);
            }
            &:nth-child(2) {
                width: 50%;
                margin-bottom: 0;
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
                max-width: 380px;
                width: 100%;
            }
            &:nth-child(2) {
                max-width: 380px;
                width: 100%;
            }
        }
    }
`

export default FeaturedPortfolio