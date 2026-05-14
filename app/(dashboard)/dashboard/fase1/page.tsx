"use client"
import { useState, useEffect, useCallback } from "react"
import { FileText, Download, Eye, Save, History, UserCheck, Loader2 } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

interface Revision {
  id: number
  texto: string
  fecha: string
  fase: string
}

export default function FaseUnoPage() {
  const documentos = [
    { id: "1", nombre: "Acta de Constitución", tipo: "PDF", slug: "ACTA_DE_CONSTITUCION_AJUPTEL", linkWord: "/docs/fase1/ACTA_DE_CONSTITUCION_AJUPTEL.docx" },
    { id: "2", nombre: "Caso de Negocio", tipo: "PDF", slug: "caso-negocio", linkWord: "/docs/fase1/caso.docx" },
    { id: "3", nombre: "Product Backlog (26 Historias)", tipo: "XLSX", slug: "product-backlog", linkWord: "/docs/fase1/backlog.xlsx" },
  ]

  const [nuevaNota, setNuevaNota] = useState("")
  const [historial, setHistorial] = useState<Revision[]>([])
  const [cargando, setCargando] = useState(true)

  const cargarNotas = useCallback(async () => {
    try {
      setCargando(true)
      const { data, error } = await supabase
        .from('revisiones')
        .select('*')
        .eq('fase', 'fase1')
        .order('fecha', { ascending: false })
      
      if (error) throw error
      if (data) setHistorial(data as Revision[])
    } catch (err) {
      console.error("Error al cargar:", err)
    } finally {
      setCargando(false)
    }
  }, [])

  useEffect(() => {
    cargarNotas()
  }, [cargarNotas])

  const guardarRevision = async () => {
    if (!nuevaNota.trim()) return
    const { error } = await supabase
      .from('revisiones')
      .insert([{ texto: nuevaNota, fase: 'fase1' }])

    if (!error) {
      setNuevaNota("")
      cargarNotas()
    } else {
      alert("Error al guardar: " + error.message)
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <div>
        <h2 className="text-4xl font-black italic text-slate-900 uppercase">Fase I: Análisis</h2>
        <p className="text-slate-500 mt-2 font-medium">Documentación técnica inicial de AJUPTEL.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentos.map((doc) => (
          <div key={doc.id} className="bg-white p-6 border border-slate-100 shadow-sm rounded-2xl flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <FileText size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-800">{doc.nombre}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">{doc.tipo}</p>
              </div>
            </div>
            <div className="flex gap-2">
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

      <div className="mt-12 bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <UserCheck className="text-blue-400" size={24} />
          <h3 className="text-xl font-bold">Retroalimentación del Profesor</h3>
        </div>

        <div className="relative mb-8">
          <textarea 
            value={nuevaNota}
            onChange={(e) => setNuevaNota(e.target.value)}
            placeholder="Escriba las correcciones aquí..."
            className="w-full h-32 p-5 bg-slate-800/50 border border-slate-700 rounded-2xl text-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={guardarRevision} className="absolute bottom-4 right-4 flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95">
            <Save size={18} /> Guardar Nota
          </button>
        </div>

        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            <History size={14} /> Historial de Evolución
          </h4>
          
          {cargando ? (
            <div className="flex justify-center py-4">
              <Loader2 className="animate-spin text-blue-500" />
            </div>
          ) : historial.length === 0 ? (
            <p className="text-center py-6 text-slate-600 text-sm italic">No hay notas registradas.</p>
          ) : (
            historial.map((item, index) => {
              // Cálculo de versión automática
              const numeroVersion = historial.length - index;

              return (
                <div key={item.id} className="bg-slate-800/30 border border-slate-700/50 p-5 rounded-2xl transition-all hover:border-blue-500/30">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-600 text-[10px] px-2 py-0.5 rounded-lg font-black text-white shadow-sm">
                        V{numeroVersion}
                      </span>
                      <span className="text-[10px] font-black text-blue-400 uppercase tracking-tighter">Revisión Oficial</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold italic">
                      {new Date(item.fecha).toLocaleString()}
                    </span>
                  </div>
                   <p className="text-slate-300 text-sm font-medium leading-relaxed italic">
                   &ldquo;{item.texto}&rdquo;
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  )
}