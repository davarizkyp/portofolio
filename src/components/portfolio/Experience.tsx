import { Briefcase, Users, FlaskConical, ImageIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Item = {
  type: string;
  icon: typeof Briefcase;
  period: string;
  role: string;
  org: string;
  paragraph: string;
  image?: string;
};

const items: Item[] = [
  {
    type: "Internship",
    icon: Briefcase,
    period: "Jan 2026 to Feb 2026",
    role: "Maintenance Execution, Instrument Maintenance Area 1",
    org: "PT. Kilang Pertamina Internasional RU VI, Indramayu",
    paragraph:
      "During this internship I supported the installation of orifice and flow transmitters for the Slop Oil Mass Balance project. My work covered Management of Change documentation, P&ID analysis, sizing calculations, DCS hook ups, and loop drawings, and I helped resolve discrepancies between field readings and DCS values through gain and bias adjustments. Working with P&ID, DCS, flow transmitters, and calibration tools, I learned how an instrumentation project moves from paperwork into a fully calibrated and live control loop in a refinery environment.",
  },
  {
    type: "Lab Assistant",
    icon: FlaskConical,
    period: "Feb 2026 to Present",
    role: "Industrial Instrumentation & Process Control Lab Assistant",
    org: "Diponegoro University, Semarang",
    paragraph:
      "As a laboratory assistant, I guide students through LabVIEW and Arduino based data acquisition systems and PLC programming on the Festo MPS Separating Station using CODESYS. By preparing modules and explaining control concepts in practical sessions, I have strengthened my own grasp of PLC logic, sensor integration, and HMI development, while also building communication and mentoring skills that translate well into engineering teamwork.",
  },
  {
    type: "Internship",
    icon: Briefcase,
    period: "Jul 2025 to Aug 2025",
    role: "Electrical Department, Instrumentation Division",
    org: "PT. Sinar Tambang Arthalestari (Semen Bima), Banyumas",
    paragraph:
      "I performed PDCA cycle inspections, instrumentation maintenance on plant machinery, and PLC troubleshooting along the cement production line. Working with PLCs, field instruments, and standard maintenance procedures, I gained a first close up understanding of how automation and instrumentation work together to keep a continuous process plant running reliably across shifts.",
  },
  {
    type: "Organization",
    icon: Users,
    period: "Apr 2025 to Present",
    role: "Head of Sports Division, HIMATRO",
    org: "Automation Engineering Student Association",
    paragraph:
      "I lead the Automation Futsal Cup, a tournament involving 24 schools, and supervise eight staff members responsible for executing the division's work programs. Through coordination tools, scheduling, and team meetings, I have developed leadership, planning, and decision making skills that complement my technical background as an engineering student.",
  },
  {
    type: "Organization",
    icon: Users,
    period: "Feb 2025 to Present",
    role: "Head of External Diplomacy, IWAKMAS UNDIP",
    org: "Banyumas Student Regional Organization",
    paragraph:
      "In this role I build partnerships with external student organizations and led a Mangrove Planting project that mobilized more than one hundred volunteers in Semarang. The experience sharpened my cross team communication, stakeholder management, and ability to deliver collaborative projects from initial planning through execution.",
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

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {it.paragraph}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
