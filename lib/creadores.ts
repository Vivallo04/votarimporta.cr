export interface Creador {
  id: string
  nombre: string
  ocupacion: string
  bio: string
  foto: string
  logros: string[]
  redesSociales: {
    twitter?: string
    instagram?: string
    linkedin?: string
    github?: string
    web?: string
  }
}

export const creadores: Creador[] = [
  {
    id: "rodolfo-rojas",
    nombre: "Rodolfo Rojas",
    ocupacion: "Software Engineer",
    bio: "Ingeniero de software apasionado por crear soluciones tecnológicas que impacten positivamente a la sociedad. Cree firmemente que la tecnología puede democratizar el acceso a la información y empoderar a los ciudadanos para tomar decisiones informadas.",
    foto: "/professional-software-engineer-man-portrait.jpg",
    logros: [
      "Desarrollador de múltiples aplicaciones web de alto impacto social",
      "Contribuidor activo en proyectos de código abierto",
      "Especialista en arquitectura de software y experiencia de usuario",
      "Defensor del uso de la tecnología para el bien público",
    ],
    redesSociales: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "fabian-fonseca",
    nombre: "Fabián Fonseca",
    ocupacion: "Politólogo y Economista",
    bio: "Politólogo y economista comprometido con el fortalecimiento de la democracia costarricense. Su objetivo es reducir la brecha de información política y fomentar la participación ciudadana informada, especialmente entre los jóvenes.",
    foto: "/professional-economist-man-portrait-latin.jpg",
    logros: [
      "Investigador en temas de participación ciudadana y abstencionismo",
      "Analista político con enfoque en políticas públicas",
      "Promotor de la educación cívica en jóvenes costarricenses",
      "Experto en análisis económico de propuestas gubernamentales",
    ],
    redesSociales: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
]
