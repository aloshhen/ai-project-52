import React from 'react'
import { Coffee } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-coffee-beige/80 border-b border-coffee-mocha/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="w-8 h-8 text-coffee-dark" />
          <h1 className="text-2xl font-bold text-coffee-dark">Café Mocha</h1>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-coffee-mocha hover:text-coffee-dark transition-colors">Menu</a>
          <a href="#reservation" className="text-coffee-mocha hover:text-coffee-dark transition-colors">Reserve</a>
          <a href="#about" className="text-coffee-mocha hover:text-coffee-dark transition-colors">About</a>
        </div>
      </div>
    </nav>
  )
}