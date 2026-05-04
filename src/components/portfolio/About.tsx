import { GraduationCap, BookOpen, FlaskConical, Factory } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: GraduationCap,
    step: "01",
    title: "Academic Foundation",
    body: "I'm pursuing a Bachelor of Applied Engineering (D4) in Automation Engineering at Diponegoro University — a program built around the practical realities of industrial control and instrumentation.",
    accent: "accent",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "What I Studied",
    body: "Coursework and labs covering PLC programming, HMI/SCADA development, process control, and electrical design fundamentals — paired with regular hands-on work on real hardware.",
    accent: "accent",
  },
  {
    icon: FlaskConical,
    step: "03",
    title: "Lab Assistant Role",
    body: "As a Lab Assistant for the Industrial Instrumentation & Process Control lab, I guide fellow students through PLC programming, LabVIEW data acquisition, and Festo MPS sessions — which constantly sharpens my own technical understanding.",
    accent: "warm",
  },
  {
    icon: Factory,
    step: "04",
    title: "Toward Industry",
    body: "Internships at Pertamina RU VI and Semen Bima connected my academic learning to actual plant systems. Today I'm focused on bridging that academic-to-industry gap — building automation that runs reliably in the real world.",
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
            title="From classroom to control room."
            description="A short look at how my path in automation engineering took shape — and where it's heading next."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group relative h-full bg-surface-elevated border border-border rounded-2xl p-7 card-hover overflow-hidden">
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
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl grid place-items-center border border-border ${
                        c.accent === "warm" ? "bg-gradient-warm" : "bg-gradient-accent"
                      }`}
                    >
                      <c.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-mono text-xs text-muted-foreground tracking-widest">
                      {c.step}
                    </span>
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
