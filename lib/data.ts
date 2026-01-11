export interface Propuesta {
  id: string
  problema: string
  solucion: string
  como: string
}

export interface AreaPropuestas {
  area: string
  icon: string
  propuestas: Propuesta[]
}

export interface Candidato {
  id: string
  nombre: string
  partido: string
  partidoSiglas: string
  foto: string
  color: string
  colores: string[]
  ocupacion: string
  ideologia: string
  posicionPolitica: string
  logros: string[]
  bio: string
  areas: AreaPropuestas[]
  redesSociales: {
    twitter?: string
    instagram?: string
    facebook?: string
    tiktok?: string
    youtube?: string
    web?: string
  }
}

export const candidatos: Candidato[] = [
  {
    id: "candidato-1",
    nombre: "María Fernández Solís",
    partido: "Partido Progreso Nacional",
    partidoSiglas: "PPN",
    foto: "/professional-latina-woman-politician-portrait.jpg",
    color: "#2563eb",
    colores: ["#2563eb", "#1e40af"],
    ocupacion: "Economista, Ex-Ministra de Hacienda",
    ideologia: "Socialdemocracia",
    posicionPolitica: "Centro-Izquierda",
    redesSociales: {
      twitter: "https://twitter.com/mariafernandez",
      instagram: "https://instagram.com/mariafernandez",
      facebook: "https://facebook.com/mariafernandezCR",
      tiktok: "https://tiktok.com/@mariafernandez",
      web: "https://mariafernandez.cr",
    },
    logros: [
      "Redujo el déficit fiscal en 2.3% durante su gestión",
      "Impulsó la Ley de Empleo Joven 2022",
      "Negociadora principal del TLC con Asia",
    ],
    bio: "Con más de 20 años de experiencia en el sector público, María ha demostrado un compromiso constante con el desarrollo económico sostenible.",
    areas: [
      {
        area: "Educación",
        icon: "graduation-cap",
        propuestas: [
          {
            id: "e1",
            problema: "Solo el 30% de jóvenes acceden a educación superior",
            solucion: "Becas universales para carreras STEM",
            como: "Fondo de ₡50,000 millones con impuesto a transacciones financieras",
          },
          {
            id: "e2",
            problema: "Brecha digital en zonas rurales",
            solucion: "Internet gratuito en todas las escuelas públicas",
            como: "Alianza público-privada con operadores de telecomunicaciones",
          },
          {
            id: "e3",
            problema: "Docentes mal pagados y desmotivados",
            solucion: "Aumento salarial del 25% a docentes",
            como: "Reasignación presupuestaria y eliminación de plazas administrativas",
          },
        ],
      },
      {
        area: "Tecnología",
        icon: "cpu",
        propuestas: [
          {
            id: "t1",
            problema: "Costa Rica pierde competitividad en sector tech",
            solucion: "Hub de innovación en cada provincia",
            como: "Inversión de $100 millones en infraestructura y capacitación",
          },
          {
            id: "t2",
            problema: "Fuga de talento tech al extranjero",
            solucion: "Programa de retención de talento con incentivos fiscales",
            como: "Exención de impuesto de renta por 3 años para profesionales tech",
          },
        ],
      },
      {
        area: "Cultura",
        icon: "palette",
        propuestas: [
          {
            id: "c1",
            problema: "Artistas locales sin apoyo institucional",
            solucion: "Fondo Nacional de las Artes",
            como: "1% del presupuesto nacional destinado a cultura",
          },
        ],
      },
      {
        area: "Pensiones",
        icon: "piggy-bank",
        propuestas: [
          {
            id: "p1",
            problema: "Sistema de pensiones insostenible",
            solucion: "Reforma integral con cuentas individuales mixtas",
            como: "Transición gradual de 10 años respetando derechos adquiridos",
          },
        ],
      },
      {
        area: "Telecomunicación",
        icon: "signal",
        propuestas: [
          {
            id: "tel1",
            problema: "Internet lento y caro en zonas rurales",
            solucion: "5G para todo el territorio nacional",
            como: "Licitación abierta con obligación de cobertura rural",
          },
        ],
      },
      {
        area: "Turismo",
        icon: "plane",
        propuestas: [
          {
            id: "tu1",
            problema: "Turismo concentrado en pocas zonas",
            solucion: "Rutas turísticas alternativas certificadas",
            como: "Programa de capacitación y marketing para comunidades locales",
          },
        ],
      },
      {
        area: "Economía",
        icon: "trending-up",
        propuestas: [
          {
            id: "ec1",
            problema: "Desempleo juvenil del 25%",
            solucion: "Programa 'Mi Primer Empleo' con incentivos fiscales",
            como: "Reducción del 50% en cargas sociales para empresas que contraten jóvenes",
          },
          {
            id: "ec2",
            problema: "PYMES sin acceso a crédito",
            solucion: "Banco de Desarrollo para PYMES",
            como: "Capitalización de ₡100,000 millones con fondos de cooperación internacional",
          },
          {
            id: "ec3",
            problema: "Informalidad laboral del 45%",
            solucion: "Simplificación tributaria para microempresas",
            como: "Régimen simplificado con pago único mensual",
          },
        ],
      },
      {
        area: "Seguridad",
        icon: "shield",
        propuestas: [
          {
            id: "s1",
            problema: "Aumento del 40% en criminalidad organizada",
            solucion: "Policía comunitaria en 200 barrios prioritarios",
            como: "Contratación de 5,000 nuevos oficiales y capacitación especializada",
          },
          {
            id: "s2",
            problema: "Violencia doméstica en aumento",
            solucion: "Red de casas de acogida en cada cantón",
            como: "Convenios con municipalidades y ONGs especializadas",
          },
        ],
      },
      {
        area: "Ambiente",
        icon: "leaf",
        propuestas: [
          {
            id: "a1",
            problema: "Contaminación de ríos principales",
            solucion: "Plan Nacional de Saneamiento de Aguas",
            como: "Inversión de $500 millones en plantas de tratamiento",
          },
        ],
      },
    ],
  },
  {
    id: "candidato-2",
    nombre: "Carlos Ramírez Mora",
    partido: "Movimiento Libertad",
    partidoSiglas: "ML",
    foto: "/professional-latino-man-politician-portrait-suit.jpg",
    color: "#dc2626",
    colores: ["#ffffff", "#dc2626"],
    ocupacion: "Empresario, Ex-Alcalde de San José",
    ideologia: "Liberalismo económico",
    posicionPolitica: "Centro-Derecha",
    redesSociales: {
      twitter: "https://twitter.com/carlosramirez",
      instagram: "https://instagram.com/carlosramirezcr",
      facebook: "https://facebook.com/carlosramirezmora",
      youtube: "https://youtube.com/@carlosramirez",
      web: "https://carlosramirez.cr",
    },
    logros: [
      "Transformó San José en ciudad inteligente",
      "Atrajo $200 millones en inversión extranjera",
      "Fundador de 3 empresas tecnológicas exitosas",
    ],
    bio: "Empresario exitoso que busca aplicar principios de eficiencia del sector privado al gobierno.",
    areas: [
      {
        area: "Educación",
        icon: "graduation-cap",
        propuestas: [
          {
            id: "e1",
            problema: "Sistema educativo desactualizado",
            solucion: "Vouchers educativos para elegir escuelas",
            como: "Transferencia directa a familias de ₡200,000 mensuales por estudiante",
          },
        ],
      },
      {
        area: "Tecnología",
        icon: "cpu",
        propuestas: [
          {
            id: "t1",
            problema: "Gobierno con sistemas obsoletos",
            solucion: "Digitalización total del Estado",
            como: "Blockchain para trámites y contratos públicos",
          },
        ],
      },
      {
        area: "Cultura",
        icon: "palette",
        propuestas: [
          {
            id: "c1",
            problema: "Industria cultural poco competitiva",
            solucion: "Incentivos fiscales para industrias creativas",
            como: "Exención de impuestos por 5 años a startups culturales",
          },
        ],
      },
      {
        area: "Pensiones",
        icon: "piggy-bank",
        propuestas: [
          {
            id: "p1",
            problema: "Monopolio estatal de pensiones",
            solucion: "Libre elección de administradora de pensiones",
            como: "Apertura del mercado a operadores privados certificados",
          },
        ],
      },
      {
        area: "Telecomunicación",
        icon: "signal",
        propuestas: [
          {
            id: "tel1",
            problema: "ICE con monopolio de facto",
            solucion: "Liberalización total del mercado de telecomunicaciones",
            como: "Eliminación de barreras de entrada y regulación pro-competencia",
          },
        ],
      },
      {
        area: "Turismo",
        icon: "plane",
        propuestas: [
          {
            id: "tu1",
            problema: "Infraestructura turística deficiente",
            solucion: "Concesiones privadas para desarrollo turístico",
            como: "Marco legal para inversión privada en zonas protegidas",
          },
        ],
      },
      {
        area: "Economía",
        icon: "trending-up",
        propuestas: [
          {
            id: "ec1",
            problema: "Exceso de burocracia para emprender",
            solucion: "Empresa en 24 horas con trámite 100% digital",
            como: "Plataforma única que integra todas las instituciones",
          },
        ],
      },
      {
        area: "Seguridad",
        icon: "shield",
        propuestas: [
          {
            id: "s1",
            problema: "Sistema penitenciario ineficiente",
            solucion: "Cárceles productivas con trabajo obligatorio",
            como: "Convenios con empresas para emplear reos y reducir reincidencia",
          },
        ],
      },
      {
        area: "Ambiente",
        icon: "leaf",
        propuestas: [
          {
            id: "a1",
            problema: "Energía cara para industrias",
            solucion: "Liberalización del mercado eléctrico",
            como: "Permitir competencia de generadores privados",
          },
        ],
      },
    ],
  },
  {
    id: "candidato-3",
    nombre: "Ana Lucía Vargas Chen",
    partido: "Coalición Verde",
    partidoSiglas: "CV",
    foto: "/professional-asian-latina-woman-politician-portrai.jpg",
    color: "#16a34a",
    colores: ["#16a34a", "#facc15"],
    ocupacion: "Bióloga, Activista Ambiental",
    ideologia: "Ecologismo progresista",
    posicionPolitica: "Izquierda",
    redesSociales: {
      twitter: "https://twitter.com/analuciavargas",
      instagram: "https://instagram.com/analuciavargas",
      tiktok: "https://tiktok.com/@analuciavargas",
      youtube: "https://youtube.com/@coalicionverde",
      web: "https://coalicionverde.cr",
    },
    logros: [
      "Lideró campaña que salvó 10,000 hectáreas de bosque",
      "Premio Goldman de Medio Ambiente 2023",
      "Fundadora de la ONG 'Costa Rica Verde'",
    ],
    bio: "Científica y activista comprometida con un desarrollo que respete los límites planetarios.",
    areas: [
      {
        area: "Educación",
        icon: "graduation-cap",
        propuestas: [
          {
            id: "e1",
            problema: "Educación ambiental insuficiente",
            solucion: "Currículo verde obligatorio en todas las escuelas",
            como: "Capacitación a 50,000 docentes en educación ambiental",
          },
        ],
      },
      {
        area: "Tecnología",
        icon: "cpu",
        propuestas: [
          {
            id: "t1",
            problema: "Tecnología con alto impacto ambiental",
            solucion: "Incentivos para tech verde y economía circular",
            como: "Certificación 'Tech Verde CR' con beneficios fiscales",
          },
        ],
      },
      {
        area: "Cultura",
        icon: "palette",
        propuestas: [
          {
            id: "c1",
            problema: "Pérdida de tradiciones indígenas",
            solucion: "Programa de rescate y difusión de culturas ancestrales",
            como: "Centros culturales en territorios indígenas con financiamiento estatal",
          },
        ],
      },
      {
        area: "Pensiones",
        icon: "piggy-bank",
        propuestas: [
          {
            id: "p1",
            problema: "Inversiones de pensiones en industrias contaminantes",
            solucion: "Portafolio de pensiones 100% sostenible",
            como: "Desinversión de combustibles fósiles en 5 años",
          },
        ],
      },
      {
        area: "Telecomunicación",
        icon: "signal",
        propuestas: [
          {
            id: "tel1",
            problema: "Torres de telecomunicaciones afectan paisaje",
            solucion: "Infraestructura de telecomunicaciones integrada al paisaje",
            como: "Regulación estética y uso de tecnología de bajo impacto",
          },
        ],
      },
      {
        area: "Turismo",
        icon: "plane",
        propuestas: [
          {
            id: "tu1",
            problema: "Turismo masivo daña ecosistemas",
            solucion: "Modelo de turismo regenerativo",
            como: "Límites de carga turística y certificación obligatoria",
          },
        ],
      },
      {
        area: "Economía",
        icon: "trending-up",
        propuestas: [
          {
            id: "ec1",
            problema: "Economía dependiente de importaciones",
            solucion: "Economía circular y producción local",
            como: "Incentivos fiscales para empresas con certificación ambiental",
          },
        ],
      },
      {
        area: "Seguridad",
        icon: "shield",
        propuestas: [
          {
            id: "s1",
            problema: "Crimen ligado a desigualdad",
            solucion: "Prevención social del delito",
            como: "Inversión en centros comunitarios en zonas vulnerables",
          },
        ],
      },
      {
        area: "Ambiente",
        icon: "leaf",
        propuestas: [
          {
            id: "a1",
            problema: "Crisis climática amenaza biodiversidad",
            solucion: "Costa Rica carbono negativo para 2030",
            como: "Prohibición de combustibles fósiles y transición a electromovilidad",
          },
        ],
      },
    ],
  },
  {
    id: "candidato-4",
    nombre: "Roberto Jiménez Quesada",
    partido: "Unión Patriótica",
    partidoSiglas: "UP",
    foto: "/professional-latino-man-politician-portrait-formal.jpg",
    color: "#7c3aed",
    colores: ["#7c3aed", "#fbbf24"],
    ocupacion: "Abogado, Ex-Diputado",
    ideologia: "Conservadurismo social",
    posicionPolitica: "Derecha",
    redesSociales: {
      twitter: "https://twitter.com/robertojimenez",
      facebook: "https://facebook.com/robertojimenezup",
      youtube: "https://youtube.com/@unionpatriotica",
      web: "https://unionpatriotica.cr",
    },
    logros: [
      "Autor de la Ley de Protección a la Familia",
      "15 años de experiencia legislativa",
      "Presidente de la Comisión de Seguridad 2020-2024",
    ],
    bio: "Defensor de los valores tradicionales y la seguridad ciudadana como pilares del desarrollo.",
    areas: [
      {
        area: "Educación",
        icon: "graduation-cap",
        propuestas: [
          {
            id: "e1",
            problema: "Pérdida de valores en juventud",
            solucion: "Educación cívica y moral obligatoria",
            como: "Alianza con iglesias y organizaciones comunitarias",
          },
        ],
      },
      {
        area: "Tecnología",
        icon: "cpu",
        propuestas: [
          {
            id: "t1",
            problema: "Redes sociales sin control afectan menores",
            solucion: "Regulación de contenido digital para menores",
            como: "Ley de protección digital infantil con sanciones",
          },
        ],
      },
      {
        area: "Cultura",
        icon: "palette",
        propuestas: [
          {
            id: "c1",
            problema: "Pérdida de identidad nacional",
            solucion: "Programa de rescate de tradiciones costarricenses",
            como: "Festivales nacionales obligatorios en calendario escolar",
          },
        ],
      },
      {
        area: "Pensiones",
        icon: "piggy-bank",
        propuestas: [
          {
            id: "p1",
            problema: "Pensiones de lujo para funcionarios",
            solucion: "Tope máximo de pensiones de lujo",
            como: "Reforma constitucional para limitar pensiones al doble del salario mínimo",
          },
        ],
      },
      {
        area: "Telecomunicación",
        icon: "signal",
        propuestas: [
          {
            id: "tel1",
            problema: "Contenido extranjero domina medios",
            solucion: "Cuota de contenido nacional en medios",
            como: "Regulación que exige 40% de contenido local",
          },
        ],
      },
      {
        area: "Turismo",
        icon: "plane",
        propuestas: [
          {
            id: "tu1",
            problema: "Turismo no beneficia a comunidades locales",
            solucion: "Prioridad a empresas turísticas familiares",
            como: "Créditos blandos y capacitación para emprendedores locales",
          },
        ],
      },
      {
        area: "Economía",
        icon: "trending-up",
        propuestas: [
          {
            id: "ec1",
            problema: "Estado ineficiente y costoso",
            solucion: "Reducir aparato estatal en 30%",
            como: "Fusión de instituciones y eliminación de duplicidades",
          },
        ],
      },
      {
        area: "Seguridad",
        icon: "shield",
        propuestas: [
          {
            id: "s1",
            problema: "Impunidad del narcotráfico",
            solucion: "Mano dura contra el crimen organizado",
            como: "Duplicar presupuesto policial y penas más severas",
          },
        ],
      },
      {
        area: "Ambiente",
        icon: "leaf",
        propuestas: [
          {
            id: "a1",
            problema: "Regulaciones frenan desarrollo",
            solucion: "Simplificar permisos ambientales",
            como: "Ventanilla única con respuesta en 30 días máximo",
          },
        ],
      },
    ],
  },
]

export const areas = [
  { id: "educacion", nombre: "Educación", icon: "graduation-cap" },
  { id: "tecnologia", nombre: "Tecnología", icon: "cpu" },
  { id: "cultura", nombre: "Cultura", icon: "palette" },
  { id: "pensiones", nombre: "Pensiones", icon: "piggy-bank" },
  { id: "telecomunicacion", nombre: "Telecomunicación", icon: "signal" },
  { id: "turismo", nombre: "Turismo", icon: "plane" },
  { id: "economia", nombre: "Economía", icon: "trending-up" },
  { id: "seguridad", nombre: "Seguridad", icon: "shield" },
  { id: "ambiente", nombre: "Ambiente", icon: "leaf" },
]
