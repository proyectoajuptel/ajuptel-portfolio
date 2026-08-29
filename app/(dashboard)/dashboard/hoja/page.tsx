/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"; 
import { fasesProyecto } from "../hojaRuta"; 
import { CheckCircle2, Map, ArrowLeft, Sparkles } from "lucide-react"; 

export default function HojaRutaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Contenedor Unificado para agrupar la flecha */}
      <div className="space-y-4">
        {/* Botón Volver al Dashboard Principal */}
        <div>
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 uppercase tracking-wider transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Volver al Dashboard
          </Link>
        </div>

        {/* ENCABEZADO Y KATALEIA GRANDE A LA DERECHA */}
        <div className="flex flex-col xl:flex-row justify-between items-stretch gap-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
          
          {/* Título y descripción */}
          <div className="text-left space-y-3 flex flex-col justify-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full shadow-sm">
                <Map size={14} className="stroke-[2.5]" />
                Hoja de Ruta
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                Hoja de Ruta AJUPTEL
              </h1>
              <div className="h-1 w-16 bg-blue-600 rounded-full" />
            </div>
            
            <p className="text-sm text-slate-500 max-w-2xl pt-1 leading-relaxed font-medium">
              Estado actual del ciclo de vida del proyecto de transformación digital.
            </p>
          </div>

          {/* TARJETA DE KATALEIA GRANDE Y DESTACADA */}
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
                ¡Hola! Aquí tienes la visión general de todas las fases completadas del proyecto.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Grid de Fases (Todas Desbloqueadas, etiqueta azul uniforme y mejor margen) */}
      <div className="grid gap-8">
        {fasesProyecto.map((fase) => (
          <div 
            key={fase.id} 
            className="relative border-l-4 p-6 md:p-8 rounded-r-2xl shadow-md transition-all bg-white border-blue-600 scale-[1.01]"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-600 text-white text-xs uppercase tracking-wider font-black px-3 py-1 rounded-full shadow-xs">
                    FINALIZADO
                  </span>
                  <span className="flex items-center gap-1 text-emerald-600 text-sm font-bold">
                    <CheckCircle2 size={16} /> Completado
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {fase.titulo}
                </h2>
                <p className="mt-2 text-gray-600 leading-relaxed max-w-4xl">
                  {fase.descripcion}
                </p>
              </div>
            </div>
            
            {/* Lista de Hitos */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-4">
              {fase.hitos.map((hito, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                  <span>{hito}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}