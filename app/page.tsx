import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Layers } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="flex justify-between items-center h-16 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <span className="font-black text-lg italic text-white">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-slate-900 leading-none">AJUPTEL</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">UNETI</span>
            </div>
          </div>
          
          <Link href="/dashboard">
            <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-100 cursor-pointer">
              Dashboard
            </button>
          </Link>
        </div>
      </nav>

{/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
        
        {/* Badge "Proyecto Sociotecnológico" */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Proyecto Sociotecnológico</span>
        </div>

        {/* Título Ajustado - text-5xl máximo para que entre en una línea */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 leading-tight text-slate-900">
          Sistema para la Transformación Digital <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-500">
            Administrativa de AJUPTEL
          </span>
        </h1>

        <p className="max-w-2xl text-base md:text-lg text-slate-500 mb-10 leading-relaxed font-medium">
          Portafolio interactivo de la Documentación técnica del ciclo de vida, 
          metodologías ágiles y desarrollo de software para la Asociación.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="/dashboard">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-xl shadow-slate-200 flex items-center gap-2 group cursor-pointer">
              Explorar Portafolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-white" />
            </button>
          </Link>
          <Link href="/dashboard/contexto">
            <button className="px-8 py-4 bg-white text-slate-600 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all cursor-pointer">
              Contexto del Proyecto
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full">
          <div className="p-8 rounded-4xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all group text-left">
            <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <Layers className="text-blue-600 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Scrum Framework</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Gestión ágil con Sprints y Backlog para un desarrollo incremental y ordenado.</p>
          </div>

          <div className="p-8 rounded-4xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all group text-left">
            <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <Code2 className="text-blue-600 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Stack Tecnológico</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Arquitectura moderna utilizando Next.js 14, TypeScript y Tailwind CSS.</p>
          </div>

          <div className="p-8 rounded-4xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all group text-left">
            <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <BookOpen className="text-blue-600 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Trazabilidad</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Documentación técnica exhaustiva de cada fase del ciclo de vida del proyecto.</p>
          </div>
        </div>
      </main>
    </div>
  );
}