import { motion } from 'framer-motion'
import { CheckSquare, Layout, LayoutTemplate, Monitor, PenTool } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const services = [
  {
    title: 'Responsive Websites',
    description: 'Responsive websites for your company, organization or brand to better present your service, product, story or contact. Projects focused on strengthening your brand\'s digital presence.',
    icon: <Monitor className="h-10 w-10" />,
  },
  {
    title: 'Landing Pages',
    description: 'Pages created with the goal of converting visitors and curious people into leads or customers. Pages completely focused on a single call to action.',
    icon: <Layout className="h-10 w-10" />,
  },
  {
    title: 'Single Page Applications',
    description: 'Applications that load a single HTML page and dynamically update content as the user interacts, without needing to load new pages from the server.',
    icon: <LayoutTemplate className="h-10 w-10" />,
  },
  {
    title: 'UI Components',
    description: 'Creating reusable component libraries like buttons, forms, tables, and modals to standardize and speed up interface development in future projects.',
    icon: <PenTool className="h-10 w-10" />,
  },
  {
    title: 'Prototyping & Wireframing',
    description: 'Creating interactive prototypes and mockups of interfaces to test concepts and gather user feedback before developing a final product.',
    icon: <CheckSquare className="h-10 w-10" />,
  },
]

export default function Services() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen px-4 py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {t('services')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500/50 transition-all group"
            >
              <div className="mb-4 p-3 w-fit rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
