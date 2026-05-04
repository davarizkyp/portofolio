import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    year: "2026",
    title: "Orifice Flowmeter Design — Light Slop Oil Line",
    description:
      "Designed an orifice flowmeter system for Unit 23/24 at PT Kilang Pertamina Internasional RU VI, including P&ID analysis, sizing per ISO 5167 / API MPMS, and DCS signal integration.",
    tools: ["P&ID", "ISO 5167", "API MPMS", "DCS", "Hook-up Drawing"],
    impact: "Enabled accurate slop oil mass balance measurement in the Treating Unit.",
    image: p2,
  },
  {
    year: "2025",
    title: "Automatic Water Level Control System",
    description:
      "Dual-tank automatic control system using Arduino, ultrasonic sensors, and solenoid valves with a LabVIEW-based HMI for real-time monitoring.",
    tools: ["Arduino", "LabVIEW", "Ultrasonic", "HMI"],
    impact: "Real-time monitoring with automatic dual-tank balancing.",
    image: p3,
  },
  {
    year: "2025",
    title: "Automatic Heater with LabVIEW HMI",
    description:
      "Temperature-based automatic heating control system using Arduino, thermocouple, and SSR. Bidirectional setpoint control via LabVIEW and Arduino IDE.",
    tools: ["Arduino", "Thermocouple", "SSR", "LabVIEW"],
    impact: "Seamless setpoint regulation across two interfaces.",
    image: p1,
  },
  {
    year: "2025",
    title: "Servo Motor Position Control System",
    description:
      "Servo position controller using Arduino with a Delphi-based interface for precise and interactive angle control.",
    tools: ["Arduino", "Delphi 7", "Servo"],
    impact: "Interactive motion control with precise angular positioning.",
    image: p2,
  },
  {
    year: "2024",
    title: "DC Motor Speed Control with PID & PWM",
    description:
      "Implemented PID and PWM-based DC motor speed control using MATLAB Simulink integrated with Arduino.",
    tools: ["MATLAB Simulink", "Arduino", "PID", "PWM"],
    impact: "Stable speed regulation under varying load conditions.",
    image: p3,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container-custom">
        <Reveal>
          <SectionHeading
            eyebrow="03 / Projects"
            title="Selected engineering projects."
            description="A mix of academic, plant, and personal projects across instrumentation, control, and automation."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 100}>
              <article className="group h-full bg-surface-elevated border border-border rounded-xl overflow-hidden hover:shadow-elevated transition-smooth flex flex-col">
                <div className="aspect-video overflow-hidden bg-secondary relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 text-[11px] text-mono bg-background/80 backdrop-blur border border-border rounded">
                    {p.year}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="text-xs text-mono text-muted-foreground mb-3">
                    <span className="text-accent">▸ Impact:</span> {p.impact}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] text-mono bg-secondary text-secondary-foreground rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
