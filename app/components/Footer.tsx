'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white py-6 px-4 mt-auto border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-1.5 text-center">
        {/* Línea Académica */}
        <p className="text-xs md:text-sm font-bold tracking-wide text-slate-800 uppercase">
          UNETI Trayecto IV Ingeniería en Informática - PST IV Módulo 2
        </p>
        
        {/* Línea de Copyright y Autoría del Equipo */}
        <p className="text-[10px] md:text-xs text-slate-400 font-medium tracking-tight">
          © {currentYear} Portafolio del Proyecto Sistema Web Responsivo de Gestión Administrativa - AJUPTEL • Desarrollado por el Equipo Scrum. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}