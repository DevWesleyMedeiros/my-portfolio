import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const challenges = [
  {
    language: 'JavaScript',
    icon: '/src/icons/JS_TS_icon_64.png',
    repo: 'https://github.com/DevWesleyMedeiros/exercicios-programacao/tree/exercicios/EXERCICIOS_JS',
  },
  {
    language: 'TypeScript',
    icon: '/src/icons/ts_icon_64.png',
    repo: 'https://github.com/DevWesleyMedeiros/exercicios-programacao/tree/exercicios/EXERCICIOS_JS',
  },
  {
    language: 'Python',
    icon: '/src/icons/phyton_icon_64.png',
    repo: 'https://github.com/DevWesleyMedeiros/exercicios-programacao/tree/exercicios/EXERCICIOS_PYTHON',
  },
  {
    language: 'Java',
    icon: '/src/icons/java_icon_64.png',
    repo: 'https://github.com/DevWesleyMedeiros/exercicios-programacao/tree/exercicios/EXERCICIOS_JAVA',
  },
  {
    language: 'C#',
    icon: '/src/icons/csharp_icon_64.png',
    repo: 'https://github.com/DevWesleyMedeiros/exercicios-programacao/tree/exercicios/EXERCICIOS_C%23',
  },
]

export default function Challenges() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl flex flex-col items-center text-center"
      >
        <h2 className="text-4xl font-bold mb-10 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {t('challenges')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center w-full">
          {challenges.map((challenge, index) => (
            <motion.a
              key={challenge.language}
              href={challenge.repo}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center gap-4 p-6 w-full rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <img
                src={challenge.icon}
                alt={challenge.language}
                className="w-16 h-16 object-contain"
              />
              <span className="font-semibold text-lg">{challenge.language}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
