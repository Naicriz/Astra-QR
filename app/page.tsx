import React from "react";

function App() {
  return (
    <div className="scroll-smooth">
      {/* Menú superior con opciones */}
      <nav className="fixed top-0 flex items-center justify-center w-full h-16 bg-gray-100">
        <ul className="flex space-x-4 text-lg font-bold">
          <li><a href="#inicio" className="hover:text-blue-500">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-blue-500">Servicios</a></li>
          <li><a href="#nosotros" className="hover:text-blue-500">Nosotros</a></li>
          <li><a href="#contacto" className="hover:text-blue-500">Contacto</a></li>
        </ul>
      </nav>
      {/* Contenido principal con secciones */}
      <div className="h-screen pt-16 overflow-y-auto bg-gray-200">
        <section id="inicio" className="h-screen p-4 text-center">
          <h1 className="text-4xl font-bold">Bienvenido a nuestro sitio web</h1>
          <p className="mt-4 text-xl">Aquí encontrarás información sobre lo que hacemos y cómo podemos ayudarte.</p>
        </section>
        <section id="servicios" className="h-screen p-4 text-center">
          <h2 className="text-3xl font-bold">Nuestros servicios</h2>
          <p className="mt-4 text-xl">Ofrecemos una variedad de servicios para satisfacer tus necesidades.</p>
        </section>
        <section id="nosotros" className="h-screen p-4 text-center">
          <h2 className="text-3xl font-bold">Quiénes somos</h2>
          <p className="mt-4 text-xl">Somos un equipo de profesionales apasionados por lo que hacemos.</p>
        </section>
        <section id="contacto" className="h-screen p-4 text-center">
          <h2 className="text-3xl font-bold">Contáctanos</h2>
          <p className="mt-4 text-xl">Si tienes alguna consulta o sugerencia, no dudes en escribirnos.</p>
        </section>
      </div>
    </div>
  );
}

export default App;