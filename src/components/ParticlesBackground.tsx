import { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

const ParticlesBackground = () => {
  useEffect(() => {
    const loadParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 100,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "star",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false
            },
            "size": {
              "value": 3,
              "random": true
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              }
            }
          },
          "retina_detect": true
        });
      }
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = loadParticles;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="particles.min.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return <div id="particles-js" className="absolute inset-0 w-full h-full" />;
};

export default ParticlesBackground;