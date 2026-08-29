/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { FileText, Download, Eye, Save, History, UserCheck, Loader2, ArrowLeft, FolderOpen, Sparkles } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

interface Revision {
  id: number
  texto: string
  fecha: string
  fase: string
  documento?: string
  profesor?: string
  tipo_comentario?: string
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

  const listaProfesores = [
    "Prof(a). Carol Armao",
    "Prof(a). María Dolores Espinoza",
    "Prof. Rafael Aparicio",
    "Prof. Giovanni Lenttini",
    "Prof. Cristofer Urbina"
  ]

  const [nuevaNota, setNuevaNota] = useState("")
  const [profesorSeleccionado, setProfesorSeleccionado] = useState(listaProfesores[0])
  const [tipoComentario, setTipoComentario] = useState<"especifico" | "general">("especifico")

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

  const guardarRevision = async () => {
    if (!nuevaNota.trim()) return
    
    let documentoColumna = "General / Fase I"

    if (tipoComentario === "especifico") {
      const etiquetasUsadas = documentos
        .filter(doc => nuevaNota.includes(`[${doc.nombre}]:`))
        .map(doc => doc.nombre)

      documentoColumna = etiquetasUsadas.length > 0 
        ? etiquetasUsadas.join(", ") 
        : "Documento Específico (Sin etiqueta)"
    } else {
      documentoColumna = "Comentario General de la Fase I"
    }

    const { error } = await supabase
      .from('revisiones')
      .insert([{ 
        texto: nuevaNota, 
        fase: 'fase1',
        documento: documentoColumna,
        profesor: profesorSeleccionado,
        tipo_comentario: tipoComentario
      }])

    if (!error) {
      setNuevaNota("")
      cargarNotas()
    } else {
      alert("Error al guardar: " + error.message)
    }
  }

  return (
    <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 pt-3 pb-8 bg-slate-50 min-h-screen space-y-6">
      
      {/* Contenedor Unificado para la parte superior */}
      <div className="space-y-4">
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

        {/* ENCABEZADO Y KATALEIA GRANDE A LA DERECHA */}
        <div className="flex flex-col xl:flex-row justify-between items-stretch gap-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
          
          {/* Título y descripción de la Fase */}
          <div className="flex flex-col justify-center space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <FolderOpen size={28} className="stroke-[2.5]" />
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                Fase I: Inicio
              </h1>
            </div>
            <div className="h-1 w-16 bg-blue-600 rounded-full" />
            <p className="text-sm text-slate-500 max-w-2xl pt-1 leading-relaxed font-medium">
              Artefactos de inicio, fundamentación y documentación técnica inicial de AJUPTEL Carabobo.
            </p>
          </div>

          {/* TARJETA DE KATALEIA GRANDE Y DESTACADA */}
          <div className="w-full xl:w-105 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 border-2 border-blue-500/40 rounded-3xl p-5 text-white shadow-xl flex items-center gap-5 relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* Imagen más grande */}
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

            {/* Textos y contenido */}
            <div className="space-y-2 flex-1">
              <div className="inline-flex items-center gap-1.5 bg-blue-600/30 text-blue-300 border border-blue-400/30 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                <Sparkles size={12} className="text-blue-400" />
                <span>KataleIA • Asistente IA</span>
              </div>
              <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-semibold">
                ¡Hola! Revisa los documentos de la Fase I y deja abajo tus observaciones y notas del jurado.
              </p>
            </div>
          </div>

        </div>
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

      {/* PANEL DEL PROFESOR / JURADO */}
      <div className="mt-12 bg-slate-900 rounded-4xl p-8 text-white shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <UserCheck className="text-blue-400" size={24} />
          <h3 className="text-lg font-bold uppercase tracking-tight">Evaluación y Comentarios del Jurado</h3>
        </div>

        {/* SELECTORES DE CONFIGURACIÓN DE LA NOTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
          
          {/* 1. Selector de Profesor */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
              Seleccionar Profesor / Jurado:
            </label>
           <select  value={profesorSeleccionado}  onChange={(e) => {
    console.log("Profesor cambiado a:", e.target.value);
    setProfesorSeleccionado(e.target.value);
  }}
  className="w-full bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  {listaProfesores.map((prof) => (
    <option key={prof} value={prof}>
      {prof}
    </option>
  ))}
</select>
          </div>

          {/* 2. Selector de Tipo de Comentario */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
              Alcance del Comentario:
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setTipoComentario("especifico")}
                className={`flex-1 text-xs py-2 px-3 font-bold rounded-xl border transition-all ${
                  tipoComentario === "especifico" 
                    ? "bg-blue-600 border-blue-500 text-white shadow" 
                    : "bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200"
                }`}
              >
                Documento Específico
              </button>
              <button
                type="button"
                onClick={() => setTipoComentario("general")}
                className={`flex-1 text-xs py-2 px-3 font-bold rounded-xl border transition-all ${
                  tipoComentario === "general" 
                    ? "bg-emerald-600 border-emerald-500 text-white shadow" 
                    : "bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200"
                }`}
              >
                Comentario General
              </button>
            </div>
          </div>

        </div>
        
        {/* Selector de Inyección Directa (Solo se muestra si es Específico) */}
        {tipoComentario === "especifico" && (
          <div className="space-y-2 animate-fadeIn">
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
        )}

        <div className="relative">
          <textarea 
            ref={textareaRef}
            value={nuevaNota}
            onChange={(e) => setNuevaNota(e.target.value)}
            placeholder={tipoComentario === "especifico" 
              ? "Haz clic arriba en cualquier documento para etiquetarlo aquí directamente..." 
              : "Escribe un comentario general sobre toda la Fase I..."
            }
            className="w-full h-44 p-5 pb-14 bg-slate-800/50 border border-slate-700 rounded-2xl text-slate-200 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-600 font-mono text-sm leading-relaxed"
          />
          <button onClick={guardarRevision} className="absolute bottom-4 right-4 flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-600/10">
            <Save size={18} /> Guardar Nota
          </button>
        </div>

        {/* HISTORIAL */}
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <h4 className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            <History size={14} /> Historial de Evaluaciones y Comentarios
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
              const esGeneral = item.tipo_comentario === 'general' || item.documento?.includes("General");

              return (
                <div key={item.id} className="bg-slate-800/30 border border-slate-700/50 p-5 rounded-xl space-y-3 transition-all hover:border-blue-500/30">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-blue-600 text-[10px] px-2.5 py-0.5 rounded-lg font-black text-white shadow-sm">
                        V{numeroVersion}
                      </span>
                      
                      {/* Nombre del Profesor */}
                      <span className="bg-purple-950/60 text-purple-300 border border-purple-800/60 text-[10px] font-bold px-2.5 py-0.5 rounded-lg uppercase tracking-tight">
                        👤 {item.profesor || "Profesor Jurado"}
                      </span>

                      {/* Insignia de Documento o General */}
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-lg border uppercase tracking-tight ${
                        esGeneral 
                          ? "bg-emerald-950/40 border-emerald-800/60 text-emerald-400" 
                          : "bg-blue-950/40 border-blue-800/60 text-blue-400"
                      }`}>
                        {item.documento}
                      </span>
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