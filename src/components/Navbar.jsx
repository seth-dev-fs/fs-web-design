import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Áreas', path: '/areas' },
    { name: 'Contacto', path: '/contacto' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img
                src="/logo.png"
                alt="FS Web Design"
                className="h-16 w-auto"
                width="180"
                height="64"
                fetchpriority="high"
              />
            </picture>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-accent-purple'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto" className="btn-gradient text-sm">
              Vamos Conversar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary text-2xl p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-base font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-accent-purple'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto" className="btn-gradient block text-center text-sm mt-4">
              Vamos Conversar
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
