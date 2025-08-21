"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Youtube, Music, Instagram, Twitter, Facebook, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Connect() {
  const socialLinks = [
    { name: "YouTube", icon: Youtube, url: "#", followers: "25K", color: "hover:text-red-500" },
    { name: "Spotify", icon: Music, url: "#", followers: "15K", color: "hover:text-green-500" },
    { name: "Instagram", icon: Instagram, url: "#", followers: "30K", color: "hover:text-pink-500" },
    { name: "Twitter", icon: Twitter, url: "#", followers: "12K", color: "hover:text-blue-500" },
    { name: "Facebook", icon: Facebook, url: "#", followers: "8K", color: "hover:text-blue-600" },
  ]

  return (
    <section id="connect" className="py-20 px-4 bg-black border-b-2 border-white/20 relative overflow-hidden">
      {/* Background Image with Glass Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/naruto.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content with enhanced glass effect */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Stay Connected</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Follow the journey, get exclusive content, and be the first to hear new releases.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Follow on Social Media</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 border-white/20 hover:border-red-500/40 bg-black/30 backdrop-blur-md">
                      <CardContent className="p-4">
                        <a href={social.url} className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <motion.div
                              className={`p-3 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors`}
                              whileHover={{ rotate: 5 }}
                            >
                              <social.icon className={`w-6 h-6 text-red-500 ${social.color} transition-colors`} />
                            </motion.div>
                            <div>
                              <h4 className="font-semibold text-white">{social.name}</h4>
                              <p className="text-sm text-white/60">{social.followers} followers</p>
                            </div>
                          </div>
                          <div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-white hover:text-red-500 hover:bg-red-500/10"
                            >
                              Follow
                            </Button>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Get Exclusive Updates</h3>
              <Card className="bg-black/30 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Mail className="w-12 h-12 mx-auto mb-4 text-red-500" />
                    </motion.div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Join the VIP List</h4>
                    <p className="text-white/80">
                      Be the first to know about new releases, exclusive content, and upcoming shows.
                    </p>
                  </motion.div>

                  <motion.form
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-black border-red-500/20 focus:border-red-500 text-white placeholder:text-white/60"
                    />
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Subscribe Now</Button>
                    </motion.div>
                  </motion.form>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-white/60">No spam, just music. Unsubscribe anytime.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-2 text-white">Business Inquiries</h4>
                <p className="text-white/80">management@boirk.com</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
