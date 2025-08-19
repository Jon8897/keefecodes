import { Card, CardContent } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "PHP Web Development",
      experience: "6 years, 5 projects",
      level: 90,
      icon: "🐘"
    },
    {
      title: "WordPress",
      experience: "2 years, 7 projects", 
      level: 75,
      icon: "📝"
    },
    {
      title: "PostgreSQL",
      experience: "2 years, 4 projects",
      level: 60,
      icon: "🐘"
    },
    {
      title: "Symfony2",
      experience: "1 year, 2 projects",
      level: 40,
      icon: "🎵"
    },
    {
      title: "Dojo",
      experience: "1 year, 2 projects", 
      level: 35,
      icon: "🥋"
    },
    {
      title: "Magento",
      experience: "1 year, 1 project",
      level: 30,
      icon: "🛒"
    }
  ];

  const additionalSkills = [
    { name: "HTML/CSS", icon: "🌐" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "🗃️" },
    { name: "Git", icon: "📁" },
    { name: "Visual Basic", icon: "💼" },
    { name: "C#", icon: "🔷" },
    { name: "TypeScript", icon: "📘" }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">💡 The Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((skill, index) => (
            <Card key={index} className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{skill.title}</h3>
                    <p className="text-sm text-gray-600">{skill.experience}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white">Additional Technologies</h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {additionalSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-slate-700 text-white px-6 py-3 rounded-lg border border-slate-600 hover:border-blue-400 hover:bg-slate-600 transition-all duration-300 flex items-center gap-2"
            >
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};