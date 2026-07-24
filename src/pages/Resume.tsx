import { motion } from 'framer-motion'
import {
  Download,
  GraduationCap,
  Code2,
  Languages as LanguagesIcon,
  Rocket,
  ExternalLink,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { RiVercelFill } from 'react-icons/ri'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

const hardSkills = {
  Frontend: [
    'React',
    'Javascript',
    'Jquery',
    'TypeScript',
    'NextJs',
    'Tailwind CSS',
    'HTML5',
    'CSS3 / SASS',
    'Vite',
    'Zustand',
    'Tanstack Query',
    'Zod',
  ],
  Backend: ['Node.js', 'Express', 'Prisma ORM', 'PostgreSQL', 'JWT', 'bcrypt'],
  'Ferramentas & DevOps': [
    'Git & GitHub',
    'CI/CD',
    'Vercel',
    'Railway',
    'Neon Database Serveless',
    'Firebase',
    'Zustand',
  ],
}
const softSkills = {
  strong: ['autodidata', 'curioso', 'organizado', 'ambicioso'],
  working: ['ético', 'detalhista', 'trabalho em equipe'],
}

// const experience = [
//   {
//     role: 'Em busca da primeira oportunidade com desenvolvedor júnior',
//     // company: 'IBGE',
//     // period: 'Maio de 2022 – Fevereiro de 2023',
//     // bullets: [
//     //   'Administrei as rotinas administrativas do meu posto de coleta, bem como dei suporte a diversos departamentos com as tarefas de contratação, demissão, pagamentos, controle de ponto dos colaboradores.',
//     //   'Também supervisionei as equipes de seis supervisores e sessenta recenseadores sobre minha responsabilidade. Foi responsável pela divulgação da coleta nos meios de comunicação local',
//     // ],
//   },
//   // {
//   //   role: 'Assistente Administrativo — Importação/Exportação',
//   //   company: 'SB Despachos Aduaneiros',
//   //   period: '',
//   //   bullets: [
//   //
//   //   ],
//   // },
// ]

const languages = [
  { label: 'English (C1)', color: 'blue' as const },
  { label: 'Spanish (B1)', color: 'yellow' as const },
]

export default function Resume() {
  const { t } = useLanguage()
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen w-full px-4 py-16 sm:py-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {t('resume')}
        </h2>

        {/* Cabeçalho: foto + nome + cargo + download */}
        <div
          className={`flex flex-col sm:flex-row items-center sm:items-center gap-6 p-6 rounded-2xl ${
            isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}
        >
          <img
            src="https://res.cloudinary.com/bepnfvc2/image/upload/v1784858241/personal_image_profile_uwx83t.jpg"
            alt="perfil do usuário"
            className="w-30 h-40 rounded-full object-cover"
          />
          {/* <div className="w-20 h-20 shrink-0 rounded-full bg-linear-to-r from-purple-600 to-blue-600 flex items-center justify-center text-2xl font-bold text-white">
            WM
          </div> */}

          <div className="flex-1 text-center sm:text-left">
            <p className="text-xl font-bold">Wesley Medeiros</p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Desenvolvedor Fullstack — React / TypeScript / Node.js
            </p>
          </div>

          <a
            href="/resume-wesley-medeiros.pdf"
            download
            className="btn-sweep flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all shrink-0"
          >
            <Download size={18} />
            Baixar PDF
          </a>
        </div>

        {/* Resumo profissional */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold">Resumo profissional</h3>
          <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Desenvolvedor Fullstack autodidata com foco em aplicações web modernas com React +
            NextJs, TypeScript, Node.js, construção/consumo de APIs Rest e integrações com IA no
            desenvolvimento. Gosto de trabalhar com UI consistente, código limpo e estou sempre
            buscando equilibrar usabilidade, performance e manutenção.
          </p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2">
          <section
            className={`p-6 rounded-2xl space-y-4 ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Code2 size={20} className="text-purple-600 dark:text-purple-400" />
              Hard Skills
            </h3>
            <div className="space-y-3">
              {Object.entries(hardSkills).map(([category, items]) => (
                <div key={category}>
                  <p
                    className={`text-xs font-medium mb-1.5 ${isDark ? 'text-gray-500' : 'text-amber-950'}`}
                  >
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/*  */}
          <section
            className={`p-6 rounded-2xl space-y-4 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Code2 size={20} className="text-purple-600 dark:text-purple-400" />
              Soft Skills
            </h3>

            <div className="space-y-3">
              {Object.entries(softSkills).map(([category, items]) => (
                <div key={category}>
                  <p
                    className={`text-xs font-medium mb-1.5 ${isDark ? 'text-gray-500' : 'text-amber-950'}`}
                  >
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className={`p-6 rounded-2xl space-y-4 ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <LanguagesIcon size={20} className="text-purple-600 dark:text-purple-400" />
              Idiomas
            </h3>
            <div className="flex flex-col gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.label}
                  className={`group flex items-center justify-center gap-3 h-10 px-6 rounded-full transition-shadow duration-300 cursor-default ${
                    lang.color === 'blue'
                      ? 'bg-blue-100 dark:bg-blue-900/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]'
                      : 'bg-yellow-100 dark:bg-yellow-900/30 hover:shadow-[0_0_20px_rgba(202,138,4,0.45)]'
                  }`}
                >
                  <LanguagesIcon
                    size={18}
                    className={`shrink-0 group-hover:animate-spin-slow ${
                      lang.color === 'blue'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-yellow-600 dark:text-yellow-400'
                    }`}
                  />
                  <span
                    className={`text-sm font-medium whitespace-nowrap ${
                      lang.color === 'blue'
                        ? 'text-blue-800 dark:text-blue-200'
                        : 'text-yellow-800 dark:text-yellow-200'
                    }`}
                  >
                    {lang.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Experiência
        <section className="space-y-4">
          {/* <h3 className="flex items-center gap-2 text-xl font-semibold">
            <Briefcase size={22} className="text-purple-600 dark:text-purple-400" />
            Experiência profissional
          </h3> */}
        {/* <div className="space-y-4"> */}
        {/* {experience.map((exp) => (
              <div
                key={exp.role}
                className={`p-6 rounded-2xl border-l-4 border-purple-600 rounded-l-none ${
                  isDark
                    ? 'bg-gray-800 border-t border-r border-b border-gray-700'
                    : 'bg-gray-50 border-t border-r border-b border-gray-200'
                }`}
              >
                <p className="font-semibold">{exp.role}</p>
                <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {exp.company}
                  {exp.period && ` · ${exp.period}`}
                </p>
                {exp.bullets.length > 0 && (
                  <ul
                    className={`list-disc list-inside text-sm space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))} */}
        {/* </div>
        // </section> */}

        {/* Formação */}
        <section className="space-y-4">
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            <GraduationCap size={22} className="text-purple-600 dark:text-purple-400" />
            Formação
          </h3>
          <div
            className={`p-6 rounded-2xl ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <p className="font-semibold">Ensino Médio</p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Concluído</p>
          </div>
        </section>

        {/* Projeto em destaque */}
        <section className="space-y-4">
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            <Rocket size={22} className="text-purple-600 dark:text-purple-400" />
            Projeto em destaque
          </h3>
          <div className="card-glow rounded-2xl">
            <div
              className={`p-6 rounded-2xl ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              <p className="font-bold text-lg mb-1">Casa do Hambúrguer</p>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Simulação fullstack de uma hamburgueria — projeto de portfólio e boilerplate pessoal
                para sistemas futuros.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  'React',
                  'TypeScript',
                  'Tailwindcss',
                  'Node.js',
                  'Express',
                  'Prisma ORM',
                  'PostgreSQL',
                  'JWT',
                  'APIs Rest',
                  'MVC',
                  'Monolith',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center">
                <a
                  href="https://github.com/DevWesleyMedeiros/casa-do-hamburger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sweep inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaGithub size={14} />
                  Ver projeto
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://casa-do-hamburger.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sweep inline-flex items-center px-5 py-2.5 mx-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                >
                  <RiVercelFill size={14} />
                  Ver deploy do frontend Vercel
                  <ExternalLink size={14} className="mx-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
