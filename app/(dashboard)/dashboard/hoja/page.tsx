"use client"

import Link from "next/link"; // Importamos Link para la navegación interna
import { fasesProyecto } from "../hojaRuta"; 
import { Lock, Clock, CheckCircle2, Map, ArrowLeft } from "lucide-react"; // Añadimos ArrowLeft

export default function HojaRutaPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* Contenedor Unificado para agrupar la flecha y evitar la separación forzada */}
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

        {/* Encabezado con Cápsula de Estilo e Icono Integrado */}
        <div className="text-left space-y-3">
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
      </div>
      
      {/* Grid de Fases (Tus tarjetas originales se mantienen intactas) */}
      <div className="grid gap-8">
        {fasesProyecto.map((fase) => (
          <div 
            key={fase.id} 
            className={`relative border-l-4 p-6 rounded-r-xl shadow-sm transition-all ${
              fase.bloqueado 
              ? 'opacity-60 bg-gray-50 border-gray-300' 
              : 'bg-white border-blue-600 shadow-md scale-[1.02]'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-white text-xs uppercase tracking-wider font-black px-3 py-1 rounded-full ${fase.color}`}>
                    {fase.estado}
                  </span>
                  {fase.bloqueado ? (
                    <span className="flex items-center gap-1 text-gray-400 text-sm">
                      <Lock size={14} /> Bloqueado
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                      <Clock size={14} /> Actual
                    </span>
                  )}
                </div>
                <h2 className={`text-2xl font-bold ${fase.bloqueado ? 'text-gray-500' : 'text-gray-800'}`}>
                  {fase.titulo}
                </h2>
                <p className="mt-2 text-gray-600 leading-relaxed max-w-2xl">
                  {fase.descripcion}
                </p>
              </div>
            </div>
            
            {/* Lista de Hitos (Intacta) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-4">
              {fase.hitos.map((hito, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <CheckCircle2 size={16} className={fase.bloqueado ? "text-gray-300" : "text-green-500"} />
                  {hito}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sección Jira - Pie de página (Intacta) */}
      <div className="mt-12 p-6 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-blue-400">Planificación en Jira</h3>
          <p className="text-slate-400 text-sm">Seguimiento de Sprints y Product Backlog en tiempo real.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold transition-colors">
          Ver Tablero
        </button>
      </div>
    </div>
  );
}