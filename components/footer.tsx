import { Music2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-white/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Music2 className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold text-white">BOI&nbsp; RK</span>
          </div>



          {/* Streaming Platforms */}
          <div className="flex gap-4">
            <a href="#" className="text-white/80 hover:text-red-500 transition-colors text-sm">
              Spotify
            </a>
            <a href="#" className="text-white/80 hover:text-red-500 transition-colors text-sm">
              Apple Music
            </a>
            <a href="#" className="text-white/80 hover:text-red-500 transition-colors text-sm">
              YouTube Music
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm ">
            © 2024 Artist Name. All rights reserved. | Designed with passion for music.
          </p>
        </div>
      </div>
    </footer>
  )
}
