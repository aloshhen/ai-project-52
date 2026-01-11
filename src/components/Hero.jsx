import React from 'react'
import { Coffee, Utensils, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://source.unsplash.com/1600x900/?coffee,cafe" 
          alt="Café interior" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-beige via-coffee-cream to-coffee-beige"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-coffee-mocha to-coffee-dark bg-clip-text text-transparent mb-6">
            Premium Coffee & Desserts
          </h1>
          <p className="text-xl text-coffee-mocha mb-10">
            Experience the perfect blend of rich coffee and handmade desserts in our cozy café atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-coffee-dark text-coffee-beige rounded-2xl font-medium shadow-xl shadow-coffee-mocha/20">
              View Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-coffee-cream text-coffee-mocha rounded-2xl font-medium border border-coffee-mocha/30 shadow-xl">
              Reserve Table
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}