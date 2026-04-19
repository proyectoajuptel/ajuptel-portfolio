import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/app/components/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* El Sidebar debe ir PRIMERO y fuera del Inset */}
        <AppSidebar />

        {/* SidebarInset es el que "empuja" el contenido cuando el sidebar abre/cierra */}
        <SidebarInset className="flex flex-col bg-slate-50 min-w-0">
          
          {/* Este Header contiene el botón de ocultar (Trigger) */}
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-slate-200 bg-white px-4 sticky top-0 z-10">
            {/* El Trigger ahora tiene espacio suficiente para no meterse debajo */}
            <SidebarTrigger className="-ml-1 text-slate-500 hover:text-blue-600 transition-colors" />
            
            <div className="h-4 w-px bg-slate-200 mx-2" />
            
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-slate-400">Dashboard</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-bold uppercase tracking-tight">AJUPTEL</span>
            </div>
          </header>

          {/* El contenido principal */}
          <main className="flex-1 p-6 md:p-8 overflow-y-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}