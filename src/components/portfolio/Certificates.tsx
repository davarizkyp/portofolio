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
    <section id="certificates" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25" aria-hidden />
      <div className="container-custom relative">
        <Reveal>
          <SectionHeading
            eyebrow="05 / Certificates"
            title="Training & continuous learning."
            description="Selected coursework and professional development. Replace with your actual certificate scans."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="group bg-surface-elevated border border-border rounded-2xl p-5 card-hover">
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-surface rounded-xl mb-4 grid place-items-center border border-dashed border-border relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
                  <Award className="relative w-12 h-12 text-accent/60 group-hover:text-accent group-hover:scale-110 transition-all duration-500" />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold leading-snug text-sm">{c.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 text-mono">{c.issuer}</p>
                  </div>
                  <span className="text-[10px] text-mono text-accent bg-accent/10 px-2 py-0.5 rounded">{c.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
