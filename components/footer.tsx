import { Music2, Mail, Instagram, Play, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-white/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo and Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Music2 className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold text-white">BOI&nbsp; RK</span>
            </div>
            <p className="text-white/60 max-w-xs text-sm">
              Creating unique sounds and unforgettable musical experiences.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <a href="mailto:contact@boirk.com" className="text-white/80 hover:text-red-500 transition-colors text-sm flex items-center gap-2">
              <Mail className="w-4 h-4" />
              contact@boirk.com
            </a>
            <a href="tel:+1234567890" className="text-white/80 hover:text-red-500 transition-colors text-sm flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
            <div className="text-white/80 text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Mumbai, India
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold mb-2">Follow</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/boirk" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://open.spotify.com/artist/boirk" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-red-500 transition-colors">
                <Music2 className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@boirk" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-red-500 transition-colors">
                <Play className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Streaming Platforms */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold mb-2">Listen On</h3>
            <div className="flex flex-col gap-2">
              <a href="https://open.spotify.com/artist/boirk" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-red-500 transition-colors text-sm">
                Spotify
              </a>
              <a href="https://music.apple.com/artist/boirk" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-red-500 transition-colors text-sm">
                Apple Music
              </a>
              <a href="https://music.youtube.com/channel/boirk" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-red-500 transition-colors text-sm">
                YouTube Music
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm ">
            © 2024 BOI RK. All rights reserved. | Designed with passion for music.
          </p>
        </div>
      </div>
    </footer>
  )
}
