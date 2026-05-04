import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" aria-hidden />

      <div className="container-custom relative grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6">
          <div className="fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated text-xs text-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for Internship & Entry-Level Roles
          </div>

          <h1 className="fade-in fade-in-delay-1 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Dava Rizky <br />
            <span className="text-muted-foreground">Pratama</span>
          </h1>

          <div className="fade-in fade-in-delay-2 flex items-center gap-3 text-mono text-sm text-muted-foreground">
            <span className="h-px w-8 bg-foreground/40" />
            Industrial Automation Engineer / Student
          </div>

          <p className="fade-in fade-in-delay-3 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Sixth-semester Automation Engineering student at Diponegoro University.
            Hands-on experience in PLC programming, SCADA, and instrumentation
            maintenance from internships at Pertamina RU VI and Semen Bima.
          </p>

          <div className="fade-in fade-in-delay-4 flex flex-wrap gap-3 pt-2">
            <Button size="lg" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/cv.pdf" download>
                <Download className="mr-2 w-4 h-4" /> Download CV
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="#contact">
                <Mail className="mr-2 w-4 h-4" /> Contact Me
              </a>
            </Button>
          </div>

          <div className="fade-in fade-in-delay-4 grid grid-cols-3 gap-6 pt-8 max-w-md">
            {[
              { v: "3.89", l: "GPA / 4.00" },
              { v: "2", l: "Internships" },
              { v: "5+", l: "Projects" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-bold text-mono">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 fade-in fade-in-delay-2">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-2xl rounded-full" aria-hidden />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-elevated bg-surface">
              <img
                src={profile}
                alt="Portrait of Dava Rizky Pratama"
                className="w-full h-full object-cover"
                width={768}
                height={960}
              />
              <div className="absolute bottom-3 left-3 right-3 bg-background/80 backdrop-blur-md border border-border rounded-lg p-3 text-mono text-[11px] text-muted-foreground flex items-center justify-between">
                <span>● STATUS: ACTIVE</span>
                <span>UNDIP / D4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
