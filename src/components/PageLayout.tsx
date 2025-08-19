import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ParticlesBackground from "./ParticlesBackground";

interface PageLayoutProps {
  children: ReactNode;
  showParticles?: boolean;
}

const PageLayout = ({ children, showParticles = true }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      {showParticles && <ParticlesBackground />}
      <div className="relative z-10">
        <Navigation />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;