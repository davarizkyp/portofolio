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
    <section id="experience" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden />
      <div className="container-custom relative">
        <Reveal>
          <SectionHeading
            eyebrow="04 / Experience"
            title="A timeline of work and growth."
            description="Internships, lab work, and leadership roles shaping how I approach engineering."
          />
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-4 md:left-6 top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(180deg, hsl(var(--accent)) 0%, hsl(var(--border)) 30%, hsl(var(--border)) 70%, hsl(var(--accent-warm)) 100%)" }}
            aria-hidden
          />

          <div className="space-y-6">
            {items.map((it, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-0 md:left-2 top-2 w-9 h-9 rounded-xl bg-gradient-accent grid place-items-center shadow-glow ring-4 ring-background">
                    <it.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-surface-elevated border border-border rounded-2xl p-6 card-hover">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[10px] text-mono px-2.5 py-1 bg-gradient-accent text-white rounded-md uppercase tracking-wider font-semibold">
                        {it.type}
                      </span>
                      <span className="text-xs text-mono text-muted-foreground">
                        {it.period}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-snug">{it.role}</h3>
                    <div className="text-sm text-accent mb-4 text-mono">{it.org}</div>
                    <ul className="space-y-2">
                      {it.points.map((p, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
                          <span className="text-accent shrink-0 mt-0.5">▸</span>
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
