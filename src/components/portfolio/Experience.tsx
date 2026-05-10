import { Briefcase, Users, FlaskConical, ImageIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Item = {
  type: string;
  icon: typeof Briefcase;
  period: string;
  role: string;
  org: string;
  description: string;
  tools: string[];
  impact: string;
  image?: string;
};

const items: Item[] = [
  {
    type: "Internship",
    icon: Briefcase,
    period: "Jan 2026 to Feb 2026",
    role: "Maintenance Execution, Instrument Maintenance Area 1",
    org: "PT. Kilang Pertamina Internasional RU VI · Indramayu",
    description:
      "During this internship, I supported the installation of Orifice and Flow Transmitters for the Slop Oil Mass Balance system. My work covered MOC documentation, P&ID analysis, instrument sizing, DCS hookup, and loop drawing preparation. I also resolved field versus DCS discrepancies through gain and bias adjustments, which gave me direct exposure to how instrumentation projects move from paperwork to live, calibrated loops in a refinery environment.",
    tools: ["P&ID", "DCS", "Flow Transmitter", "Calibration"],
    impact:
      "Learned how an instrumentation project moves from paperwork to a live, calibrated loop in a refinery environment.",
  },
  {
    type: "Lab Assistant",
    icon: FlaskConical,
    period: "Feb 2026 to Present",
    role: "Industrial Instrumentation Laboratory Assistant",
    org: "Diponegoro University · Semarang",
    description:
      "As an Industrial Instrumentation Laboratory Assistant, I guide students through practical sessions involving LabVIEW and Arduino based data acquisition systems. I help them understand sensor interfacing, signal conditioning, and measurement principles for industrial instrumentation applications.",
    tools: ["LabVIEW", "Arduino", "Data Acquisition"],
    impact:
      "Strengthened my own grasp of control fundamentals by teaching them. Explaining a concept is the fastest way to truly own it.",
  },
  {
    type: "Lab Assistant",
    icon: FlaskConical,
    period: "Feb 2026 to Present",
    role: "Industrial Process Control Laboratory Assistant",
    org: "Diponegoro University · Semarang",
    description:
      "As an Industrial Process Control Laboratory Assistant, I guide students through PLC programming sessions on the Festo MPS Separating Station using CODESYS. The sessions cover automation logic, sequencing, and real time control strategies for discrete manufacturing processes.",
    tools: ["CODESYS", "PLC", "Festo MPS"],
    impact:
      "Deepened my understanding of PLC based control systems by teaching students how to build and debug automation sequences.",
  },
  {
    type: "Internship",
    icon: Briefcase,
    period: "Jul 2025 to Aug 2025",
    role: "Electrical Department, Instrumentation Division",
    org: "PT. Sinar Tambang Arthalestari (Semen Bima) · Banyumas",
    description:
      "During this internship, I performed PDCA cycle inspections and instrumentation maintenance on plant machinery. I also carried out PLC troubleshooting for production lines, which gave me a close up look at how automation systems keep a continuous process plant running shift after shift.",
    tools: ["PLC", "Instrumentation", "PDCA", "Maintenance"],
    impact:
      "Got a first close up look at how automation actually keeps a continuous process plant running shift after shift.",
  },
  {
    type: "Organization",
    icon: Users,
    period: "Apr 2025 to Present",
    role: "Head of Sports Division, HIMATRO",
    org: "Automation Engineering Student Association",
    description:
      "As Head of Sports Division at HIMATRO, I lead the Automation Futsal Cup which involved 24 participating schools. I supervise 8 staff members in executing departmental work programs, which has built my ability to lead a team, plan logistics, and deliver results under deadlines.",
    tools: ["Leadership", "Event Management", "Coordination"],
    impact: "Built my ability to lead a team, plan logistics, and deliver under deadlines.",
  },
  {
    type: "Organization",
    icon: Users,
    period: "Feb 2025 to Present",
    role: "Head of External Diplomacy, IWAKMAS UNDIP",
    org: "Banyumas Student Regional Organization",
    description:
      "As Head of External Diplomacy at IWAKMAS UNDIP, I build partnerships with external student organizations and manage collaborative projects. I also led a Mangrove Planting project with more than 100 volunteers in Semarang, which sharpened my cross team communication and stakeholder management skills.",
    tools: ["Partnerships", "Project Management", "Communication"],
    impact: "Sharpened cross team communication and stakeholder management.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden />
      <div className="container-custom relative">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked and grown."
            description="Internships, lab work, and leadership roles that shaped how I approach engineering."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 2) * 100}>
              <article className="group relative h-full bg-surface-elevated border border-border rounded-2xl overflow-hidden card-hover flex flex-col">
                <div className="relative aspect-[16/9] bg-gradient-to-br from-secondary to-surface border-b border-border grid place-items-center overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
                  {it.image ? (
                    <img src={it.image} alt={it.role} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="relative flex flex-col items-center gap-2 text-muted-foreground">
                      <ImageIcon className="w-8 h-8 opacity-50" />
                      <span className="text-mono text-[10px] uppercase tracking-widest opacity-60">
                        Image Placeholder
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[10px] text-mono px-2.5 py-1 bg-gradient-accent text-white rounded-md uppercase tracking-wider font-semibold">
                      {it.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="glass text-[10px] text-mono px-2.5 py-1 rounded-md text-muted-foreground">
                      {it.period}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl glass grid place-items-center group-hover:scale-110 transition-spring">
                    <it.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
                    {it.role}
                  </h3>
                  <div className="text-sm text-accent text-mono mt-1 mb-4">{it.org}</div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {it.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-[10px] text-mono text-muted-foreground uppercase tracking-widest mb-2">
                      Tools and Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {it.tools.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] text-mono bg-secondary/80 text-secondary-foreground rounded-md border border-border hover:border-accent/40 hover:text-accent transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="text-[10px] text-mono text-accent uppercase tracking-widest mb-1">
                      Impact and What I Learned
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed">{it.impact}</p>
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
