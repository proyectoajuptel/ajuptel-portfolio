"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image" // Cambiado para evitar la advertencia de LCP
import { Cpu, Handshake } from "lucide-react"

const equipoData = [
    {
    nombre: "Nattier Caraballo",
    rol: "Product Owner",
    descripcion: "Define prioridades y maximiza el valor del producto para el cliente.",
    foto: "/nattier_full.jpeg",
    fotoAvatar: "/nattier.jpg",
    iniciales: "NC",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    evaluacion: "Nattier tiene una visión estratégica que garantiza que cada una de las historias de usuario aporte un valor real al proyecto AJUPTEL.",
    fortalezas: [{ skill: "Visión de Producto", valor: 94 }, { skill: "Priorización", valor: 96 }, { skill: "Análisis", valor: 90 }, { skill: "UX Strategy", valor: 82 }],
  },
  {
    nombre: "Cindia López",
    rol: "Scrum Master",
    descripcion: "Facilita el proceso Scrum y ayuda al equipo a superar impedimentos.",
    foto: "/cindia_full.jpeg",
    fotoAvatar: "/cindia.jpg",
    iniciales: "CL",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    evaluacion: "Cindia destaca por su liderazgo de servicio y su agilidad para resolver conflictos internos, asegurando que el flujo de trabajo nunca se detenga.",
    fortalezas: [{ skill: "Liderazgo", valor: 95 }, { skill: "Facilitación", valor: 88 }, { skill: "Resolución de Conflictos", valor: 92 }, { skill: "Gestión de Riesgos", valor: 85 }],
  },
  {
    nombre: "Jorge Linares",
    rol: "Developer",
    descripcion: "Especialista en aseguramiento de calidad y prototipado, garantizando una experiencia de usuario estable y sin errores.",
    foto: "/jorge_full.jpeg",
    fotoAvatar: "/jorge.jpg",
    iniciales: "JL",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    evaluacion: "Jorge es fundamental para garantizar la usabilidad y la estabilidad del sistema. Su enfoque en el aseguramiento de calidad y la creación de wireframes asegura que cada funcionalidad sea intuitiva y esté libre de errores antes de llegar al usuario final.",
    fortalezas: [{ skill: "QA & Testing", valor: 92 }, { skill: "Diseño de Wireframes", valor: 88 }, { skill: "Aseguramiento de Calidad", valor: 90 }, { skill: "Documentación Técnica", valor: 85 }],
  },
  {
    nombre: "Luis Mujica",
    rol: "Developer",
    descripcion: "Arquitecto principal del sistema, responsable de la lógica técnica y el alto rendimiento de la plataforma.",
    foto: "/luis_full.jpeg",
    fotoAvatar: "/luis.jpg",
    iniciales: "LM",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    evaluacion: "Luis es parte del motor técnico y pilar de la arquitectura robusta de AJUPTEL. Su enfoque en lógica compleja permite construir una plataforma escalable y de alto rendimiento, liderando la implementación de las soluciones técnicas más críticas del proyecto.",
    fortalezas: [{ skill: "Arquitectura de Software", valor: 98 }, { skill: "Lógica Algorítmica", valor: 96 }, { skill: "Optimización Backend", valor: 94 }, { skill: "Liderazgo Técnico", valor: 90 }],
  }
]

export default function EquipoPage() {
  return (
    
    <div className="max-w-7xl mx-auto space-y-12">
      <div className="text-left">
        <h2 className="text-5xl font-extrabold italic text-slate-900 tracking-tighter">Nuestro Equipo Scrum</h2>
        <p className="text-slate-500 mt-2 font-medium max-w-2xl leading-relaxed">Talento humano detrás de la modernización de AJUPTEL.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {equipoData.map((miembro) => (
          <Sheet key={miembro.nombre}>
            <SheetTrigger asChild>
              <Card className="border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 rounded-4xl overflow-hidden group cursor-pointer hover:-translate-y-1">
                <CardHeader className="flex flex-col items-center pb-2 pt-10">
                  <div className="relative">
                    <Avatar className="w-28 h-28 mb-4 border-4 border-white shadow-xl">
                      <AvatarImage src={miembro.fotoAvatar} alt={miembro.nombre} />
                      <AvatarFallback>{miembro.iniciales}</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-6 right-1 h-6 w-6 bg-green-500 border-4 border-white rounded-full"></div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 tracking-tight">{miembro.nombre}</CardTitle>
                  <Badge className={`mt-2 ${miembro.color} font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest`}>{miembro.rol}</Badge>
                </CardHeader>
                <CardContent className="text-center px-8 pb-10">
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{miembro.descripcion}</p>
                </CardContent>
              </Card>
            </SheetTrigger>

            <SheetContent className="sm:max-w-md md:max-w-xl overflow-y-auto">
              <SheetHeader className="p-4 border-b border-slate-50">
                <SheetTitle className="text-2xl font-black italic tracking-tighter text-slate-900">Ficha de Evaluación Scrum</SheetTitle>
                <SheetDescription>Justificación de selección para el rol de {miembro.rol}.</SheetDescription>
              </SheetHeader>
              <div className="p-6 space-y-8">
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  {/* Corregido: Usando componente Image de Next.js */}
                  <div className="relative w-40 h-52">
                    <Image src={miembro.foto} alt={miembro.nombre} fill className="object-cover rounded-2xl shadow-lg border-2 border-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-2xl font-bold text-slate-900">{miembro.nombre}</h4>
                    <Badge className={`mt-2 ${miembro.color} font-bold px-4 py-1.5 rounded-full text-[10px] uppercase`}>{miembro.rol}</Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-slate-800"><Handshake size={20} className="text-blue-500" /><span>¿Por qué este rol?</span></div>
                  <p className="text-sm text-slate-600 bg-white border border-slate-100 p-4 rounded-2xl leading-relaxed">{miembro.evaluacion}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-slate-800"><Cpu size={20} className="text-blue-500" /><span>Fortalezas Clave</span></div>
                  <div className="space-y-4 p-4 bg-white border border-slate-100 rounded-2xl">
                    {miembro.fortalezas.map((f) => (
                      <div key={f.skill} className="space-y-1">
                        <div className="flex justify-between text-[11px] font-bold text-slate-600 uppercase tracking-wide"><span>{f.skill}</span><span>{f.valor}%</span></div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${f.valor}%` }} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </div>
  )
}