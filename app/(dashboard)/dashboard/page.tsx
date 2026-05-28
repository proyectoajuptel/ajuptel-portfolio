import React from 'react';
import Link from 'next/link';
import { 
  FolderOpen, 
  Users, 
  BookOpen, 
  Milestone, 
  ArrowRight,
  LayoutDashboard
} from 'lucide-react';

export default function MainDashboard() {
  const cards = [
    {
      title: "Contexto del Proyecto",
      description: "Información institucional de AJUPTEL, objetivos del sistema y alcance sociotecnológico.",
      icon: BookOpen,
      url: "/dashboard/contexto",
      color: "hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-100/50",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      title: "Equipo de Desarrollo",
      description: "Roles de Scrum, investigadores y colaboradores asignados a la transformación digital.",
      icon: Users,
      url: "/dashboard/equipo",
      color: "hover:border-purple-500 hover:shadow-xl hover:shadow-purple-100/50",
      iconColor: "text-purple-600 bg-purple-50 border-purple-200",
      badge: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      title: "Hoja de Ruta",
      description: "Cronograma de hitos, planificación de Sprints y visualización del avance general en Jira.",
      icon: Milestone, 
      url: "/dashboard/hoja", 
      color: "hover:border-amber-500 hover:shadow-xl hover:shadow-amber-100/50",
      iconColor: "text-amber-600 bg-amber-50 border-amber-200",
      badge: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      title: "Fases del Proyecto",
      description: "Ciclo de vida metodológico. Accede a los entregables de Análisis, Diseño, Ejecución y Cierre.",
      icon: FolderOpen,
      url: "/dashboard/fases", 
      color: "hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50",
      iconColor: "text-blue-600 bg-blue-50 border-blue-200",
      badge: "bg-blue-50 text-blue-700 border-blue-200"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-center px-6 py-8 md:px-12">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        
        {/* Encabezado del Dashboard (Tipografía Unificada) */}
        <div className="mb-6 text-left space-y-3">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full shadow-sm">
              <LayoutDashboard size={14} className="stroke-[2.5]" />
              Panel de Control General
            </span>
          </div>
          
          <div className="space-y-2">
            {/* Tamaño idéntico a las páginas internas: text-2xl md:text-3xl */}
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
              Módulos del Portafolio
            </h1>
            <div className="h-1 w-16 bg-blue-600 rounded-full" />
          </div>

          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed font-medium">
            Gestiona y audita la documentación del proyecto de Transformación Digital para AJUPTEL.
          </p>
        </div>

        {/* Grid de las 4 Tarjetas Interactivas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link 
                href={card.url} 
                key={index}
                className={`border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between min-h-55 bg-white shadow-sm transition-all duration-300 transform hover:-translate-y-1 group ${card.color}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2.5 rounded-xl border ${card.iconColor} shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider border px-2.5 py-0.5 rounded-md ${card.badge}`}>
                      Disponible
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-2.5 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span>Ingresar al módulo</span>
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