import { Card, CardContent } from "@/components/ui/card";

export const Projects = () => {
  const websites = [
    {
      title: "Math Game",
      description: "Interactive mathematics learning game",
      category: "Web Application",
      status: "Live"
    },
    {
      title: "Colour Matching", 
      description: "Memory and color matching game",
      category: "Web Game",
      status: "Live"
    }
  ];

  const comingSoon = Array(6).fill({
    title: "Coming Soon",
    description: "New project in development",
    category: "TBA",
    status: "Coming Soon"
  });

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Websites</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websites.map((project, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="aspect-video bg-slate-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Preview</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                  <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
                  <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                  <div className="text-blue-400 text-xs">{project.category}</div>
                </CardContent>
              </Card>
            ))}
            
            {comingSoon.map((project, index) => (
              <Card key={`coming-soon-${index}`} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="aspect-video bg-slate-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-center">
                      <div className="text-lg font-bold">Coming</div>
                      <div className="text-sm">SOON</div>
                      <div className="text-xs text-gray-500 mt-1">STAY TUNED</div>
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                  <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Apps</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4).fill(null).map((_, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="aspect-video bg-slate-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-center">
                      <div className="text-lg font-bold">Coming</div>
                      <div className="text-sm">SOON</div>
                      <div className="text-xs text-gray-500 mt-1">STAY TUNED</div>
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">App Coming Soon</h4>
                  <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};