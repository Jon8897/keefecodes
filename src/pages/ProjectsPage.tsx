import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  const projects = [
    {
      title: "Memory Game",
      category: "Web Games",
      description: "Fun memory matching game built with HTML, CSS, and JavaScript.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Jon8897/Memory-game",
      live: "https://jon8897.github.io/Memory-game/",
    },
    {
      title: "Math Game",
      category: "Web Games",
      description: "Interactive arithmetic game for practicing basic math skills.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Jon8897/Memory-game",
      live: "https://jon8897.github.io/Math-Project-Games/",
    },
    {
      title: "Cybersecurity Portfolio",
      category: "Cyber Labs",
      description: "Writeups and documentation from Hack The Box and cybersecurity labs.",
      tech: ["Markdown", "Cyber Docs"],
      github: "https://github.com/Jon8897/cybersecurity-portfolio",
      live: "",
    },
  ];

  const categories = ["All", "Web Games", "Cyber Labs"];

  const openModal = (url: string) => setIframeUrl(url);
  const closeModal = () => setIframeUrl(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <PageLayout>
      <div className="pt-20 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              A showcase of my technical work and achievements
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.live ? (
                        <Button size="sm" onClick={() => openModal(project.live)}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {iframeUrl && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-background w-full max-w-6xl h-[85vh] rounded-lg overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                size="icon"
                className="absolute top-4 right-4 z-10"
                variant="ghost"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>
              <iframe
                src={iframeUrl}
                title="Live Demo"
                className="w-full h-full border-none"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;