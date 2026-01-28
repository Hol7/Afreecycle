const items = [
  {
    title: "Tri & Traitement",
    desc: "Collecte et valorisation des déchets organiques.",
  },
  {
    title: "Cogénération",
    desc: "Production d’électricité, gaz vert et chaleur.",
  },
  {
    title: "Engrais organiques",
    desc: "Fertilisation durable pour l’agriculture locale.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-sora text-4xl mb-16">Nos solutions</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl border hover:shadow-lg transition"
            >
              <h3 className="font-sora text-xl mb-4">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
