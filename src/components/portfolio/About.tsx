import { GraduationCap, BookOpen, FlaskConical, Factory } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: GraduationCap,
    step: "01",
    title: "Academic Foundation",
    body: "I am an automation engineering student at Diponegoro University with a strong focus on industrial control systems and instrumentation. During my studies, I have developed a solid foundation in PLC programming, SCADA systems, and process control through both coursework and hands-on laboratory practice.",
    accent: "accent",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "Laboratory Experience",
    body: "As a laboratory assistant, I have supported practical sessions involving industrial control systems, helping students understand data acquisition, automation logic, and real-time monitoring systems. This experience has strengthened both my technical understanding and problem-solving skills.",
    accent: "accent",
  },
  {
    icon: FlaskConical,
    step: "03",
    title: "Industrial Exposure",
    body: "My interest in industrial automation has been further developed through internships in real industrial environments, including refinery and manufacturing sectors, where I was involved in instrumentation maintenance, DCS integration, and field system analysis.",
    accent: "warm",
  },
  {
    icon: Factory,
    step: "04",
    title: "Professional Interest",
    body: "I am particularly interested in applying automation and control systems to improve reliability, efficiency, and performance in industrial processes.",
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
            eyebrow="About"
            title="From classroom to control room."
            description="A short look at how my path in automation engineering took shape, and where it's heading next."
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
