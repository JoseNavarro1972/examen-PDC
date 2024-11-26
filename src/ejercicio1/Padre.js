import React, { Component } from 'react';
import Hijo from './Hijo'; 

class Padre extends Component {
   state = {
       productos: [
           { id: 1, nombre: 'Cámara Fotográfica', precio: 10, imagen: '/PROGRAMACION/fotografica.jpg' },
           { id: 2, nombre: 'Auto', precio: 20, imagen: '/PROGRAMACION/auto.jpg' },
           { id: 3, nombre: 'Teléfono', precio: 30, imagen: '/PROGRAMACION/telefono.jpg' }
       ],
       carrito: []
   };

    agregarAlCarrito = (producto) => {
        this.setState((prevState) => ({
            carrito: [...prevState.carrito, producto]
        }));
    };

    eliminarDelCarrito = (id) => {
        this.setState((prevState) => ({
            carrito: prevState.carrito.filter(producto => producto.id !== id)
        }));
    };

    render() {
        return (
            <div>
                <h2>Lista de Productos</h2>
                <div>
                    {this.state.productos.map((producto) => (
                        <Hijo
                            key={producto.id}
                            producto={producto}
                            onAgregar={this.agregarAlCarrito}
                        />
                    ))}
                </div>

                <h3>Carrito:</h3>
                <ul>
                    {this.state.carrito.map((producto, index) => (
                        <li key={index}>
                            {producto.nombre} - ${producto.precio}
                            <button onClick={() => this.eliminarDelCarrito(producto.id)}>
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Padre;
