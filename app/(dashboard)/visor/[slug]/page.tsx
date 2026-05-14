"use client";

import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const DOCS_MAP: Record<string, { title: string; file: string }> = {
  // Añadimos la clave EXACTA que sale en tu error 404
  "ACTA_DE_CONSTITUCION_AJUPTEL": { 
    title: "ACTA_DE_CONSTITUCION_AJUPTEL", 
    file: "/docs/fase1/ACTA_DE_CONSTITUCION_AJUPTEL.pdf" 
  }
};

export default function DocumentVisor() {
  const router = useRouter();
  const params = useParams();
  
  // Limpiamos el slug por si llega con espacios
  const slug = (params?.slug as string)?.trim();
  const doc = DOCS_MAP[slug];

  if (!doc) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold">Documento no encontrado</h2>
        <p className="text-slate-500">El slug &quot;{slug}&quot; no coincide con ningún archivo.</p>
        <button onClick={() => router.back()} className="text-blue-600 underline mt-4">Volver</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b bg-slate-50">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="p-2 hover:bg-white rounded-full shadow-sm border">
            <ArrowLeft size={20} />
          </button>
          <span className="font-bold text-slate-900">{doc.title}</span>
        </div>
        <a href={doc.file} download className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold">
          Descargar PDF
        </a>
      </div>
      <div className="flex-1 bg-slate-500 p-4">
        {/* Usamos el objeto doc.file que ya tiene la ruta correcta */}
        <iframe src={doc.file} className="w-full h-full rounded-lg bg-white" title={doc.title} />
      </div>
    </div>
  );
}