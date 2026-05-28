// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer"; // <-- Importación correcta del Footer
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
  title: "Portafolio | Proyecto AJUPTEL",
  description: "Proyecto Sociotecnológico con Marco de Trabajo Scrum - Ajuptel",
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
            
            {/* El Navbar queda fijo en la parte superior */}
            <Navbar />
            
            {/* Contenedor principal estructurado en flex-col */}
            <main className="flex-1 pt-20 flex flex-col w-full">
              {/* Este div flex-1 empuja el footer hacia abajo si hay poco contenido */}
              <div className="flex-1 w-full">
                {children}
              </div>
              
              {/* Pie de página académico unificado */}
              <Footer />
            </main>

          </TooltipProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}