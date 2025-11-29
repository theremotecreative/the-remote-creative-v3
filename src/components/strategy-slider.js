import React, { Component } from "react"
import Slider from "react-slick"
import styled from 'styled-components'

import { SiWordpress } from 'react-icons/si';
import { IoRocket } from 'react-icons/io5';
import { GrTest } from 'react-icons/gr';
import { IoMdAnalytics } from 'react-icons/io';
import { IoLogoPwa } from 'react-icons/io5';

class StrategySlider extends Component {

    render() {
    
          const settings = {
            arrows: true,
            dots: true,
            infinite: true,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        
          return (
            <SliderContainer className={"phone-slider"}>
              <Slider {...settings}>
                <StrategySlide>
                    <SiWordpress size={72}/>
                    <h4>AI-Enhanced CMS</h4>
                    <p>We supercharge platforms like WordPress with Generative AI integrations. Scale your content production and automate SEO metadata without writing a single line of code manually.</p>
                </StrategySlide>

                <StrategySlide>
                    <IoRocket size={72}/>
                    <h4>Marketing Automation</h4>
                    <p>Launch campaigns that run on autopilot. We wire up your website to your email and CRM tools, ensuring every lead is captured, qualified, and nurtured instantly.</p>
                </StrategySlide>

                <StrategySlide>
                    <GrTest size={72}/>
                    <h4>Smart Optimization</h4>
                    <p>Stop guessing what works. We use data-driven split testing to determine which AI-generated copy and layouts drive the most revenue for your business.</p>
                </StrategySlide>

                <StrategySlide>
                    <IoMdAnalytics size={72}/>
                    <h4>Predictive Insights</h4>
                    <p>Go beyond basic page views. We implement advanced tracking that feeds into AI models, helping you understand user behavior and predict future market trends.</p>
                </StrategySlide>

                <StrategySlide>
                    <IoLogoPwa size={72}/>
                    <h4>Custom AI Tools</h4>
                    <p>Need a specialized tool? We build custom web applications and AI agents that behave like native apps, working seamlessly across mobile and desktop devices.</p>
                </StrategySlide>  
              </Slider>
            </SliderContainer>
          );
      }

}

const SliderContainer = styled.div`
  width: 390px;
  margin: 0 auto;
  .slick-slider {
      padding-bottom: 80px;
  }
  .slick-slide {
      padding: 20px 40px;
      > div {
        -webkit-perspective: 800px;
            perspective: 800px;
      }
  }
  .slick-prev {
      position: absolute;
      width: 40px;
      height: 40px;
      bottom: 0;
      left: 45px;
      border: none;
      border-top: 15px solid #00ffff;
      border-left: 15px solid #00ffff;
      background-color: transparent;
      transform: rotate(-45deg);
      opacity: .5;
      transition-duration: .3s;
      z-index: 10;
      &:before {
          display: none;
      }
      &:hover {
          cursor: pointer;
          opacity: 1;
      }
  }
  .slick-next {
    position: absolute;
    width: 40px;
    height: 40px;
    top: auto;
    bottom: 0 !important;
    right: 45px;
    border: none;
    border-top: 15px solid #00ffff;
    border-right: 15px solid #00ffff;
    background-color: transparent;
    transform: rotate(45deg);
    opacity: .5;
    transition-duration: .3s;
    z-index: 10;
    &:before {
        display: none;
        }
    &:hover {
        cursor: pointer;
        opacity: 1;
        }
    }
    .slick-dots {
        bottom: 10px;
        li {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            color: transparent;
            background-color: #00ffff;
            opacity: .5;
            transition-duration: .3s;
            button {
                &:before {
                    display: none;
                }
            }
            &:hover {
                opacity: 1;
                box-shadow: 0px 0px 12px rgba(255,255,255,.5);
            }
            &.slick-active {
                opacity: 1;
                box-shadow: 0px 0px 12px rgba(255,255,255,.5);
            }
        }
    }
    @media(max-width: 400px) {
        max-width: 300px;
        width: 100%;
        .slick-slide {
            padding: 25px;
        }
    }
`

const StrategySlide = styled.div`
    width: 350px;
    height: 350px;
    background-color: #090340;
    padding: 20px;
    box-shadow: 0px 9px 12px rgba(0, 255, 255, .45);
    text-align: center;
    transform: rotate3d(1, 0, 0, 30deg);
    transition-duration: .3s;
    &:hover {
        transform: rotate3d(1, 0, 0, 0deg);
    }
    h4 {
        color: #fff;
    }
    svg {
        color: #fff;
        margin-bottom: 20px;
        path {
            stroke: #fff;
        }
    }
    p {
        color: #fff;
        font-size: 14px !important;
        a {
            color: #00ffff;
            text-decoration: none;
        }
    }
    @media(max-width:400px) {
        p {
            font-size: 12px !important;
        }
    }
`


export default StrategySlider