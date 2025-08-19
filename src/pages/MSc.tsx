import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const MSc = () => {
  const timeline = [
    {
      date: "September 2024",
      title: "MSc Cybersecurity - Started",
      description: "Began Master's degree program focusing on advanced cybersecurity concepts",
      status: "completed"
    },
    {
      date: "October 2024",
      title: "Network Security Fundamentals",
      description: "Completed first module covering TCP/IP, firewalls, and network protocols",
      status: "completed"
    },
    {
      date: "December 2024",
      title: "Ethical Hacking Module",
      description: "Currently working on penetration testing and vulnerability assessment",
      status: "current"
    },
    {
      date: "March 2025",
      title: "Digital Forensics",
      description: "Upcoming module on investigation techniques and evidence handling",
      status: "upcoming"
    },
    {
      date: "September 2025",
      title: "Dissertation Project",
      description: "Final research project on advanced cybersecurity topic",
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">MSc Studies</h1>
            <p className="text-xl text-gray-300">Academic journey and research work</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Study Timeline</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-2 ${
                    item.status === 'completed' ? 'bg-green-500' :
                    item.status === 'current' ? 'bg-blue-500' : 'bg-gray-500'
                  }`} />
                  <Card className="flex-1 bg-slate-800 border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <span className="text-sm text-gray-400">{item.date}</span>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Research Papers & Assignments</h2>
            <div className="grid gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Network Security Assessment Report</h3>
                  <p className="text-gray-300 mb-4">Comprehensive analysis of corporate network vulnerabilities and recommended security measures.</p>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-blue-600 text-blue-100 text-sm rounded">PDF</span>
                    <span className="text-sm text-gray-400">Completed: November 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Penetration Testing Methodology</h3>
                  <p className="text-gray-300 mb-4">Research paper on modern pen-testing approaches and ethical considerations.</p>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-yellow-600 text-yellow-100 text-sm rounded">In Progress</span>
                    <span className="text-sm text-gray-400">Due: January 2025</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Notes & Resources</h2>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4">Study notes, lecture materials, and additional resources will be organized here.</p>
                <p className="text-sm text-gray-400">Repository coming soon...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MSc;