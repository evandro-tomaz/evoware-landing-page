"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg"
          : "bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50">
            <div className="relative">
              <Zap className="h-7 w-7 lg:h-8 lg:w-8 text-blue-500" />
              <div className="absolute inset-0 bg-blue-500 blur-sm opacity-30"></div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="text-lg lg:text-xl font-bold text-white">Evoware</span>
              <span className="text-xs lg:text-sm text-blue-400 font-medium">Tecnologia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent text-sm"
            >
              Orçamento Gratuito
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white z-50 p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div className="fixed top-16 left-0 right-0 bg-gray-900/98 backdrop-blur-md border-b border-gray-800 lg:hidden">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-all duration-200 rounded-lg text-lg font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-800">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Orçamento Gratuito
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
