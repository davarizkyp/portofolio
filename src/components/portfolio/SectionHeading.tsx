export const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <div className="max-w-2xl mb-12 md:mb-16">
    <div className="flex items-center gap-3 text-mono text-xs text-accent uppercase tracking-widest mb-4">
      <span className="h-px w-8 bg-accent" />
      {eyebrow}
    </div>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-lg">{description}</p>
    )}
  </div>
);
