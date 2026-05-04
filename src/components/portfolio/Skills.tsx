import { Cpu, Monitor, Settings, Zap, PenTool, Radio, BarChart3 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const skills = [
  { icon: Cpu, name: "PLC Programming", level: 88, tools: "CX-Programmer, EcoStruxure, CODESYS, CtrlX" },
  { icon: Monitor, name: "HMI & SCADA", level: 82, tools: "LabVIEW, Festo, Delphi 7" },
  { icon: Settings, name: "Control Systems", level: 85, tools: "PID, PWM, DCS, MATLAB Simulink" },
  { icon: Zap, name: "Electrical Design", level: 78, tools: "EasyEDA, Proteus, PSIM" },
  { icon: PenTool, name: "CAD / Schematics", level: 75, tools: "SolidWorks, Fluidsim" },
  { icon: Radio, name: "Industrial Communication", level: 72, tools: "Modbus, MQTT, DCS Signal Loops" },
  { icon: BarChart3, name: "Data & Office", level: 90, tools: "Excel, Python, MS Office" },
];

const stack = [
  "C++", "Python", "MATLAB", "Arduino IDE", "STM32CubeIDE", "LabVIEW",
  "CX-Programmer", "EcoStruxure", "CODESYS", "CtrlX", "SolidWorks",
  "Proteus", "EasyEDA", "PSIM", "Fluidsim", "Delphi 7",
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <Reveal>
          <SectionHeading
            eyebrow="02 / Skills"
            title="Technical capability stack."
            description="Hands-on across the full automation chain — from field instruments and PLCs to HMI, SCADA, and data acquisition."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="group bg-surface-elevated border border-border rounded-xl p-5 hover:border-accent/40 transition-smooth">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary grid place-items-center">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.tools}</div>
                    </div>
                  </div>
                  <div className="text-mono text-sm text-muted-foreground">{s.level}%</div>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-accent rounded-full transition-all duration-1000"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="border-t border-border pt-8">
            <div className="text-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
              / Tools & Software
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-sm bg-surface-elevated border border-border rounded-md text-mono hover:border-accent/40 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
