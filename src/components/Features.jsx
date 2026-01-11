import React from 'react'
import { Coffee, Utensils, Sparkles, MapPin, Clock, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: '☕ Signature Coffee',
      description: 'Expertly crafted coffee blends using single-origin beans roasted in-house daily',
      icon: <Coffee className="w-8 h-8" />
    },
    {
      title: '🍰 Handmade Desserts',
      description: 'Daily baked pastries and desserts made with organic ingredients and seasonal flavors',
      icon: <Utensils className="w-8 h-8" />
    },
    {
      title: '✨ Cozy Atmosphere',
      description: 'Warm and inviting interior with comfortable seating and ambient lighting',
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: '📍 Prime Location',
      description: 'Conveniently located in the heart of the city with easy access to public transport',
      icon: <MapPin className="w-8 h-8" />
    },
    {
      title: '🕒 Flexible Hours',
      description: 'Open from 7:00 AM to 11:00 PM daily with weekend brunch service',
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: '⭐ 5-Star Reviews',
      description: 'Consistently rated 5 stars by our loyal customers for quality and service',
      icon: <Star className="w-8 h-8" />
    }
  ]

  return (
    <section className="py-24 bg-coffee-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-coffee-mocha">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-coffee-mocha/10 shadow-xl">
              <div className="bg-coffee-cream/50 rounded-2xl p-4 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-coffee-mocha mb-4">
                {feature.title}
              </h3>
              <p className="text-coffee-mocha/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}