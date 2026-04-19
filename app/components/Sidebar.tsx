"use client"

import { 
  LayoutDashboard, 
  Users, 
  SearchCode, 
  Milestone, 
  Cpu, 
  Rocket,
  CheckCircle2,
  Home,
  Info,
  ChevronRight,
  FileText
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link"

// Estructura de navegación con Sub-ítems para la Fase I
const navigation = [
  {
    group: "Proyecto AJUPTEL",
    items: [
      { title: "Hoja de Ruta", url: "/dashboard", icon: LayoutDashboard },
      { title: "Contexto Organizacional", url: "/dashboard/contexto", icon: Info },
      { title: "Equipo Scrum", url: "/dashboard/equipo", icon: Users },
    ],
  },
  {
    group: "Ciclo de Vida (Fases)",
    items: [
      { 
        title: "Fase I: Análisis", 
        url: "/dashboard/fase1", 
        icon: SearchCode,
        isActive: true, // Esto lo mantiene abierto por defecto
        subItems: [
          { title: "Caso de Negocio", url: "/dashboard/fase1/caso-negocio" },
          { title: "Acta de Constitución", url: "/dashboard/fase1/acta" },
          { title: "Product Backlog", url: "/dashboard/fase1/backlog" },
        ]
      },
      { title: "Fase II: Planificación", url: "/dashboard/fase2", icon: Milestone },
      { title: "Fase III: Ejecución", url: "/dashboard/fase3", icon: Cpu },
      { title: "Fase IV: Lanzamiento", url: "/dashboard/fase4", icon: Rocket },
    ],
  },
  {
    group: "Finalización",
    items: [
      { title: "Conclusiones", url: "/dashboard/conclusiones", icon: CheckCircle2 },
    ],
  },
]

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-slate-200 bg-white">
      {/* Header con Identidad AJUPTEL */}
      <SidebarHeader className="p-4 border-b border-slate-50">
        <div className="flex items-center gap-3 px-2">
          <div className="h-9 w-9 shrink-0 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-blue-100 shadow-xl">
            <span className="font-black text-lg italic">A</span>
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden overflow-hidden">
            <span className="text-sm font-bold text-slate-900 leading-none truncate">
              AJUPTEL · UNETI
            </span>
            <span className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-tight truncate">
              Documentación Interactiva
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-3">
        {navigation.map((group) => (
          <SidebarGroup key={group.group} className="mb-4">
            <SidebarGroupLabel className="px-3 text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-2 group-data-[collapsible=icon]:hidden">
              {group.group}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <div key={item.title}>
                    {item.subItems ? (
                      // Renderizado para items con SUB-MENÚ (Como Fase I) que permite NAVEGAR
                      <Collapsible defaultOpen={item.isActive} className="group/collapsible">
                        <SidebarMenuItem>
                          {/* El Link envuelve al Trigger para que la navegación funcione al clic */}
                          <Link href={item.url} className="w-full">
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton 
                                tooltip={item.title} 
                                className="h-11 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all"
                              >
                                <item.icon size={19} className="text-slate-500 group-hover:text-blue-600" />
                                <span className="font-semibold text-[13px] flex-1">
                                  {item.title}
                                </span>
                                <ChevronRight className="ml-auto h-4 w-4 text-slate-400 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                          </Link>
                          
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4 border-l border-slate-100 py-2">
                              {item.subItems.map((sub) => (
                                <SidebarMenuSubItem key={sub.title}>
                                  <SidebarMenuSubButton asChild className="h-9 rounded-lg hover:bg-slate-50 text-slate-500 hover:text-blue-600">
                                    <Link href={sub.url} className="flex items-center gap-2">
                                      <FileText size={14} />
                                      <span className="text-[12px] font-medium">{sub.title}</span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    ) : (
                      // Renderizado para items NORMALES (Hoja de Ruta, Contexto, Equipo)
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild tooltip={item.title} className="h-11 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all group">
                          <Link href={item.url} className="flex items-center gap-3 px-3">
                            <item.icon size={19} className="group-hover:scale-110 transition-transform text-slate-500 group-hover:text-blue-600" />
                            <span className="font-semibold text-[13px]">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )}
                  </div>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Footer para volver a la Landing Page */}
      <SidebarFooter className="p-4 border-t border-slate-50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-12 rounded-xl text-slate-600 hover:bg-slate-100 transition-all group">
              <Link href="/" className="flex items-center gap-3 px-3">
                <Home size={19} className="group-hover:-translate-y-0.5 transition-transform" />
                <span className="font-bold text-[13px] group-data-[collapsible=icon]:hidden">
                  Volver al Inicio
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}