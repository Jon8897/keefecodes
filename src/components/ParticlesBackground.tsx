import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

declare global {
  interface Window {
    particlesJS?: any;
    pJSDom?: any[];
  }
}

const ParticlesBackground = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const destroyParticles = () => {
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom.forEach((p) => p.pJS?.fn.vendors.destroypJS?.());
        window.pJSDom = [];
      }
    };

    const loadParticles = () => {
      if (window.particlesJS) {
        const color = theme === "dark" ? "#ffffff" : "#000000";
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 40, density: { enable: true, value_area: 1000 } },
            color: { value: color },
            shape: { type: "circle" },
            opacity: { value: 0.5},
            size: { value: 2, random: true },
            line_linked: {
              enable: true,
              distance: 120,
              color: color,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false },
              onclick: { enable: false },
              resize: true,
            },
          },
          retina_detect: true,
        });
      }
    };

    const scriptId = "particles-js-lib";
    const existingScript = document.getElementById(scriptId);

    const setup = () => {
      destroyParticles();
      loadParticles();
    };

    if (existingScript) {
      setup();
    } else {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.onload = setup;
      document.head.appendChild(script);
    }

    return () => {
      destroyParticles();
    };
  }, [theme]);

  return (
    <div id="particles-js" className="absolute inset-0 w-full h-full -z-10 bg-transparent" />
  );
};

export default ParticlesBackground;