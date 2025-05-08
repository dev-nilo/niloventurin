export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-6">Contato</h2>
      <p className="mb-8 text-lg max-w-xl text-muted-foreground">
        Entre em contato comigo para discutir projetos, ideias ou apenas dizer
        oi!
      </p>
      <a
        href="mailto:seuemail@example.com"
        className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
      >
        Enviar E-mail
      </a>
    </section>
  );
}
