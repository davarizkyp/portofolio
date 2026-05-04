import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-hero"
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
      <div
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl animate-float"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.6), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--accent-warm) / 0.6), transparent 70%)" }}
        aria-hidden
      />

      <div className="container-custom relative grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-7">
          <div className="fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-mono text-muted-foreground">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-accent" />
            </span>
            Open to Internship & Entry-Level Roles
          </div>

          <div className="fade-in fade-in-delay-1 space-y-2">
            <div className="flex items-center gap-3 text-mono text-xs text-accent uppercase tracking-[0.25em]">
              <span className="h-px w-10 bg-accent" />
              Hello, I'm
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95]">
              <span className="text-gradient">Dava Rizky</span>
              <br />
              <span className="shimmer-text">Pratama.</span>
            </h1>
          </div>

          <h2 className="fade-in fade-in-delay-2 font-display text-xl md:text-2xl text-muted-foreground">
            Aspiring{" "}
            <span className="text-foreground font-semibold">
              Industrial Automation Engineer
            </span>
            <br className="hidden md:block" />
            building reliable control systems.
          </h2>

          <p className="fade-in fade-in-delay-3 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            I design and program PLC, SCADA, and instrumentation solutions —
            blending hands-on plant experience from{" "}
            <span className="text-foreground">Pertamina RU VI</span> and{" "}
            <span className="text-foreground">Semen Bima</span> with strong
            academic foundations in control systems engineering.
          </p>

          <div className="fade-in fade-in-delay-4 flex flex-wrap gap-3 pt-2">
            <Button size="lg" asChild className="group bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-glow border-0">
              <a href="#projects">
                Explore My Work
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-lift glass">
              <a href="/cv.pdf" download>
                <Download className="mr-1 w-4 h-4" /> Download CV
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="#contact">
                <Mail className="mr-1 w-4 h-4" /> Get in Touch
              </a>
            </Button>
          </div>

          <div className="fade-in fade-in-delay-5 flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              PLC · SCADA · HMI
            </div>
            <span className="opacity-30">|</span>
            <div>Instrumentation & Control</div>
            <span className="opacity-30">|</span>
            <div>UNDIP — Automation Engineering</div>
          </div>
        </div>

        <div className="md:col-span-2 fade-in fade-in-delay-2">
          <div className="relative max-w-sm mx-auto">
            {/* Glowing rings */}
            <div className="absolute -inset-6 bg-gradient-accent opacity-20 blur-3xl rounded-full" aria-hidden />
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent/40 via-transparent to-[hsl(var(--accent-warm)/0.4)]" aria-hidden />

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-elevated bg-surface">
              <img
                src={profile}
                alt="Portrait of Dava Rizky Pratama"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                width={768}
                height={960}
              />
              {/* Scan line effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-accent/10 to-transparent animate-scan" />
              </div>

              {/* Floating tag - top right */}
              <div className="absolute top-3 right-3 glass rounded-md px-2.5 py-1 text-mono text-[10px] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                ONLINE
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-3 left-3 right-3 glass rounded-lg p-3 text-mono text-[11px] text-muted-foreground">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-accent">▸ ROLE</span>
                  <span className="text-foreground">D4 / UNDIP</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent">▸ FOCUS</span>
                  <span className="text-foreground">Automation</span>
                </div>
              </div>
            </div>

            {/* Floating accent badges */}
            <div className="absolute -left-4 top-1/4 glass rounded-lg px-3 py-2 text-mono text-[11px] animate-float shadow-elegant">
              <div className="text-accent">PLC</div>
              <div className="text-muted-foreground">CODESYS</div>
            </div>
            <div className="absolute -right-4 bottom-1/4 glass rounded-lg px-3 py-2 text-mono text-[11px] animate-float shadow-elegant" style={{ animationDelay: '1.5s' }}>
              <div className="text-[hsl(var(--accent-warm))]">SCADA</div>
              <div className="text-muted-foreground">LabVIEW</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-mono text-[10px] text-muted-foreground tracking-widest flex flex-col items-center gap-2 fade-in fade-in-delay-5">
        <span>SCROLL</span>
        <span className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
};
