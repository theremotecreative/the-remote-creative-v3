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
                <h2>Services built around faster launches and better conversions</h2>
                <p>
                    Every engagement focuses on speed-to-value. We clarify your outcomes, build in short iterations, and leave you with systems your team can run confidently.
                </p>
                <div className="service-list">
                    <div className="service-card">
                        <h3>AI-accelerated web development</h3>
                        <ul>
                            <li>Performance-first sites ready for SEO, analytics, and experimentation.</li>
                            <li>Design systems and content pipelines that keep pages fresh without rework.</li>
                            <li>Built-in CRO testing to capture more qualified leads after launch.</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <h3>Marketing & ops automation</h3>
                        <ul>
                            <li>Lead capture, scoring, and routing that syncs with your CRM and inbox.</li>
                            <li>Campaign sequences, chatbots, and follow-ups that run automatically.</li>
                            <li>Dashboards that track time saved, conversion lift, and revenue impact.</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <h3>Consulting & training</h3>
                        <ul>
                            <li>Roadmaps and architectures tailored to your stack and security needs.</li>
                            <li>Workshops and playbooks so your team can ship AI features responsibly.</li>
                            <li>Pairing sessions to productionize prototypes and avoid common pitfalls.</li>
                        </ul>
                    </div>
                </div>
                <p className="custom-button"><a href="#home_contact_row_one">Plan my AI upgrade</a></p>
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
    h3 {
        font-family: Roboto;
        font-size: 22px;
        font-weight: 800;
        color: #fff;
        margin: 0 0 12px;
    }
    .service-list {
        display: grid;
        gap: 18px;
        margin: 26px 0;
    }
    .service-card {
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        padding: 18px 20px;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
    }
    .service-card ul {
        margin: 0;
        padding-left: 18px;
        color: #dbe6ff;
        font-size: 16px;
        line-height: 1.6;
        display: grid;
        gap: 8px;
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
        .service-card {
            text-align: left;
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
