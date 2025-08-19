import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsChart = () => {
  const skills = [
    // Frontend Development
    { name: "HTML", level: 95, color: "bg-orange-500", category: "Frontend Development" },
    { name: "CSS", level: 90, color: "bg-blue-500", category: "Frontend Development" },
    { name: "JavaScript", level: 90, color: "bg-yellow-500", category: "Frontend Development" },
    { name: "React", level: 85, color: "bg-cyan-500", category: "Frontend Development" },
    { name: "Tailwind CSS", level: 85, color: "bg-blue-300", category: "Frontend Development" },
    { name: "WordPress (Frontend)", level: 88, color: "bg-blue-700", category: "Frontend Development" },

    // Backend & CMS
    { name: "Node.js", level: 75, color: "bg-green-600", category: "Backend & CMS" },
    { name: "PHP", level: 88, color: "bg-purple-500", category: "Backend & CMS" },
    { name: "SQL", level: 82, color: "bg-blue-600", category: "Backend & CMS" },
    { name: "REST APIs", level: 80, color: "bg-indigo-500", category: "Backend & CMS" },
    { name: "Sanity CMS", level: 75, color: "bg-green-400", category: "Backend & CMS" },
    { name: "WordPress (Admin)", level: 90, color: "bg-blue-800", category: "Backend & CMS" },

    // Automation & Scripting
    { name: "Python", level: 80, color: "bg-green-500", category: "Automation & Scripting" },
    { name: "Google Apps Script", level: 85, color: "bg-yellow-400", category: "Automation & Scripting" },
    { name: "Bash", level: 70, color: "bg-gray-700", category: "Automation & Scripting" },

    // DevOps & Tools
    { name: "Git", level: 85, color: "bg-red-500", category: "DevOps & Tools" },
    { name: "Linux", level: 78, color: "bg-gray-600", category: "DevOps & Tools" },
    { name: "Docker", level: 75, color: "bg-blue-400", category: "DevOps & Tools" },
    { name: "CI/CD", level: 70, color: "bg-indigo-400", category: "DevOps & Tools" },
    { name: "Google Workspace Admin", level: 85, color: "bg-blue-300", category: "DevOps & Tools" },

    // Cybersecurity & Monitoring
    { name: "Wazuh (SIEM)", level: 80, color: "bg-pink-500", category: "Cybersecurity & Monitoring" },
    { name: "ISO 27001", level: 75, color: "bg-green-300", category: "Cybersecurity & Monitoring" },
    { name: "ClamAV", level: 70, color: "bg-red-400", category: "Cybersecurity & Monitoring" },
    { name: "Cyber Essentials", level: 80, color: "bg-blue-500", category: "Cybersecurity & Monitoring" },
    { name: "Network Monitoring", level: 78, color: "bg-yellow-600", category: "Cybersecurity & Monitoring" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">
            My technical expertise across various technologies
          </p>
        </motion.div>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50 mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Frontend Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {skills
                .filter(skill => skill.category === "Frontend Development")
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-24 text-sm font-medium text-right">
                      {skill.name}
                    </div>
                    <div className="flex-1 bg-secondary rounded-full h-3 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                      </motion.div>
                    </div>
                    <div className="w-12 text-sm font-semibold">
                      {skill.level}%
                    </div>
                  </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50 mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Backend & CMS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {skills
                .filter(skill => skill.category === "Backend & CMS")
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-24 text-sm font-medium text-right">
                      {skill.name}
                    </div>
                    <div className="flex-1 bg-secondary rounded-full h-3 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                      </motion.div>
                    </div>
                    <div className="w-12 text-sm font-semibold">
                      {skill.level}%
                    </div>
                  </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50 mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Automation & Scripting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {skills
                .filter(skill => skill.category === "Automation & Scripting")
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-24 text-sm font-medium text-right">
                      {skill.name}
                    </div>
                    <div className="flex-1 bg-secondary rounded-full h-3 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                      </motion.div>
                    </div>
                    <div className="w-12 text-sm font-semibold">
                      {skill.level}%
                    </div>
                  </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50 mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-center">DevOps & Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {skills
                .filter(skill => skill.category === "DevOps & Tools")
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-24 text-sm font-medium text-right">
                      {skill.name}
                    </div>
                    <div className="flex-1 bg-secondary rounded-full h-3 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                      </motion.div>
                    </div>
                    <div className="w-12 text-sm font-semibold">
                      {skill.level}%
                    </div>
                  </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50 mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Cybersecurity & Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {skills
                .filter(skill => skill.category === "Cybersecurity & Monitoring")
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-24 text-sm font-medium text-right">
                      {skill.name}
                    </div>
                    <div className="flex-1 bg-secondary rounded-full h-3 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                      </motion.div>
                    </div>
                    <div className="w-12 text-sm font-semibold">
                      {skill.level}%
                    </div>
                  </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsChart;