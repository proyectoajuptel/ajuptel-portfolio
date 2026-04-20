'use client';

import React from 'react';
import { Building2, Target, ShieldAlert, Cpu, Users2, BarChart3 } from "lucide-react";

export default function ContextoProyectoPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto bg-slate-50 min-h-screen">
      {/* Encabezado limpio y profesional */}
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Contexto del Proyecto
        </h1>
        <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
        <p className="text-slate-500 mt-4 text-lg max-w-3xl">
          Análisis del entorno organizacional y fundamentación estratégica para la transformación digital de AJUPTEL Carabobo.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Tarjeta 1: La Organización */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Building2 size={24} />
            </div>
            <h2 className="font-bold text-slate-800 uppercase text-sm tracking-wider">La Organización</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            <span className="font-bold text-slate-900">AJUPTEL Carabobo</span> es una asociación sin fines de lucro que agrupa a jubilados y sobrevivientes de CANTV. Actualmente gestiona una comunidad de <span className="text-blue-600 font-bold">más de 700 miembros</span>, incluyendo asociados, personal administrativo y voluntarios.
          </p>
        </div>

        {/* Tarjeta 2: La Problemática */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-50 rounded-lg text-red-600">
              <ShieldAlert size={24} />
            </div>
            <h2 className="font-bold text-slate-800 uppercase text-sm tracking-wider">Desafío Crítico</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Dependencia absoluta de <span className="font-bold text-slate-900">hojas de cálculo de Excel</span> para datos sensibles. Esto genera lentitud operativa, duplicidad de registros y vulnerabilidad ante la pérdida de información de salud de los adultos mayores.
          </p>
        </div>

        {/* Tarjeta 3: Propósito */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <Target size={24} />
            </div>
            <h2 className="font-bold text-slate-800 uppercase text-sm tracking-wider">Propósito</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Implementar un <span className="font-bold text-slate-900">Sistema Integral Digital</span> que centralice la gestión de asociados y beneficios, garantizando la integridad de los datos y mejorando la calidad de respuesta administrativa en un <span className="text-green-600 font-bold">90%</span>.
          </p>
        </div>

        {/* Tarjeta 4: Infraestructura Técnica */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
              <Cpu size={24} />
            </div>
            <h2 className="font-bold text-slate-800 uppercase text-sm tracking-wider">Infraestructura</h2>
          </div>
          <ul className="text-slate-600 text-sm space-y-2">
            <li className="flex justify-between border-b border-slate-50 pb-1">
              <span className="font-medium text-slate-900">Arquitectura:</span> Monolítica Modular
            </li>
            <li className="flex justify-between border-b border-slate-50 pb-1">
              <span className="font-medium text-slate-900">Stack:</span> NestJS / Angular / MySQL
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-slate-900">IA:</span> Dialogflow ES
            </li>
          </ul>
        </div>

        {/* Tarjeta 5: Visión 2027 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <BarChart3 size={24} />
            </div>
            <h2 className="font-bold text-slate-800 uppercase text-sm tracking-wider">Metas Estratégicas 2027</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
              <p className="text-slate-600"><span className="font-bold text-slate-900">Satisfacción:</span> Incremento del 70% en la percepción de calidad del servicio.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
              <p className="text-slate-600"><span className="font-bold text-slate-900">Digitalización:</span> 100% de expedientes físicos migrados al sistema seguro.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Sección de Interesados Clave - Estilo Tabla Profesional */}
      <section className="mt-10">
        <div className="flex items-center gap-3 mb-6">
          <Users2 className="text-blue-600" size={24} />
          <h2 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Interesados del Proyecto</h2>
        </div>
        <div className="overflow-hidden bg-white border border-slate-200 rounded-xl">
          <table className="min-w-full divide-y divide-slate-200 text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Rol</th>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Nombre</th>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase text-right">Interés Principal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-blue-600">Patrocinador</td>
                <td className="px-6 py-4 text-slate-900 font-medium">Sr. Medardo A. Guerrero García</td>
                <td className="px-6 py-4 text-slate-500 text-right">Mejora tangible en la atención al agremiado.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-blue-600">Product Owner</td>
                <td className="px-6 py-4 text-slate-900 font-medium">TSU. Nattier Caraballo</td>
                <td className="px-6 py-4 text-slate-500 text-right">Automatización y control de procesos administrativos.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}