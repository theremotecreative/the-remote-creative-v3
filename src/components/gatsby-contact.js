import React, { useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const GatsbyContact = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

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
                        width: 761
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
            }
        }
    `)


    return(
        <SectionMain id="home_contact_row_one">
            <ContactRow className={"contact-fadein"}>
                <CopyCol>
                    <h2>Is Gatsby right for your web strategy?</h2>
                    <p>I’ve found that a Gatsby/WordPress combination works best with the following types of websites:</p>
                    <ul>
                        <li>Blog or News: Combined with WordPress as a CMS, use Gatsby to create a high performing blog/news website that performs like a web app. Use Advanced Custom Fields within WordPress to create even more options for Custom Post Types.</li>
                        <li>Portfolio: The responsive image generator built into Gatsby’s core features works great with image heavy websites. The image generator uses lazy-loading, compression, and chooses the correct size image based on the device viewing the site, increasing the site’s performance.</li>
                        <li>Business: Gatsby is a great tool for creating an informational site to promote your business, ensuring the website is SEO compliant out of the box.</li>
                        <li>Although Gatsby has more options, using WordPress as a CMS for an eCommerce or membership site is still in the initial stages of development. Other CMS systems, such as Contentful, work better for these types of sites.</li>
                    </ul>
                    <p>Send me an email and we can discuss your options further!</p>
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
    background-color: #bec8b7;
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
    @media(max-width:1100px) {
        opacity: 1;
        flex-wrap: wrap
    }
`

const CopyCol = styled.div`
    width: 60%;
    h2 {
        font-family: "Poppins";
        font-weight: 700;
        font-size: 48px;
        span {
            padding-left: 100px;
        }
    }
    p, li {
        font-family: "Poppins";
        color: #555;
        margin: 0;
        font-size: 16px;
        line-height: 26px;
        margin-bottom: 20px;
    }
    @media(max-width:1100px) {
        width: 100%;
        margin-bottom: 50px;
    }
    @media(max-width:860px) {
        h2 {
            font-size: 36px;
        }
    }
`

const ImageCol = styled.div`
    width: 40%;
    text-align: center;
    h3 {
        font-family: "Poppins";
        font-size: 27px;
        color: #555;
        font-weight: 100;
        margin-top: 20px;
        margin-bottom: 0px;
        line-height: 1.3em;
    }
    p {
        font-family: "Poppins";
        color: #555;
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
    @media(max-width:500px) {
        height: 250px;
        width: 250px;
    }
`

export default GatsbyContact