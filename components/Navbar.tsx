import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { useState } from "react"
import { RainbowButton } from "./magicui/rainbow-button"
export default function Navbar({ activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      const navbarHeight = 64 // Adjust this value based on your navbar's actual height
      const sectionTop = section.offsetTop - navbarHeight
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="sticky top-6 md:top-0 z-50  md:bg-transparent md:backdrop-blur-none md:bg-opacity-0 md:border-b-0 mx-auto max-w-7xl md:max-w-full md:px-6 lg:px-8 rounded-lg md:rounded-none shadow-lg md:shadow-none left-4 right-4 md:left-0 md:right-0">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hexonaoutput.jpg-jZQpcR6SKlPowKHva9BtXncCGZeOgI.jpeg"
              alt="Hexona AI Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-xl font-semibold">KUVA TECH</span>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation with Frosted Background */}
          <div className="hidden md:flex items-center rounded-full px-6 py-2 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-black border border-gray-800">
            <ul className="flex space-x-6">
              {["services", "process", "team", "pricing", "faq", "contact"].map((section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    onClick={(e) => handleNavClick(e, section)}
                    className={`capitalize ${
                      activeSection === section ? "text-zinc-500" : "text-white hover:text-zinc-500"
                    }`}
                  >
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
            <div className="ml-6"> {/* Added margin to separate button from nav items */}
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded backdrop-filter backdrop-blur-lg transition-all duration-200">
                Schedule a Call
              </button>
            </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg border-b border-gray-800 rounded-b-lg">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <ul className="flex flex-col space-y-4">
              {["services", "process", "team", "pricing", "faq", "contact"].map((section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    onClick={(e) => handleNavClick(e, section)}
                    className={`block capitalize py-2 px-4 rounded-md hover:bg-gray-900 hover:bg-opacity-50 ${
                      activeSection === section ? "text-zinc-500" : "text-white"
                    }`}
                  >
                    {section}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}