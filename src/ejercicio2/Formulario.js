import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { collection, addDoc } from 'firebase/firestore';
import db from './firebaseConfig';

const Formulario = () => {
    const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
    const [validator] = useState(new SimpleReactValidator({
        messages: {
            required: 'El campo es obligatorio.',
            email: 'El correo electrónico es válido.',
            alpha: 'El campo solo puede contener letras.',
        },
        locale: 'es',
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            try {
                await addDoc(collection(db, "formularioDatos"), formData);
                console.log('Datos guardados en Firestore');
                setFormData({ nombre: '', correo: '', mensaje: '' });
            } catch (error) {
                console.error('Error al guardar los datos:', error);
            }
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
                {validator.message('nombre', formData.nombre, 'required|alpha')}
            </div>
            <div>
                <label>Correo:</label>
                <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                />
                {validator.message('correo', formData.correo, 'required|email')}
            </div>
            <div>
                <label>Mensaje:</label>
                <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                />
                {validator.message('mensaje', formData.mensaje, 'required')}
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
