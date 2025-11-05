// Skills Data
const skillsData = [
  {
    name: "Node.js",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" style="width: 4rem; height: 4rem;" />',
    level: 90,
    description: "Runtime JavaScript para backend",
  },
  {
    name: "Python",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" style="width: 4rem; height: 4rem;" />',
    level: 85,
    description: "Desenvolvimento web e automação",
  },
  {
    name: "Java",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" style="width: 4rem; height: 4rem;" />',
    level: 80,
    description: "APIs empresariais e microsserviços",
  },
  {
    name: "PostgreSQL",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" style="width: 4rem; height: 4rem;" />',
    level: 85,
    description: "Banco de dados relacional",
  },
  {
    name: "MongoDB",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" style="width: 4rem; height: 4rem;" />',
    level: 80,
    description: "Banco de dados NoSQL",
  },
  {
    name: "Redis",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" style="width: 4rem; height: 4rem;" />',
    level: 75,
    description: "Cache e filas de mensagens",
  },
  {
    name: "Docker",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" style="width: 4rem; height: 4rem;" />',
    level: 85,
    description: "Containerização de aplicações",
  },
  {
    name: "Kubernetes",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" style="width: 4rem; height: 4rem;" />',
    level: 70,
    description: "Orquestração de containers",
  },
  {
    name: "GraphQL",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" style="width: 4rem; height: 4rem;" />',
    level: 75,
    description: "API query language",
  },
  {
    name: "AWS",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" style="width: 4rem; height: 4rem;" />',
    level: 80,
    description: "Cloud computing services",
  },
  {
    name: "Git",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" style="width: 4rem; height: 4rem;" />',
    level: 90,
    description: "Controle de versão",
  },
  {
    name: "CI/CD",
    icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain.svg" style="width: 4rem; height: 4rem;" />',
    level: 75,
    description: "Integração e deploy contínuo",
  },
];

// Projects Data
const projectsData = [
  {
    title: "API RESTful de E-commerce",
    description:
      "API completa para gerenciamento de loja virtual com autenticação JWT, pagamentos e gestão de inventário.",
    icon: "🛒",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    category: "api",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Microsserviço de Autenticação",
    description:
      "Serviço de autenticação escalável com OAuth2, SSO e gerenciamento de sessões distribuídas.",
    icon: "🔐",
    tags: ["Python", "FastAPI", "Redis", "OAuth"],
    category: "microservices",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Sistema de Mensageria",
    description:
      "Plataforma de mensagens em tempo real usando WebSockets e RabbitMQ para comunicação assíncrona.",
    icon: "💬",
    tags: ["Node.js", "Socket.io", "RabbitMQ", "MongoDB"],
    category: "microservices",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Pipeline de ETL",
    description:
      "Sistema de extração, transformação e carregamento de dados com processamento em lote e streaming.",
    icon: "📊",
    tags: ["Python", "Apache Airflow", "Spark", "PostgreSQL"],
    category: "database",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "API GraphQL Gateway",
    description:
      "Gateway unificado integrando múltiplas APIs REST em uma interface GraphQL moderna.",
    icon: "🌐",
    tags: ["Node.js", "Apollo", "GraphQL", "Redis"],
    category: "api",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Sistema de Cache Distribuído",
    description:
      "Implementação de cache multi-camadas com invalidação inteligente e alta disponibilidade.",
    icon: "⚡",
    tags: ["Redis", "Node.js", "Docker", "Kubernetes"],
    category: "microservices",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

// Experience Data
const experienceData = [
  {
    date: "2023 - Presente",
    title: "Independent Backend Developer",
    company: "Self-Employed",
    description:
      "Liderança técnica no desenvolvimento de microsserviços escaláveis. Implementação de arquitetura distribuída processando 1M+ requisições/dia. Mentoria de equipe de 5 desenvolvedores.",
  },
  {
    date: "2021 - 2023",
    title: "Backend Developer",
    company: "Digital Innovations",
    description:
      "Desenvolvimento de APIs RESTful e GraphQL. Otimização de queries de banco de dados resultando em 60% de melhoria na performance. Implementação de CI/CD pipelines.",
  },
  {
    date: "2020 - 2021",
    title: "Full Stack Developer",
    company: "StartUp Solutions",
    description:
      "Desenvolvimento full stack com foco em backend. Criação de sistema de autenticação e autorização. Integração com serviços de pagamento e APIs de terceiros.",
  },
  {
    date: "2019 - 2020",
    title: "Junior Backend Developer",
    company: "Web Agency",
    description:
      "Desenvolvimento de APIs e integração com bancos de dados. Manutenção de sistemas legados. Participação em projetos de migração para cloud.",
  },
];

// Typewriter Code for Hero Section
const typewriterCode = `// Backend Developer
const developer = {
  name: "Hélio Oliveira",
  role: "Backend Developer",
  skills: [
    "Node.js", "NestJS", "TypeScript",
    "PostgreSQL", "Docker", "Redis",
    "Swagger", "Next.js", "TailWind CSS"
  ],
  
  getCurrentFocus() {
    return "Building scalable APIs";
  },
  
  getPassion() {
    return "Clean code & Architecture";
  }
};

export default developer;`;
