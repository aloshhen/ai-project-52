import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-mocha">
              Our Story
            </h2>
            <p className="text-coffee-mocha/80 text-lg">
              Founded in 2020 by coffee enthusiasts, Café Mocha was created to bring the perfect coffee experience to our community. Our baristas are trained in specialty coffee techniques and our desserts are made daily by our in-house pastry chef.
            </p>
            <p className="text-coffee-mocha/80 text-lg">
              We source our coffee beans directly from ethical farms in Colombia and Ethiopia, ensuring the highest quality and sustainability. Our café features a warm, inviting atmosphere with comfortable seating for individuals, couples, and small groups.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-coffee-cream/50 text-coffee-mocha px-4 py-2 rounded-full text-sm">
                3000+ satisfied customers
              </span>
              <span className="bg-coffee-cream/50 text-coffee-mocha px-4 py-2 rounded-full text-sm">
                50+ menu items
              </span>
              <span className="bg-coffee-cream/50 text-coffee-mocha px-4 py-2 rounded-full text-sm">
                24/7 online reservations
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative">
            <img
              src="https://source.unsplash.com/800x600/?coffee,cafe,interior"
              alt="Café interior"
              className="rounded-3xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-coffee-cream/80 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-coffee-mocha font-medium">
                "The best coffee experience in the city!"
              </p>
              <p className="text-coffee-mocha/60 text-sm mt-1">
                - Sarah, Regular Customer
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}