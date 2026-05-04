export const Footer = () => (
  <footer className="border-t border-border py-10 bg-surface relative overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
    <div className="container-custom relative flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="text-mono text-xs">
        © {new Date().getFullYear()} Dava Rizky Pratama
      </div>
      <div className="text-mono text-[11px] uppercase tracking-widest flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        Built with precision · Automation Portfolio
      </div>
    </div>
  </footer>
);
