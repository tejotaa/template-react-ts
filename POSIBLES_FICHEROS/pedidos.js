import { useState } from "react";

const productosEjemplo = [
  {
    id: 1,
    nombre: "Baguette",
    precio: 2.5,
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nombre: "Croissant",
    precio: 1.8,
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    nombre: "Pan de Chocolate",
    precio: 2.0,
    imagen: "https://via.placeholder.com/150",
  },
];

const horariosDisponibles = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
];

export default function Pedidos() {
  const [carrito, setCarrito] = useState([]);
  const [horario, setHorario] = useState("");

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">🥐 Haz tu Pedido</h1>

      {/* Catálogo de Productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {productosEjemplo.map((producto) => (
          <div
            key={producto.id}
            className="bg-white p-5 shadow rounded-lg text-center"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="mx-auto mb-3 rounded-lg"
            />
            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
            <p className="text-gray-700">${producto.precio.toFixed(2)}</p>
            <button
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => agregarAlCarrito(producto)}
            >
              + Agregar
            </button>
          </div>
        ))}
      </div>

      {/* Carrito flotante */}
      {carrito.length > 0 && (
        <div className="fixed bottom-5 right-5 bg-white p-4 shadow-lg rounded-lg w-80">
          <h2 className="text-xl font-bold mb-3">🛒 Tu Pedido</h2>
          <ul>
            {carrito.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b py-2"
              >
                <span>{item.nombre}</span>
                <button
                  className="text-red-500"
                  onClick={() => eliminarDelCarrito(index)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>

          {/* Selector de Horario */}
          <label className="block mt-3 font-semibold">
            🕒 Hora de Recogida
          </label>
          <select
            className="w-full p-2 border rounded mt-2"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          >
            <option value="">Selecciona una hora</option>
            {horariosDisponibles.map((hora, index) => (
              <option key={index} value={hora}>
                {hora}
              </option>
            ))}
          </select>

          {/* Botón de Confirmar Pedido */}
          <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600">
            Confirmar Pedido
          </button>
        </div>
      )}
    </div>
  );
}
