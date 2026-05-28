'use client';

import React from 'react';
import Link from 'next/link';
import { 
  PlayCircle, 
  CalendarDays, 
  Code2, 
  RefreshCw, 
  Rocket, 
  ArrowRight 
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
      badge: "Activo",
      enDesarrollo: false
    },
    {
      title: "Fase 2: Estimación y Planificación",
      description: "Creación, estimación y compromiso de historias de usuario (26 historias), y planificación de los Sprints del proyecto.",
      icon: CalendarDays,
      url: "/dashboard/fase2",
      color: "hover:border-purple-500 hover:shadow-purple-100/50",
      iconColor: "text-purple-600 bg-purple-50 border-purple-200",
      badge: "En Desarrollo",
      enDesarrollo: true
    },
    {
      title: "Fase 3: Implementación",
      description: "Ejecución de los Sprints (Sprint 0 y Sprint 1), creación de entregables técnicos y reuniones de sincronización diaria.",
      icon: Code2,
      url: "/dashboard/fase3",
      color: "hover:border-indigo-500 hover:shadow-indigo-100/50",
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      badge: "En Desarrollo",
      enDesarrollo: true
    },
    {
      title: "Fase 4: Revisión y Retrospectiva",
      description: "Demostración de los incrementos de software al Product Owner y análisis de lecciones aprendidas para la mejora continua.",
      icon: RefreshCw,
      url: "/dashboard/fase4",
      color: "hover:border-amber-500 hover:shadow-amber-100/50",
      iconColor: "text-amber-600 bg-amber-50 border-amber-200",
      badge: "En Desarrollo",
      enDesarrollo: true
    },
    {
      title: "Fase 5: Lanzamiento",
      description: "Entrega final del producto de software optimizado para AJUPTEL Carabobo y cierre formal del proyecto.",
      icon: Rocket,
      url: "/dashboard/fase5",
      color: "hover:border-emerald-500 hover:shadow-emerald-100/50",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      badge: "En Desarrollo",
      enDesarrollo: true
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 flex flex-col px-6 py-12 md:px-12">
      <div className="max-w-6xl mx-auto w-full">
        
        <header className="mb-10 text-left">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full shadow-sm">
            Marco de Trabajo Ágil
          </span>
          <h1 className="text-3xl md:text-4xl font-black mt-4 text-slate-900 tracking-tight">
            Fases del Proyecto Scrum
          </h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base max-w-2xl leading-relaxed">
            Estructura metodológica aplicada para la automatización y transformación digital de los procesos de AJUPTEL.
          </p>
        </header>

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
                    <span className={`text-[10px] font-bold uppercase tracking-wider border px-2.5 py-0.5 rounded-md ${
                      fase.badge === 'Activo' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      fase.badge === 'En Desarrollo' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                      'bg-slate-50 text-slate-600 border-slate-200'
                    }`}>
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
                  <span>{fase.enDesarrollo ? "Ver estado" : "Ver artefactos"}</span>
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}