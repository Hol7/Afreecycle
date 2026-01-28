"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import Container from "@/components/ui/Container";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget; // 👈 capture AVANT async
  setLoading(true);

  const formData = new FormData(form);

  const payload = {
    nom: formData.get("nom"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Erreur lors de l’envoi");
    }

    toast.success("Message envoyé avec succès 🌱");
    form.reset(); // ✅ plus d’erreur
  } catch (err: any) {
    toast.error(err.message || "Une erreur est survenue");
  } finally {
    setLoading(false);
  }
}


  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   setLoading(true);

  //   const formData = new FormData(e.currentTarget);

  //   const payload = {
  //     nom: formData.get("nom"),
  //     email: formData.get("email"),
  //     message: formData.get("message"),
  //   };

  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(payload),
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       throw new Error(data.error || "Erreur lors de l’envoi");
  //     }

  //     toast.success("Message envoyé avec succès 🌱");
  //     e.currentTarget.reset();
  //   } catch (err: any) {
  //     toast.error(err.message || "Une erreur est survenue");
  //   } finally {
  //     setLoading(false);
  //   }
  // }

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

          <form onSubmit={handleSubmit} className="grid gap-6">
            <input
              name="nom"
              required
              placeholder="Nom complet"
              className="border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green]"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Adresse email"
              className="border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green]"
            />

            <textarea
              name="message"
              required
              placeholder="Votre message"
              rows={4}
              className="border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green]"
            />

            <button type="submit"  disabled={loading} className="bg-energy text-white hover:shadow-lg hover:-translate-y-0.5 px-6 py-3 rounded-2xl transition-all duration-300 cursor-pointer" >
              {loading ? "Envoi..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}



// import Container from "@/components/ui/Container";
// import Button from "@/components/ui/Button";

// export default function Contact() {
//   return (
//     <section id="contact" className="py-32 bg-white">
//       <Container>
//         <div className="max-w-2xl">
//           <h2 className="font-sora text-4xl mb-6">
//             Travaillons ensemble
//           </h2>

//           <p className="mb-10 opacity-80">
//             Vous êtes une collectivité, une entreprise ou un partenaire
//             intéressé par les solutions AfreeCycle ? Contactez-nous.
//           </p>

//           <form className="grid gap-6">
//             <input
//               placeholder="Nom complet"
//               className="border rounded-xl px-5 py-4"
//             />
//             <input
//               type="email"
//               placeholder="Adresse email"
//               className="border rounded-xl px-5 py-4"
//             />
//             <textarea
//               placeholder="Votre message"
//               rows={4}
//               className="border rounded-xl px-5 py-4"
//             />
//             <Button>Envoyer le message</Button>
//           </form>
//         </div>
//       </Container>
//     </section>
//   );
// }
