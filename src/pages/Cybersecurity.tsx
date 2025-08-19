import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CybersecurityPage = () => {
  const modules = [
    {
      title: "Network Security",
      description: "Explored network protocols, firewalls, and intrusion detection systems.",
      grade: "A",
      tags: ["Network Security", "Firewalls", "IDS"]
    },
    {
      title: "Cryptography",
      description: "Studied encryption algorithms, key management, and cryptographic protocols.",
      grade: "A+",
      tags: ["Encryption", "Key Management", "Protocols"]
    },
    {
      title: "Ethical Hacking",
      description: "Learned penetration testing techniques and vulnerability assessment.",
      grade: "B+",
      tags: ["Penetration Testing", "Vulnerability", "Exploitation"]
    },
    {
      title: "Digital Forensics",
      description: "Investigated cybercrimes, data recovery, and forensic analysis.",
      grade: "A",
      tags: ["Cybercrime", "Data Recovery", "Analysis"]
    }
  ];

  const tools = [
    { name: "Wireshark", description: "Network protocol analyzer for packet capture and analysis." },
    { name: "Nmap", description: "Network scanner for discovering hosts and services." },
    { name: "Metasploit", description: "Framework for developing and executing exploit code." },
    { name: "Burp Suite", description: "Web application security testing tool." },
    { name: "Kali Linux", description: "Distribution for penetration testing and digital forensics." }
  ];

  const timelineData = [
    {
      year: "2023",
      event: "Started MSc in Cybersecurity",
      description: "Began advanced studies in cybersecurity, focusing on network security and cryptography."
    },
    {
      year: "2024",
      event: "Completed Network Security Module",
      description: "Achieved high grades in network security, mastering firewall configurations and intrusion detection."
    },
    {
      year: "2024",
      event: "Participated in Cyber Exercises",
      description: "Engaged in simulated cyber attacks and defense scenarios, enhancing incident response skills."
    }
  ];

  return (
    <PageLayout>
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">Cybersecurity Studies</h1>
            <p className="text-xl text-muted-foreground">
              Overview of my MSc Cybersecurity modules, tools, and timeline
            </p>
          </motion.div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Modules & Coursework</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {modules.map((module) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm border-border/50">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{module.grade}</Badge>
                      </div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{module.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {module.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{tool.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Timeline & Milestones</h2>
            <div className="space-y-8">
              {timelineData.map((item) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="border-l-4 border-primary pl-6"
                >
                  <div className="bg-card/80 backdrop-blur-sm border-border/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.year}</h3>
                    <p className="text-primary font-medium mb-2">{item.event}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CybersecurityPage;