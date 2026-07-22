import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-size-[200%_200%] bg-linear-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              Wesley Medeiros
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">{t('intro')}</p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/DevWesleyMedeiros/my-portfolio"
            target="_blank"
            rel="noreferrer"
            className="btn-shimmer flex items-center justify-center md:w-70 w-60 h-12 px-16 mt-6 bg-linear-to-r from-red-500 via-purple-600 to-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            {t('viewCode')}
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}
