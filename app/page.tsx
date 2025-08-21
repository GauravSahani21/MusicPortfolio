import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Music } from "@/components/music"
import { Connect } from "@/components/connect"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Music />
      <Connect />
      <Footer />
    </main>
  )
}
