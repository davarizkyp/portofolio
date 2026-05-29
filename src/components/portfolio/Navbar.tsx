import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2.5 font-display font-bold tracking-tight group" aria-label="Home">
          <span className="sr-only">Home</span>
        </a>

        <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button size="sm" asChild className="bg-gradient-accent border-0 hover:opacity-90 shadow-glow">
            <a href="/CV%20Dava%20Rizky%20Pratama_Universitas%20Diponegoro.pdf" download>Download CV</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container-custom py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-2 text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button size="sm" asChild className="bg-gradient-accent border-0">
              <a href="/CV%20Dava%20Rizky%20Pratama_Universitas%20Diponegoro.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
