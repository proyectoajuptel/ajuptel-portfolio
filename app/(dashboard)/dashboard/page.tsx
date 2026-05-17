import React from 'react';
import Link from 'next/link';
import { 
  FolderOpen, 
  Users, 
  BookOpen, 
  Milestone, 
  ArrowRight 
} from 'lucide-react';

export default function MainDashboard() {
  const cards = [
    {
      title: "Contexto del Proyecto",
      description: "Información institucional de AJUPTEL, objetivos del sistema y alcance sociotecnológico.",
      icon: BookOpen,
      url: "/dashboard/contexto",
      // Juego visual: Borde verde y sombra esmeralda suave al hacer hover
      color: "hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-100/50",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      title: "Equipo de Desarrollo",
      description: "Roles de Scrum, investigadores y colaboradores asignados a la transformación digital.",
      icon: Users,
      url: "/dashboard/equipo",
      // Juego visual: Borde morado y sombra violeta al hacer hover
      color: "hover:border-purple-500 hover:shadow-xl hover:shadow-purple-100/50",
      iconColor: "text-purple-600 bg-purple-50 border-purple-200",
      badge: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      title: "Hoja de Ruta",
      description: "Cronograma de hitos, planificación de Sprints y visualización del avance general en Jira.",
      icon: Milestone, 
      url: "/dashboard/hoja", 
      // Juego visual: Borde ámbar y sombra cálida al hacer hover
      color: "hover:border-amber-500 hover:shadow-xl hover:shadow-amber-100/50",
      iconColor: "text-amber-600 bg-amber-50 border-amber-200",
      badge: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      title: "Fases del Proyecto",
      description: "Ciclo de vida metodológico. Accede a los entregables de Análisis, Diseño, Ejecución y Cierre.",
      icon: FolderOpen,
      url: "/dashboard/fases", 
      // Juego visual: Borde azul y sombra azulada al hacer hover
      color: "hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50",
      iconColor: "text-blue-600 bg-blue-50 border-blue-200",
      badge: "bg-blue-50 text-blue-700 border-blue-200"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-center px-6 py-12 md:px-12">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Encabezado del Dashboard */}
        <div className="mb-10 text-left">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full shadow-sm">
            Panel de Control General
          </span>
          <h1 className="text-3xl md:text-4xl font-black mt-4 text-slate-900 tracking-tight">
            Módulos del Portafolio
          </h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base max-w-2xl leading-relaxed">
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