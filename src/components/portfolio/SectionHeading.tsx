export const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <div className="max-w-2xl mb-14 md:mb-20">
    <div className="inline-flex items-center gap-3 text-mono text-xs text-accent uppercase tracking-[0.25em] mb-5 px-3 py-1.5 rounded-full glass">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      {eyebrow}
    </div>
    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
      <span className="text-gradient">{title}</span>
    </h2>
    {description && (
      <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{description}</p>
    )}
  </div>
);
