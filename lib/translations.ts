export type Lang = "en" | "pt";

export type Translations = {
  nav: { about: string; skills: string; projects: string; contact: string; downloadCv: string; available: string };
  hero: { available: string; techStack: string; subtitle: string; viewProjects: string; contactMe: string; scroll: string };
  about: { label: string; heading1: string; headingAccent: string; heading2: string; bio: string; stats: { number: string; label: string }[] };
  skills: { label: string; heading1: string; headingAccent: string };
  projects: { label: string; heading1: string; headingAccent: string; liveLabel: string; githubLabel: string; items: { number: string; title: string; description: string; tags: string[]; liveUrl: string; githubUrl: string }[] };
  contact: { label: string; heading1: string; headingAccent: string; description: string; emailLabel: string; phoneLabel: string; sendEmailCta: string; form: { nameLabel: string; namePlaceholder: string; emailLabel: string; emailPlaceholder: string; messageLabel: string; messagePlaceholder: string; submitButton: string }; successTitle: string; successMessage: string };
  footer: { rights: string; builtWith: string };
};

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      downloadCv: "Download CV",
      available: "Available for work",
    },
    hero: {
      available: "Available for work",
      techStack: "React · Next.js · TypeScript · Node.js",
      subtitle:
        "Software Engineer crafting fast, modern web experiences with a focus on clean code and great UX.",
      viewProjects: "View Projects",
      contactMe: "Contact me",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      heading1: "Building things",
      headingAccent: "people love",
      heading2: "to use",
      bio: "I'm a Software Engineer based in Portugal with 5+ years of experience building web applications. I specialize in the JavaScript ecosystem — from crafting pixel-perfect UIs with React and Next.js to building robust APIs with Node.js. I care deeply about performance, accessibility, and writing maintainable code that scales.",
      stats: [
        { number: "5+", label: "Years Experience" },
        { number: "20+", label: "Projects Shipped" },
        { number: "10+", label: "Happy Clients" },
        { number: "3+", label: "Countries Served" },
      ],
    },
    skills: {
      label: "Skills",
      heading1: "My",
      headingAccent: "tech stack",
    },
    projects: {
      label: "Projects",
      heading1: "Selected",
      headingAccent: "work",
      liveLabel: "Live",
      githubLabel: "GitHub",
      items: [
        {
          number: "01",
          title: "VRS Code Platform",
          description:
            "A full-stack web platform for software consulting and development services. Built with Next.js and a Node.js backend, featuring dynamic content management, contact forms, and optimized performance across all devices.",
          tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
          liveUrl: "https://vrscode.com.br",
          githubUrl: "https://github.com/vitorribeiro",
        },
        {
          number: "02",
          title: "Roadmap AI",
          description:
            "An AI-powered web app that transforms raw ideas and unstructured text into organized, actionable roadmaps. Users input concepts or mental models and Claude AI generates structured plans with phases, tasks, and sequential next steps.",
          tags: ["Next.js", "React", "TypeScript", "Claude AI", "Tailwind CSS"],
          liveUrl: "https://roadmap-ai-beta.vercel.app/",
          githubUrl: "https://github.com/vitriber/roadmap.ai",
        },
        {
          number: "03",
          title: "Node.js REST API",
          description:
            "A scalable RESTful API built with Node.js and Express, featuring JWT authentication, role-based access control, and thorough test coverage. Deployed with Docker on AWS with a CI/CD pipeline via GitHub Actions.",
          tags: ["Node.js", "Express", "MongoDB", "Docker", "AWS", "Jest"],
          liveUrl: "#",
          githubUrl: "https://github.com/vitorribeiro",
        },
      ],
    },
    contact: {
      label: "Contact",
      heading1: "Let's",
      headingAccent: "work together",
      description:
        "I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a chat about technology. Drop me a message and I'll get back to you within 24 hours.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      sendEmailCta: "Send me an email",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Jane Smith",
        emailLabel: "Email",
        emailPlaceholder: "jane@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project or opportunity...",
        submitButton: "Send Message",
      },
      successTitle: "Message sent!",
      successMessage: "Thanks for reaching out. I'll get back to you soon.",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js & Framer Motion",
    },
  },

  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
      downloadCv: "Baixar CV",
      available: "Disponível para trabalho",
    },
    hero: {
      available: "Disponível para trabalho",
      techStack: "React · Next.js · TypeScript · Node.js",
      subtitle:
        "Engenheiro de Software criando experiências web rápidas e modernas com foco em código limpo e excelente UX.",
      viewProjects: "Ver Projetos",
      contactMe: "Entre em contato",
      scroll: "Rolar",
    },
    about: {
      label: "Sobre",
      heading1: "Construindo coisas que",
      headingAccent: "as pessoas amam",
      heading2: "usar",
      bio: "Sou um Engenheiro de Software baseado em Portugal com mais de 5 anos de experiência no desenvolvimento de aplicações web. Especializo-me no ecossistema JavaScript — desde a criação de UIs pixel-perfect com React e Next.js até a construção de APIs robustas com Node.js. Me preocupo profundamente com performance, acessibilidade e código de fácil manutenção.",
      stats: [
        { number: "5+", label: "Anos de Experiência" },
        { number: "20+", label: "Projetos Entregues" },
        { number: "10+", label: "Clientes Satisfeitos" },
        { number: "3+", label: "Países Atendidos" },
      ],
    },
    skills: {
      label: "Habilidades",
      heading1: "Meu",
      headingAccent: "stack tecnológico",
    },
    projects: {
      label: "Projetos",
      heading1: "Trabalhos",
      headingAccent: "selecionados",
      liveLabel: "Demo",
      githubLabel: "GitHub",
      items: [
        {
          number: "01",
          title: "VRS Code Platform",
          description:
            "Plataforma web full-stack para serviços de consultoria e desenvolvimento de software. Construída com Next.js e backend em Node.js, com gerenciamento dinâmico de conteúdo, formulários de contato e performance otimizada em todos os dispositivos.",
          tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
          liveUrl: "https://vrscode.com.br",
          githubUrl: "https://github.com/vitorribeiro",
        },
        {
          number: "02",
          title: "Roadmap AI",
          description:
            "Aplicação web com IA que transforma ideias brutas e textos não estruturados em roadmaps organizados e acionáveis. O usuário insere conceitos ou modelos mentais e o Claude AI gera planos estruturados com fases, tarefas e próximos passos.",
          tags: ["Next.js", "React", "TypeScript", "Claude AI", "Tailwind CSS"],
          liveUrl: "https://roadmap-ai-beta.vercel.app/",
          githubUrl: "https://github.com/vitriber/roadmap.ai",
        },
        {
          number: "03",
          title: "Node.js REST API",
          description:
            "API RESTful escalável construída com Node.js e Express, com autenticação JWT, controle de acesso baseado em funções e cobertura de testes abrangente. Implantada com Docker na AWS com pipeline de CI/CD via GitHub Actions.",
          tags: ["Node.js", "Express", "MongoDB", "Docker", "AWS", "Jest"],
          liveUrl: "#",
          githubUrl: "https://github.com/vitorribeiro",
        },
      ],
    },
    contact: {
      label: "Contato",
      heading1: "Vamos",
      headingAccent: "trabalhar juntos",
      description:
        "Estou aberto a novas oportunidades — seja uma posição full-time, projeto freelance ou apenas uma conversa sobre tecnologia. Me envie uma mensagem e responderei em até 24 horas.",
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      sendEmailCta: "Me envie um e-mail",
      form: {
        nameLabel: "Nome",
        namePlaceholder: "Maria Silva",
        emailLabel: "E-mail",
        emailPlaceholder: "maria@exemplo.com",
        messageLabel: "Mensagem",
        messagePlaceholder: "Fale sobre seu projeto ou oportunidade...",
        submitButton: "Enviar Mensagem",
      },
      successTitle: "Mensagem enviada!",
      successMessage: "Obrigado por entrar em contato. Responderei em breve.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      builtWith: "Desenvolvido com Next.js & Framer Motion",
    },
  },
};
