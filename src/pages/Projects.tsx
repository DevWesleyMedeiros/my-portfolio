import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const projects = [
  {
    id: 1,
    title: 'Digital Agency',
    description: 'Template for a digital agency',
    category: 'frontend',
    image: '/img/imagem_agencia_digital.jpg',
    live: 'https://digital-agence-gamma.vercel.app/',
    repo: 'https://github.com/DevWesleyMedeiros/Projeto_Agencia_Digital',
  },
  {
    id: 2,
    title: 'Old Cars',
    description: 'Template for an old cars dealership',
    category: 'frontend',
    image: '/img/imagem_comprar_veiculos.jpg',
    live: 'https://devwesleymedeiros.github.io/Vitrine-de-carros/',
    repo: 'https://github.com/DevWesleyMedeiros/Vitrine-de-carros',
  },
  {
    id: 3,
    title: 'Burguer Joint',
    description: 'Burguer Joint web fullstack project',
    category: 'fullstack',
    image: '/img/casa-do-hamburguer-project.png',
    live: 'https://casa-do-hamburger.vercel.app/',
    repo: 'https://github.com/DevWesleyMedeiros/casa-do-hamburger',
  },
  {
    id: 4,
    title: 'Hangman',
    description: 'Good and old Hangman',
    category: 'frontend',
    image: '/img/jogo-da-forca-project.jpg',
    live: 'https://projeto-jogo-forca-pearl.vercel.app/',
    repo: 'https://github.com/DevWesleyMedeiros/projeto-jogo-forca',
  },
  {
    id: 5,
    title: 'Game stop',
    description: 'Lets play city country river',
    category: 'frontend',
    image: '/img/jogo-do-stop-project.jpg',
    live: 'https://devwesleymedeiros.github.io/Projeto-game-stop/',
    repo: 'https://github.com/DevWesleyMedeiros/Projeto-game-stop',
  },
  {
    id: 6,
    title: 'Task Manager',
    description: 'Maneger your daily tasks',
    category: 'frontend',
    image: '/img/gerenciador-de-tarefas-project.jpg',
    repo: 'https://github.com/DevWesleyMedeiros/Task_manager-ElectronJS',
  },
  {
    id: 7,
    title: 'Boilerplate page',
    description: 'Download windows programs',
    category: 'frontend',
    image: '/img/página-boilerplate-project.jpg',
    live: 'https://devwesleymedeiros.github.io/projeto-pagina-personalizada/',
    repo: 'https://github.com/DevWesleyMedeiros/projeto-pagina-personalizada',
  },
  {
    id: 8,
    title: 'Dental clinic',
    description: 'Template Dental Clinic Design Project',
    category: 'frontend',
    image: '/img/clínica-odontologica-project.jpg',
    live: 'https://devwesleymedeiros.github.io/projeto-pagina-personalizada/',
    repo: 'https://github.com/DevWesleyMedeiros/projeto-Monguilhott-clinica-odontologica',
  },
]

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'fullstack', label: 'Fullstack' },
]

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen w-full px-4 py-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {t('projects')}
        </h2>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`btn-sweep px-6 h-9 rounded-md font-semibold transition-all ${
                filter === key
                  ? 'bg-linear-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glow rounded-2xl"
            >
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-5">{project.description}</p>
                  <div className="flex flex-wrap justify-center items-center gap-4 mt-auto">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sweep flex items-center justify-center min-w-27.75 h-10 px-5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                      >
                        Ver projeto
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sweep flex items-center justify-center min-w-27.75 h-10 px-5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
