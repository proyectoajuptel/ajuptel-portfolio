// app/(dashboard)/dashboard/hojaRuta.ts
export const fasesProyecto = [
  {
    id: 1,
    titulo: "Fase I: Inicio",
    estado: "Activa - En Revisión",
    color: "bg-emerald-600",
    descripcion: "Definición de la visión del proyecto, identificación del Equipo Scrum, y creación del Acta de Constitución junto con el Product Backlog inicial.",
    hitos: ["Visión del Proyecto", "Acta de Constitución", "Product Backlog (28 HU)","Más de 10 documentos básicos "],
    bloqueado: false,
    progreso: 100
  },
  {
    id: 2,
    titulo: "Fase II: Estimación y Planificación",
    estado: "En Proceso",
    color: "bg-blue-600",
    descripcion: "Planificación de las iteraciones, estimación del esfuerzo de las historias de usuario utilizando Planning Poker y estructuración del cronograma de Sprints.",
    hitos: ["User Stories Estimadas", "Plan de Lanzamiento", "Cronograma de Sprints"],
    bloqueado: false,
    progreso: 100
  },
  {
    id: 3,
    titulo: "Fase III: Implementación",
    estado: "Por Iniciar", // Tu fase activa actual
    color: "bg-slate-400",
    descripcion: "Creación de los entregables del producto. Ejecución activa del Sprint 0 (configuración de arquitectura) y el Sprint 1, gestionando las actividades diarias.",
    hitos: ["7 sprints culminados",  "Incremento de Software"],
    bloqueado: true,
    progreso: 0
  },
  {
    id: 4,
    titulo: "Fase IV: Revisión y Retrospectiva",
    estado: "Por Iniciar",
    color: "bg-slate-400",
    descripcion: "Inspección del incremento de software desarrollado con los miembros de la asociación (Sprint Review) y evaluación interna del proceso de trabajo del equipo (Retrospectiva).",
    hitos: [ "Revisiones y lecciones aprendidas"],
    bloqueado: true,
    progreso: 0
  },
  {
    id: 5,
    titulo: "Fase V: Lanzamiento",
    estado: "Por Iniciar",
    color: "bg-slate-400",
    descripcion: "Despliegue final del sistema administrativo en el entorno de producción, entrega de manuales técnicos/usuario y cierre formal del proyecto.",
    hitos: ["Paso a Producción", "Entrega de Manuales", "Cierre del Proyecto"],
    bloqueado: true,
    progreso: 0
  }
];