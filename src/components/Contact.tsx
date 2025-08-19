import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate or have a question? Let's connect and build something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="space-y-6">
              <div className="flex justify-center space-x-6 mb-8">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-4 rounded-full hover:bg-slate-600 transition-colors duration-300 group"
                >
                  <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-4 rounded-full hover:bg-slate-600 transition-colors duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-4 rounded-full hover:bg-slate-600 transition-colors duration-300 group"
                >
                  <Twitter className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
              </div>
              
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">Need a printable version of my CV?</h4>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <footer className="mt-20 pt-8 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <img src="/lovable-uploads/7d0c4c2e-32fa-4f74-98ca-b087b4f04f72.png" alt="KeefeCodes" className="w-6 h-6" />
              <span className="text-white font-semibold">KeefeCodes</span>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">
                Software Developer. The capacity for problem solving and design thinking.
              </p>
              <p className="text-gray-400 text-sm">
                © 2024 KeefeCodes. This site is my digital CV – updated frequently.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};