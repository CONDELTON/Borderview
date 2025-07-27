import React, { useState } from "react";

const crossings = [
  { id: "sy-normal", name: "SY Normal" },
  { id: "sy-ready", name: "SY Ready Lane" },
  { id: "sy-sentri", name: "SY Sentri" },
  { id: "otay", name: "Otay" },
];

const streams = {
  "sy-normal": "https://www.youtube.com/embed/5qap5aO4i9A", // prueba
  "sy-ready": "https://www.youtube.com/embed/5qap5aO4i9A", // prueba
  "sy-sentri": "https://www.youtube.com/embed/5qap5aO4i9A", // prueba
  "otay": "https://www.youtube.com/embed/5qap5aO4i9A", // prueba
};

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {!selected ? (
        <>
          <h1 className="text-4xl font-bold mb-10 text-center">¿Por dónde cruzas?</h1>
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
        <>
          <button
            onClick={() => setSelected(null)}
            className="mb-4 text-blue-400 underline hover:text-blue-200"
          >
            ⬅ Volver
          </button>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-2xl shadow-lg"
              src={streams[selected]}
              title="Transmisión en vivo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
}

