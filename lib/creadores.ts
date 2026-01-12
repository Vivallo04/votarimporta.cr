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
    ocupacion: "Software Engineer & Founder",
    bio: "+5 años de experiencia en desarrollo de software y creación de aplicaciones web. Emprendedor y fundador de una startup de software. Creador de contenido documentando su proceso.",
    foto: "/rodolfo-rojas.jpg",
    logros: [
      "CEO & Founder de Carpil. Aplicación de carpooling para Costa Rica.",
      "Desarrollador de múltiples aplicaciones web para clientes nacionales e internacionales.",
      "Creador de contenido sobre emprendimiento y estilo de vida.",
    ],
    redesSociales: {
      github: "https://github.com/jrodolforojas",
      linkedin: "https://www.linkedin.com/in/jrodolforojas/",
      instagram: "https://www.instagram.com/jrodolforojas/",
    },
  },
  {
    id: "fabian-fonseca",
    nombre: "Fabián Fonseca",
    ocupacion: "Politólogo y Economista",
    bio: "Politólogo y economista comprometido con el fortalecimiento de la democracia costarricense. Su objetivo es reducir la brecha de información política y fomentar la participación ciudadana informada, especialmente entre los jóvenes.",
    foto: "/fabian-fonseca.webp",
    logros: [
      "Investigador en temas de participación ciudadana y abstencionismo",
      "Analista político con enfoque en políticas públicas",
      "Promotor de la educación cívica en jóvenes costarricenses",
    ],
    redesSociales: {
      linkedin: "https://www.linkedin.com/in/fabianfonsecar/",
    },
  },
]
