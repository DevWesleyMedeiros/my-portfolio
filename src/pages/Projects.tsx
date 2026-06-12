import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const projects = [
  {
    id: 1,
    title: 'Digital Agency',
    description: 'Template for a digital agency',
    category: 'frontend',
    image: '/src/img/imagem_agencia_digital.jpg',
    live: 'https://digital-agence-gamma.vercel.app/',
    repo: 'https://github.com/DevWesleyMedeiros/Projeto_Agencia_Digital',
  },
  {
    id: 2,
    title: 'Dental Clinic',
    description: 'Template for a dental clinic',
    category: 'frontend',
    image: '/src/img/imagem_clinica_odontologica.jpg',
    live: 'https://devwesleymedeiros.github.io/site-odontologia/',
    repo: 'https://github.com/DevWesleyMedeiros/site-odontologia',
  },
  {
    id: 3,
    title: 'Old Cars',
    description: 'Template for an old cars dealership',
    category: 'frontend',
    image: '/src/img/imagem_comprar_veiculos.jpg',
    live: 'https://devwesleymedeiros.github.io/Vitrine-de-carros/',
    repo: 'https://github.com/DevWesleyMedeiros/Vitrine-de-carros',
  },
  {
    id: 4,
    title: 'Spotify Clone',
    description: 'Spotify homepage clone with React',
    category: 'fullstack',
    image: '/src/img/clone_spotify.png',
    live: 'https://replica-spotify-ten.vercel.app/',
    repo: 'https://github.com/DevWesleyMedeiros/projeto-clone-do-spotify',
  },
  {
    id: 5,
    title: 'Motorcycle Showcase',
    description: 'Fullstack project for a motorcycle showcase',
    category: 'fullstack',
    image: '/src/img/imagem_vitrine_de_motos.jpg',
    repo: 'https://github.com/DevWesleyMedeiros/projeto-vitrine-motos',
  },
]

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen px-4 py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {t('projects')}
        </h2>

        <div className="flex flex-wrap gap-6 mb-14 justify-center">
          <button
            onClick={() => setFilter('all')}
            className={`px-14 py-5 rounded-full font-semibold transition-all ${filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'}`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`px-14 py-5 rounded-full font-semibold transition-all ${filter === 'frontend' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-14 py-5 rounded-full font-semibold transition-all ${filter === 'fullstack' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'}`}
          >
            Fullstack
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-16 space-y-7">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
