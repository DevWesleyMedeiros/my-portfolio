import { Globe, Mail, Menu, MessageCircle, Moon, Sun, User, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-bold text-xl bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            WM
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
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
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${language === 'pt' ? (isDark ? 'bg-purple-700 text-white' : 'bg-purple-600 text-white') : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${language === 'en' ? (isDark ? 'bg-purple-700 text-white' : 'bg-purple-600 text-white') : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                EN
              </button>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-700'}`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Social links */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://github.com/DevWesleyMedeiros"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              >
                <Globe size={20} />
              </a>
              <a
                href="https://www.instagram.com/wesleimedeyros/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              >
                <User size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/weslei-medeiros/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/555596817802?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20conversar%20com%20o%20Wesley"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              >
                <MessageCircle size={20} />
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
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
              >
                <Globe size={24} />
              </a>
              <a
                href="https://www.instagram.com/wesleimedeyros/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              >
                <User size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/weslei-medeiros/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
