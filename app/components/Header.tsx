'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.jpg" 
            alt="Seriosa 2.0" 
            width={180}
            height={60}
            className="h-16 w-auto mr-2"
            priority
          />
          <span className="text-2xl font-bold hidden">
            <span className="text-black">SERIOSA</span>
            <span className="text-brand">2.0</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-800 hover:text-brand font-medium transition-colors">
            Accueil
          </Link>
          <Link href="/formations" className="text-gray-800 hover:text-brand font-medium transition-colors">
            Formations
          </Link>
          <Link href="/a-propos" className="text-gray-800 hover:text-brand font-medium transition-colors">
            À Propos
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-brand font-medium transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-brand font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/formations" 
              className="text-gray-800 hover:text-brand font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Formations
            </Link>
            <Link 
              href="/a-propos" 
              className="text-gray-800 hover:text-brand font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-800 hover:text-brand font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
