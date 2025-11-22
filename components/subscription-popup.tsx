"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Music2, Heart, Star } from "lucide-react"

interface SubscriptionPopupProps {
    isOpen: boolean
    onClose: () => void
}

export function SubscriptionPopup({ isOpen, onClose }: SubscriptionPopupProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md bg-gradient-to-br from-black via-red-950/20 to-black border-red-500/30">
                <DialogHeader>
                    <DialogTitle className="text-xl md:text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
                        <Music2 className="w-6 h-6 text-red-500" />
                        Enjoying the Music?
                    </DialogTitle>
                    <DialogDescription className="text-sm md:text-base text-white/80 text-center pt-2">
                        Subscribe or follow to listen to the full track and get access to exclusive content!
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    {/* Features */}
                    <div className="space-y-3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-3 text-white/90"
                        >
                            <Star className="w-5 h-5 text-red-500" />
                            <span>Full access to all tracks</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-3 text-white/90"
                        >
                            <Heart className="w-5 h-5 text-red-500" />
                            <span>Exclusive behind-the-scenes content</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-3 text-white/90"
                        >
                            <Music2 className="w-5 h-5 text-red-500" />
                            <span>Early access to new releases</span>
                        </motion.div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4">
                        <Button
                            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 md:py-6 text-base md:text-lg"
                            onClick={() => {
                                // Navigate to connect section or external subscription link
                                const connectSection = document.getElementById('connect')
                                if (connectSection) {
                                    connectSection.scrollIntoView({ behavior: 'smooth' })
                                }
                                onClose()
                            }}
                        >
                            Subscribe Now
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full border-white/20 text-white hover:bg-white/10 py-4 md:py-6"
                            onClick={onClose}
                        >
                            Maybe Later
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
