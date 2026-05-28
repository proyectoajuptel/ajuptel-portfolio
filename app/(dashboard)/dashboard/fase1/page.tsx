"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { FileText, Download, Eye, Save, History, UserCheck, Loader2, ArrowLeft, FolderOpen } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

interface Revision {
  id: number
  texto: string
  fecha: string
  fase: string
  documento?: string
}

export default function FaseUnoPage() {
  const documentos = [
    { id: "p1-init-1", nombre: "0. Documento Inicial", slug: "documento_inicial_ajuptel", tipo: "PDF,WORD", linkWord: "/docs/fase1/documento_inicial_ajuptel.docx" },
    { id: "p1-init-2", nombre: "0. Lean Inception", slug: "lean_inception_ajuptel", tipo: "PDF,PPTX", linkWord: "/docs/fase1/lean_inception_ajuptel.pptx" },
    { id: "p1-1", nombre: "1.1. Caso de Negocio", slug: "caso_negocio_ajuptel", tipo: "WORD", linkWord: "/docs/fase1/caso_negocio_ajuptel.docx" },
    { id: "p1-2", nombre: "1.2. Acta de Constitución", slug: "ACTA_DE_CONSTITUCION_AJUPTEL", tipo: "PDF,WORD", linkWord: "/docs/fase1/ACTA_DE_CONSTITUCION_AJUPTEL.docx" },
    { id: "p1-3", nombre: "1.3. Registro de la Visión", slug: "vision_proyecto_ajuptel", tipo: "PDF,WORD", linkWord: "/docs/fase1/vision_proyecto_ajuptel.docx" },
    { id: "p1-4", nombre: "1.4. Matriz de Poder", slug: "matriz_poder_interes_ajuptel", tipo: "PDF,DOC", linkWord: "/docs/fase1/matriz_poder_interes_ajuptel.docx" },
    { id: "p1-5", nombre: "1.5. Registro de Interesados", slug: "registro_interesados_ajuptel", tipo: "EXCEL", linkWord: "/docs/fase1/registro_interesados_ajuptel.doc" },
    { id: "p1-6", nombre: "1.6. Equipo Scrum", slug: "eleccion_equipo_scrum_ajuptel", tipo: "PDF,WORD", linkWord: "/docs/fase1/eleccion_equipo_scrum_ajuptel.docx" },
    { id: "p1-7", nombre: "1.7. Product Backlog", slug: "product_backlog_ajuptel", tipo: "PDF,XLSX", linkWord: "/docs/fase1/product_backlog_ajuptel.xlsx" },
    { id: "p1-7a", nombre: "1.7.a. Información para Épicas ", slug: "epicas_ajuptel", tipo: "PDF,WORD", linkWord: "/docs/fase1/epicas_ajuptel.docx" },
    { id: "p1-8", nombre: "1.8. Plan de Lanzamiento", slug: "release_plan_ajuptel", tipo: "PDF,WORD", linkWord: "/docs/fase1/release_plan_ajuptel.docx" },
    { id: "p1-9", nombre: "1.9. Arquitectura Inicial", slug: "arquitectura_4mas1_ajuptel", tipo: "PDF,WORD", linkWord: "/docs/fase1/arquitectura_4mas1_ajuptel.docx" },
    { id: "p1-10", nombre: "1.10. Plan de Trabajo", slug: "plan_trabajo_dev_ajuptel", tipo: "PDF,WORD", linkWord: "/docs/fase1/plan_trabajo_dev_ajuptel.docx" },
    { id: "p1-11", nombre: "1.11. Cronograma Detallado", slug: "cronograma_dev_ajuptel", tipo: "PDF,WORD", linkWord: "/docs/fase1/cronograma_dev_ajuptel.docx" }
  ]

  const [nuevaNota, setNuevaNota] = useState("")
  const [historial, setHistorial] = useState<Revision[]>([])
  const [cargando, setCargando] = useState(true)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

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

  const alternarEtiquetaEnTexto = (nombreDoc: string) => {
    const formatoEtiqueta = `[${nombreDoc}]: `
    
    if (nuevaNota.includes(formatoEtiqueta)) {
      const textoLimpio = nuevaNota.replace(formatoEtiqueta, "").trim()
      setNuevaNota(textoLimpio)
    } else {
      const textarea = textareaRef.current
      if (textarea) {
        const inicio = textarea.selectionStart
        const fin = textarea.selectionEnd
        
        const prefijo = nuevaNota.length > 0 && inicio > 0 ? "\n" : ""
        const nuevoTexto = 
          nuevaNota.substring(0, inicio) + 
          prefijo + formatoEtiqueta + 
          nuevaNota.substring(fin)
        
        setNuevaNota(nuevoTexto)
        
        setTimeout(() => {
          textarea.focus()
          const nuevaPosicion = inicio + prefijo.length + formatoEtiqueta.length
          textarea.setSelectionRange(nuevaPosicion, nuevaPosicion)
        }, 50)
      } else {
        setNuevaNota(prev => prev + (prev.length > 0 ? "\n" : "") + formatoEtiqueta)
      }
    }
  }

  const obtenerEtiquetasDeTexto = (texto: string) => {
    const encontradas: string[] = []
    documentos.forEach(doc => {
      if (texto.includes(`[${doc.nombre}]:`)) {
        found: encontradas.push(doc.nombre)
      }
    })
    return encontradas.length > 0 ? encontradas : ["General / Fase I"]
  }

  const guardarRevision = async () => {
    if (!nuevaNota.trim()) return
    
    const etiquetasUsadas = documentos
      .filter(doc => nuevaNota.includes(`[${doc.nombre}]:`))
      .map(doc => doc.nombre)

    const documentoColumna = etiquetasUsadas.length > 0 
      ? etiquetasUsadas.join(", ") 
      : "General / Fase I"

    const { error } = await supabase
      .from('revisiones')
      .insert([{ 
        texto: nuevaNota, 
        fase: 'fase1',
        documento: documentoColumna
      }])

    if (!error) {
      setNuevaNota("")
      cargarNotas()
    } else {
      alert("Error al guardar: " + error.message)
    }
  }

  return (
    <div className="p-8 max-w-7xl mx-auto bg-slate-50 min-h-screen space-y-6">
      
      {/* Botón Enlace de Retorno al Dashboard de Fases */}
      <div>
        <Link 
          href="/dashboard/fases" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 uppercase tracking-wider transition-colors group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Volver a Fases
        </Link>
      </div>

      {/* Encabezado Unificado Corporativo */}
      <div className="space-y-2 mb-10">
        <div className="flex items-center gap-3">
          {/* Icono corporativo con fondo suave */}
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <FolderOpen size={24} className="stroke-[2.5]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
            Fase I: Inicio
          </h1>
        </div>
        {/* Línea azul característica del sistema */}
        <div className="h-1 w-16 bg-blue-600 rounded-full" />
        <p className="text-sm text-slate-500 max-w-3xl pt-1 leading-relaxed font-medium">
          Artefactos de inicio, fundamentación y documentación técnica inicial de AJUPTEL Carabobo.
        </p>
      </div>

      {/* GRID DOCUMENTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentos.map((doc) => (
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

      {/* PANEL DEL PROFESOR */}
      <div className="mt-12 bg-slate-900 rounded-4xl p-8 text-white shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <UserCheck className="text-blue-400" size={24} />
          <h3 className="text-lg font-bold uppercase tracking-tight">Retroalimentación del Profesor</h3>
        </div>
        
        {/* Selector de Inyección Directa */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
            Haz clic en un documento para insertar su etiqueta en el cuadro de texto:
          </label>
          <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700">
            {documentos.map((doc) => {
              const estaActivoEnTexto = nuevaNota.includes(`[${doc.nombre}]:`)
              return (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => alternarEtiquetaEnTexto(doc.nombre)}
                  className={`text-xs px-3 py-1.5 font-bold rounded-xl border transition-all duration-200 select-none ${
                    estaActivoEnTexto
                      ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/20 scale-95"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                  }`}
                >
                  {estaActivoEnTexto ? "✓ " : "+ "} {doc.nombre}
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative">
          <textarea 
            ref={textareaRef}
            value={nuevaNota}
            onChange={(e) => setNuevaNota(e.target.value)}
            placeholder="Haz clic arriba en cualquier documento para etiquetarlo aquí directamente..."
            className="w-full h-44 p-5 pb-14 bg-slate-800/50 border border-slate-700 rounded-2xl text-slate-200 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-600 font-mono text-sm leading-relaxed"
          />
          <button onClick={guardarRevision} className="absolute bottom-4 right-4 flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-600/10">
            <Save size={18} /> Guardar Nota
          </button>
        </div>

        {/* HISTORIAL */}
        <div className="space-y-4 pt-6 border-t border-slate-800">
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
              const numeroVersion = historial.length - index;
              const etiquetasAmostrar = obtenerEtiquetasDeTexto(item.texto)

              return (
                <div key={item.id} className="bg-slate-800/30 border border-slate-700/50 p-5 rounded-xl transition-all hover:border-blue-500/30">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="bg-blue-600 text-[10px] px-2 py-0.5 rounded-lg font-black text-white shadow-sm mr-1">
                        V{numeroVersion}
                      </span>
                      
                      {etiquetasAmostrar.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border uppercase tracking-tight ${
                            tag.includes("General")
                              ? "bg-slate-800 border-slate-700 text-slate-400"
                              : "bg-blue-950/40 border-blue-800/60 text-blue-400"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold italic">
                      {new Date(item.fecha).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm font-medium leading-relaxed whitespace-pre-wrap font-mono bg-slate-900/20 p-3 rounded-xl border border-slate-800/40">
                    {item.texto}
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