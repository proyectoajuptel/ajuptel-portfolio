"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Navbar() {
  const router = useRouter()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* GRUPO IZQUIERDO: Cintillo Institucional y Logo */}
        <div className="flex items-center h-full">
          
          {/* Contenedor del Cintillo Institucional */}
          <div className="border-r border-gray-200 pr-6 mr-6 flex items-center h-full">
            <Image 
              src="/institucional.svg" 
              alt="Cintillo Institucional" 
              width={280}   // Aumentamos el ancho base para que Next.js le asigne espacio
              height={50}   // Altura proporcional
              className="w-auto h-10 md:h-12 object-contain" // Con h-10 o h-12 controlas el tamaño real en pantalla
              priority
            />
          </div>
          
          {/* Logo AJUPTEL + Texto */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => router.push("/")}
          >
            <Image 
              src="/Logo AJUPTEL.svg" 
              alt="Logo AJUPTEL" 
              width={48} 
              height={48} 
              className="w-12 h-12 shrink-0 group-hover:scale-105 transition-transform object-contain" 
              priority
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-black text-slate-900 leading-none">AJUPTEL</span>
              <span className="text-[9px] text-blue-600 font-bold uppercase tracking-widest mt-1">
                Carabobo
              </span>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: Botón Dashboard */}
        <button 
          onClick={() => router.push("/dashboard?sidebar=hidden")} 
          className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-100 text-sm active:scale-95"
        >
          Dashboard
        </button>
      </div>
    </header>
  )
}