"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Cpu, Handshake, Users, ArrowLeft } from "lucide-react"

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
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Cabecera Unificada para evitar el espacio en blanco gigante */}
      <div className="space-y-4">
        {/* Botón Volver al Dashboard */}
        <div>
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 uppercase tracking-wider transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Volver al Dashboard
          </Link>
        </div>

        {/* Encabezado con Cápsula de Estilo e Icono Integrado */}
        <div className="text-left space-y-3">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full shadow-sm">
              <Users size={14} className="stroke-[2.5]" />
              Gestión de Talento
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
              Nuestro Equipo Scrum
            </h1>
            <div className="h-1 w-16 bg-blue-600 rounded-full" />
          </div>
          
          <p className="text-sm text-slate-500 max-w-2xl pt-1 leading-relaxed font-medium">
            Talento humano detrás de la modernización de AJUPTEL.
          </p>
        </div>
      </div>

      {/* Grid de Miembros con Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {equipoData.map((miembro) => (
          <Sheet key={miembro.nombre}>
            <SheetTrigger asChild>
              <Card className="bg-white border border-slate-100 shadow-md hover:shadow-xl hover:border-slate-200 transition-all duration-300 rounded-xl overflow-hidden group cursor-pointer hover:-translate-y-1.5">
                <CardHeader className="flex flex-col items-center pb-2 pt-10">
                  <div className="relative">
                    <Avatar className="w-28 h-28 mb-4 border-4 border-white shadow-lg">
                      <AvatarImage src={miembro.fotoAvatar} alt={miembro.nombre} />
                      <AvatarFallback>{miembro.iniciales}</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-6 right-1 h-5 w-5 bg-green-500 border-4 border-white rounded-full"></div>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800 tracking-tight">{miembro.nombre}</CardTitle>
                  <Badge className={`mt-2 ${miembro.color} font-bold px-4 py-1 rounded-full text-[10px] uppercase tracking-widest border`}>
                    {miembro.rol}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center px-6 pb-10">
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{miembro.descripcion}</p>
                </CardContent>
              </Card>
            </SheetTrigger>

            {/* Panel Lateral */}
            <SheetContent className="sm:max-w-md md:max-w-xl overflow-y-auto">
              <SheetHeader className="p-4 border-b border-slate-100">
                <SheetTitle className="text-xl font-bold tracking-tight text-slate-900">
                  Ficha de Evaluación Scrum
                </SheetTitle>
                <SheetDescription>Justificación de selección para el rol de {miembro.rol}.</SheetDescription>
              </SheetHeader>
              
              <div className="p-6 space-y-8">
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="relative w-40 h-52">
                    <Image src={miembro.foto} alt={miembro.nombre} fill className="object-cover rounded-xl shadow-md border-2 border-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold text-slate-900">{miembro.nombre}</h4>
                    <Badge className={`mt-2 ${miembro.color} font-bold px-4 py-1 rounded-full text-[10px] uppercase border`}>
                      {miembro.rol}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                    <Handshake size={18} className="text-blue-600" />
                    <span>¿Por qué este rol?</span>
                  </div>
                  <p className="text-sm text-slate-600 bg-white border border-slate-200/60 p-4 rounded-xl leading-relaxed">
                    {miembro.evaluacion}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                    <Cpu size={18} className="text-blue-600" />
                    <span>Fortalezas Clave</span>
                  </div>
                  <div className="space-y-4 p-4 bg-white border border-slate-200/60 rounded-xl">
                    {miembro.fortalezas.map((f) => (
                      <div key={f.skill} className="space-y-1">
                        <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                          <span>{f.skill}</span>
                          <span className="text-slate-700">{f.valor}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full transition-all duration-1000" style={{ width: `${f.valor}%` }} />
                        </div>
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