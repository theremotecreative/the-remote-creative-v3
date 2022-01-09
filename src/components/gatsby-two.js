import React, { useEffect } from "react"
import styled from "styled-components"

import { FaChartLine } from 'react-icons/fa';
import { FaWordpress } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const GatsbyTwo = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let gatsbyTwotl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#gatsby_row_two",
                start: 'top bottom',
                end: 'bottom top',
                id: 'gatsby_row_two',
                toggleActions: "play reverse play reverse",
                },
            })
        gatsbyTwotl.to('.gatsby-two-fadein', { opacity: '1', delay: 0.2, duration: 2 })

    }, []);

    return(
        <SectionMain id="gatsby_row_two">
            <SectionRow className={"gatsby-two-fadein"}>
                <h2>Why Gatsby.js?</h2>
                <SectionCol>
                    <IconElement><FaChartLine size={44}/></IconElement>
                    <h3>Blazing Fast Performance</h3>
                    <p>The greatest benefit of using Gatsby to power your site is the massive increase in performance. Because the site is now generated statically, load times are easily under 1 second. Since the average load time of websites on the internet is 3 seconds or less, this puts a Gatsby site way ahead of the competition.</p>
                </SectionCol>
                <SectionCol>
                    <IconElement><FaWordpress size={44}/></IconElement>
                    <h3>WordPress CMS</h3>
                    <p>While generating a site, Gatsby pulls dynamic data with <a href="https://graphql.org/" target="_blank" rel="noreferrer">Graphql</a>, a versatile querying language that works with a number of APIs, including the WordPress REST API. This means you can still use the user-friendly WordPress dashboard to create new content, which is then queried and generated through Gatsby.</p>
                </SectionCol>
                <SectionCol>
                    <IconElement><FaReact size={44}/></IconElement>
                    <h3>Popular Technology</h3>
                    <p>Gatsby uses <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>, which is one of the most popular JavaScript libraries currently used by developers. With the addition of <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">Webpack</a> to bundle scripts and modern CSS, Gatsby sites are always built up-to-date with modern browser trends.</p>
                </SectionCol>
                <SectionCol>
                    <IconElement><FaServer size={44}/></IconElement>
                    <h3>Easy Build Process</h3>
                    <p>Using <a href="https://github.com/" target="_blank" rel="noreferrer">Github</a> as a repository and <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a> to deploy the site, the build process is incredibly easy and efficient, along with the added bonus of being able to collaborate with other developers and revert to older branches. Although a WordPress CMS requires a separate hosting server, most sites can use Netlify’s free plan to manage the Gatsby build.</p>
                </SectionCol>
                <SectionCol>
                    <IconElement><FaLock size={44}/></IconElement>
                    <h3>Security</h3>
                    <p>WordPress sites notoriously have security concerns because of the open source nature of themes and plugins, constantly needing updates to ensure they don’t become vulnerable. A Gatsby site avoids these, as well as providing an easy way to revert to an older branch of the site if something does go wrong.</p>
                </SectionCol>
                <SectionCol>
                    <IconElement><FaMobileAlt size={44}/></IconElement>
                    <h3>App-Like User Experience</h3>
                    <p>Gatsby is a Progressive Web App (PWA) generator, which in addition to the speed means a smoother user experience. With code-splitting, lazy-loading images, and no reloads between pages, the User Experience is fully app-like.</p>
                </SectionCol>
            </SectionRow>
        </SectionMain>
    )

}

const SectionMain = styled.div`
    padding: 100px 20px;
    background-color: #dbe2e3;
`

const SectionRow = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    opacity: 0;
    h2 {
        width: 100%;
        text-align: center;
        margin-bottom: 50px;
    }
    @media(max-width:1100px) {
        opacity: 1;
    }
`

const SectionCol = styled.div`
    width: 33.33%;
    padding: 0 30px;
    margin-bottom: 50px;
    text-align: center;
    p {
        font-family: "Poppins";
        color: #272727;
        margin: 0;
        font-size: 16px;
        line-height: 26px;
        text-align: left;
        a {
            font-family: "Poppins";
            font-weight: 700;
            color: #272727;
            text-decoration: none;
            font-weight: 700;
        }
    }
    @media(max-width:960px) {
        width: 50%;
        text-align: left;
    }
    @media(max-width:600px) {
        width: 100%;
        text-align: center;
        p {
            text-align: center;
        }
    }
`

const IconElement = styled.div`
    background-color: #aabeaf;
    height: 88px;
    width: 88px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default GatsbyTwo