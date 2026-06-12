import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Resume() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen px-4 py-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {t('resume')}
        </h2>
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-3 flex items-center gap-4">
            <FileText className="w-8 h-8 text-purple-600" />
            <div className="text-lg font-medium">Curriculo em atualizacao</div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Os arquivos PDF do curriculo nao estao mais no projeto. A estrutura da secao foi mantida
            e os links de download foram removidos para evitar erro.
          </p>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <FileText className="w-8 h-8 text-purple-600" />
          <div className="text-lg font-medium">Resume overview</div>
        </div>
        <div className="space-y-10">
          <section className="space-y-5">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="p-8 rounded-lg space-y-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <p className="font-medium">High School</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
            </div>
          </section>

          <section className="space-y-5">
            <h3 className="text-2xl font-semibold mb-4">Experience</h3>
            <div className="p-8 rounded-lg space-y-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <p className="font-medium">Administrative Assistant - Import/Export</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">SB Despachos Aduaneiros</p>
            </div>
            <div className="p-10 mt-5 rounded-lg space-y-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <p className="font-medium">National Research Coordinator</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">IBGE</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
}
