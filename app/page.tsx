// app/page.tsx
export default function Home() {
  return (
    <main className="space-y-16 p-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white rounded-lg">
        <h1 className="text-5xl font-bold">Proyecto Final Scrum</h1>
        <p className="mt-4 text-xl">
          Portafolio del equipo mostrando fases y resultados
        </p>
      </section>

      {/* Fases de Desarrollo */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Fases de Desarrollo</h2>
        <div className="space-y-6">
          <div className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded">
            <h3 className="text-xl font-bold">1. Análisis de requisitos</h3>
            <p>Recopilación de necesidades del cliente y definición de historias de usuario.</p>
          </div>
          <div className="p-6 border-l-4 border-green-600 bg-gray-50 rounded">
            <h3 className="text-xl font-bold">2. Planificación</h3>
            <p>Diseño de la arquitectura, asignación de tareas y definición del backlog inicial.</p>
          </div>
          <div className="p-6 border-l-4 border-yellow-600 bg-gray-50 rounded">
            <h3 className="text-xl font-bold">3. Implementación</h3>
            <p>Desarrollo del sistema utilizando las tecnologías seleccionadas.</p>
          </div>
          <div className="p-6 border-l-4 border-red-600 bg-gray-50 rounded">
            <h3 className="text-xl font-bold">4. Lanzamiento</h3>
            <p>Pruebas finales, despliegue y entrega del producto al cliente.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
