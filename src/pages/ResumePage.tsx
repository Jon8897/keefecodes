import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumePage = () => {
  const experiences = [
    {
      role: "IT Manager / Cybersecurity Lead",
      company: "Health Academy",
      period: "Jan 2024 – Present",
      description:
        "Leading IT infrastructure, WordPress dev, and cybersecurity strategy. Implemented Wazuh (SIEM), ClamAV, ISO 27001 compliance, and CI/CD-ready dev pipelines."
    },
    {
      role: "Software QA Tester",
      company: "ParcVu",
      period: "Jul 2023 – Dec 2023",
      description:
        "Manual/automated testing, Postman API checks, and GDPR-compliant defect logging for Tempo, Plot, and ParcVu platforms."
    },
    {
      role: "IT Technician & Developer",
      company: "Aston Berkeley",
      period: "Jan 2023 – Jul 2023",
      description:
        "Managed WordPress sites, Linux servers, VPNs, and Draytek firewalls. Automated systems using Bash and Python."
    },
    {
      role: "Junior Developer",
      company: "Yoma",
      period: "Jul 2021 – Dec 2022",
      description:
        "Full-stack support on Magento and WordPress projects. Automated product syncs using Python scripts and optimised mobile UX."
    }
  ];

  const skills = [
    "React 18", "Tailwind CSS", "TypeScript", "Python", "PHP", "Linux CLI",
    "Wazuh (SIEM)", "Kali Linux", "Burp Suite", "Git", "WordPress", "Docker",
    "Google Workspace Admin", "Postman", "MySQL Workbench", "CI/CD Workflows"
  ];

  return (
    <PageLayout>
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Resume</h1>
            <p className="text-xl text-muted-foreground">Professional experience and skills</p>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              With over 5 years in IT roles and growing expertise in cybersecurity, I’ve led infrastructure upgrades, launched secure WordPress environments, automated workflows, and managed enterprise compliance projects. My CVs highlight a dual track in technical delivery and cybersecurity leadership.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <a href="/CV/Jonathan-Keefe-IT-General-CV.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download IT CV
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/CV/Jonathan-Keefe-CS-CV.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Cyber CV
                </a>
              </Button>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Experience Timeline</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <div className="bg-card border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">CV Preview</h2>
            <div className="bg-card border rounded-lg p-8 text-center">
              <iframe
                src="/CV/Jonathan-Keefe-CS-CV.pdf"
                title="Cyber CV Preview"
                className="w-full h-[800px] border rounded"
              ></iframe>
              <p className="text-sm text-muted-foreground mt-2">Previewing: Cybersecurity CV</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResumePage;