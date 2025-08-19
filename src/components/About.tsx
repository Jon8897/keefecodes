import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A multidisciplinary developer with a passion for cybersecurity, automation, and creating clean, scalable systems that solve real-world problems. Experienced in full-stack development, secure infrastructure, and scripting business tools that save time and reduce risk.
          </p>
        </motion.div>

        {/* 👔 Role Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "💼",
              title: "IT Manager",
              content:
                "Managing infrastructure, cybersecurity, and software development at Health Academy. I lead projects across WordPress, cloud systems, policy writing, and internal tools to ensure secure, efficient digital operations.",
            },
            {
              icon: "🛡️",
              title: "Cybersecurity Student",
              content:
                "Currently pursuing an MSc in Cybersecurity with a focus on penetration testing, ISO 27001, and real-world threat mitigation. Actively building labs and working toward industry certifications like Cyber Essentials, OSEP, and Google Cybersecurity.",
            },
            {
              icon: "⚙️",
              title: "Automation Engineer",
              content:
                "Automating workflows using Python, Bash, and Google Apps Script. I've built end-to-end solutions to handle admin tasks, automate folder creation, sync data across platforms, and streamline business processes with code.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 💡 Personal Values Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-left">
          {[
            {
              title: "My Philosophy",
              content:
                "Coding is more than a profession; it's a canvas for innovation. I thrive on transforming complex problems into elegant digital solutions, one line of code at a time.",
            },
            {
              title: "My Drive",
              content:
                "Adept at rising from setbacks, I see each challenge as a stepping stone to mastery. My ultimate gratification comes from seeing my creations enhance daily life, bridging the gap between technology and practicality.",
            },
            {
              title: "My Journey",
              content:
                "Eager to extend my software development expertise, I am on a continuous quest for knowledge. Balancing team collaboration with self-driven projects, I am as confident working with a collective as I am steering my own course.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;