/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { FileText, Download, Eye, ArrowLeft, ShieldCheck, Sparkles } from "lucide-react"

export default function PruebasSoftwarePage() {
  // Mapeo exacto de la lista de archivos de pruebas en public/docs/fase5/pruebas/
  const documentosPruebas = [
    {
      id: "p5-4-1",
      nombre: "5.4.1. Informe Consolidado Plan de Pruebas",
      slug: "fase5_informeconsolidadoPlanDePruebas",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/fase5_informeconsolidadoPlanDePruebas.docx",
      linkPdf: "/docs/fase5/pruebas/fase5_informeconsolidadoPlanDePruebas.pdf"
    },
    {
      id: "p5-4-2",
      nombre: "5.4.2. Informe General de Tests AJUPTEL",
      slug: "Informe_de_Tests_AJUPTEL",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/Informe_de_Tests_AJUPTEL.docx",
      linkPdf: "/docs/fase5/pruebas/Informe_de_Tests_AJUPTEL.pdf"
    },
    {
      id: "p5-4-3",
      nombre: "5.4.3. Informe Detallado de Pruebas Funcionales",
      slug: "Informe_Detallado_Pruebas_Funcionales_AJUDAG2",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/Informe_Detallado_Pruebas_Funcionales_AJUDAG2.docx",
      linkPdf: "/docs/fase5/pruebas/Informe_Detallado_Pruebas_Funcionales_AJUDAG2.pdf"
    },
    {
      id: "p5-4-4",
      nombre: "5.4.4. Informe Resumido de Pruebas Funcionales",
      slug: "Informe_Resumido_Pruebas_Funcionales_AJUDAG2",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/Informe_Resumido_Pruebas_Funcionales_AJUDAG2.docx",
      linkPdf: "/docs/fase5/pruebas/Informe_Resumido_Pruebas_Funcionales_AJUDAG2.pdf"
    },
    {
      id: "p5-4-5",
      nombre: "5.4.5. Informe Resumido de Pruebas Unitarias y Funcionales",
      slug: "informe_pruebas_Pruebas Unitarias y Funcionales_resumido",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/informe_pruebas_Pruebas Unitarias y Funcionales_resumido.docx",
      linkPdf: "/docs/fase5/pruebas/informe_pruebas_Pruebas Unitarias y Funcionales_resumido .pdf"
    },
    {
      id: "p5-4-6",
      nombre: "5.4.6. Informe Detallado de Pruebas de Integración",
      slug: "Informe_Pruebas_Integracion_AJUDAG2_Detallado",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/Informe_Pruebas_Integracion_AJUDAG2_Detallado.docx",
      linkPdf: "/docs/fase5/pruebas/Informe_Pruebas_Integracion_AJUDAG2_Detallado.pdf"
    },
    {
      id: "p5-4-7",
      nombre: "5.4.7. Informe Resumido de Pruebas de Integración",
      slug: "Informe_Pruebas_Integracion_AJUDAG2_Resumido",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/Informe_Pruebas_Integracion_AJUDAG2_Resumido.docx",
      linkPdf: "/docs/fase5/pruebas/Informe_Pruebas_Integracion_AJUDAG2_Resumido.pdf"
    },
    {
      id: "p5-4-8",
      nombre: "5.4.8. Informe Detallado de Smoke Testing",
      slug: "Informe_Detallado_Smoke_Testing_AJUDAG2",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/Informe_Detallado_Smoke_Testing_AJUDAG2.docx",
      linkPdf: "/docs/fase5/pruebas/Informe_Detallado_Smoke_Testing_AJUDAG2.pdf"
    },
    {
      id: "p5-4-9",
      nombre: "5.4.9. Informe Resumido de Smoke Testing",
      slug: "Informe_Resumido_Smoke_Testing_AJUDAG2",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/Informe_Resumido_Smoke_Testing_AJUDAG2.docx",
      linkPdf: "/docs/fase5/pruebas/Informe_Resumido_Smoke_Testing_AJUDAG2.pdf"
    },
    {
      id: "p5-4-10",
      nombre: "5.4.10. Informe Detallado de Pruebas de Seguridad",
      slug: "Informe_Detallado_Pruebas_Seguridad_AJUDAG2",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/Informe_Detallado_Pruebas_Seguridad_AJUDAG2.docx",
      linkPdf: "/docs/fase5/pruebas/Informe_Detallado_Pruebas_Seguridad_AJUDAG2.pdf"
    },
    {
      id: "p5-4-11",
      nombre: "5.4.11. Informe Resumido de Pruebas de Seguridad",
      slug: "Informe_Resumido_Pruebas_Seguridad_AJUDAG2",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/Informe_Resumido_Pruebas_Seguridad_AJUDAG2.docx",
      linkPdf: "/docs/fase5/pruebas/Informe_Resumido_Pruebas_Seguridad_AJUDAG2.pdf"
    },
    {
      id: "p5-4-12",
      nombre: "5.4.12. Informe Detallado Rendimiento y Compatibilidad",
      slug: "Informe_Detallado_Rendimiento_Compatibilidad_AJUDAG2",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/Informe_Detallado_Rendimiento_Compatibilidad_AJUDAG2.docx",
      linkPdf: "/docs/fase5/pruebas/Informe_Detallado_Rendimiento_Compatibilidad_AJUDAG2.pdf"
    },
    {
      id: "p5-4-13",
      nombre: "5.4.13. Informe Resumido Rendimiento y Compatibilidad",
      slug: "Informe_Resumido_Rendimiento_Compatibilidad_AJUDAG2",
      tipo: "PDF, WORD",
      linkWord: "/docs/fase5/pruebas/Informe_Resumido_Rendimiento_Compatibilidad_AJUDAG2.docx",
      linkPdf: "/docs/fase5/pruebas/Informe_Resumido_Rendimiento_Compatibilidad_AJUDAG2.pdf"
    }
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto bg-slate-50 min-h-screen space-y-6">
      
      {/* Enlace de retorno */}
      <div>
        <Link 
          href="/dashboard/fase5" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 uppercase tracking-wider transition-colors group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Volver a Fase V
        </Link>
      </div>

      {/* Encabezado y KataleIA */}
      <div className="flex flex-col xl:flex-row justify-between items-stretch gap-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex flex-col justify-center space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
              <ShieldCheck size={28} className="stroke-[2.5]" />
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
              5.4. Suite Completa de Pruebas de Software
            </h1>
          </div>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
          <p className="text-sm md:text-base text-slate-500 max-w-2xl pt-1 leading-relaxed font-medium">
            Documentación técnica de garantía de calidad: planes consolidados, pruebas unitarias, integradas, smoke testing, seguridad, rendimiento y compatibilidad del sistema AJUPTEL.
          </p>
        </div>

        <div className="w-full xl:w-105 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 border-2 border-blue-500/40 rounded-3xl p-5 text-white shadow-xl flex items-center gap-5 relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative shrink-0">
            <div className="w-24 h-28 md:w-28 md:h-32 rounded-2xl bg-blue-600/20 border-2 border-blue-400/50 overflow-hidden shadow-lg flex items-center justify-center">
              <img 
                src="/imagenes/kataleia.png" 
                alt="KataleIA" 
                className="w-full h-full object-cover object-top scale-125 pt-2"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-slate-900 animate-pulse" />
          </div>

          <div className="space-y-2 flex-1">
            <div className="inline-flex items-center gap-1.5 bg-blue-600/30 text-blue-300 border border-blue-400/30 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
              <Sparkles size={12} className="text-blue-400" />
              <span>KataleIA • QA Assistant</span>
            </div>
            <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-semibold">
              Aquí puedes revisar individualmente todos los reportes de pruebas funcionales y no funcionales ejecutados.
            </p>
          </div>
        </div>
      </div>

      {/* Grid de Informes de Pruebas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentosPruebas.map((doc) => (
          <div key={doc.id} className="bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow rounded-xl flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm md:text-base leading-snug">{doc.nombre}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-wider">{doc.tipo}</p>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <Link href={`/visor/${doc.slug}`} className="p-3 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-colors">
                <Eye size={18} />
              </Link>
              <a href={doc.linkWord} download className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors">
                <Download size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}