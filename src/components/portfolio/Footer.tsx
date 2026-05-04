export const Footer = () => (
  <footer className="border-t border-border py-8 bg-surface">
    <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="text-mono">
        © {new Date().getFullYear()} Dava Rizky Pratama. All rights reserved.
      </div>
      <div className="text-mono text-xs">
        Built with precision · Industrial Automation Portfolio
      </div>
    </div>
  </footer>
);
