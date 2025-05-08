import CardWithShadow from "@/components/ui/CardWithShadow";

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Criação de interfaces intuitivas e acessíveis com foco em usabilidade.",
      icon: "🎨",
    },
    {
      title: "Desenvolvimento Front-End",
      description: "Aplicações modernas com React.js, Next.js e TailwindCSS.",
      icon: "💻",
    },
    {
      title: "Performance & SEO",
      description:
        "Sites rápidos, bem indexados e otimizados para Core Web Vitals.",
      icon: "🚀",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-6">Serviços</h2>

      <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl">
        {services.map((service, index) => (
          <CardWithShadow
            key={index}
            className="flex flex-col items-center text-center gap-3 px-8 py-6"
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </CardWithShadow>
        ))}
      </div>
    </section>
  );
}
