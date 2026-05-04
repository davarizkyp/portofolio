import { GraduationCap, Lightbulb, Cog, Compass } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: Lightbulb,
    title: "Who I Am",
    body: "I'm an Automation Engineering student at Diponegoro University with a real curiosity for how machines think — from sensor signals on the field to logic running inside a PLC. I enjoy turning messy real-world problems into clean, repeatable control logic.",
    accent: "accent",
  },
  {
    icon: GraduationCap,
    title: "Academic Background",
    body: "Bachelor of Applied Engineering (D4) — Automation Engineering. My coursework spans instrumentation, process control, electrical systems, and embedded programming, paired with extensive lab work.",
    accent: "accent",
  },
  {
    icon: Cog,
    title: "What I Work On",
    body: "PLC programming (CODESYS, EcoStruxure, CX-Programmer), HMI/SCADA development with LabVIEW, instrumentation loops, and DCS integration. I've worked on real plant projects during internships at Pertamina RU VI and Semen Bima.",
    accent: "warm",
  },
  {
    icon: Compass,
    title: "Where I'm Heading",
    body: "Looking for opportunities to grow inside engineering teams that build automation for energy, manufacturing, or process industries — places where reliability, safety, and clear thinking actually matter.",
    accent: "warm",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden />
      <div className="container-custom relative">
        <Reveal>
          <SectionHeading
            eyebrow="01 / About"
            title="Engineering is my way of thinking."
            description="A short look at who I am, what drives me, and where I want to go in industrial automation."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group relative h-full bg-surface-elevated border border-border rounded-2xl p-7 card-hover overflow-hidden">
                {/* Glow on hover */}
                <div
                  className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700"
                  style={{
                    background:
                      c.accent === "warm"
                        ? "hsl(var(--accent-warm) / 0.25)"
                        : "hsl(var(--accent) / 0.25)",
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl grid place-items-center mb-5 border border-border ${
                      c.accent === "warm" ? "bg-gradient-warm" : "bg-gradient-accent"
                    }`}
                  >
                    <c.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
