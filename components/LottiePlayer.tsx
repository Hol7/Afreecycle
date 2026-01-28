"use client"

import Lottie from "lottie-react"

type Props = {
  animationData: any
  className?: string
}

export default function LottiePlayer({
  animationData,
  className,
}: Props) {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={className}
    />
  )
}
