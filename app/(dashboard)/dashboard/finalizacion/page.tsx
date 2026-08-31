/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { FileText, Download, Eye, Save, History, UserCheck, Loader2, ArrowLeft, Presentation, Sparkles, QrCode, ExternalLink, X } from "lucide-react"
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

export default function FinalizacionPage() {
  const [modalImagen, setModalImagen] = useState<string | null>(null)

  // Lista de documentos y artefactos correspondientes a la Defensa y Finalización
  const documentos = [
    { 
      id: "fin-1", 
      nombre: "Presentación Final de la Socialización", 
      slug: "presentacion_final_proyecto_ajuptel", 
      tipo: "DIAPOSITIVAS / PDF", 
      linkWord: "/docs/fase6/presentacion_final_proyecto_ajuptel.pdf" 
    },
    /* 
    // Documento comentado temporalmente por solicitud
    { 
      id: "fin-2", 
      nombre: "Resumen y Sinopsis del Proyecto Sociotecnológico", 
      slug: "resumen_proyecto_ajuptel", 
      tipo: "PDF, WORD", 
      linkWord: "/docs/fase6/resumen_proyecto_ajuptel.docx" 
    }, 
    */
    { 
      id: "fin-3", 
      nombre: "QR para Acceso a AJUDAG2.0", 
      slug: "qr_ajudag2", 
      tipo: "IMAGEN QR", 
      imagenUrl: "/imagenes/qr.jpg",
      linkUrl: "https://ajuptelcarabobo.org/"
    }
  ]

  // Lista de profesores / jurados disponibles para seleccionar
  const listaProfesores = [
    "Prof(a). Carol Armao",
    "Prof(a). María Dolores Espinoza",
    "Prof. Rafael Aparicio",
    "Prof. Giovanni Lenttini",
    "Prof. Cristofer Urbina",
    "Prof. Luis Rivas"
  ]

  const [nuevaNota, setNuevaNota] = useState("")
  const [profesorSeleccionado, setProfesorSeleccionado] = useState(listaProfesores[0])

  const [historial, setHistorial] = useState<Revision[]>([])
  const [cargando, setCargando] = useState(true)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const cargarNotas = useCallback(async () => {
    try {
      setCargando(true)
      const { data, error } = await supabase
        .from('revisiones')
        .select('*')
        .eq('fase', 'finalizacion')
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
    
    const documentoColumna = "Comentario General de la Defensa"

    const { error } = await supabase
      .from('revisiones')
      .insert([{ 
        texto: nuevaNota, 
        fase: 'finalizacion',
        documento: documentoColumna,
        profesor: profesorSeleccionado,
        tipo_comentario: 'general'
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
      
      {/* Botón Enlace de Retorno */}
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
        
        {/* Título y descripción */}
        <div className="flex flex-col justify-center space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
              <Presentation size={28} className="stroke-[2.5]" />
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
              Cierre y Socialización
            </h1>
          </div>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
          <p className="text-sm md:text-base text-slate-500 max-w-2xl pt-1 leading-relaxed font-medium">
            Muestra final de la presentación, resumen del proyecto sociotecnológico y el código QR de acceso directo a AJUDAG2.0.
          </p>
        </div>

        {/* TARJETA DE KATALEIA */}
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
              <span>KataleIA • Asistente IA</span>
            </div>
            <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-semibold">
              ¡Felicidades por llegar hasta aquí! Todo listo para la gran socialización del proyecto AJUDAG2.0.
            </p>
          </div>
        </div>

      </div>

      {/* GRID DOCUMENTOS Y TARJETAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentos.map((doc) => (
          <div key={doc.id} className="bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow rounded-xl flex flex-col justify-between group">
            
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                {doc.imagenUrl ? <QrCode size={24} /> : <FileText size={24} />}
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm md:text-base leading-snug">{doc.nombre}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-wider">{doc.tipo}</p>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-100">
              {/* Para documentos PDF/Diapositivas */}
              {doc.slug && !doc.imagenUrl && (
                <Link href={`/visor/${doc.slug}`} className="flex-1 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-xs font-bold">
                  <Eye size={16} /> Ver Documento
                </Link>
              )}

              {/* Para la imagen QR (Abre el Pop-up directamente) */}
              {doc.imagenUrl && (
                <button 
                  onClick={() => setModalImagen(doc.imagenUrl)}
                  className="flex-1 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-xs font-bold"
                >
                  <Eye size={16} /> Ver Imagen
                </button>
              )}

              {/* Enlace al sitio web (Si aplica) */}
              {doc.linkUrl && (
                <a 
                  href={doc.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Abrir sitio web de AJUDAG2.0"
                  className="px-4 py-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-1.5 text-xs font-bold"
                >
                  <ExternalLink size={16} /> Ir al Sitio
                </a>
              )}

              {/* Botón Descargar (Si aplica) */}
              {doc.linkWord && doc.linkWord !== "#" && (
                <a href={doc.linkWord} download className="px-4 py-2.5 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center">
                  <Download size={16} />
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* POP-UP / MODAL PARA MOSTRAR LA IMAGEN DEL QR */}
      {modalImagen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl space-y-4 text-center">
            <button 
              onClick={() => setModalImagen(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-lg font-bold text-slate-800">Código QR - AJUDAG2.0</h3>
            
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 inline-block">
              <img src={modalImagen} alt="QR Ampliado" className="w-64 h-64 mx-auto rounded-lg object-contain" />
            </div>

            <div className="pt-2">
              <a 
                href="https://ajuptelcarabobo.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all text-xs"
              >
                <ExternalLink size={16} /> Visitar ajuptelcarabobo.org
              </a>
            </div>
          </div>
        </div>
      )}

      {/* PANEL DE EVALUACIÓN DEL JURADO */}
      <div className="mt-12 bg-slate-900 rounded-4xl p-8 text-white shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <UserCheck className="text-blue-400" size={24} />
          <h3 className="text-lg font-bold uppercase tracking-tight">Feedback y Observaciones Generales del Jurado</h3>
        </div>

        {/* SELECTOR DE JURADO */}
        <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
          <div className="space-y-1.5 max-w-sm">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
              Seleccionar Jurado Evaluador:
            </label>
            <select 
              value={profesorSeleccionado} 
              onChange={(e) => setProfesorSeleccionado(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {listaProfesores.map((prof) => (
                <option key={prof} value={prof}>
                  {prof}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="relative">
          <textarea 
            ref={textareaRef}
            value={nuevaNota}
            onChange={(e) => setNuevaNota(e.target.value)}
            placeholder="Escribe los comentarios generales sobre la defensa, presentación y el proyecto..."
            className="w-full h-44 p-5 pb-14 bg-slate-800/50 border border-slate-700 rounded-2xl text-slate-200 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-600 font-mono text-sm leading-relaxed"
          />
          <button onClick={guardarRevision} className="absolute bottom-4 right-4 flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-600/10">
            <Save size={18} /> Guardar Comentario
          </button>
        </div>

        {/* HISTORIAL DE FEEDBACK */}
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <h4 className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            <History size={14} /> Historial de Evaluaciones de la Socialización
          </h4>
          
          {cargando ? (
            <div className="flex justify-center py-4">
              <Loader2 className="animate-spin text-blue-500" />
            </div>
          ) : historial.length === 0 ? (
            <p className="text-center py-6 text-slate-600 text-sm italic">No hay evaluaciones registradas aún.</p>
          ) : (
            historial.map((item, index) => {
              const numeroVersion = historial.length - index;

              return (
                <div key={item.id} className="bg-slate-800/30 border border-slate-700/50 p-5 rounded-xl space-y-3 transition-all hover:border-blue-500/30">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-blue-600 text-[10px] px-2.5 py-0.5 rounded-lg font-black text-white shadow-sm">
                        V{numeroVersion}
                      </span>
                      
                      <span className="bg-purple-950/60 text-purple-300 border border-purple-800/60 text-[10px] font-bold px-2.5 py-0.5 rounded-lg uppercase tracking-tight">
                        👤 {item.profesor || "Jurado"}
                      </span>

                      <span className="bg-emerald-950/40 border border-emerald-800/60 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-lg uppercase tracking-tight">
                        {item.documento || "Comentario General"}
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