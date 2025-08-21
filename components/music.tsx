"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Music() {
  const [playingAlbum, setPlayingAlbum] = useState<number | null>(null)
  const [playingTrack, setPlayingTrack] = useState<number | null>(null)
  const [showNotification, setShowNotification] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlay = (type: "album" | "track", index: number) => {
    if (audioRef.current) {
      audioRef.current.pause()
    }

    let audioSrc = ""

    if (type === "album") {
      const albumAudioFiles = [
        "/audio/latest-ep-preview.mp3", // Latest EP
        "/audio/breakthrough-single.mp3", // Breakthrough Single
        "/audio/debut-mixtape-preview.mp3", // Debut Mixtape
      ]
      audioSrc = albumAudioFiles[index]
    } else {
      const trackAudioFiles = [
        "/audio/fire-bars.mp3", // Fire Bars
        "/audio/city-dreams.mp3", // City Dreams
        "/audio/real-talk.mp3", // Real Talk
        "/audio/midnight-vibes.mp3", // Midnight Vibes
      ]
      audioSrc = trackAudioFiles[index]
    }

    // Create new audio element with actual music file
    audioRef.current = new Audio(audioSrc)

    if (type === "album") {
      setPlayingAlbum(playingAlbum === index ? null : index)
      setPlayingTrack(null)
    } else {
      setPlayingTrack(playingTrack === index ? null : index)
      setPlayingAlbum(null)
    }

    if ((type === "album" && playingAlbum !== index) || (type === "track" && playingTrack !== index)) {
      audioRef.current.play().catch(() => {
        // Fallback if no audio file - just show notification after delay
        setTimeout(() => {
          setShowNotification(true)
          setTimeout(() => setShowNotification(false), 4000)
        }, 3000)
      })

      // Show notification after 10 seconds of playing
      setTimeout(() => {
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 4000)
        if (audioRef.current) {
          audioRef.current.pause()
        }
        setPlayingAlbum(null)
        setPlayingTrack(null)
      }, 10000)
    }
  }

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const albums = [
    {
      title: "Latest EP",
      year: "2024",
      tracks: 6,
      image: "/placeholder-s8wg4.png",
      description: "A collection of powerful tracks showcasing lyrical prowess and innovative beats.",
    },
    {
      title: "Breakthrough Single",
      year: "2023",
      tracks: 1,
      image: "/placeholder-d6e6o.png",
      description: "The hit single that put this artist on the map with over 500K streams.",
    },
    {
      title: "Debut Mixtape",
      year: "2023",
      tracks: 12,
      image: "/placeholder-d6e6o.png",
      description: "Raw talent and authentic storytelling in this impressive debut collection.",
    },
  ]

  const featuredTracks = [
    { title: "Fire Bars", duration: "3:24", plays: "250K" },
    { title: "City Dreams", duration: "4:12", plays: "180K" },
    { title: "Real Talk", duration: "3:45", plays: "320K" },
    { title: "Midnight Vibes", duration: "4:01", plays: "150K" },
  ]

  return (
    <section id="music" className="py-20 px-4 bg-black border-b-2 border-white/20 relative overflow-hidden">
      {/* Background Image with Glass Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/gojo.jpg')",//add your background image here
        }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content with enhanced glass effect */}
      <div className="relative z-10">
        <AnimatePresence>
          {showNotification && (
            <motion.div
              className="fixed top-20 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-semibold">🎵 Want to hear the full song?</p>
              <p className="text-sm mt-1">Visit Spotify to listen to the complete track!</p>
            </motion.div>
          )}
        </AnimatePresence>

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

          {/* Albums Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {albums.map((album, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-white/20 hover:border-red-500/40 bg-black/30 backdrop-blur-md">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={album.image || "/placeholder.svg"}
                        alt={album.title}
                        className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <motion.div initial={{ scale: 0.8 }} whileHover={{ scale: 1 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            size="lg"
                            className="bg-red-500 hover:bg-red-600"
                            onClick={() => handlePlay("album", index)}
                          >
                            {playingAlbum === index ? (
                              <Pause className="w-5 h-5 mr-2" />
                            ) : (
                              <Play className="w-5 h-5 mr-2" />
                            )}
                            {playingAlbum === index ? "Pause" : "Play"}
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">{album.title}</h3>
                        <span className="text-sm text-white/60">{album.year}</span>
                      </div>
                      <p className="text-sm text-white/60 mb-3">{album.tracks} tracks</p>
                      <p className="text-sm text-white/80 leading-relaxed">{album.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Tracks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/30 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Featured Tracks</h3>
                <div className="space-y-4">
                  {featuredTracks.map((track, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white"
                            onClick={() => handlePlay("track", index)}
                          >
                            {playingTrack === index ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                          </Button>
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-white">{track.title}</h4>
                          <p className="text-sm text-white/60">{track.plays} plays</p>
                        </div>
                      </div>
                      <div className="text-sm text-white/60">{track.duration}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
