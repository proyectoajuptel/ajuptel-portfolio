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
    file: "/docs/fase2/Fase2-SprintBacklogAjuptel.xlsx"
  },
  "Fase2-Scrum-GestionProyectoAjuptel": {
    title: "2.2. Gestión Ágil - Marco Scrum",
    file: "/docs/fase2/Fase2-Scrum-GestionProyectoAjuptel.xlsx"
  }
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