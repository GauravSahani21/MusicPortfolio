"use client"

import { Button } from "@/components/ui/button"
import { Play, Music2 } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToMusic = () => {
    const musicSection = document.getElementById("music")
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  const scrollToConect = () => {
    const connectSection = document.getElementById("connect")
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden border-b-2 border-white/20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/_DSC3695 (1).JPG')",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Background Pattern - kept for additional visual depth */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Artist Name */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Music2 className="w-16 h-16 mx-auto mb-4 text-red-500" />
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">BOI &nbsp;R K</h1>
          <p className="text-xl md:text-2xl text-white font-medium">Singer • Rapper • Producer</p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90" onClick={scrollToMusic}>
            <Play className="w-5 h-5 mr-2" />
            Listen Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black bg-transparent" onClick={scrollToConect}
          >
            Follow Me
          </Button>
        </motion.div>

        {/* Streaming Stats */}
        <motion.div
          className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1M+</div>
            <div className="text-sm text-white/80">Streams</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50K+</div>
            <div className="text-sm text-white/80">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">25+</div>
            <div className="text-sm text-white/80">Tracks</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
