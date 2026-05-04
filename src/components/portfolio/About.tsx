import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden />
      <div className="container-custom relative">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="From classroom to control room."
            description="A short look at how my path in automation engineering took shape, and where it's heading next."
          />
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-6 text-[15px] md:text-base text-muted-foreground leading-relaxed">
          <Reveal>
            <p>
              I am currently pursuing a Bachelor of Applied Engineering (D4)
              in Automation Engineering at Diponegoro University, a program
              focused on the practical side of industrial control and
              instrumentation.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Throughout my studies I have built a solid foundation in PLC
              programming, SCADA and HMI development, process control, and
              electrical engineering fundamentals. Most of this learning happens
              in laboratory sessions where I work directly with real hardware
              rather than only on paper.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              As a Lab Assistant for the Industrial Instrumentation and Process
              Control Laboratory, I guide fellow students through PLC
              programming on the Festo MPS Separating Station using CODESYS,
              and through LabVIEW based data acquisition systems with Arduino.
              Teaching these topics has reinforced my own understanding of
              control fundamentals and instrumentation workflows.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p>
              On the industrial side, my internships at PT. Kilang Pertamina
              Internasional RU VI Balongan and PT. Sinar Tambang Arthalestari
              (Semen Bima) gave me direct exposure to live plant systems,
              including instrumentation installation, calibration, DCS hook
              ups, PLC troubleshooting, and routine maintenance on production
              lines.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p>
              Today my focus is firmly on industrial automation. I want to keep
              bridging the gap between academic theory and field reality by
              designing and supporting control systems that run reliably in
              real industrial environments.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
