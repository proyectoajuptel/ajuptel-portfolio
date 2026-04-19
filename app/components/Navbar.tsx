"use client"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + texto */}
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold text-blue-600">Ajuptel</span>
          <span className="text-sm text-gray-600">UNETI</span>
        </div>

        {/* Botón Dashboard */}
        <button
          onClick={() => router.push("/dashboard")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Dashboard
        </button>
      </div>
    </nav>
  )
}
