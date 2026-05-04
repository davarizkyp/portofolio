import { useState } from "react";
import { Mail, Linkedin, MessageCircle, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "dava84984@gmail.com",
    href: "mailto:dava84984@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/davarizkypratama",
    href: "https://www.linkedin.com/in/davarizkypratama",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 895-4229-57680",
    href: "https://wa.me/62895422957680",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Banyumas, Central Java, Indonesia",
    href: null,
  },
];

export const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message ready! Opening your email client…");
      const f = e.currentTarget;
      const fd = new FormData(f);
      const subject = encodeURIComponent(`Portfolio Contact — ${fd.get("name")}`);
      const body = encodeURIComponent(
        `From: ${fd.get("name")} <${fd.get("email")}>\n\n${fd.get("message")}`
      );
      window.location.href = `mailto:dava84984@gmail.com?subject=${subject}&body=${body}`;
      f.reset();
    }, 600);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <Reveal>
          <SectionHeading
            eyebrow="06 / Contact"
            title="Let's build something reliable."
            description="Open to internships, entry-level automation roles, and project collaborations."
          />
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8">
          <Reveal>
            <div className="md:col-span-2 space-y-3">
              {contacts.map((c) => {
                const inner = (
                  <div className="flex items-start gap-4 p-4 bg-surface-elevated border border-border rounded-xl hover:border-accent/40 transition-smooth">
                    <div className="w-10 h-10 rounded-lg bg-secondary grid place-items-center shrink-0">
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-mono text-muted-foreground uppercase tracking-wider">
                        {c.label}
                      </div>
                      <div className="text-sm font-medium truncate">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={onSubmit}
              className="md:col-span-3 bg-surface-elevated border border-border rounded-xl p-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required rows={5} placeholder="Tell me about the role or project…" />
              </div>
              <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
                {sending ? "Sending…" : (<><Send className="mr-2 w-4 h-4" /> Send Message</>)}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
