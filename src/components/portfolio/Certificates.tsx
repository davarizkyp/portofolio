import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const certs = [
  { name: "PLC Programming Fundamentals", issuer: "Training Course", year: "2025" },
  { name: "SCADA System Design", issuer: "Industrial Workshop", year: "2025" },
  { name: "LabVIEW Core Certification", issuer: "NI Academic", year: "2025" },
  { name: "Industrial Instrumentation", issuer: "Pertamina RU VI", year: "2026" },
  { name: "MATLAB Simulink for Control", issuer: "MathWorks", year: "2024" },
  { name: "Workplace Safety (K3)", issuer: "Semen Bima", year: "2025" },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="section-padding bg-surface">
      <div className="container-custom">
        <Reveal>
          <SectionHeading
            eyebrow="05 / Certificates"
            title="Training & professional development."
            description="Placeholder list — replace with your actual certificate scans/PDFs."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="group bg-surface-elevated border border-border rounded-xl p-5 hover:border-accent/40 transition-smooth">
                <div className="aspect-[4/3] bg-secondary rounded-md mb-4 grid place-items-center border border-dashed border-border">
                  <Award className="w-10 h-10 text-muted-foreground/50" />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-medium leading-snug text-sm">{c.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
                  </div>
                  <span className="text-[11px] text-mono text-muted-foreground">{c.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
