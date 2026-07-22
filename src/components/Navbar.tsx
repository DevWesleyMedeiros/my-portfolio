import { Menu, Moon, Sun, X } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { Tooltip } from 'react-tooltip'

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // home nav
  const navItems = [
    { path: '/', label: 'home' },
    { path: '/about', label: 'about' },
    { path: '/resume', label: 'resume' },
    { path: '/projects', label: 'projects' },
    { path: '/challenges', label: 'challenges' },
    { path: '/services', label: 'services' },
    { path: '/contact', label: 'contact' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${isDark ? 'bg-gray-900/80 border-b border-gray-800' : 'bg-white/80 border-b border-gray-200'}`}
    >
      <div className="flex justify-centermax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ícone do WR */}
        <div className="w-full flex items-center justify-around h-16 px-6">
          <Link
            to="/"
            className="font-bold text-xl bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            WM
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${location.pathname === item.path ? (isDark ? 'text-purple-400' : 'text-purple-600') : isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {t(item.label)}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <div className="flex justify-center items-center gap-4 bg-gray-100 dark:bg-gray-800 rounded-full px-6 py-3">
              <button
                type="button"
                onClick={() => setLanguage('pt')}
                className={`flex justify-center items-center px-6 w-9 h-7 md:w-10 py-3 rounded-full text-sm font-semibold transition-all ${language === 'pt' ? (isDark ? 'bg-purple-700 text-white' : 'bg-purple-600 text-white') : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`flex justify-center items-center w-9 h-7 md:w-10 px-6 py-3 rounded-full text-sm font-semibold transition-all ${language === 'en' ? (isDark ? 'bg-purple-700 text-white' : 'bg-purple-600 text-white') : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-700'}`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Social links */}
            <div className="hidden lg:flex items-center gap-2">
              <Tooltip id="github" />
              <a
                data-tooltip-id="github"
                data-tooltip-content="Ver Github"
                data-tooltip-place="top"
                href="https://github.com/DevWesleyMedeiros"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              >
                <FaGithub size={20} />
              </a>
              <Tooltip id="instagram" />
              <a
                data-tooltip-id="instagram"
                data-tooltip-content="Ver Instagram"
                data-tooltip-place="top"
                href="https://www.instagram.com/wesleimedeyros/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              >
                <FaSquareInstagram size={20} />
              </a>
              <Tooltip id="linkedin" />
              <a
                data-tooltip-id="linkedin"
                data-tooltip-content="Ver Linkedin"
                data-tooltip-place="top"
                href="https://www.linkedin.com/in/weslei-medeiros/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              >
                <FaLinkedin size={20} />
              </a>
              <Tooltip id="whatsapp" />
              <a
                data-tooltip-id="whatsapp"
                data-tooltip-content="Conversar com Wesley"
                data-tooltip-place="top"
                href="https://wa.me/555596817802?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20conversar%20com%20o%20Wesley"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              >
                <FaSquareWhatsapp size={20} />
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div
          className={`md:hidden border-t ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}
        >
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${location.pathname === item.path ? (isDark ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-50 text-purple-600') : isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {t(item.label)}
              </Link>
            ))}
            <div className="pt-2 flex items-center justify-around">
              <a
                href="https://github.com/DevWesleyMedeiros"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              ></a>
              <a
                href="https://www.instagram.com/wesleimedeyros/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              ></a>
              <a
                href="https://www.linkedin.com/in/weslei-medeiros/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              ></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
