'use client'
import { motion } from "framer-motion";
import LottiePlayer from "@/components/LottiePlayer"
import impactAnimation from "@/public/lottie/SaveEnergy.json"

export default function Hero() {
  return (
    <section className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-sora text-5xl leading-tight mb-6">
            Transformer les déchets organiques en énergie propre et en engrais
            durables.
          </h1>

          <p className="text-lg mb-8">
            AfreeCycle développe des solutions locales de valorisation des
            déchets pour produire électricité, gaz vert et fertilisants
            écologiques.
          </p>

          <div className="flex gap-4">
            <button className="bg-green text-white px-6 py-3 rounded-2xl  cursor-pointer hover:shadow duration-300 ease-in ...">
            
               <a href="#solutions">Découvrir nos solutions</a>
            </button>
            <button className="border border-green text-green px-6 py-3 rounded-2xl">
                <a href="#contact">   Nous contacter</a>
           
            </button>
          </div>
        </motion.div>

        <div className="h-[420px] rounded-2xl  flex items-center justify-center">
          {/* visuel animé à venir */}
            {/* Lottie */}
        <div className="grid justify-center text-center">
          <LottiePlayer
            animationData={impactAnimation}
            className="sm: md:w-[720px] md:h-[720px]"
          />
        <span className="sm:hidden flex  text-center text-green  font-semibold">Cycle Énergie 🌱⚡</span>
        </div>
        
        </div>
      </div>
    </section>
  );
}