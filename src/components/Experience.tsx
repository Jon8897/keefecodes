import { Card, CardContent } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "IT Manager",
      company: "Healthacademy online",
      period: "January 2024 - Present",
      responsibilities: [
        "Manage and maintain Windows servers",  
        "Develop and maintain websites",
        "Configure and monitor systems"
      ],
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Software Tester", 
      company: "ParcVu",
      period: "July 2023 - December 2023",
      responsibilities: [
        "Test software applications",
        "Identify and report bugs", 
        "Collaborate with the development team"
      ],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "IT Technician and Developer",
      company: "Aston Berkeley", 
      period: "January 2023 - July 2023",
      responsibilities: [
        "Troubleshoot technical problems",
        "Develop and maintain websites",
        "Monitor systems for optimal performance"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Junior Developer",
      company: "Yoma",
      period: "July 2021 - December 2022", 
      responsibilities: [
        "Developed and maintained WordPress sites",
        "Configured Magento websites",
        "Utilized Python for automation tasks"
      ],
      gradient: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className={`w-full h-1 bg-gradient-to-r ${exp.gradient} rounded-full mb-4`}></div>
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <div className="text-blue-400 font-semibold mb-1">{exp.company}</div>
                <div className="text-gray-400 text-sm mb-4">{exp.period}</div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-slate-700 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">About</h3>
            <p className="text-gray-300 mb-6">Software Developer. The capacity for problem solving and design thinking.</p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Download</h4>
                <p className="text-gray-300 mb-4">Need a printable version of my CV? Download it here! 📄</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Social</h4>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Twitter</a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};