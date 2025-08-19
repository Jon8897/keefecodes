import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setSubmitting(false);
  };

  return (
    <PageLayout>
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Let's connect and discuss opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Social Links</h2>
              <div className="space-y-4">
                <a
                  href="https://github.com/Jon8897"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jonathan-keefe-39022b175/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input id="name" name="name" type="text" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input id="subject" name="subject" type="text" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
                {status === "success" && (
                  <p className="text-sm text-green-600 mt-2">Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600 mt-2">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;