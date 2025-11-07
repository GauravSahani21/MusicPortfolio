"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Play, Pause, Clock, Music2 } from "lucide-react"
import { useState } from "react"

export function Music() {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null)
  const [playingAlbum, setPlayingAlbum] = useState<number | null>(null)

  const albums = [
    {
      title: "Street Dreams",
      image: "/FuN.jpeg",
      year: "2024",
      tracks: 12,
      description: "A journey through urban soundscapes and raw emotions."
    },
    {
      title: "Mixtape Vol. 1",
      image: "/FuN.jpeg",
      year: "2023",
      tracks: 8,
      description: "Collection of freestyle sessions and collaborations."
    },
    {
      title: "Neon Nights",
      image: "/FuN.jpeg",
      year: "2023",
      tracks: 10,
      description: "Electronic-infused hip-hop with atmospheric vibes."
    }
  ]

  const featuredTracks = [
    {
      title: "City Lights",
      duration: "3:45",
      plays: "120K",
      album: "Street Dreams",
      preview: "/tracks/preview1.mp3"
    },
    {
      title: "Midnight Flow",
      duration: "4:12",
      plays: "85K",
      album: "Neon Nights",
      preview: "/tracks/preview2.mp3"
    },
    {
      title: "Urban Poetry",
      duration: "3:28",
      plays: "95K",
      album: "Mixtape Vol. 1",
      preview: "/tracks/preview3.mp3"
    },
    {
      title: "Dreams & Reality",
      duration: "4:05",
      plays: "150K",
      album: "Street Dreams",
      preview: "/tracks/preview4.mp3"
    }
  ]

  const handlePlay = (type: 'album' | 'track', index: number) => {
    if (type === 'album') {
      setPlayingAlbum(playingAlbum === index ? null : index)
      setPlayingTrack(null)
    } else {
      setPlayingTrack(playingTrack === index ? null : index)
      setPlayingAlbum(null)
    }
  }
  return (
    <section id="music" className="py-20 px-4 bg-black border-b-2 border-white/20 relative overflow-hidden">
      {/* Background Image with Glass Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/rohit.png')",//add your background image here
        }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content with enhanced glass effect */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Music</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Explore the latest releases and fan favorites that define this unique sound.
            </p>
          </motion.div>

          {/* Featured Tracks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Featured Tracks</h3>
            <Card className="bg-black/30 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {featuredTracks.map((track, idx) => (
                    <motion.div
                      key={track.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-6">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white"
                          onClick={() => handlePlay('track', idx)}
                        >
                          {playingTrack === idx ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5" />
                          )}
                        </Button>
                        <div>
                          <h4 className="font-semibold text-white">{track.title}</h4>
                          <p className="text-sm text-white/60">{track.album}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-white/60">
                        <span className="text-sm">{track.plays} plays</span>
                        <span className="text-sm">{track.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Albums Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Albums</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {albums.map((album, idx) => (
                <motion.div
                  key={album.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-white/20 hover:border-red-500/40 bg-black/30 backdrop-blur-md overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={album.image}
                          alt={album.title}
                          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button
                            size="lg"
                            className="bg-red-500 hover:bg-red-600 text-white"
                            onClick={() => handlePlay('album', idx)}
                          >
                            {playingAlbum === idx ? (
                              <>
                                <Pause className="w-5 h-5 mr-2" />
                                Pause
                              </>
                            ) : (
                              <>
                                <Play className="w-5 h-5 mr-2" />
                                Play
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-bold text-white">{album.title}</h4>
                          <span className="text-sm text-white/60">{album.year}</span>
                        </div>
                        <p className="text-sm text-white/60 mb-2">{album.tracks} tracks</p>
                        <p className="text-sm text-white/80">{album.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <Card className="bg-black/30 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <Music2 className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="text-3xl font-bold text-white">30+</h4>
                <p className="text-sm text-white/60">Tracks Released</p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <Play className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="text-3xl font-bold text-white">1M+</h4>
                <p className="text-sm text-white/60">Total Plays</p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="text-3xl font-bold text-white">2+</h4>
                <p className="text-sm text-white/60">Years Active</p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <Music2 className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="text-3xl font-bold text-white">3</h4>
                <p className="text-sm text-white/60">Albums</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
