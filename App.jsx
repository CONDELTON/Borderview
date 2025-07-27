import React from "react";

const App = () => {
  const handleClick = (crossing) => {
    alert(`Seleccionaste: ${crossing}`);
    // Aquí después rediriges a la transmisión real
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">¿Por dónde cruzas?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
        {["SY Normal", "SY Ready Lane", "SY Sentri", "Otay"].map((opcion) => (
          <button
            key={opcion}
            onClick={() => handleClick(opcion)}
            className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-2xl p-6 text-xl font-semibold shadow-lg"
          >
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
