import * as React from "react"
import styled from "styled-components"

import ParticleBG from "./hero-bg"
import HeroDevice from "./hero-device"
import HeroAnimation from "./hero-animation"

const HeroSection = () => (
    <HeroMain id="hero_main_bg" className="one-bg-change">
        <ParticleBG/>
        <div class="hero-content">
            <h1>Modern Web Development with WordPress and Gatsby.js</h1>
            <p>Building lightning fast web apps with the latest react libraries and content management systems</p>
        </div>
        {/* <HeroDevice/> */}
        {/* <HeroAnimation/> */}
    </HeroMain>
  )
  
const HeroMain = styled.section`
    background: #030e3b;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    .hero-content {
        position: relative;
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
        margin-left: 15%;
        margin-bottom: 0px;
        padding: 0 30px;
        z-index: 1;
        transition-duration: .5s;
        h1 {
            font-family: Roboto;
            font-weight: 900;
            font-size: 72px;
            line-height: 1.2;
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
            font-size: 36px;
            line-height: 1.3;
            max-width: 500px;
            color: #fff;
            transform: translateZ(60px);
            text-shadow: 1px 1px 2px rgba(0,0,0,.5);
        }
    }
    @media(max-width:1160px) {
        .hero-content {
            margin-left: auto;
        }
    }
    @media(max-width:960px) {
        .hero-content {
            text-align: center;
            h1 {
                font-size: 56px;
            }
            p {
                margin: 0 auto;
                font-size: 32px;
            }
        }
    }
    @media(max-width:767px) {
        .hero-content {
            text-align: center;
            h1 {
                font-size: 36px;
            }
            p {
                margin: 0 auto;
                font-size: 24px;
            }
        }
    }
  
`
  
export default HeroSection