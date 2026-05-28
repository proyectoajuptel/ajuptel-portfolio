'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Construction, ArrowLeft, Clock } from 'lucide-react';

export default function FaseEnDesarrolloPage() {
  const params = useParams();
  const router = useRouter();
  
  // Extraemos el ID de la URL (por ejemplo: "fase2", "fase3")
  const faseId = params?.id ? String(params.id).replace('fase', ' ') : '';

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      {/* Icono animado de construcción */}
      <div className="h-20 w-20 bg-amber-50 text-amber-500 rounded-3xl flex items-center justify-center mb-6 animate-pulse border border-amber-100">
        <Construction size={40} />
      </div>

      {/* Título Dinámico */}
      <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-3">
        Fase {faseId} - En Desarrollo
      </h1>

      {/* Subtítulo descriptivo */}
      <p className="text-slate-500 text-sm md:text-base max-w-md mb-8 leading-relaxed">
        El equipo investigador se encuentra recopilando y cargando la documentación técnica, diagramas y sprints correspondientes a este ciclo del proyecto.
      </p>

      {/* Información de estado */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-600 mb-8">
        <Clock size={14} className="text-slate-400" />
        <span>Próximamente disponible • PST IV Módulo 2</span>
      </div>

      {/* Botón para volver al Dashboard de forma segura */}
      <button
        onClick={() => router.push('/dashboard/fases')}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a2540] hover:bg-[#001529] text-white font-bold text-sm rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-[#0a2540]/10 cursor-pointer"
      >
        <ArrowLeft size={16} />
        Volver al Dashboard
      </button>
    </div>
  );
}