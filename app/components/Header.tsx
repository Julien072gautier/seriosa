'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ExternalLink } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Logo-bdcdc0e7.png" 
            alt="FORMAPRO by Accertif" 
            width={120}
            height={40}
            className="h-10 w-auto mr-2"
            priority
          />
          <span className="text-2xl font-bold hidden">
            <span className="text-black">FORMA</span>
            <span className="text-brand">PRO</span>
            <span className="text-gray-500 text-sm ml-1">by Accertif</span>
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
          <a 
            href="https://skillup.accertif.fr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary btn-md btn-with-icon"
          >
            <span>SKILLUP</span>
            <ExternalLink size={16} className="ml-2" />
          </a>
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
            <a 
              href="https://skillup.accertif.fr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary btn-md btn-with-icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>SKILLUP</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
