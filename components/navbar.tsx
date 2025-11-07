"use client"

import React, { useEffect, useRef, useState } from "react"
import { Menu, X, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create and configure audio element
    audioRef.current = new Audio('/FunFact.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.5 // Set volume to 50%
    
    // Function to start playing
    const startPlaying = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play()
          setIsMusicPlaying(true)
        }
      } catch (error: unknown) {
        console.warn('Autoplay prevented:', error instanceof Error ? error.message : 'User interaction needed')
      }
    }

    // Try to play immediately
    startPlaying()

    // Add event listeners for visibility change and user interaction
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && !isMusicPlaying) {
        startPlaying()
      }
    }

    const handleUserInteraction = () => {
      if (!isMusicPlaying) {
        startPlaying()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    document.addEventListener('click', handleUserInteraction, { once: true })
    document.addEventListener('touchstart', handleUserInteraction, { once: true })
    document.addEventListener('keydown', handleUserInteraction, { once: true })
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsMusicPlaying(!isMusicPlaying)
    }
  }

  // map nav items to preferred section ids (you can change these if your HTML uses different ids)
  const sectionMap: Record<string, string> = {
    Home: "hero",
    "About Me": "about",
    Music: "music",
    Connect: "connect", // if your section is "connect", change this to "connect"
  }
  const navItems = ["Home", "About Me", "Music", "Connect"]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const findElementByManyIds = (idCandidate: string) => {
    const candidates = new Set<string>()

    // add original candidate
    if (idCandidate) candidates.add(idCandidate)

    // reasonable variations
    const lower = idCandidate.toLowerCase()
    candidates.add(lower)
    candidates.add(lower.replace(/\s+/g, "-")) // kebab
    candidates.add(lower.replace(/\s+/g, "")) // nospace
    candidates.add(lower.replace(/\s+/g, "_")) // underscore

    // handle common synonyms
    if (lower === "connect") candidates.add("contact")

    // try all candidate ids
    for (const id of candidates) {
      const elById = document.getElementById(id)
      if (elById) return elById
    }

    // fallback: try data-section attributes (useful if you prefer data attributes)
    for (const id of candidates) {
      const elByData = document.querySelector<HTMLElement>(`[data-section="${id}"]`)
      if (elByData) return elByData
    }

    return null
  }

  const scrollToSection = (sectionId: string) => {
    if (!sectionId) return

    const element = findElementByManyIds(sectionId)
    if (!element) {
      console.warn(`[Navbar] couldn't find section for "${sectionId}". Tried variants. Make sure an element has id="${sectionId}" or data-section="${sectionId}" (or a kebab/no-space variant).`)
      return
    }

    // calculate top position accounting for fixed navbar height
    const navHeight = navRef.current?.offsetHeight ?? 64
    const targetTop = element.getBoundingClientRect().top + window.pageYOffset - navHeight - 8 // small buffer

    // On mobile, close the menu first then scroll (small timeout to allow overlay to disappear)
    if (window.innerWidth < 768) {
      setIsOpen(false)
      // short delay to allow mobile menu to close and avoid overlay blocking the scroll
      setTimeout(() => {
        window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" })
      }, 60)
    } else {
      window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      ref={navRef as any}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/20 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <motion.button
              type="button"
              onClick={() => scrollToSection(sectionMap["Home"])}
              className="text-white font-black text-2xl tracking-wider hover:text-red-500 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to home"
            >
              BOI RK
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  type="button"
                  onClick={() => scrollToSection(sectionMap[item])}
                  className="text-white hover:text-red-500 px-3 py-2 text-base font-medium transition-all duration-300 relative group hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Music Control Button */}
            <motion.div className="ml-8" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                size="icon"
                variant="outline"
                className="w-10 h-10 rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-black/70"
                onClick={toggleMusic}
              >
                {isMusicPlaying ? (
                  <Volume2 className="h-4 w-4 text-white" />
                ) : (
                  <VolumeX className="h-4 w-4 text-white" />
                )}
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen((s) => !s)}
                className="text-white hover:text-red-500 hover:bg-white/10"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2 border border-white/10">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item}
                    type="button"
                    onClick={() => scrollToSection(sectionMap[item])}
                    className="text-white hover:text-red-500 block px-3 py-2 text-lg font-medium w-full text-left transition-all duration-300 relative hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] after:content-[''] after:absolute after:bottom-0 after:left-3 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-[calc(100%-24px)]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                ))}
                
                {/* Music Control Button (Mobile) */}
                <motion.div
                  className="px-3 py-4 flex justify-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      size="icon"
                      variant="outline"
                      className="w-12 h-12 rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-black/70"
                      onClick={toggleMusic}
                    >
                      {isMusicPlaying ? (
                        <Volume2 className="h-5 w-5 text-white" />
                      ) : (
                        <VolumeX className="h-5 w-5 text-white" />
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
