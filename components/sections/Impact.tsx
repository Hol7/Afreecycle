import LottiePlayer from "@/components/LottiePlayer"
import impactAnimation from "@/public/lottie/ecology.json"
import ImpactItem from "../ImpactItem"


export default function ImpactSection() {
  return (
    <section className="relative py-32 overflow-hidden  bg-green p-24">

      {/* Fond vert découpé */}
      {/* <div className="absolute inset-0 bg-[var(--green)] rounded-[100px]" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center shadow-xl">

          {/* Texte */}
          <div>
            <h2 className="text-4xl font-bold text-green-900">
              Notre impact
            </h2>

            <p className="mt-6 text-green-900/70 text-lg">
              Nous réduisons les déchets, produisons de l’énergie verte
              et soutenons une économie circulaire locale.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <ImpactItem label="Déchets recyclés" value="120T+" />
              <ImpactItem label="Énergie produite" value="45 MWh" />
              <ImpactItem label="Emplois créés" value="80+" />
              <ImpactItem label="CO₂ évité" value="480T" />
            </div>
          </div>

          {/* Lottie */}
          <div className="flex justify-center">
            <LottiePlayer
              animationData={impactAnimation}
              className="w-[360px] h-[360px]"
            />
          </div>

        </div>
      </div>
    </section>
  )
}



// import Container from "@/components/ui/Container";

// const stats = [
//   { value: "60%", label: "Déchets organiques valorisés" },
//   { value: "24/7", label: "Production d’énergie verte" },
//   { value: "100%", label: "Engrais naturels" },
//   { value: "Local", label: "Impact économique" },
// ];

// export default function Impact() {
//   return (
//     <section
//       id="impact"
//       className="py-32 bg-green text-white"
//     >
//       <Container>
//         <h2 className="font-sora text-4xl mb-16">
//           Notre impact
//         </h2>

//         <div className="grid md:grid-cols-4 gap-12">
//           {stats.map((stat) => (
//             <div key={stat.label}>
//               <div className="font-sora text-5xl text-energySoft mb-4">
//                 {stat.value}
//               </div>
//               <p className="opacity-90">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
