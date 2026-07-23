import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  Tag,
  User,
} from 'lucide-react'
import { useState, type SubmitEvent } from 'react'
import { useLanguage } from '../context/LanguageContext'

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

async function submitContactForm(data: ContactFormData): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  console.log('Dodos de payload enviados:', data)
}

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const isInvalid = (field: keyof ContactFormData) =>
    touched[field] && formData[field].trim() === ''

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()

    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    setTouched(allTouched)

    const hasEmptyField = Object.values(formData).some((v) => v.trim() === '')
    if (hasEmptyField) return

    try {
      setStatus('loading')
      await submitContactForm(formData)
      setStatus('success')
      setFormData(initialFormData)
      setTouched({})
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const fieldBaseClass =
    'w-full pl-11 pr-4 py-3 rounded-lg border bg-white dark:bg-gray-800 outline-none transition-all focus:ring-2 focus:ring-purple-500'

  const fieldBorderClass = (field: keyof ContactFormData) =>
    isInvalid(field) ? 'border-red-400 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'

  return (
    <div className="min-h-screen w-full px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-2 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {t('contact')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Preencha os campos abaixo e retornarei o quanto antes.
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={`${fieldBaseClass} ${fieldBorderClass('name')}`}
                />
              </div>
              {isInvalid('name') && <p className="text-xs text-red-500 mt-1">Informe seu nome.</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={`${fieldBaseClass} ${fieldBorderClass('email')}`}
                />
              </div>
              {isInvalid('email') && (
                <p className="text-xs text-red-500 mt-1">Informe um e-mail válido.</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="subject">
              Subject
            </label>
            <div className="relative">
              <Tag size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                onBlur={() => handleBlur('subject')}
                className={`${fieldBaseClass} ${fieldBorderClass('subject')}`}
              />
            </div>
            {isInvalid('subject') && (
              <p className="text-xs text-red-500 mt-1">Informe um assunto.</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <div className="relative">
              <MessageSquare size={18} className="absolute left-3.5 top-4 text-gray-400" />
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                className={`${fieldBaseClass} ${fieldBorderClass('message')} resize-none`}
              />
            </div>
            {isInvalid('message') && (
              <p className="text-xs text-red-500 mt-1">Escreva sua mensagem.</p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
              type="submit"
              disabled={status === 'loading'}
              className="btn-sweep flex items-center gap-2 px-8 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 text-sm text-green-500 font-medium"
                >
                  <CheckCircle2 size={18} />
                  Mensagem enviada!
                </motion.span>
              )}
              {status === 'error' && (
                <motion.span
                  key="error"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 text-sm text-red-500 font-medium"
                >
                  <AlertCircle size={18} />
                  Falha ao enviar. Tente novamente.
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
