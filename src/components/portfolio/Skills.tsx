import { Cpu, Monitor, Zap, Radio, Wrench, Code2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const categories = [
  {
    icon: Code2,
    title: "Programming & Control",
    color: "accent",
    items: ["PLC Programming", "PID Control", "PWM", "Embedded C/C++", "Python", "MATLAB Simulink"],
  },
  {
    icon: Zap,
    title: "Electrical Design",
    color: "warm",
    items: ["Schematic Design", "Power Electronics", "EasyEDA", "Proteus", "PSIM", "Wiring Diagrams"],
  },
  {
    icon: Radio,
    title: "Industrial Communication",
    color: "accent",
    items: ["Modbus RTU/TCP", "MQTT", "DCS Loops", "4-20 mA Signaling", "Hook-up Drawings"],
  },
  {
    icon: Monitor,
    title: "HMI & SCADA",
    color: "warm",
    items: ["LabVIEW", "Festo MPS", "Delphi 7", "Real-time Monitoring", "Data Acquisition"],
  },
];

const tools = [
  { name: "CODESYS", cat: "PLC" },
  { name: "CX-Programmer", cat: "PLC" },
  { name: "EcoStruxure", cat: "PLC" },
  { name: "CtrlX", cat: "PLC" },
  { name: "LabVIEW", cat: "HMI" },
  { name: "MATLAB", cat: "Sim" },
  { name: "Simulink", cat: "Sim" },
  { name: "Arduino IDE", cat: "Embed" },
  { name: "STM32CubeIDE", cat: "Embed" },
  { name: "SolidWorks", cat: "CAD" },
  { name: "Proteus", cat: "EE" },
  { name: "EasyEDA", cat: "EE" },
  { name: "PSIM", cat: "EE" },
  { name: "Fluidsim", cat: "Sim" },
  { name: "Python", cat: "Code" },
  { name: "C++", cat: "Code" },
  { name: "Delphi 7", cat: "HMI" },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
      <div className="container-custom relative">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A full-stack automation toolkit."
            description="From the field instrument up to the SCADA dashboard, here's what I work with."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <div className="group relative h-full bg-surface-elevated border border-border rounded-2xl p-6 card-hover overflow-hidden">
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${cat.color === "warm" ? "accent-warm" : "accent"}) / 0.4), transparent 60%)`,
                    mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
                    WebkitMask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                  }}
                  aria-hidden
                />
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl grid place-items-center ${
                      cat.color === "warm" ? "bg-gradient-warm" : "bg-gradient-accent"
                    }`}
                  >
                    <cat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Category 0{i + 1}
                    </div>
                    <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs bg-secondary/60 border border-border rounded-md hover:border-accent/40 hover:bg-secondary transition-smooth text-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="border-t border-border pt-10">
            <div className="flex items-center gap-3 text-mono text-xs text-accent uppercase tracking-widest mb-6">
              <Wrench className="w-3.5 h-3.5" />
              <span>Tools & Software</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((t, i) => (
                <span
                  key={t.name}
                  className="group px-3.5 py-2 text-sm bg-surface-elevated border border-border rounded-lg text-mono hover-lift hover:border-accent/50 hover:text-accent transition-smooth"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  <span className="text-muted-foreground/50 mr-2 text-[10px]">{t.cat}</span>
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
