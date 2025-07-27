import { useState } from "react";

const crossings = [
  { id: "sy-normal", name: "SY Normal" },
  { id: "sy-ready", name: "SY Ready Lane" },
  { id: "sy-sentri", name: "SY Sentri" },
  { id: "otay", name: "Otay" },
];

const streams = {
  "sy-normal": "https://www.youtube.com/embed/LINK_SY_NORMAL",
  "sy-ready": "https://www.youtube.com/embed/LINK_SY_READY",
  "sy-sentri": "https://www.youtube.com/embed/LINK_SY_SENTRI",
  "otay": "https://www.youtube.com/embed/LINK_OTAY",
};

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {!selected ? (
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">¿Por dónde cruzas?</h1>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {crossings.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className="bg-white text-black px-6 py-4 rounded-2xl shadow-xl text-lg hover:scale-105 transition"
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-5xl space-y-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setSelected(null)}
              className="text-sm underline hover:text-gray-300"
            >
              ← Cambiar cruce
            </button>
            <span className="text-xl font-semibold">
              {crossings.find((c) => c.id === selected)?.name}
            </span>
            <div></div>
          </div>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-xl"
              src={streams[selected]}
              title="BorderView Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-white text-black p-4 rounded-xl shadow-md mt-4">
            <h2 className="text-lg font-bold mb-2">Anuncio destacado</h2>
            <p>
              ¡Visita Café Frontera a solo 5 minutos de aquí y recibe un 10%
              de descuento si muestras este anuncio!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
