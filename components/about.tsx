"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 relative bg-black border-b-2 border-white/20"
      style={{
        backgroundImage: "url('/confident-singer-rapper.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About the Artist</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover the story behind the music and the passion that drives every beat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Artist Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <img
                src="/confident-singer-rapper.JPG"
                alt="Artist Portrait"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">The Journey</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Born and raised with music in their soul, this artist has been crafting unique sounds that blend
                contemporary rap with soulful melodies. Their journey began in local venues and has evolved into a
                powerful voice in the music industry.
              </p>
              <p className="text-white/80 leading-relaxed">
                With influences ranging from classic hip-hop legends to modern R&B innovators, they create music that
                speaks to the heart while making you move to the beat.
              </p>
            </div>

            {/* Genres */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-3 text-white">Genres</h4>
              <div className="flex flex-wrap gap-2">
                {["Hip Hop", "R&B", "Pop Rap", "Soul"].map((genre, index) => (
                  <motion.div
                    key={genre}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/20">
                      {genre}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-black/30 backdrop-blur-md border-red-500/30">
                <h4 className="text-lg font-semibold mb-3 text-white">Recent Achievements</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Featured on Spotify's "New Music Friday"</li>
                  <li>• Performed at major music festivals</li>
                  <li>• Collaborated with renowned producers</li>
                  <li>• Growing fanbase across social platforms</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
