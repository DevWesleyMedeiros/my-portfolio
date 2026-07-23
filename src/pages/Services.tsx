import { motion } from 'framer-motion'
import {
  Bot,
  CheckSquare,
  Database,
  GitBranch,
  Layout,
  LayoutTemplate,
  Monitor,
  Network,
  PenTool,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const services = [
  {
    title: 'Sites Responsivos',
    description:
      'Sites responsivos para sua empresa, organização ou marca, apresentando melhor seu serviço, produto, história ou contato. Projetos focados em fortalecer a presença digital da sua marca.',
    icon: <Monitor className="h-10 w-10" />,
  },
  {
    title: 'Landing Pages',
    description:
      'Páginas criadas com o objetivo de converter visitantes e curiosos em leads ou clientes. Páginas totalmente focadas em uma única chamada para ação (CTA).',
    icon: <Layout className="h-10 w-10" />,
  },
  {
    title: 'Single Page Applications',
    description:
      'Aplicações que carregam uma única página HTML e atualizam o conteúdo dinamicamente conforme a interação do usuário, sem precisar recarregar novas páginas do servidor.',
    icon: <LayoutTemplate className="h-10 w-10" />,
  },
  {
    title: 'Componentes de UI',
    description:
      'Criação de bibliotecas de componentes reutilizáveis, como botões, formulários, tabelas e modais, para padronizar e acelerar o desenvolvimento de interfaces em projetos futuros.',
    icon: <PenTool className="h-10 w-10" />,
  },
  {
    title: 'Prototipagem & Wireframing',
    description:
      'Criação de protótipos interativos e mockups de interfaces para testar conceitos e coletar feedback dos usuários antes do desenvolvimento do produto final.',
    icon: <CheckSquare className="h-10 w-10" />,
  },
  {
    title: 'Integração com IA (LLMs & Chatbots)',
    description:
      'Integração de modelos de linguagem em aplicações web: chatbots, assistentes virtuais e automações que utilizam IA para melhorar a experiência e a produtividade do usuário.',
    icon: <Bot className="h-10 w-10" />,
  },
  {
    title: 'APIs REST',
    description:
      'Desenvolvimento e consumo de APIs RESTful e GraphQL, com autenticação segura, documentação clara e integração entre frontend e backend de forma robusta e escalável.',
    icon: <Network className="h-10 w-10" />,
  },
  {
    title: 'Backend & Banco de Dados',
    description:
      'Modelagem e implementação de bancos de dados relacionais (PostgreSQL, MySQL) com Prisma ORM, garantindo integridade, performance e regras de negócio bem estruturadas.',
    icon: <Database className="h-10 w-10" />,
  },
  {
    title: 'Automação & CI/CD',
    description:
      'Configuração de pipelines de integração e entrega contínua com GitHub Actions, automatizando testes, build e deploy para entregas mais rápidas e confiáveis.',
    icon: <GitBranch className="h-10 w-10" />,
  },
]

export default function Services() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen w-full px-4 py-16 sm:py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {t('services')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all group h-full">
                <div className="mb-4 p-3 w-fit rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
