import Container from "@/components/ui/Container";

const steps = [
  {
    title: "Collecte",
    desc: "Récupération des déchets organiques auprès des ménages et industries.",
  },
  {
    title: "Transformation",
    desc: "Digestion et valorisation biologique contrôlée.",
  },
  {
    title: "Production",
    desc: "Génération de gaz vert, électricité et chaleur.",
  },
  {
    title: "Valorisation",
    desc: "Production d’engrais organiques durables.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-bg">
      <Container>
        <h2 className="font-sora text-4xl mb-20">
          Comment ça fonctionne
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <span className="text-energy font-sora text-3xl">
                0{i + 1}
              </span>
              <h3 className="font-sora text-xl mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-sm opacity-80">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
