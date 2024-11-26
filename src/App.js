import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ejercicio1 from "./ejercicio1/";
import Formulario from "./ejercicio2/Formulario";
import Ejercicio3 from "./ejercicio3/Ejercicio3"; 
import "./App.css"; 

const App = () => {
  return (
    <Router>
      <div className="contenedor-central">
        <h1>Examen Final</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/ejercicio1">Ejercicio 1</Link></li>
            <li><Link to="/ejercicio2">Ejercicio 2</Link></li>
            <li><Link to="/ejercicio3">Ejercicio 3</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/ejercicio1" element={<Ejercicio1 />} />
          <Route path="/ejercicio2" element={<Formulario />} />
          <Route path="/ejercicio3" element={<Ejercicio3 />} /> { }
          <Route path="/" element={<div>Bienvenido al Examen Final</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
