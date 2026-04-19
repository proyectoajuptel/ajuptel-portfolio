"use client"

import AppSidebar from "@/app/components/Sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Sun, LayoutDashboard, FileText } from "lucide-react"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      {/* h-screen asegura que ocupe todo el alto sin mostrar el header de la landing */}
      <div className="flex h-screen w-full overflow-hidden bg-[#F8F9FB]">
        <AppSidebar />
        
        <SidebarInset className="flex flex-col flex-1 overflow-hidden">
          {/* Header Único del Dashboard */}
          <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-slate-500 hover:bg-slate-100 rounded-md transition-colors" />
              <div className="h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-2 text-slate-600">
                 <LayoutDashboard size={16} />
                 <span className="text-sm font-semibold italic">Panel de Fases</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-orange-50 rounded-full text-orange-400 transition-colors">
                <Sun size={20} />
              </button>
              <div className="hidden md:flex bg-slate-100 px-3 py-1 rounded-full border border-slate-200 items-center gap-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase">UNETI · Caso 9</span>
              </div>
            </div>
          </header>

          {/* Contenido con Scroll Independiente */}
          <main className="flex-1 overflow-y-auto p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-3 italic">Vista General</h2>
                <p className="text-slate-400 text-lg font-medium">Documentación técnica y estratégica del proyecto.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Aquí pegas las tarjetas premium que ya configuramos */}
                <div className="bg-white rounded-4xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500" />
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <FileText size={24} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase">#1 · PDF</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">Acta de Constitución</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">Formalización legal y autorización de recursos.</p>
                  <button className="w-full py-3.5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all">Ver Detalles</button>
                </div>
                {/* ... más tarjetas ... */}
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}