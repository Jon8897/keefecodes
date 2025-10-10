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
    <div className="min-h-screen relative overflow-hidden">
      {showParticles && (
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
      )}

      {/* Foreground layer */}
      <div className="relative z-10">
        <Navigation />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;