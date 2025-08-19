import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const MScPage = () => {
  const timeline = [
    {
      date: "April 2025",
      title: "MSc Cybersecurity - Started",
      description: "Enrolled on the MSc Digital and Technology Specialist (Cyber Security Pathway) programme at Northumbria University.",
      status: "completed"
    },
    {
      date: "April–July 2025",
      title: "Business & Technology",
      description: "Delivered a 3000-word business innovation report for the health education sector. Explored digital transformation strategy and the role of cybersecurity.",
      status: "completed"
    },
    {
      date: "July–Sept 2025",
      title: "Technical and Digital Leadership",
      description: "Developing secure system design and governance skills. Ongoing assessments include threat modelling and enterprise security architecture.",
      status: "current"
    },
    {
      date: "Oct–Dec 2025",
      title: "Break & Independent Study",
      description: "Scheduled university break with optional reading and preparation for the next term.",
      status: "upcoming"
    },
    {
      date: "Jan–March 2026",
      title: "Professional Practice",
      description: "Focus on ethical practices, consulting techniques, communication, and reflective cybersecurity leadership.",
      status: "upcoming"
    },
    {
      date: "April–June 2026",
      title: "Cyber Security Professional Practice II",
      description: "Topics will include penetration testing, TCP/IP networking, firewall design, and vulnerability management.",
      status: "upcoming"
    },
    {
      date: "July–Sept 2026",
      title: "Break & Project Planning",
      description: "Dedicated time for proposal preparation, reading, and scoping the dissertation topic.",
      status: "upcoming"
    },
    {
      date: "Oct 2026 – April 2027",
      title: "Dissertation / Research Project",
      description: "Capstone research project exploring cyber threat response and leadership within digital education settings.",
      status: "upcoming"
    }
  ];

  return (
    <PageLayout>
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">MSc Studies</h1>
            <p className="text-xl text-muted-foreground">Academic journey and research work</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Study Timeline</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-2 ${
                    item.status === 'completed' ? 'bg-green-500' :
                    item.status === 'current' ? 'bg-blue-500' : 'bg-gray-500'
                  }`} />
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Research Papers & Assignments</h2>
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">A Case Study of Health Academy's Virtual Student Placements as Innovation</h3>
                  <p className="text-muted-foreground mb-4">3000-word report by Jonathan Keefe examining digital innovation and cybersecurity in the context of virtual student placements at Health Academy. Grade pending. Once grade as been assigned PDF version of report will be released </p>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-blue-600 text-blue-100 text-sm rounded">Submitted</span>
                    <span className="text-sm text-muted-foreground">Submitted: July 2025</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Notes & Resources</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">Study notes, lecture materials, and additional resources will be organized here.</p>
                <p className="text-sm text-muted-foreground">Repository coming soon...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MScPage;