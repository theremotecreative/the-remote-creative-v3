import { Link } from 'gatsby'
import React, { Component } from "react"
import styled from "styled-components"

import { GrGatsbyjs } from 'react-icons/gr';
import { SiWordpress } from 'react-icons/si';
import { IoRocket } from 'react-icons/io5';

class HeroDevice extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            Gatsby: false,
            WordPress: false,
            Gsap: false
        };
    }
    
    toggleGatsby() {
        this.setState({ Gatsby: !this.state.isOpen });
        this.setState({ WordPress: false });
        this.setState({ Gsap: false });
    }

    toggleWordPress() {
        this.setState({ Gatsby: false });
        this.setState({ WordPress: !this.state.isOpen });
        this.setState({ Gsap: false });
    }

    toggleGsap() {
        this.setState({ Gatsby: false });
        this.setState({ WordPress: false });
        this.setState({ Gsap: !this.state.isOpen });
    }

    render() {
        let deviceImage = "deviceMain"
        if(this.state.Gatsby) {
            deviceImage += " gatsbyScreen";
        }
        if(this.state.WordPress) {
            deviceImage += " wordpressScreen";
        }
        if(this.state.Gsap) {
            deviceImage += " gsapScreen";
        }
        return (
            <DeviceElement className={deviceImage}>
                <div class="deviceScreen">
                    <div class="device-outer">
                        <div class="device-screen">
                            <div class="device-browser-gatsby">
                                <div class="browser-top-bar">
                                    <div class="top-bar-green"></div>
                                    <div class="top-bar-red"></div>
                                </div>
                                <div class="browser-main gatsby">
                                    <GrGatsbyjs size={72}/>
                                    <h2>Gatsby.js</h2>
                                    <p>Content?</p>
                                </div>
                            </div>
                            <div class="device-browser-wordpress">
                                <div class="browser-top-bar">
                                    <div class="top-bar-green"></div>
                                    <div class="top-bar-red"></div>
                                </div>
                                <div class="browser-main wordpress">
                                    <SiWordpress size={72}/>
                                    <h2>WordPress</h2>
                                    <p>Content?</p>
                                </div>
                            </div>
                            <div class="device-browser-gsap">
                                <div class="browser-top-bar">
                                    <div class="top-bar-green"></div>
                                    <div class="top-bar-red"></div>
                                </div>
                                <div class="browser-main gsap">
                                    <IoRocket size={72}/>
                                    <h2>GreenSock Animations</h2>
                                    <p>Content?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="device-neck"></div>
                    <div class="device-bottom"></div>
                </div>
                <div class="device-menu">
                    <div class="dots">
                        <button class="gatsby-button" onClick={() => this.toggleGatsby()}><h3>Gatsby.js</h3></button>
                        <button class="wordpress-button" onClick={() => this.toggleWordPress()}><h3>WordPress</h3></button>
                        <button class="gsap-button" onClick={() => this.toggleGsap()}><h3>GSAP</h3></button>
                    </div>
                </div>
                <div class="device-circle"></div>
            </DeviceElement>
        );
    }

}

const DeviceElement = styled.div`
    position: absolute;
    width: 930px;
    height: 700px;
    bottom: 10%;
    right: 10%;
    z-index: 9;
    transition-duration: .6s;
    .deviceScreen {
        position: absolute;
        width: 930px;
        height: 630px;
        right: 0;
        top: 0;
        z-index: 2;
        transition-duration: 1s;
        .device-outer {
            position: absolute;
            width: 930px;
            height: 500px;
            top: 0;
            right: 0;
            background-color: #111;
            border-radius: 20px;
            box-shadow: 0px 3px 14px rgba(112,241,237,.16);
            z-index: 3;
            .device-screen {
                position: absolute;
                width: 870px;
                height: 460px;
                top: 20px;
                right: 30px;
                background-color: #000;
                border-radius: 10px;
                border: 1px solid #222;
                transition-duration: 1s;
                display: flex;
                justify-content: center;
                align-items: center;
                .device-browser-gatsby {
                    opacity: 0;
                    position: absolute;
                    max-width: 150px;
                    max-height: 30px;
                    width: 100%;
                    height: 100%;
                    margin-left: 0px;
                    border-radius: 10px;
                    border: none;
                    left: 0;
                    bottom: 0;
                    overflow: hidden;
                    transition-duration: 1s;
                    .browser-top-bar {
                        height: 40px;
                        width: 100%;
                        background-color: #3A387B;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        padding: 0 15px;
                        .top-bar-green {
                            opacity: 0;
                            width: 20px;
                            height: 20px;
                            background-color: #0B704E;
                            border-radius: 50%;
                            margin: 0 10px;
                        }
                        .top-bar-red {
                            opacity: 0;
                            width: 20px;
                            height: 20px;
                            background-color: #F22534;
                            border-radius: 50%;
                            margin: 0 10px;
                        }
                    }
                    .browser-main {
                        height: 300px;
                        width: 100%;
                        background-color: #eee;
                    }
                }
                .device-browser-wordpress {
                    opacity: 0;
                    position: absolute;
                    max-width: 150px;
                    max-height: 30px;
                    width: 100%;
                    height: 100%;
                    margin-left: 0px;
                    border-radius: 10px;
                    border: none;
                    left: 150px;
                    bottom: 0;
                    overflow: hidden;
                    transition-duration: 1s;
                    .browser-top-bar {
                        height: 40px;
                        width: 100%;
                        background-color: #3A387B;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        padding: 0 15px;
                        .top-bar-green {
                            opacity: 0;
                            width: 20px;
                            height: 20px;
                            background-color: #0B704E;
                            border-radius: 50%;
                            margin: 0 10px;
                        }
                        .top-bar-red {
                            opacity: 0;
                            width: 20px;
                            height: 20px;
                            background-color: #F22534;
                            border-radius: 50%;
                            margin: 0 10px;
                        }
                    }
                    .browser-main {
                        height: 300px;
                        width: 100%;
                        background-color: #eee;
                    }
                }
                .device-browser-gsap {
                    opacity: 0;
                    position: absolute;
                    max-width: 150px;
                    max-height: 30px;
                    width: 100%;
                    height: 100%;
                    margin-left: 0px;
                    border-radius: 10px;
                    border: none;
                    left: 300px;
                    bottom: 0;
                    overflow: hidden;
                    transition-duration: 1s;
                    .browser-top-bar {
                        height: 40px;
                        width: 100%;
                        background-color: #3A387B;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        padding: 0 15px;
                        .top-bar-green {
                            opacity: 0;
                            width: 20px;
                            height: 20px;
                            background-color: #0B704E;
                            border-radius: 50%;
                            margin: 0 10px;
                        }
                        .top-bar-red {
                            opacity: 0;
                            width: 20px;
                            height: 20px;
                            background-color: #F22534;
                            border-radius: 50%;
                            margin: 0 10px;
                        }
                    }
                    .browser-main {
                        height: 300px;
                        width: 100%;
                        background-color: #eee;
                    }
                }
                .browser-main {
                    padding: 40px;
                    &.gatsby {
                        svg {
                            color: #663399;
                        }
                        h2 {
                            color: #663399;
                        }
                    }
                    &.wordpress {
                        svg {
                            color: #23282d;
                        }
                        h2 {
                            color: #23282d;
                        }
                    }
                    &.gsap {
                        svg {
                            color: #4e9815;
                        }
                        h2 {
                            color: #4e9815;
                        }
                    }
                }
            }
        }
        .device-neck {
            position: absolute;
            width: 250px;
            height: 140px;
            right: 340px;
            bottom: 0px;
            background-color: #1a1a1a;
            box-shadow: 0px -3px 1px rgb(112 241 237 / 16%);
            transform: perspective(100px) translateZ(5px) rotateX(10deg);
            transform-style: preserve-3d;
            z-index: 2;
        }
        .device-bottom {
            position: absolute;
            width: 400px;
            height: 400px;
            right: 265px;
            bottom: -278px;
            background-color: #111;
            border-radius: 50%;
            transform: rotateX(75deg) translateZ(80px);
            transform-style: preserve-3d;
            z-index: 1;
        }
    }
    .device-menu {
        position: absolute;
        left: -400px;
        bottom: 0px;
        width: 300px;
        height: 100px;
        h3 {
            font-family: Roboto;
            text-align: center;
            color: #fff;
            position: absolute;
            top: 0;
            left: 0;
            width: 300px;
            opacity: 0;
            visibility: hidden;
            transition-duration: .3s;
        }
        .dots {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 35px;
            button {
                color: transparent;
                background-color: #fff;
                border: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin: 10px;
                &:hover {
                    cursor: pointer;
                    h3 {
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
        }
    }
    .device-circle {
        position: absolute;
        width: 800px;
        height: 800px;
        bottom: -350px;
        right: 70px;
        background-color: #090340;
        border-radius: 50%;
        box-shadow: 0px 10px 20px rgba(0,255,244,.5);
        transform: rotateX(75deg);
        transform-style: preserve-3d;
        z-index: 1;
    }
    &.gatsbyScreen {
        z-index: 11;
        .deviceScreen {
            transform: scale(1.03);
            .device-outer {
                .device-screen {
                    background-color: #628DAA;
                    .device-browser-gatsby {
                        opacity: 1;
                        max-width: 500px;
                        max-height: 340px;
                        margin-left: 100px;
                        margin-bottom: 60px;
                        border-radius: 20px;
                        border: 1px solid #333;
                        .browser-top-bar {
                            .top-bar-green {
                                opacity: 1;
                            }
                            .top-bar-red {
                                opacity: 1;
                            }
                        }
                    }
                    .device-browser-wordpress {
                        opacity: 1;
                        left: 0;
                    }
                    .device-browser-gsap {
                        opacity: 1;
                        left: 150px;
                    }
                }
            }
        }
    }
    &.wordpressScreen {
        z-index: 11;
        .deviceScreen {
            transform: scale(1.03);
            .device-outer {
                .device-screen {
                    background-color: #628DAA;
                    .device-browser-wordpress {
                        opacity: 1;
                        max-width: 500px;
                        max-height: 340px;
                        margin-left: 50px;
                        margin-bottom: 80px;
                        border-radius: 20px;
                        border: 1px solid #333;
                        .browser-top-bar {
                            .top-bar-green {
                                opacity: 1;
                            }
                            .top-bar-red {
                                opacity: 1;
                            }
                        }
                    }
                    .device-browser-gatsby {
                        opacity: 1;
                    }
                    .device-browser-gsap {
                        opacity: 1;
                        left: 150px;
                    }
                }
            }
        }
    }
    &.gsapScreen {
        z-index: 11;
        .deviceScreen {
            transform: scale(1.03);
            .device-outer {
                .device-screen {
                    background-color: #628DAA;
                    .device-browser-gsap {
                        opacity: 1;
                        max-width: 500px;
                        max-height: 340px;
                        margin-left: 50px;
                        margin-bottom: 50px;
                        border-radius: 20px;
                        border: 1px solid #333;
                        .browser-top-bar {
                            .top-bar-green {
                                opacity: 1;
                            }
                            .top-bar-red {
                                opacity: 1;
                            }
                        }
                    }
                    .device-browser-gatsby {
                        opacity: 1;
                    }
                    .device-browser-wordpress {
                        opacity: 1;
                        left: 150px;
                    }
                }
            }
        }
    }
`

export default HeroDevice