import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center py-10"
      >
        <div className="space-y-16 flex flex-col gap-2 h-50">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-10">
            <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Wesley Medeiros
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">{t('intro')}</p>
          <div className="flex flex-wrap justify-center gap-6 bg-red-600">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/DevWesleyMedeiros/my-portfolio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-16 py-6 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow mt-15"
            >
              {t('viewCode')}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
