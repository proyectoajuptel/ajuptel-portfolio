'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Target, ShieldAlert, Cpu, Users2, BarChart3, MapPin, ArrowLeft } from "lucide-react";

export default function ContextoProyectoPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
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

        {/* Encabezado Unificado con Estilo de Píldora Superior Compacta */}
        <div className="text-left space-y-3">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full shadow-sm">
              <Building2 size={14} className="stroke-[2.5]" />
              Contexto Institucional
            </span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
              Contexto del Proyecto
            </h1>
            <div className="h-1 w-16 bg-blue-600 rounded-full" />
          </div>

          <p className="text-sm text-slate-500 max-w-3xl leading-relaxed font-medium">
            Análisis del entorno organizacional y fundamentación estratégica para la transformación digital de AJUPTEL Carabobo.
          </p>
        </div>
      </div>

      {/* Grid Principal de Tarjetas (Fila superior e intermedia - Intactas) */}
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
            Implementar un <span className="font-bold text-slate-900">Sistema Integral Digital</span> que centralice la gestión de asociados y benefits, garantizando la integridad de los datos y mejorando la calidad de respuesta administrativa en un <span className="text-green-600 font-bold">90%</span>.
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

      {/* Sección: Ubicación Geográfica */}
      <section className="mt-10">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="text-blue-600" size={24} />
          <h2 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Sede y Ubicación Geográfica</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                Sede Principal
              </span>
              <h3 className="text-slate-900 font-bold mt-4 mb-2 text-base">Dirección Fiscal e Institucional</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Urb. Carabobo, calle 149, número 101-52, al lado del Hotel Coronado Suites.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400 block">Ciudad:</span>
                <span className="font-bold text-slate-800">Valencia</span>
              </div>
              <div>
                <span className="text-slate-400 block">Municipio:</span>
                <span className="font-bold text-slate-800">Valencia</span>
              </div>
              <div className="mt-2">
                <span className="text-slate-400 block">Parroquia:</span>
                <span className="font-bold text-slate-800">San José</span>
              </div>
              <div className="mt-2">
                <span className="text-slate-400 block">Estado:</span>
                <span className="font-bold text-slate-800">Carabobo</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2 self-start pl-2">
              Fachada de la Asociación
            </span>
            <div className="relative w-full h-48 rounded-lg overflow-hidden border border-slate-100">
              <Image 
                src="/casa-ajuptel.svg" 
                alt="Sede AJUPTEL Carabobo" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2 self-start pl-2">
              Ubicación en Mapa
            </span>
            <div className="relative w-full h-48 rounded-lg overflow-hidden border border-slate-100">
              <Image 
                src="/mapa-ajuptel.svg" 
                alt="Mapa de Ubicación AJUPTEL" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Interesados Clave - Tabla Profesional */}
      <section className="mt-10">
        <div className="flex items-center gap-3 mb-6">
          <Users2 className="text-blue-600" size={24} />
          <h2 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Contactos Interesados del Proyecto</h2>
        </div>
        <div className="overflow-hidden bg-white border border-slate-200 rounded-xl">
          <table className="min-w-full divide-y divide-slate-200 text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Rol</th>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Nombre</th>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase text-right">Correo Electrónico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-blue-600">Patrocinador</td>
                <td className="px-6 py-4 text-slate-900 font-medium">Sr. Medardo A. Guerrero García</td>
                <td className="px-6 py-4 text-slate-500 text-right">medardo.guerrero001@gmail.com</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-blue-600">Secretaria General</td>
                <td className="px-6 py-4 text-slate-900 font-medium">Sra. Benilde Domínguez</td>
                <td className="px-6 py-4 text-slate-500 text-right">negra3469@gmail.com</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-blue-600">Junta Directiva (Vocal)</td>
                <td className="px-6 py-4 text-slate-900 font-medium">Sr. Osvaldo Reyes</td>
                <td className="px-6 py-4 text-slate-500 text-right">ojrr2708@gmail.com</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-blue-600">Director de Tecnología</td>
                <td className="px-6 py-4 text-slate-900 font-medium">Ing. Gabriel Falcón</td>
                <td className="px-6 py-4 text-slate-500 text-right">gabofalcon29@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}