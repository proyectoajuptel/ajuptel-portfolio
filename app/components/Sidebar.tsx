"use client"

import * as React from "react"
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
  FileText,
  Lock,
  type LucideIcon
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

// --- 1. DEFINICIÓN DE INTERFACES ---
interface SubItem {
  title: string;
  url: string;
}

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  isBlocked?: boolean;
  status?: string;
  subItems?: SubItem[];
}

interface NavGroup {
  group: string;
  items: NavItem[];
}

// --- 2. ESTRUCTURA DE NAVEGACIÓN ---
const navigation: NavGroup[] = [
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
        isActive: true,
        status: "Activo",
        isBlocked: false,
        subItems: [
          { title: "Caso de Negocio", url: "/dashboard/fase1/caso-negocio" },
          { title: "Acta de Constitución", url: "/dashboard/fase1/acta" },
          { title: "Product Backlog", url: "/dashboard/fase1/backlog" },
        ]
      },
      { title: "Fase II: Planificación", url: "#", icon: Milestone, status: "Por iniciar", isBlocked: true },
      { title: "Fase III: Ejecución", url: "#", icon: Cpu, status: "Por iniciar", isBlocked: true },
      { title: "Fase IV: Lanzamiento", url: "#", icon: Rocket, status: "Por iniciar", isBlocked: true },
    ],
  },
  {
    group: "Finalización",
    items: [
      { title: "Conclusiones", url: "#", icon: CheckCircle2, status: "Por iniciar", isBlocked: true },
    ],
  },
]

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-slate-200 bg-white">
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
                    {item.subItems && !item.isBlocked ? (
                      <Collapsible defaultOpen={item.isActive} className="group/collapsible">
                        <SidebarMenuItem className="flex flex-col">
                          {/* Contenedor relativo para separar Link de Trigger */}
                          <div className="relative flex items-center group">
                            <Link href={item.url} className="w-full">
                              <SidebarMenuButton 
                                tooltip={item.title} 
                                className="h-12 w-full rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all pr-10"
                              >
                                <item.icon size={19} className="text-slate-500 group-hover:text-blue-600" />
                                <div className="flex flex-col items-start flex-1 overflow-hidden">
                                  <span className="font-semibold text-[13px] truncate">{item.title}</span>
                                  <span className="text-[9px] font-black uppercase text-blue-400 tracking-tighter">
                                    {item.status}
                                  </span>
                                </div>
                              </SidebarMenuButton>
                            </Link>
                            
                            {/* Flecha lateral que solo controla el colapso */}
                            <CollapsibleTrigger asChild>
                              <button className="absolute right-2 p-1.5 rounded-md hover:bg-blue-100 text-slate-400 hover:text-blue-600 transition-colors">
                                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              </button>
                            </CollapsibleTrigger>
                          </div>

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
                      <SidebarMenuItem>
                        <SidebarMenuButton 
                          asChild={!item.isBlocked} 
                          tooltip={item.title} 
                          className={`h-12 rounded-xl transition-all group ${
                            item.isBlocked ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          {item.isBlocked ? (
                            <div className="flex items-center gap-3 px-3 w-full">
                              <item.icon size={19} className="text-slate-400" />
                              <div className="flex flex-col items-start flex-1 overflow-hidden">
                                <span className="font-semibold text-[13px] text-slate-500 truncate">{item.title}</span>
                                <span className="text-[9px] font-black uppercase text-slate-400 tracking-tighter italic">
                                  ● {item.status}
                                </span>
                              </div>
                              <Lock size={12} className="text-slate-300 ml-auto" />
                            </div>
                          ) : (
                            <Link href={item.url} className="flex items-center gap-3 px-3 w-full">
                              <item.icon size={19} className="group-hover:scale-110 transition-transform text-slate-500 group-hover:text-blue-600" />
                              <div className="flex flex-col items-start">
                                <span className="font-semibold text-[13px]">{item.title}</span>
                                {item.status && (
                                  <span className="text-[9px] font-black uppercase text-blue-500 tracking-tighter">
                                    {item.status}
                                  </span>
                                )}
                              </div>
                            </Link>
                          )}
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