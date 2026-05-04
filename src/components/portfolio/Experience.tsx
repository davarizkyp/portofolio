import { Briefcase, Users, FlaskConical } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  {
    type: "Internship",
    icon: Briefcase,
    period: "Jan 2026 – Feb 2026",
    role: "Maintenance Execution — Instrument Maintenance Area 1",
    org: "PT. Kilang Pertamina Internasional RU VI · Indramayu",
    points: [
      "Assisted installation of Orifice & Flow Transmitters for Slop Oil Mass Balance — full workflow from MOC, P&ID analysis, sizing, to DCS hook-up & loop drawings.",
      "Resolved field-vs-DCS discrepancies via gain/bias adjustments to ensure data accuracy.",
      "Performed inspection, calibration, and maintenance on sensors, transmitters, and valves.",
    ],
  },
  {
    type: "Lab Assistant",
    icon: FlaskConical,
    period: "Feb 2026 – Present",
    role: "Industrial Instrumentation & Process Control Lab Assistant",
    org: "Diponegoro University · Semarang",
    points: [
      "Guided students in LabVIEW + Arduino data acquisition systems.",
      "Instructed PLC programming using Festo MPS Separating Station with CODESYS.",
    ],
  },
  {
    type: "Internship",
    icon: Briefcase,
    period: "Jul 2025 – Aug 2025",
    role: "Electrical Department — Instrumentation Division",
    org: "PT. Sinar Tambang Arthalestari (Semen Bima) · Banyumas",
    points: [
      "Implemented PDCA cycle inspections prior to maintenance activities.",
      "Performed instrumentation maintenance on industrial machinery components.",
      "Troubleshot PLC systems controlling industrial automation processes.",
    ],
  },
  {
    type: "Organization",
    icon: Users,
    period: "Apr 2025 – Present",
    role: "Head of Sports Division — HIMATRO",
    org: "Automation Engineering Student Association",
    points: [
      "Led the Automation Futsal Cup involving 24 schools.",
      "Supervised 8 staff members executing departmental work programs.",
    ],
  },
  {
    type: "Organization",
    icon: Users,
    period: "Feb 2025 – Present",
    role: "Head of External Diplomacy — IWAKMAS UNDIP",
    org: "Banyumas Student Regional Organization",
    points: [
      "Built partnerships with external student organizations.",
      "Led a Mangrove Planting project with 100+ volunteers in Semarang.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <Reveal>
          <SectionHeading
            eyebrow="04 / Experience"
            title="Work, lab, and leadership timeline."
          />
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border" aria-hidden />

          <div className="space-y-8">
            {items.map((it, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-0 md:left-2 top-1 w-8 h-8 rounded-lg bg-surface-elevated border border-border grid place-items-center shadow-sm">
                    <it.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div className="bg-surface-elevated border border-border rounded-xl p-5 hover:shadow-elegant transition-smooth">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[11px] text-mono px-2 py-0.5 bg-secondary rounded uppercase tracking-wider">
                        {it.type}
                      </span>
                      <span className="text-xs text-mono text-muted-foreground">
                        {it.period}
                      </span>
                    </div>
                    <h3 className="font-semibold leading-snug">{it.role}</h3>
                    <div className="text-sm text-muted-foreground mb-3">{it.org}</div>
                    <ul className="space-y-1.5">
                      {it.points.map((p, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-accent shrink-0">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
