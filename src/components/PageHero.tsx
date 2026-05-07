type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#101010] to-black" />
      <div className="absolute right-[-160px] top-20 h-[380px] w-[380px] rounded-full bg-[var(--gold)]/10 blur-3xl" />

      <div className="container relative z-10">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="max-w-4xl">{title}</h1>
        <div className="gold-line" />
        <p className="mt-6 max-w-2xl text-lg">{description}</p>
      </div>
    </section>
  );
}