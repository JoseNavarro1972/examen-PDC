import React, { useState } from 'react';

const Ejercicio1 = () => {
    const [productos] = useState([
        { id: 1, nombre: 'Cámara Fotográfica', precio: 10 },
        { id: 2, nombre: 'Auto', precio: 20 },
        { id: 3, nombre: 'Teléfono', precio: 30 },
    ]);

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const eliminarDelCarrito = (productoId) => {
        setCarrito(carrito.filter((producto) => producto.id !== productoId));
    };

    return (
        <div>
            <h2>Ejercicio 1: Lista de productos</h2>
            <h3>Lista de Productos</h3>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        {producto.nombre} <br />
                        Precio: ${producto.precio} <br />
                        <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                    </li>
                ))}
            </ul>
            <h3>Carrito:</h3>
            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <ul>
                    {carrito.map((producto) => (
                        <li key={producto.id}>
                            {producto.nombre} - ${producto.precio} <br />
                            <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Ejercicio1;
