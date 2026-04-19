// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import Navbar from "@/app/components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio Scrum | Caso 9",
  description: "Proyecto Final de Metodología Scrum - Equipo Ajuptel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-linear-to-br from-slate-50 via-white to-blue-50 text-slate-900 selection:bg-blue-100">
        <SidebarProvider>
          <TooltipProvider>
            {/* El Navbar queda fijo arriba */}
            <Navbar />
            
            {/* Contenedor principal con padding para que el Navbar no tape el contenido */}
            <main className="flex-1 pt-20">
              {children}
            </main>

            {/* Aquí es donde se renderizará el Sidebar cuando lo llames */}
          </TooltipProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}