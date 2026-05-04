import { GraduationCap, Target, User } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-custom">
        <Reveal>
          <SectionHeading
            eyebrow="01 / About"
            title="Engineering with precision and purpose."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <Reveal>
            <div className="h-full bg-surface-elevated border border-border rounded-xl p-6 hover:shadow-elegant transition-smooth">
              <User className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Profile</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sixth-semester Automation Engineering student at Diponegoro University with strong interest in industrial automation, instrumentation, and control systems. Combines academic foundation with real plant experience.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full bg-surface-elevated border border-border rounded-xl p-6 hover:shadow-elegant transition-smooth">
              <GraduationCap className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Diponegoro University</strong>
                <br />
                Bachelor of Applied Engineering (D4) — Automation Engineering
                <br />
                <span className="text-mono text-xs">Aug 2023 – Present · GPA 3.89/4.00</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="h-full bg-surface-elevated border border-border rounded-xl p-6 hover:shadow-elegant transition-smooth">
              <Target className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Career Objective</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seeking opportunities to contribute to industrial automation projects — from PLC and SCADA development to instrumentation engineering — delivering reliable and efficient control solutions for the manufacturing and energy sectors.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
