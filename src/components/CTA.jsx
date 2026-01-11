import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-coffee-mocha/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-coffee-mocha mb-6">
            Ready to Experience Café Mocha?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-coffee-mocha/80 text-lg mb-10">
            Reserve your table today and enjoy our premium coffee and desserts in a cozy atmosphere
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-coffee-dark text-coffee-beige rounded-2xl font-medium shadow-xl shadow-coffee-mocha/20">
              View Menu
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-coffee-cream text-coffee-mocha rounded-2xl font-medium border border-coffee-mocha/30 shadow-xl">
              Reserve Table
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}