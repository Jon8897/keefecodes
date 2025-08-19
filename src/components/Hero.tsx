import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { useTheme } from "@/contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src={theme === 'dark' ? "assets/images/Keefe_Codes_Logotype_White.png" : "assets/images/Keefe_Codes_Logotype_Black.png"}
            alt="KeefeCodes Logo" 
            className="mx-auto mb-8 w-64 h-auto"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Welcome to KeefeCodes
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            IT Manager | MSc Cybersecurity Student | Developer
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More About Me
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="w-full flex justify-center"
          style={{ zIndex: 2 }}
        >
          <img 
            src="assets/images/Hero_imae_.png"
            alt="Developer Illustration" 
            className="w-full md:w-[120%] lg:w-[150%] max-w-none h-auto rounded-lg transition-all duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;