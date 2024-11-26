import React, { useState } from 'react';

const Ejercicio1 = () => {
    const [carrito, setCarrito] = useState([]);

    const productos = [
        {
            id: 1,
            nombre: 'Cámara Fotográfica',
            precio: 10,
            imagen: '/PROGRAMACION_DE_COMPONENTES/FOTOGRAFICA.jpg', 
        },
        {
            id: 2,
            nombre: 'Auto',
            precio: 20,
            imagen: '/PROGRAMACION_DE_COMPONENTES/auto.jpg', 
        },
        {
            id: 3,
            nombre: 'Teléfono',
            precio: 30,
            imagen: '/PROGRAMACION_DE_COMPONENTES/telefono.jpg', 
        },
    ];

   
    const agregarAlCarrito = (producto) => {
        
        const productoExistente = carrito.find((item) => item.id === producto.id);
        if (!productoExistente) {
            setCarrito([...carrito, producto]);
        }
    };

    
    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter((item) => item.id !== id));
    };

    return (
        <div className="main-container">
            <h2>Lista de Productos</h2>
            <div className="productos-container">
                {productos.map((producto) => (
                    <div key={producto.id} className="producto">
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="producto-imagen"
                        />
                        <button onClick={() => agregarAlCarrito(producto)}>
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>

            <div className="carrito-container">
                <h2>Carrito:</h2>
                {carrito.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) : (
                    <ul>
                        {carrito.map((item) => (
                            <li key={item.id}>
                                {item.nombre} - ${item.precio}
                                { }
                                <button
                                    onClick={() => eliminarDelCarrito(item.id)}
                                    style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Ejercicio1;
