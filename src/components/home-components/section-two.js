import React, { useEffect } from "react"
import styled from "styled-components"

import StrategySlider from "../strategy-slider"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const SectionTwo = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let sTwoTl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#section_two_bg",
                start: 'top 70%',
                end: 'top 70%',
                id: 's2-background',
                toggleActions: "play play reverse reverse",
                },
            })
        sTwoTl.to('.one-bg-change', { background: '#111', delay: 0.2, duration: 2 }, 0)
        sTwoTl.to('.two-bg-change', { background: '#111', delay: 0.2, duration: 2 }, 0)
        sTwoTl.to('.three-bg-change', { background: '#111', delay: 0.2, duration: 2 }, 0)
        sTwoTl.to('.four-bg-change', { background: '#111', delay: 0.2, duration: 2 }, 0)
    
    }, []);

    return(
    <SectionMain id="section_two_bg" className="two-bg-change">
        <div className="flex-row">
            <div className="left-col">
                <StrategySlider/>
            </div>
            <div className="right-col">
                <h2>A portfolio approach to building new revenue lines</h2>
                <p>
                    The Remote Creative LLC is structured to launch, operate, and support multiple business units under one roof. Each project has a focused mission, dedicated workflows, and a shared commitment to high-quality digital experiences.
                </p>
                <p>
                    Our current focus spans web development, AI automation and marketing through ScalarOps, original merch on Redbubble, and a party planning concept in early development.
                </p>
            </div>
        </div>
    </SectionMain>
    );

}

const SectionMain = styled.section`
    background: #030e3b;
    padding: 100px 20px;
    .flex-row {
        position: relative;
        max-width: 1180px;
        width: 100%;
        margin: 0px auto;
        display: flex;
        align-items: center;
        z-index: 1;
    }
    .left-col,
    .right-col {
        width: 50%;
        padding: 40px;
    }
    h2 {
        font-family: Roboto;
        font-size: 60px;
        font-weight: 700;
        color: #fff;
        line-height: 1.3;
    }
    p {
        font-family: Poppins;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        line-height: 1.5;
    }
    .custom-button {
        a {
            color: #00ffff;
            text-decoration: none;
        }
    }
    @media(max-width:1000px) {
        .flex-row {
            flex-wrap: wrap;
        }
        .left-col,
        .right-col {
            width: 100%;
        }
        .right-col {
            order: 1;
            text-align: center;
        }
        .left-col {
            order: 2;
        }
    }
    @media(max-width:767px) {
        h2 {
            font-size: 36px;
        }
    }
    @media(max-width:600px) {
        .left-col,
        .right-col {
            padding: 0;
        }
    }

`

export default SectionTwo
