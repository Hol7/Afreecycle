import LottiePlayer from "@/components/LottiePlayer"
import impactAnimation from "@/public/lottie/ecology.json"
import ImpactItem from "../ImpactItem"


export default function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-green 
                 py-20 md:py-32 px-4 md:px-12"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className="bg-white rounded-3xl shadow-xl
                     p-8 md:p-16
                     grid grid-cols-1 md:grid-cols-2
                     gap-10 md:gap-16
                     items-center"
        >
          {/* Texte */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">
              Notre impact
            </h2>

            <p className="mt-4 md:mt-6 text-green-900/70 text-base md:text-lg">
              Nous réduisons les déchets, produisons de l’énergie verte
              et soutenons une économie circulaire locale.
            </p>

            <div
              className="mt-8 md:mt-10
                         grid grid-cols-2 sm:grid-cols-2
                         gap-4 md:gap-6"
            >
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
              className="
                w-[240px] h-[240px]
                md:w-[460px] md:h-[460px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
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
