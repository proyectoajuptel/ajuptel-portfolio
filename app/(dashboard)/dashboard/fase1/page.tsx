"use client"

import { FileText, Download, Eye } from "lucide-react"

export default function FaseUnoPage() {
  const documentos = [
    { id: "1", nombre: "Acta de Constitución", tipo: "PDF", link: "/docs/acta.pdf" },
    { id: "2", nombre: "Caso de Negocio", tipo: "PDF", link: "/docs/caso.pdf" },
    { id: "3", nombre: "Product Backlog (26 Historias)", tipo: "XLSX", link: "/docs/backlog.xlsx" },
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <div>
        <h2 className="text-4xl font-black italic text-slate-900">Fase I: Análisis</h2>
        <p className="text-slate-500 mt-2 font-medium">Documentación técnica inicial y requerimientos de AJUPTEL.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentos.map((doc) => (
          <div key={doc.id} className="bg-white p-6  border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <FileText size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-800">{doc.nombre}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{doc.tipo}</p>
              </div>
            </div>
            <div className="flex gap-2">
               <a href={doc.link} target="_blank" className="p-3 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-colors">
                <Eye size={18} />
              </a>
              <a href={doc.link} download className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors">
                <Download size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}