import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

export default function About() {
  const { t } = useLanguage()
  const { isDark } = useTheme()

  const stats = [
    { label: t('repos'), value: 13, icon: '📁' },
    { label: t('projectsCompleted'), value: 1, icon: '🚀' },
  ]

  return (
    <div className="min-h-screen w-full px-4 py-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-10 text-4xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {t('about')}
        </h2>

        <div className="flex flex-col gap-10 items-start md:flex-row">
          <div className="flex-1 md:w-3/5 space-y-6">
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('aboutText')}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="group flex items-center justify-center gap-3 h-10 px-6 bg-blue-100 dark:bg-blue-900/30 rounded-full transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.45)] cursor-default">
                <Globe className="w-5 h-5 shrink-0 text-blue-600 dark:text-blue-400 group-hover:animate-spin-slow" />
                <span className="text-sm font-medium whitespace-nowrap text-blue-800 dark:text-blue-200">
                  English (C1)
                </span>
              </div>
              <div className="group flex items-center justify-center gap-3 h-10 px-6 bg-yellow-100 dark:bg-yellow-900/30 rounded-full transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(202,138,4,0.45)] cursor-default">
                <Globe className="w-5 h-5 shrink-0 text-yellow-600 dark:text-yellow-400 group-hover:animate-spin-slow" />
                <span className="text-sm font-medium whitespace-nowrap text-yellow-800 dark:text-yellow-200">
                  Spanish (B1)
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full md:w-2/5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="card-glow rounded-2xl"
              >
                <div
                  className={`p-6 rounded-2xl text-center h-full ${
                    isDark
                      ? 'bg-gray-800 border border-gray-700'
                      : 'bg-white border border-gray-200'
                  } shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {stat.value}
                  </div>
                  <div className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
