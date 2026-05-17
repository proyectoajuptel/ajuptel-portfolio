'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Code2, GraduationCap, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-auto py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* COLUMNA 1: Identidad Institucional */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image 
                  src="/Logo AJUPTEL.svg" 
                  alt="Logo AJUPTEL" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black text-slate-900 text-sm tracking-tight leading-none uppercase">AJUPTEL</span>
                <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mt-1">Carabobo</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs text-left">
              Proyecto SocioTecnológico para la Transformación Digital y Automatización Administrativa de la Asociación de Jubilados y pensionados de Telecomunicaciones de CANTV
            </p>
            <div className="flex items-center gap-2 mt-2">
               <GraduationCap size={16} className="text-slate-400" />
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">UNETI • Sustentación de Grado</span>
            </div>
          </div>

          {/* COLUMNA 2: Ubicación Física */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider text-left">
              <MapPin size={16} className="text-blue-600" />
              <span>Sede Institucional</span>
            </div>
            <div className="flex flex-col gap-2 text-left">
              <p className="text-xs text-slate-500 leading-relaxed">
                Urb. Carabobo, calle 149, número 101-52, al lado del Hotel Coronado Suites. Valencia, Edo. Carabobo.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                <span className="text-slate-400 font-medium">Municipio: Valencia</span>
                <span className="text-slate-400 font-medium">Parroquia: San José</span>
              </div>
            </div>
          </div>

          {/* COLUMNA 3: Equipo Investigador */}
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
              <Code2 size={16} className="text-purple-600" />
              <span>Desarrollo Técnico</span>
            </div>
            <div className="flex flex-col md:items-end gap-1 text-xs text-slate-500">
               <span className="font-bold text-slate-700">Equipo Investigador AJUPTEL</span>
               <p className="md:text-right">Ingeniería en Informática • UNETI</p>
               <div className="flex items-center gap-2 mt-2">
                 <ShieldCheck size={14} className="text-emerald-500" />
                 <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">v1.0.0 Stable</span>
               </div>
            </div>
          </div>

        </div>

        {/* BARRA INFERIOR: Copyright */}
        <div className="border-t border-slate-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-medium">
          <div className="flex items-center gap-4">
             <span>© {currentYear} AJUPTEL Carabobo.</span>
             <span className="hidden sm:inline">•</span>
             <span>Todos los derechos reservados.</span>
          </div>
          <div className="flex gap-4 uppercase tracking-widest">
            <span className="hover:text-blue-600 transition-colors cursor-default">República Bolivariana de Venezuela</span>
          </div>
        </div>
      </div>
    </footer>
  );
}