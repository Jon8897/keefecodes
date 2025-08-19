import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "CV" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">KeefeCodes</h3>
            <p className="text-muted-foreground mb-4">
              IT Manager with a strong background in software development and a deepening focus on cybersecurity and offensive security. I lead infrastructure, automation, and compliance at Health Academy while pursuing my MSc in Cybersecurity and working toward Red Team expertise.
            </p>
            <p className="text-sm text-muted-foreground">
              This site is my digital CV – updated regularly as I grow.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Printable Documents</h4>
            <p className="text-muted-foreground mb-4">
              Download my CV and cover letter below:
            </p>
            <div className="space-y-2">
              <a
                href="/CV/Jonathan-Keefe-IT-General-CV.pdf"
                download="Jonathan-Keefe-IT-General-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
              <a
                href="/CV/Jonathan-Keefe-Cover-Letter.pdf"
                download="Jonathan-Keefe-Cover-Letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Cover Letter
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 KeefeCodes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;