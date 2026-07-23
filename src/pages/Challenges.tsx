import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

type GlowColors = {
  from: string
  to: string
}

const challenges: {
  language: string
  icon: string
  repo: string
  glow: GlowColors
}[] = [
  {
    language: 'JavaScript',
    icon: '/src/icons/JS_TS_icon_64.png',
    repo: 'https://github.com/DevWesleyMedeiros/exercicios-programacao/tree/exercicios/EXERCICIOS_JS',
    glow: { from: '#eab308', to: '#facc15' }, // amarelo
  },
  {
    language: 'TypeScript',
    icon: '/src/icons/ts_icon_64.png',
    repo: 'https://github.com/DevWesleyMedeiros/exercicios-programacao/tree/exercicios/EXERCICIOS_JS',
    glow: { from: '#2563eb', to: '#60a5fa' }, // azul
  },
  {
    language: 'Python',
    icon: '/src/icons/phyton_icon_64.png',
    repo: 'https://github.com/DevWesleyMedeiros/exercicios-programacao/tree/exercicios/EXERCICIOS_PYTHON',
    glow: { from: '#1e3a8a', to: '#1d4ed8' }, // azul marinho escuro
  },
  {
    language: 'Java',
    icon: '/src/icons/java_icon_64.png',
    repo: 'https://github.com/DevWesleyMedeiros/exercicios-programacao/tree/exercicios/EXERCICIOS_JAVA',
    glow: { from: '#6b7280', to: '#9ca3af' }, // acinzentado
  },
  {
    language: 'C#',
    icon: '/src/icons/csharp_icon_64.png',
    repo: 'https://github.com/DevWesleyMedeiros/exercicios-programacao/tree/exercicios/EXERCICIOS_C%23',
    glow: { from: '#16a34a', to: '#4ade80' }, // verde
  },
]

export default function Challenges() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl flex flex-col items-center text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 leading-tight bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {t('challenges')} / {t('algorítmos')}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center w-full">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.language}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card-glow rounded-2xl w-full"
              style={
                {
                  '--glow-from': challenge.glow.from,
                  '--glow-to': challenge.glow.to,
                } as React.CSSProperties
              }
            >
              <a
                href={challenge.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6 w-full h-full rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <img
                  src={challenge.icon}
                  alt={challenge.language}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
                <span className="font-semibold text-base sm:text-lg">{challenge.language}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}