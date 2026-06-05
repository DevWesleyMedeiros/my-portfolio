import { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'pt' | 'en'

interface Translations {
  [key: string]: {
    [key in Language]: string
  }
}

const translations: Translations = {
  home: { pt: 'Home', en: 'Home' },
  about: { pt: 'Sobre', en: 'About' },
  resume: { pt: 'Currículo', en: 'Resume' },
  projects: { pt: 'Projetos', en: 'Projects' },
  challenges: { pt: 'Desafios', en: 'Challenges' },
  services: { pt: 'Serviços', en: 'Services' },
  contact: { pt: 'Contatos', en: 'Contact' },
  viewCode: { pt: 'Ver código fonte', en: 'View source code' },
  intro: { pt: 'Desenvolvedor Fullstack', en: 'Fullstack Developer' },
  aboutText: {
    pt: 'Sou desenvolvedor Fullstack com foco em aplicações web (principalmente React + TypeScript) e construção/consumo de APIs. Gosto de trabalhar com UI consistente, código limpo e entregas orientadas a produto, sempre buscando equilibrar usabilidade, performance e manutenção. Tenho fluência C1 em inglês e nível B1 em espanhol (CEFR), o que facilita comunicação em times globais, leitura de documentação e colaboração em projetos internacionais.',
    en: 'I am a Fullstack Developer focused on web applications (mainly React + TypeScript) and building/consuming APIs. I like working with consistent UI, clean code and product-oriented deliveries, always seeking to balance usability, performance and maintainability. I have C1 fluency in English and B1 level in Spanish (CEFR), which facilitates communication in global teams, reading documentation and collaborating on international projects.',
  },
  repos: { pt: 'Repositórios', en: 'Repositories' },
  projectsCompleted: { pt: 'Projetos Fullstack', en: 'Fullstack Projects' },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  const t = (key: string) => translations[key]?.[language] || key

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
