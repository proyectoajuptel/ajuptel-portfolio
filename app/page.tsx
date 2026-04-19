export default function Home() {
  return (
    <main className="pt-24 p-8">
      <section className="w-full bg-white rounded-lg shadow p-8 mb-8 text-center">
        <h1 className="text-6xl font-bold text-blue-700">Portafolio Scrum</h1>
        <p className="mt-6 text-xl text-gray-700">
          Proyecto final del equipo Ajuptel - UNETI
        </p>
      </section>

      <div className="mt-16 flex justify-center gap-6 flex-wrap">
        <button className="w-64 py-4 bg-white text-gray-700 rounded-lg shadow transition hover:shadow-lg hover:bg-gray-50">
          Dashboard
        </button>
        <button className="w-64 py-4 bg-white text-gray-700 rounded-lg shadow transition hover:shadow-lg hover:bg-gray-50">
          Equipo
        </button>
        <button className="w-64 py-4 bg-white text-gray-700 rounded-lg shadow transition hover:shadow-lg hover:bg-gray-50">
          Empresa
        </button>
        <button className="w-64 py-4 bg-white text-gray-700 rounded-lg shadow transition hover:shadow-lg hover:bg-gray-50">
          Fases
        </button>
        <button className="w-64 py-4 bg-white text-gray-700 rounded-lg shadow transition hover:shadow-lg hover:bg-gray-50">
          Conclusiones
        </button>
      </div>
    </main>
  )
}
