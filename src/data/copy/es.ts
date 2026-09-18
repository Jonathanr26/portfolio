import type { Copy } from "./types";

export const es: Copy = {
  locale: "es",
  otherLocaleName: "English",
  switchLabel: "Leer esta página en inglés",

  role: "Full Stack Developer",
  railTagline: "Full Stack Developer. Enfocado en frontend, y cómodo en la API de abajo.",
  location: "Colima, México",
  workMode: "Remoto",
  timezone: "GMT-6",
  availableLabel: "Abierto a posiciones remotas",

  statement: "Construyo los dashboards donde se opera un negocio.",
  intro:
    "Tres años en el núcleo administrativo de sistemas en producción: tarjetas corporativas y transferencias SPEI, comisiones, expedientes escolares, aprobaciones internas. Lo difícil se repite — acceso por rol sobre datos que nadie debería ver por accidente, autenticación que aguanta, tablas densas que siguen rápidas. Más profundo en fintech, pero la ingeniería se traslada. Next.js y TypeScript al frente, NestJS y Postgres detrás.",
  cvLink: "Descargar CV",
  cardHint: "Haz clic en la tarjeta para ver mis datos.",
  cardTurnBack: "Voltear",
  cardTurnOver: "Voltear la tarjeta para ver mis datos de contacto",
  cardFields: { email: "Correo", phone: "Teléfono", linkedin: "LinkedIn", github: "GitHub" },
  cardLocation: "Colima, México / Remoto",
  cardSincePrefix: "Desde",

  nav: {
    top: "Intro",
    work: "Experiencia",
    builds: "Proyectos",
    stack: "Stack",
    code: "Código público",
    contact: "Contacto",
  },
  headings: {
    work: "Experiencia",
    builds: "Proyectos",
    stack: "Stack",
    code: "Código público",
    contact: "Contacto",
  },
  meta: {
    work: "3 puestos desde 2023",
    builds: "Trabajo de cliente, sin nombres",
    stack: "Lo que uso a diario primero",
    code: "Cosas pequeñas, de código abierto",
    contact: "Remoto, GMT-6",
  },

  experience: [
    {
      company: "Cliente confidencial",
      title: "Full Stack Developer",
      cvPeriod: "Ene 2026 – Actual",
      period: "2026 — Hoy",
      place: "Remoto",
      current: true,
      bullets: [
        "Construí desde cero un dashboard fintech B2B en Next.js 15 (tarjetas corporativas, transferencias SPEI, comisiones, reportes) y trabajé en su app móvil de React Native (Expo) con movimientos y transferencias en tiempo real.",
        "Lo aseguré con JWT en cookies HttpOnly, guardas de ruta en middleware, renovación silenciosa de sesión y control de acceso por rol.",
        "Aporté al backend en NestJS (Clean Architecture / DDD): autenticación con refresh token, gestión de usuarios y roles, integración con el gateway de Dock, 2FA por OTP y TOTP, webhooks y reportes en PDF.",
        "Entregué el frontend completo de una plataforma de comisiones en Next.js 16 y React 19: módulos de administrador, cliente, beneficiario, movimientos y esquemas, con Zustand.",
        "Construí el flujo de suscripción y tokenización de tarjetas para cobro recurrente en dos productos, y una plataforma de compliance con portales separados para equipo interno y cliente.",
        "Cubrí ese backend con pruebas unitarias en Jest, sobre casos de uso, servicios, repositorios y guardas de autenticación.",
      ],
    },
    {
      company: "The Rocket Code",
      title: "Full Stack Developer",
      cvPeriod: "Ago 2023 – Ene 2026",
      period: "2023 — 2026",
      place: "Remoto",
      bullets: [
        "Construí y mantuve dashboards en Next.js para plataformas de tarjetas de crédito corporativas: gestión de usuarios, historial de transacciones y controles de tarjeta.",
        "Integré el flujo completo de transacciones contra las APIs de Dock y SPEI.",
        "Subí más de 60% el desempeño en Lighthouse corrigiendo LCP y CLS.",
        "Monté CI/CD en Bitbucket Pipelines para despliegues automáticos.",
        "Refactoricé código de frontend hacia componentes reutilizables y mejor accesibilidad.",
      ],
    },
    {
      company: "Peña Colorada",
      title: "Software Engineer",
      cvPeriod: "Ene 2023 – Jun 2023",
      period: "2023",
      place: "Colima, México",
      bullets: [
        "Construí un sistema interno de solicitudes de servicio de TI con flujos de aprobación automáticos.",
        "Diseñé la API del backend en Express.js y MS SQL Server.",
        "Levanté y validé requerimientos directamente con áreas no técnicas.",
      ],
    },
  ],

  builds: [
    {
      name: "Plataforma de tarjetas corporativas",
      summary:
        "Las empresas emiten tarjetas, mueven dinero por SPEI y sacan sus propios reportes a PDF y Excel. Las vistas por rol mantienen a finanzas, administradores y empleados fuera de los datos de los demás. La app móvil lleva la misma cuenta, con movimientos y transferencias en tiempo real.",
      scope: "Arquitectura, todo el frontend web, funcionalidad móvil, parte de la API",
      stack: ["Next.js 15", "CSS Modules", "Zustand", "React Native", "Expo", "NestJS", "PostgreSQL", "Redis", "AWS S3"],
    },
    {
      name: "Plataforma de comisiones",
      summary:
        "Calcula y da seguimiento a comisiones entre administradores, clientes y beneficiarios, con esquemas configurables por convenio y el historial completo de movimientos.",
      scope: "Frontend completo, desde cero",
      stack: ["Next.js 16", "React 19", "Tailwind v4", "Zustand"],
    },
    {
      name: "Plataforma de gestión escolar",
      summary:
        "Sistema multi-tenant con portales separados para administradores, docentes y familias. Un docente puede pertenecer a varios grupos y secciones, una relación N:M que el modelo de datos resuelve en lugar de las pantallas. Las suscripciones se cobran con tarjeta guardada y tokenizada.",
      scope: "Frontend y backend, modelo de datos, flujo de suscripción y tokenización",
      stack: ["Next.js 16", "React 19", "shadcn/ui", "NestJS 11", "Prisma", "PostgreSQL"],
    },
    {
      name: "Plataforma de compliance",
      summary:
        "Dos audiencias sobre un mismo backend: el equipo que hace el trabajo y el cliente que le da seguimiento. Cada lado ve únicamente lo que su rol permite, y el backend va cubierto con pruebas unitarias.",
      scope: "Frontend de ambos portales, flujo de suscripción y tokenización, parte del backend",
      stack: ["Next.js 16", "React 19", "Zustand", "NestJS 11", "Prisma", "PostgreSQL", "Redis"],
    },
    {
      name: "Portal de acceso e identidad",
      summary:
        "Punto único de entrada para autenticación: segundo factor por OTP y TOTP, manejo de cuentas bloqueadas y flujos de contraseña temporal.",
      scope: "Frontend y apoyo en backend",
      stack: ["Next.js", "NestJS 11", "Redis", "MongoDB", "PostgreSQL"],
    },
  ],

  stack: {
    frontend: "Frontend",
    backend: "Backend y APIs",
    payments: "Pagos",
    data: "Datos",
    delivery: "Despliegue y pruebas",
    rest: "Lo demás",
  },

  repos: {
    pomelo_integration: {
      label: "Integración con la API de Pomelo",
      summary:
        "Front y back contra la API de emisión de tarjetas de Pomelo: registra un usuario y luego le emite una tarjeta. React con Vite de un lado, una API en Node que guarda las credenciales del otro.",
    },
    "challenge-kosmos-reactjs": {
      label: "Canvas con arrastre y redimensión",
      summary:
        "Componentes que se arrastran y redimensionan dentro de un contenedor acotado, con selección desde ocho puntos, líneas guía al arrastrar y una imagen distinta ajustada en cada uno.",
    },
    "dashboard-analytics": {
      label: "Dashboard de analítica",
      summary: "Ejercicio de gráficas y acomodo de métricas, desplegado en Vercel.",
    },
    "user-management-dashboard": {
      label: "Gestión de usuarios",
      summary: "CRUD, roles y estado de tabla resueltos en TypeScript.",
    },
    "my-weather-dashboard": {
      label: "Dashboard del clima",
      summary: "Consume una API pública y renderiza el estado del pronóstico.",
    },
    "convert-excel-txt": {
      label: "Convertidor de Excel a texto",
      summary: "Conversión de archivos solo en el navegador, sin servidor.",
    },
  },
  repoLive: "Ver",
  repoSource: "Código",

  contactAsk: "¿Buscas alguien para frontend o full stack? Escríbeme.",
  educationLabel: "Formación",
  education:
    "Ingeniería en Software, Universidad de Colima, 2019 — 2023. Titulado, cédula profesional (SEP).",
  builtWith: "Hecho con Next.js y Tailwind. Español nativo, inglés de trabajo.",
  skipToContent: "Ir al contenido",
  sectionsNavLabel: "Secciones",

  metaTitle: "Jonathan Rodriguez — Full Stack Developer",
  metaDescription:
    "Full Stack Developer enfocado en frontend. Tres años construyendo el núcleo administrativo de sistemas en producción en fintech, SaaS empresarial y educación, con Next.js, TypeScript y NestJS. Colima, México, remoto.",

  cv: {
    file: "cv-es.pdf",
    saveAs: "Jonathan-Rodriguez-CV-es.pdf",
    headline: "Full Stack Developer / React / Next.js / TypeScript / Node.js / NestJS",
    summary:
      "Full Stack Developer con más de 3 años construyendo aplicaciones web y móviles escalables en fintech, SaaS empresarial y plataformas educativas. Entrega de ciclo completo, de la arquitectura y el frontend al diseño de APIs y apps móviles. Enfoque en arquitectura limpia, seguridad por roles y componentes reutilizables. Experiencia en equipos ágiles, CI/CD y desarrollo asistido por IA.",
    languages: "Español (nativo), inglés (de trabajo)",
    labels: {
      summary: "Resumen profesional",
      experience: "Experiencia laboral",
      skills: "Habilidades técnicas",
      background: "Formación e idiomas",
      education: "Formación",
      languages: "Idiomas",
    },
  },
};
