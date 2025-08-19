import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const CybersecurityPage = () => {
  const certifications = [
    {
      title: "Offensive Security Experienced Penetration Tester (OSEP)",
      provider: "OffSec (PEN-300)",
      status: "Planned",
      description: "Advanced red team training with a focus on bypassing security mechanisms, evasion techniques, and post-exploitation. ✅ OSEP"
    },
    {
      title: "ISO/IEC 27001 Lead Implementer",
      provider: "PECB via QA",
      status: "Planned",
      description: "Formal training to design and implement ISMS frameworks based on ISO 27001, supporting cybersecurity compliance. ✅ ISO/IEC 27001 Lead Implementer"
    },
    {
      title: "Full-Stack Pentesting Lab",
      provider: "Dawid Czagan / Silesia Security Lab",
      status: "Planned",
      description: "Hands-on lifetime lab access to advanced real-world exploitation scenarios — practical red team training. 🟨 No formal cert but highly regarded practical experience"
    }
  ];

  const tools = [
    "Wazuh", "OSSEC", "pfSense", "Wireshark", "Snort",
    "Kali Linux", "Burp Suite", "Metasploit", "Nmap", "ClamAV",
    "FTK", "Volatility", "Autopsy", "OpenVAS", "Cyber Essentials",
    "ISO 27001", "John the Ripper", "Google Workspace", "WireGuard"
  ];

  return (
    <PageLayout>
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Cybersecurity Journey</h1>
            <p className="text-xl text-muted-foreground">MSc Cybersecurity Student – Digital & Technology Specialist Pathway</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Certifications Roadmap</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                      <span className={`px-3 py-1 text-xs rounded-full bg-yellow-600 text-yellow-100`}>
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2 italic text-sm">Provider: {cert.provider}</p>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {tools.map((tool) => (
                <div key={tool} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <span className="font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Research & Reports</h2>
            <div className="bg-card border rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-4">Technical reports and research papers will be uploaded here as they're completed.</p>
              <p className="text-sm text-muted-foreground">Coming soon...</p>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
};

export default CybersecurityPage;