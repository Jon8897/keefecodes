import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import CybersecurityPage from "./pages/CybersecurityPage";
import MScPage from "./pages/MScPage";
import ResumePage from "./pages/ResumePage";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-background text-foreground">
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/msc" element={<MScPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;