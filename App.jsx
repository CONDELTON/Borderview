import React, { useState } from "react";

// Opciones de cruces disponibles en la frontera
const crossings = [
  { id: "sy-normal", name: "SY Normal" },
  { id: "sy-ready", name: "SY Ready Lane" },
  { id: "sy-sentri", name: "SY Sentri" },
  { id: "otay", name: "Otay" },
];

// Enlaces a transmisiones de prueba. Cuando tengas tu propio feed
// (ya sea del dron o de la cámara del móvil), reemplaza las URLs
// por los enlaces de tus transmisiones en YouTube u otra plataforma.
const streams = {
  "sy-normal": "https://www.youtube.com/embed/5qap5aO4i9A", // Lo-Fi de prueba
  "sy-ready": "https://www.youtube.com/embed/5qap5aO4i9A",
  "sy-sentri": "https://www.youtube.com/embed/5qap5aO4i9A",
  "otay": "https://www.youtube.com/embed/5qap5aO4i9A",
};

/**
 * Componente principal de la aplicación. Muestra una pantalla inicial
 * para elegir por dónde cruzar y, una vez seleccionada la opción,
 * despliega la transmisión en vivo correspondiente con un botón para
 * regresar al menú.
 */
export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {!selected ? (
        // Pantalla de selección de cruce
        <>
          <h1 className="text-4xl font-bold mb-10 text-center">
            ¿Por dónde cruzas?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
            {crossings.map(({ id, name }) => (
              <button
                key={id}
                onClick={() => setSelected(id)}
                className="bg-blue-600 hover:bg-blue-700 transition rounded-2xl p-6 text-xl font-semibold shadow-lg"
              >
                {name}
              </button>
            ))}
          </div>
        </>
      ) : (
        // Pantalla de transmisión en vivo
        <>
          <button
            onClick={() => setSelected(null)}
            className="mb-4 text-blue-400 underline hover:text-blue-200 self-start"
          >
            ⬅ Volver
          </button>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-2xl shadow-lg"
              src={streams[selected]}
              title="Transmisión en vivo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {/* Espacio para anuncios: puedes insertar un componente de anuncios aquí.
              Por ejemplo, banners rotativos o anuncios fijos. */}
          <div className="mt-6 w-full max-w-4xl flex justify-center">
            <div className="bg-gray-800 rounded-xl p-4 w-full text-center">
              <p className="text-sm text-gray-300">
                Anuncio de prueba: Patrocinador principal — tu negocio aquí.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
