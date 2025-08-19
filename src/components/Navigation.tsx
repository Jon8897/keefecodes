import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/cybersecurity", label: "Cybersecurity" },
    { href: "/msc", label: "MSc & Research" },
    { href: "/resume", label: "Resume" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">KeefeCodes</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                to={item.href} 
                className={`transition-colors hover:text-primary ${
                  location.pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  to={item.href} 
                  className={`transition-colors hover:text-primary ${
                    location.pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;