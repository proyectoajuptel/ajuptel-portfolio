"use client";

import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const DOCS_MAP: Record<string, { title: string; file: string }> = {
  // --- FASE 1 ---
  "caso_negocio_ajuptel": { 
    title: "Caso de Negocio", 
    file: "/docs/fase1/caso_negocio_ajuptel.pdf" 
  },
  "ACTA_DE_CONSTITUCION_AJUPTEL": { 
    title: "Acta de Constitución", 
    file: "/docs/fase1/ACTA_DE_CONSTITUCION_AJUPTEL.pdf" 
  },
  "vision_proyecto_ajuptel": { 
    title: "Registro de la Visión", 
    file: "/docs/fase1/vision_proyecto_ajuptel.pdf" 
  },
  "matriz_poder_interes_ajuptel": { 
    title: "Matriz de Poder e Interés", 
    file: "/docs/fase1/matriz_poder_interes_ajuptel.pdf" 
  },
  "registro_interesados_ajuptel": { 
    title: "Registro de Interesados", 
    file: "/docs/fase1/registro_interesados_ajuptel.pdf" 
  },
  "eleccion_equipo_scrum_ajuptel": { 
    title: "Equipo Scrum", 
    file: "/docs/fase1/eleccion_equipo_scrum_ajuptel.pdf" 
  },
  "product_backlog_ajuptel": { 
    title: "Product Backlog", 
    file: "/docs/fase1/product_backlog_ajuptel.pdf" 
  },
  "epicas_ajuptel": { 
    title: "Información para Épicas", 
    file: "/docs/fase1/epicas_ajuptel.pdf" 
  },
  "release_plan_ajuptel": { 
    title: "Plan de Lanzamiento", 
    file: "/docs/fase1/release_plan_ajuptel.pdf" 
  },
  "arquitectura_4mas1_ajuptel": { 
    title: "Arquitectura Inicial (4+1)", 
    file: "/docs/fase1/arquitectura_4mas1_ajuptel.pdf" 
  },
  "plan_trabajo_dev_ajuptel": { 
    title: "Plan de Trabajo", 
    file: "/docs/fase1/plan_trabajo_dev_ajuptel.pdf" 
  },
  "cronograma_dev_ajuptel": { 
    title: "Cronograma Detallado", 
    file: "/docs/fase1/cronograma_dev_ajuptel.pdf" 
  },
  "documento_inicial_ajuptel": { 
    title: "Documento Inicial", 
    file: "/docs/fase1/documento_inicial_ajuptel.pdf" 
  },
  "lean_inception_ajuptel": { 
    title: "Lean Inception", 
    file: "/docs/fase1/lean_inception_ajuptel.pdf" 
  },

  // --- FASE 2 ---
  "Fase2-SprintBacklogAjuptel": {
    title: "2.1. Sprint Backlog",
    file: "/docs/fase2/Fase2-SprintBacklogAjuptel.pdf"
  },
  "Fase2-Scrum-GestionProyectoAjuptel": {
    title: "2.2. Gestión Ágil - Marco Scrum",
    file: "/docs/fase2/Fase2-Scrum-GestionProyectoAjuptel.pdf"
  },
  "fase2_Reunion_sprint_planning_AJUPTEL": {
    title: "2.3. Reuniones Sprint Planning - Marco Scrum",
    file: "/docs/fase2/fase2_Reunion_sprint_planning_AJUPTEL.pdf"
  },

  // --- FASE 3 ---
  "repositorio_codigo_ajuptel": {
    title: "3.1. Repositorio de Código y Control de Versiones",
    file: "" // No requiere PDF local por ser un repositorio externo (GitHub)
  },
  "implementacion_ajuptel": {
    title: "3.2. Documento de Implementación AJUPTEL",
    file: "/docs/fase3/Implementacion_AJUPTEL.pdf"
    },
  "base_datos_ajudag2": {
   title: "3.3. Base de Datos AJUDAG2",
    file: "/docs/fase3/base_datos_ajudag2.pdf"
  },
  "diccionario_datos": {
    title: "3.4. Diccionario de Datos",
    file: "/docs/fase3/diccionario_datos.pdf"
  },
  "informe_normalizacion_y_analisis_3fn": {
    title: "3.5. Informe de Normalización y Análisis 3FN",
    file: "/docs/fase3/InformedeNormalizaciónyAnálisis3FN.pdf"
  },
  "informe_consolidado_mensual_implementacion_y_desarrollo": {
    title: "3.6. Informe Consolidado Mensual de Implementación y Desarrollo",
    file: "/docs/fase3/InformeConsolidadoMensualImplementacionyDesarrollo.pdf"
  },
  // --- FASE 4 ---
  "fase4_Informe_feedback_incremento_lecciones_aprendidas_AJUPTEL": {
    title: "4.1. Acta Revisión y Retrospectiva del Proyecto",
    file: "/docs/fase4/fase4_Informe_feedback_incremento_lecciones_aprendidas_AJUPTEL.pdf"
  },

  // --- FASE 5 (PRUEBAS DE SOFTWARE) ---
"fase5_informeconsolidadoPlanDePruebas": {
  title: "5.4.1. Informe Consolidado Plan de Pruebas",
  file: "/docs/fase5/pruebas/fase5_informeconsolidadoPlanDePruebas.pdf"
},
"Informe_de_Tests_AJUPTEL": {
  title: "5.4.2. Informe General de Tests AJUPTEL",
  file: "/docs/fase5/pruebas/Informe_de_Tests_AJUPTEL.pdf"
},
"Informe_Detallado_Pruebas_Funcionales_AJUDAG2": {
  title: "5.4.3. Informe Detallado de Pruebas Funcionales",
  file: "/docs/fase5/pruebas/Informe_Detallado_Pruebas_Funcionales_AJUDAG2.pdf"
},
"Informe_Resumido_Pruebas_Funcionales_AJUDAG2": {
  title: "5.4.4. Informe Resumido de Pruebas Funcionales",
  file: "/docs/fase5/pruebas/Informe_Resumido_Pruebas_Funcionales_AJUDAG2.pdf"
},
"informe_pruebas_Pruebas Unitarias y Funcionales_resumido": {
  title: "5.4.5. Informe Resumido de Pruebas Unitarias y Funcionales",
  file: "/docs/fase5/pruebas/informe_pruebas_Pruebas Unitarias y Funcionales_resumido .pdf"
},
"Informe_Pruebas_Integracion_AJUDAG2_Detallado": {
  title: "5.4.6. Informe Detallado de Pruebas de Integración",
  file: "/docs/fase5/pruebas/Informe_Pruebas_Integracion_AJUDAG2_Detallado.pdf"
},
"Informe_Pruebas_Integracion_AJUDAG2_Resumido": {
  title: "5.4.7. Informe Resumido de Pruebas de Integración",
  file: "/docs/fase5/pruebas/Informe_Pruebas_Integracion_AJUDAG2_Resumido.pdf"
},
"Informe_Detallado_Smoke_Testing_AJUDAG2": {
  title: "5.4.8. Informe Detallado de Smoke Testing",
  file: "/docs/fase5/pruebas/Informe_Detallado_Smoke_Testing_AJUDAG2.pdf"
},
"Informe_Resumido_Smoke_Testing_AJUDAG2": {
  title: "5.4.9. Informe Resumido de Smoke Testing",
  file: "/docs/fase5/pruebas/Informe_Resumido_Smoke_Testing_AJUDAG2.pdf"
},
"Informe_Detallado_Pruebas_Seguridad_AJUDAG2": {
  title: "5.4.10. Informe Detallado de Pruebas de Seguridad",
  file: "/docs/fase5/pruebas/Informe_Detallado_Pruebas_Seguridad_AJUDAG2.pdf"
},
"Informe_Resumido_Pruebas_Seguridad_AJUDAG2": {
  title: "5.4.11. Informe Resumido de Pruebas de Seguridad",
  file: "/docs/fase5/pruebas/Informe_Resumido_Pruebas_Seguridad_AJUDAG2.pdf"
},
"Informe_Detallado_Rendimiento_Compatibilidad_AJUDAG2": {
  title: "5.4.12. Informe Detallado Rendimiento y Compatibilidad",
  file: "/docs/fase5/pruebas/Informe_Detallado_Rendimiento_Compatibilidad_AJUDAG2.pdf"
},
"Informe_Resumido_Rendimiento_Compatibilidad_AJUDAG2": {
  title: "5.4.13. Informe Resumido Rendimiento y Compatibilidad",
  file: "/docs/fase5/pruebas/Informe_Resumido_Rendimiento_Compatibilidad_AJUDAG2.pdf"
},
"fase5_retrospectivafinal_AJUPTEL": {
  title: "5.1. Aportes a la Retrospectiva Final del Proyecto",
  file: "/docs/fase5/fase5_retrospectivafinal_AJUPTEL.pdf"
},
"manual_usuario_ajuptel": {
  title: "5.2. Manual de Usuario",
  file: "/docs/fase5/manual_usuario_ajuptel.pdf"
},
"manual_tecnico_ajuptel": {
  title: "5.3. Manual Técnico",
  file: "/docs/fase5/manual_tecnico_ajuptel.pdf"
}

  // --- FINALIZACIÓN ---
 // "fase4_Informe_feedback_incremento_lecciones_aprendidas_AJUPTEL": {
   // title: "4.1. Acta Revisión y Retrospectiva del Proyecto",
   // file: "/docs/fase4/fase4_Informe_feedback_incremento_lecciones_aprendidas_AJUPTEL.pdf"
 // }



};

export default function DocumentVisor() {
  const router = useRouter();
  const params = useParams();
  
  // Limpiamos el slug por si llega con espacios o formato extraño
  const slug = (params?.slug as string)?.trim();
  const doc = DOCS_MAP[slug];

  if (!doc) {
    return (
      <div className="p-10 max-w-xl mx-auto text-center bg-white rounded-2xl shadow-sm border mt-10">
        <h2 className="text-2xl font-bold text-red-600 mb-2">Documento no encontrado</h2>
        <p className="text-slate-600 mb-4">
          El navegador intentó buscar el slug: <code className="bg-slate-100 px-2 py-1 rounded text-slate-800 font-mono">&quot;{slug}&quot;</code>, pero no coincide exactamente con ninguna clave del sistema.
        </p>
        <div className="bg-slate-50 p-4 rounded-xl text-left text-xs mb-6 border">
          <p className="font-bold text-slate-700 mb-1">Claves válidas configuradas:</p>
          <ul className="list-disc pl-4 space-y-1 text-slate-500 font-mono">
            {Object.keys(DOCS_MAP).map((key) => (
              <li key={key}>{key}</li>
            ))}
          </ul>
        </div>
        <button onClick={() => router.back()} className="px-5 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold">
          Volver atrás
        </button>
      </div>
    );
  }

  const esXlsx = doc.file.toLowerCase().endsWith(".xlsx");

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b bg-slate-50">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="p-2 hover:bg-white rounded-full shadow-sm border">
            <ArrowLeft size={20} />
          </button>
          <span className="font-bold text-slate-900">{doc.title}</span>
        </div>
        <a href={doc.file} download className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold">
          {esXlsx ? "Descargar Excel" : "Descargar PDF"}
        </a>
      </div>
      <div className="flex-1 bg-slate-500 p-4 flex flex-col">
        {esXlsx ? (
          <div className="w-full h-full rounded-lg bg-white p-6 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-bold text-slate-800 mb-2">Este documento es una hoja de cálculo (.xlsx)</p>
            <p className="text-sm text-slate-500 mb-4">Los archivos de Excel se descargan directamente para visualizarse con todas sus fórmulas y formato original.</p>
            <a href={doc.file} download className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md transition-all">
              Descargar y Abrir Excel
            </a>
          </div>
        ) : (
          <iframe src={doc.file} className="w-full h-full rounded-lg bg-white" title={doc.title} />
        )}
      </div>
    </div>
  );
}