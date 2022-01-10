import React from 'react'; 
import Particles from 'react-tsparticles'; 
import styled from 'styled-components'
   
function HeroBG() { 
  return ( 
    <App>
      <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 10, 
              density: { 
                enable: true, 
                value_area: 400, 
              } 
            }, 
            color: {
                value: "#00ffff",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#00ffff"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 1,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                color: '#888',
                opacity: 0.4,
                distance: 200,
            },
            move: {
                enable: true,
                speed: 1,
                direction: "bottom-left",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
          }, 
          interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
        }} 
      /> 
   
    </App> 
  ); 
} 
   
const App = styled.div`
    canvas {
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
`

export default HeroBG;