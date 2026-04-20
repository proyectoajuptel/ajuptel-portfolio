// app/(dashboard)/dashboard/fases.ts
export const fasesProyecto = [
  {
    id: 1,
    titulo: "Fase I: Análisis y Requerimientos",
    estado: "En Proceso",
    color: "bg-blue-600",
    descripcion: "Levantamiento de información técnica y estratégica de la asociación.",
    hitos: ["Caso de Negocio", "Acta de Constitución", "Product Backlog (26 Historias)"],
    bloqueado: false
  },
  {
    id: 2,
    titulo: "Fase II: Diseño de la Solución",
    estado: "Por Iniciar",
    color: "bg-gray-400",
    descripcion: "Modelado de base de datos y diseño de interfaces UX/UI.",
    hitos: ["Diagrama Entidad-Relación", "Prototipos en Figma"],
    bloqueado: true
  },
  {
    id: 3,
    titulo: "Fase III: Desarrollo (Sprints)",
    estado: "Por Iniciar",
    color: "bg-gray-400",
    descripcion: "Construcción del sistema (NestJS + Angular + MySQL).",
    hitos: ["Sprint 0", "Sprint 1", "Integración de API"],
    bloqueado: true
  },
  {
    id: 4,
    titulo: "Fase IV: Pruebas y QA",
    estado: "Por Iniciar",
    color: "bg-gray-400",
    descripcion: "Control de calidad y pruebas de usabilidad con asociados.",
    hitos: ["Pruebas Unitarias", "Pruebas de Aceptación"],
    bloqueado: true
  }
];