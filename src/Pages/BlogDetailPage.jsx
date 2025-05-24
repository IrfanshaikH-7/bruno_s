import React from "react";

import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id == id);
  return (
    <>
      <section id="hero" className="bg-black pb-8 pt-32 md:pt-32">
        <div className="main-container">
        <div className="relative ">
            <div className="bg-gradient-to-b from-transparent to-black absolute top-0 left-0 z-20 h-full w-full rounded-xl"/>
            <img
            src={blog.imagePath}
            alt={`Course id ${blog.id}`}
            className="object-cover w-full h-36 md:h-[70vh] rounded-xl"
          />
          </div>
          <h1 className="text-[#DFB6B2] text-4xl md:text-6xl font-bold my-10">
            {blog.title}
          </h1>
          <p className="text-[#FBE5D8] text-2xl md:text-4xl font-light my-10">
            {blog.description}
          </p>

          {/* Exercise 1 */}
          <div>
            <h3 className="text-2xl md:text-4xl mb-3">Ejercicio 1: Completa con los adjetivos correctos</h3>
            <p className="text-xl md:text-3xl mb-3">
              Instrucciones: Lee la letra de la canción "Diva". Algunos
              adjetivos han sido eliminados. Escucha la canción y complétala con
              los adjetivos adecuados.
            </p>

            <p className="text-xl md:text-2xl mb-3">
              Desde que era bien pequeña Antes de saber andar Fui, del mundo, la
              rumbera Para mí, era tan ________ Y descubrí a una suprema del
              teatro Despreciando a los demás del camerino Pero la supuesta diva
              Por el eco de una vida Que no le pertenecía, se ________ Una diva
              es ________ como un simple mortal Una diva no pisa a nadie para
              brillar Su voz le hace grande, ¿qué más da Si ella es ________
              cantando como un pez en el mar? Una diva es ________, ________ Su
              vida es un jardín lleno de espinas y rosas Resurge bailando Con
              más fuerza que un huracán Es la madre que madruga Es la artista
              sin cartel Con dinero o sin fortuna
            </p>
            
            <h3 className="text-xl md:text-3xl mb-3">Melody (Esa Diva) Level: A2-B1 2</h3>
            <p className="text-xl md:text-2xl mb-3">
              Ellas son divas también No es la fama tu grandeza La igualdad es
              mi bandera Y la música es mi única ilusión Una diva es ________
              como un simple mortal Una diva no pisa a nadie para brillar Su voz
              le hace grande, ¿qué más da Si ella es ________ cantando como un
              pez en el mar? Una diva es ________, ________ Su vida es un jardín
              lleno de espinas y rosas Resurge bailando Con más fuerza que un
              huracán Ya verán Diva, diva, diva, diva Diva, diva, diva, diva
              Oh-oh, oh-oh Diva, diva, diva, diva Diva, diva, diva, diva Oh-oh,
              oh-oh Somos divas, tú y yo, oh Si ella es ________ cantando como
              un pez en el mar Una diva es ________, ________ Su vida es un
              jardín lleno de espinas y rosas Resurge bailando Con más fuerza
              que un huracán Ya verán, esa diva soy yo
            </p>
          </div>

          {/* Exercise 2 */}
          <div>
            <h2 className="text-2xl md:text-4xl mb-3">
              Ejercicio 2: Une los adjetivos con sus definiciones
            </h2>
            <p className="text-xl md:text-3xl mb-3">
              Instrucciones: Relaciona cada adjetivo de la canción con su
              definición correcta.
            </p>
            <div className="flex">
              <div>
                <ul className="w-full">
                  <li className="w-full">1. Sencilla</li>
                  <li className="w-full">2. Valiente</li>
                  <li className="w-full">3. Poderosa</li>
                  <li className="w-full">4. Embrujada</li>
                  <li className="w-full">5. Libre</li>
                  <li className="w-full">6. Fuerte</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="w-full">a) Que no se deja vencer por el miedo.</li>
                  <li className="w-full">b) Que destaca por su gran fuerza o poder.</li>
                  <li className="w-full">c) Que tiene humildad, no es arrogante.</li>
                  <li className="w-full">d) Que se siente libre y sin ataduras.</li>
                  <li className="w-full">e) Que está fascinada o hechizada por algo.</li>
                  <li className="w-full">f) Que posee resistencia y vigor.</li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>

          {/* Exercise 2 */}
          <div>
            <h2 className="text-2xl md:text-4xl mb-3">
              Ejercicio 3: Relaciona
            </h2>
            <p className="text-xl md:text-3xl mb-3">
              Relaciona las palabras y expresiones de la canción con su sinónimo
              o antónimo correcto.
            </p>
          </div>

          {/* Exercise 4 */}
          <div>
            <h2 className="text-2xl md:text-4xl mb-3">Extra:</h2>
            <p className="text-xl md:text-3xl mb-3">
              Elige tres palabras o expresiones de la lista y escribe una frase
              con cada una.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;
