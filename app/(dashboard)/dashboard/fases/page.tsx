/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Link from 'next/link';
import { 
  PlayCircle, 
  CalendarDays, 
  Code2, 
  RefreshCw, 
  Rocket, 
  ArrowRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

export default function FasesScrumPage() {
  const fasesScrum = [
    {
      title: "Fase 1: Inicio",
      description: "Creación del documento inicial, caso de negocio, lean inception, de la visión del proyecto, identificación del Scrum Master y Stakeholders, y desarrollo del Product Backlog inicial.",
      icon: PlayCircle,
      url: "/dashboard/fase1",
      color: "hover:border-blue-500 hover:shadow-blue-100/50",
      iconColor: "text-blue-600 bg-blue-50 border-blue-200",
      badge: "Finalizado",
    },
    {
      title: "Fase 2: Estimación y Planificación",
      description: "Creación, estimación y compromiso de historias de usuario (26 historias), y planificación de los Sprints del proyecto.",
      icon: CalendarDays,
      url: "/dashboard/fase2",
      color: "hover:border-purple-500 hover:shadow-purple-100/50",
      iconColor: "text-purple-600 bg-purple-50 border-purple-200",
      badge: "Finalizado",
    },
    {
      title: "Fase 3: Implementación",
      description: "Ejecución de los Sprints, creación de entregables técnicos y reuniones de sincronización diaria.",
      icon: Code2,
      url: "/dashboard/fase3",
      color: "hover:border-indigo-500 hover:shadow-indigo-100/50",
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      badge: "Finalizado",
    },
    {
      title: "Fase 4: Revisión y Retrospectiva",
      description: "Demostración de los incrementos de software al Product Owner y análisis de lecciones aprendidas para la mejora continua.",
      icon: RefreshCw,
      url: "/dashboard/fase4",
      color: "hover:border-amber-500 hover:shadow-amber-100/50",
      iconColor: "text-amber-600 bg-amber-50 border-amber-200",
      badge: "Finalizado",
    },
    {
      title: "Fase 5: Lanzamiento",
      description: "Entrega final del producto de software optimizado para AJUPTEL Carabobo y cierre formal del proyecto.",
      icon: Rocket,
      url: "/dashboard/fase5",
      color: "hover:border-emerald-500 hover:shadow-emerald-100/50",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      badge: "Finalizado",
    }
  ];

  return (
    <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 pt-3 pb-8 bg-slate-50 min-h-screen space-y-6">
      
      {/* Contenedor Unificado para agrupar la flecha y el encabezado superior */}
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
          
          {/* Título y descripción de la sección */}
          <div className="flex flex-col justify-center space-y-3">
            <span className="w-fit text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full shadow-xs">
              Marco de Trabajo Ágil
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
              Fases del Proyecto Scrum
            </h1>
            <div className="h-1 w-16 bg-blue-600 rounded-full" />
            <p className="text-sm text-slate-500 max-w-2xl pt-1 leading-relaxed font-medium">
              Estructura metodológica aplicada para la automatización y transformación digital de los procesos de AJUPTEL Carabobo.
            </p>
          </div>

          {/* TARJETA DE KATALEIA GRANDE Y DESTACADA */}
          <div className="w-full xl:w-105 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 border-2 border-blue-500/40 rounded-3xl p-5 text-white shadow-xl flex items-center gap-5 relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* Imagen de Kataleia */}
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
                <span>Kataleia • Asistente IA</span>
              </div>
              <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-semibold">
                ¡Hola! Aquí tienes la visión general de todas las fases completadas del proyecto.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* GRID DE FASES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fasesScrum.map((fase, index) => {
          const Icon = fase.icon;
          return (
            <Link 
              href={fase.url} 
              key={index}
              className={`border border-slate-200 rounded-2xl p-8 flex flex-col justify-between bg-white shadow-sm transition-all duration-300 transform hover:-translate-y-1 group ${fase.color}`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2.5 rounded-xl border ${fase.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {/* Etiqueta Verde Brillante */}
                  <span className="text-[10px] font-extrabold uppercase tracking-wider border px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border-emerald-300 shadow-xs">
                    {fase.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                  {fase.title}
                </h3>
                <p className="text-slate-500 text-xs mt-2.5 leading-relaxed font-normal">
                  {fase.description}
                </p>
              </div>

              <div className="mt-6 flex items-center text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                <span>Ver artefactos</span>
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}