import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

export default function About() {
  const { t } = useLanguage()
  const { isDark } = useTheme()

  const stats = [
    { label: t('repos'), value: 20, icon: '📁' },
    { label: t('projectsCompleted'), value: 2, icon: '🚀' },
  ]

  return (
    <div className="min-h-screen px-4 py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {t('about')}
        </h2>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('aboutText')}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium">English (C1)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                <Globe className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <span className="text-sm font-medium">Spanish (B1)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`p-6 rounded-2xl text-center ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {stat.value}
                </div>
                <div className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
