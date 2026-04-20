// app/(dashboard)/dashboard/page.tsx
import { fasesProyecto } from "./fases";
import { Lock, Clock, CheckCircle2, LayoutDashboard } from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Encabezado Principal */}
      <div className="flex items-center gap-3 mb-6">
        <LayoutDashboard className="text-blue-600" size={32} />
        <h1 className="text-3xl font-bold text-gray-900">Hoja de Ruta AJUPTEL</h1>
      </div>
      
      <p className="text-gray-600 mb-10 text-lg">
        Estado actual del ciclo de vida del proyecto de transformación digital.
      </p>

      {/* Grid de Fases */}
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
            
            {/* Lista de Hitos */}
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

      {/* Sección Jira - Pie de página */}
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