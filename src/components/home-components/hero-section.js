import * as React from "react"
import styled from "styled-components"

import ParticleBG from "./hero-bg"

const HeroSection = () => (
    <HeroMain id="hero_main_bg" className="one-bg-change">
        <ParticleBG />
        <div className="hero-inner">
            <div className="hero-content">
                <p className="eyebrow">The Remote Creative LLC</p>
                <h1>We build and operate a growing portfolio of digital ventures.</h1>
                <p>
                    Our LLC runs multiple projects across web development, AI automation and marketing, e-commerce merchandise, and emerging service ideas. We stay lean, move fast, and back each initiative with thoughtful design and reliable execution.
                </p>
                <ul className="hero-bullets">
                    <li>
                        <span className="bullet-icon" aria-hidden="true">◆</span>
                        <span><strong>Web development studio</strong> delivering modern, conversion-ready sites.</span>
                    </li>
                    <li>
                        <span className="bullet-icon" aria-hidden="true">◆</span>
                        <span><strong>ScalarOps Agency</strong> for AI automation & marketing at <a href="https://scalarops.agency" target="_blank" rel="noreferrer">scalarops.agency</a>.</span>
                    </li>
                    <li>
                        <span className="bullet-icon" aria-hidden="true">◆</span>
                        <span><strong>Merchandise storefront</strong> featuring original T-shirt designs on Redbubble.</span>
                    </li>
                    <li>
                        <span className="bullet-icon" aria-hidden="true">◆</span>
                        <span><strong>Party planning services</strong> currently in exploration.</span>
                    </li>
                </ul>
                <p className="hero-link">
                    <a href="#portfolio-overview">See how our portfolio is organized ↓</a>
                </p>
            </div>
        </div>
        {/* <HeroAnimation/> */}
    </HeroMain>
)

const HeroForm = styled.form`
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px;
    display: grid;
    gap: 12px;
    backdrop-filter: blur(4px);
    color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    .form-header {
        h2 {
            margin: 0;
            font-size: 28px;
            font-weight: 800;
        }
        p {
            margin: 6px 0 0;
            font-size: 16px;
            color: #dbe6ff;
        }
    }
    label {
        font-size: 14px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #a9b8ff;
    }
    input, textarea {
        width: 100%;
        padding: 12px 14px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(3, 14, 59, 0.8);
        color: #fff;
        font-size: 16px;
        transition: border-color .2s ease, box-shadow .2s ease;
        &:focus {
            border-color: #4f7cff;
            outline: none;
            box-shadow: 0 0 0 4px rgba(79, 124, 255, 0.2);
        }
    }
    textarea {
        resize: vertical;
        min-height: 120px;
    }
    button {
        margin-top: 8px;
        padding: 14px 16px;
        background: linear-gradient(90deg, #4f7cff, #8e9cff);
        border: none;
        border-radius: 12px;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: transform .2s ease, box-shadow .2s ease;
        &:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 8px 20px rgba(79, 124, 255, 0.35);
        }
        &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
        }
    }
    .form-success {
        color: #a7ffce;
        font-weight: 600;
        margin: 0;
    }
    .form-error {
        color: #ffb4c2;
        font-weight: 600;
        margin: 0;
    }
`

const HeroMain = styled.section`
    background: #030e3b;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    .hero-inner {
        position: relative;
        max-width: 980px;
        width: 100%;
        margin: 0 auto;
        padding: 0 30px;
        z-index: 1;
    }
    .hero-content {
        transition-duration: .5s;
        text-align: left;
        max-width: 820px;
        color: #fff;
        font-family: "Poppins", "Roboto", sans-serif;
        .eyebrow {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 13px;
            font-weight: 700;
            color: #7adeff;
            margin: 0 0 16px;
        }
        h1 {
            font-family: Roboto;
            font-weight: 900;
            font-size: 56px;
            line-height: 1.15;
            color: #fff;
            max-width: 960px;
            text-shadow: 2px 2px 4px rgba(0,0,0,.5);
            transform: translateZ(60px);
            transition-duration: .3s;
            &:hover {
                transform: translateZ(120px);
            }
        }
        p {
            font-family: Poppins;
            font-weight: 400;
            font-size: 24px;
            line-height: 1.4;
            max-width: 520px;
            margin: 12px 0 0 0;
            color: #fff;
            transform: translateZ(60px);
            text-shadow: 1px 1px 2px rgba(0,0,0,.5);
        }
        .hero-bullets {
            list-style: none;
            padding: 0;
            margin: 24px 0 0;
            display: grid;
            gap: 14px;
        }
        .hero-bullets li {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: flex-start;
            gap: 10px;
            color: #e6edff;
            font-family: Poppins;
            font-weight: 500;
            font-size: 16px;
            line-height: 1.55;
        }
        .bullet-icon {
            font-size: 16px;
            margin-top: 2px;
        }
        a {
            color: #7adeff;
            text-decoration: none;
        }
        .hero-link {
            margin-top: 20px;
            font-size: 18px;
        }
    }
    @media(max-width:960px) {
        height: auto;
        padding: 80px 0;
        .hero-content {
            text-align: center;
            h1 {
                font-size: 44px;
            }
            p {
                margin: 12px auto 0 auto;
                font-size: 22px;
            }
        }
    }
    @media(max-width:767px) {
        height: auto;
        padding: 80px 0;
        .hero-content {
            text-align: center;
            h1 {
                font-size: 32px;
            }
            p {
                margin: 12px auto 0 auto;
                font-size: 20px;
            }
        }
    }

`

export default HeroSection
