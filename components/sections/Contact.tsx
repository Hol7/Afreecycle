import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-sora text-4xl mb-6">
            Travaillons ensemble
          </h2>

          <p className="mb-10 opacity-80">
            Vous êtes une collectivité, une entreprise ou un partenaire
            intéressé par les solutions AfreeCycle ? Contactez-nous.
          </p>

          <form className="grid gap-6">
            <input
              placeholder="Nom complet"
              className="border rounded-xl px-5 py-4"
            />
            <input
              type="email"
              placeholder="Adresse email"
              className="border rounded-xl px-5 py-4"
            />
            <textarea
              placeholder="Votre message"
              rows={4}
              className="border rounded-xl px-5 py-4"
            />
            <Button>Envoyer le message</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
