/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Layers, Sparkles } from "lucide-react";
// Importamos el Navbar desde la estructura actual
import Navbar from "./components/Navbar"; 

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Contenido principal */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Proyecto Sociotecnológico</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 leading-tight text-slate-900">
          AJUDAG2.0<br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-500">
            Transformación Digital Administrativa AJUPTEL
          </span>
        </h1>

        <p className="max-w-2xl text-base md:text-lg text-slate-500 mb-12 leading-relaxed font-medium">
          Portafolio interactivo de la documentación técnica del ciclo de vida, 
          metodologías ágiles y desarrollo de software para la Asociación.
        </p>

        {/* SECCIÓN DE BIENVENIDA DE KATALEIA CON EL BOTÓN INTEGRADO */}
        <div className="w-full bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 border border-blue-500/30 rounded-4xl p-8 md:p-10 text-white shadow-2xl mb-20 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden text-left">
          
          {/* Brillo decorativo */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Izquierda: Avatar de KataleIA */}
          <div className="relative shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-blue-600/20 border-2 border-blue-400/40 overflow-hidden shadow-2xl flex items-center justify-center backdrop-blur-md">
              <img 
                src="/imagenes/kataleia.png" 
                alt="KataleIA - Asistente Virtual" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-500"
              />
            </div>
            <span className="absolute bottom-2 right-2 bg-emerald-500 w-4 h-4 rounded-full border-4 border-slate-900 animate-pulse" title="KataleIA En Línea" />
          </div>

          {/* Derecha: Burbuja de Diálogo con el Mensaje y el Botón de Acción */}
          <div className="space-y-4 flex-1">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-full text-blue-300 text-xs font-black uppercase tracking-wider">
              <Sparkles size={14} />
              <span>KataleIA • Asistente Virtual</span>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/60 p-6 md:p-8 rounded-3xl shadow-inner relative space-y-6">
              <p className="text-slate-200 text-sm md:text-base font-medium leading-relaxed">
                ¡Hola y bienvenidos! Soy <strong className="text-blue-400 font-bold">KataleIA</strong>, la asistente virtual de <strong className="text-white">AJUPTEL Carabobo</strong>. 
                Te invito a adentrarte en nuestro portafolio digital para conocer la documentación, fases del proyecto y artefactos desarrollados. ¡Comienza la exploración aquí!
              </p>

              {/* Botón integrado dentro de la burbuja */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/dashboard">
                  <button className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all transform hover:scale-[1.03] shadow-lg shadow-blue-600/30 flex items-center gap-2 group cursor-pointer text-sm md:text-base">
                    Explorar Portafolio
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-white" />
                  </button>
                </Link>
                <Link href="/dashboard/contexto">
                  <button className="px-6 py-3.5 bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600/60 rounded-2xl font-semibold transition-all cursor-pointer text-sm">
                    Contexto del Proyecto
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjetas informativas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="p-8 rounded-4xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all group text-left">
            <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <Layers className="text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Marco de Trabajo Scrum</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Gestión ágil con Sprints y Backlog para un desarrollo incremental y ordenado.</p>
          </div>

          <div className="p-8 rounded-4xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all group text-left">
            <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <Code2 className="text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Stack Tecnológico</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Arquitectura robusta basada en Laravel, Vue.js y MySQL 8.0 como base de datos.</p>
          </div>

          <div className="p-8 rounded-4xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all group text-left">
            <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <BookOpen className="text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Trazabilidad</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Documentación técnica exhaustiva de cada fase del ciclo de vida del proyecto.</p>
          </div>
        </div>
      </main>
    </div>
  );
}