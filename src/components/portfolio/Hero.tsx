import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-hero"
    >
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
          <div className="fade-in fade-in-delay-1 space-y-2">
            <div className="flex items-center gap-3 text-mono text-xs text-accent uppercase tracking-[0.25em]">
              <span className="h-px w-10 bg-accent" />
              Hello, I'm
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95]">
              <span className="text-gradient">Dava Rizky</span>
              <br />
              <span className="shimmer-text">Pratama</span>
            </h1>
          </div>

          <h2 className="fade-in fade-in-delay-2 font-display text-xl md:text-2xl text-muted-foreground">
            Aspiring{" "}
            <span className="text-foreground font-semibold">
              Industrial Automation Engineer
            </span>
          </h2>

          <p className="fade-in fade-in-delay-3 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Automation engineering student with hands-on experience in industrial instrumentation, control systems, and plant maintenance. Experienced in working with PLC, SCADA, and field instruments through internships and laboratory practice, with a strong focus on applying engineering concepts into real industrial systems.
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
        </div>

        <div className="md:col-span-2 fade-in fade-in-delay-2">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-6 bg-gradient-accent opacity-20 blur-3xl rounded-full" aria-hidden />
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent/40 via-transparent to-[hsl(var(--accent-warm)/0.4)]" aria-hidden />

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-elevated bg-surface">
              <img
                src="/home.JPG"
                alt="Home section illustration"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
