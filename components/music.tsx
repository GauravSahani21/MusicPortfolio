"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Play, Pause, Clock, Music2 } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { SubscriptionPopup } from "@/components/subscription-popup"

export function Music() {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null)
  const [playingAlbum, setPlayingAlbum] = useState<number | null>(null)
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const albums = [
    {
      title: "Street Dreams",
      image: "/hip-hop-street-dreams-album-cover.png",
      year: "2024",
      tracks: 12,
      description: "A journey through urban soundscapes and raw emotions."
    },
    {
      title: "Mixtape Vol. 1",
      image: "/graffiti-mixtape-cover.png",
      year: "2023",
      tracks: 8,
      description: "Collection of freestyle sessions and collaborations."
    },
    {
      title: "Neon Nights",
      image: "/neon-nights-album-cover.png",
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

  // Cleanup function for audio and timer
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [])

  const stopCurrentPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current = null
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  const handlePlay = (type: 'album' | 'track', index: number) => {
    // If clicking the same item that's playing, stop it
    if ((type === 'album' && playingAlbum === index) || (type === 'track' && playingTrack === index)) {
      stopCurrentPlayback()
      setPlayingAlbum(null)
      setPlayingTrack(null)
      return
    }

    // Stop any current playback
    stopCurrentPlayback()

    // Update playing state
    if (type === 'album') {
      setPlayingAlbum(index)
      setPlayingTrack(null)
    } else {
      setPlayingTrack(index)
      setPlayingAlbum(null)
    }

    // Create audio element with actual FunFact.mp3 file
    audioRef.current = new Audio('/FunFact.mp3')
    audioRef.current.volume = 0.5

    // Play the audio
    audioRef.current.play().catch((error) => {
      console.error('Audio playback failed:', error)
    })

    // Set timer for 10 seconds to show subscription popup
    timerRef.current = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
      setShowSubscriptionPopup(true)
      setPlayingAlbum(null)
      setPlayingTrack(null)
    }, 10000) // 10 seconds
  }

  const handleClosePopup = () => {
    setShowSubscriptionPopup(false)
  }
  return (
    <section id="music" className="py-20 px-4 bg-black border-b-2 border-white/20 relative overflow-hidden">
      {/* Background Image - optimized for performance */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/rohit.png')",
          willChange: 'transform',
        }}
      />
      <div className="absolute inset-0 bg-black/80" />

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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Music</h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
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
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Featured Tracks</h3>
            <Card className="bg-black/40 border-white/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {featuredTracks.map((track, idx) => (
                    <motion.div
                      key={track.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 md:p-4 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-6">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white"
                          onClick={() => handlePlay('track', idx)}
                        >
                          {playingTrack === idx ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5" />
                          )}
                        </Button>
                        <div>
                          <h4 className="font-semibold text-white text-sm md:text-base">{track.title}</h4>
                          <p className="text-xs md:text-sm text-white/60">{track.album}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-4 text-white/60">
                        <span className="text-xs md:text-sm">{track.plays} plays</span>
                        <span className="text-xs md:text-sm">{track.duration}</span>
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
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Albums</h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {albums.map((album, idx) => (
                <motion.div
                  key={album.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-white/20 hover:border-red-500/40 bg-black/40 overflow-hidden" style={{ willChange: 'transform' }}>
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={album.image}
                          alt={album.title}
                          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <Button
                            size="lg"
                            className="bg-red-500 hover:bg-red-600 text-white shadow-lg transform group-hover:scale-105 transition-transform"
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
                                Play Album
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
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            <Card className="bg-black/40 border-white/20">
              <CardContent className="p-6 text-center">
                <Music2 className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="text-2xl md:text-3xl font-bold text-white">30+</h4>
                <p className="text-xs md:text-sm text-white/60">Tracks Released</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardContent className="p-6 text-center">
                <Play className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="text-2xl md:text-3xl font-bold text-white">1M+</h4>
                <p className="text-xs md:text-sm text-white/60">Total Plays</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="text-2xl md:text-3xl font-bold text-white">2+</h4>
                <p className="text-xs md:text-sm text-white/60">Years Active</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20">
              <CardContent className="p-6 text-center">
                <Music2 className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="text-2xl md:text-3xl font-bold text-white">3</h4>
                <p className="text-xs md:text-sm text-white/60">Albums</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Subscription Popup */}
      <SubscriptionPopup isOpen={showSubscriptionPopup} onClose={handleClosePopup} />
    </section>
  )
}
