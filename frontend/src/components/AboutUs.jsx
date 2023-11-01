// Importing required modules and components

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/style.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

/**
 * AboutUs Component
 *
 * This component displays information about the organization, the owner, and their journey.
 *
 * @returns JSX.Element
 */
function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration: 1000,

        });
    }, []);


    const timelineData = [
        {
            date: '2001',
            title: 'Workshop Founded',
            description: 'The inception of our beloved workshop.',
        },
        {
            date: '2005',
            title: 'First Exhibition',
            description: 'Held our first art exhibition showcasing artworks from budding artists.',
        },
        // ... Add more events
    ];
    const ART_PIECES = [
        {
            name: 'goku1',
            description: 'Descripción detallada de la primera pieza de arte.'
        },
        {
            name: 'goku2',
            description: 'Descripción detallada de la segunda pieza de arte.'
        },
        {
            name: 'mob',
            description: 'Descripción detallada de la tercera pieza de arte.'
        },

        // ... agregar cualquier otra pieza de arte con su descripción correspondiente
    ];


    // ...

    return (
        <div className="min-h-screen px-8 py-12 bg-gradient-to-t from-blue-100 via-purple-100 purple-100 to-white

 relative">

            {/* Introduction Section with Parallax Effect */}
            <section className="py-12 bg-palette-grey2 relative overflow-hidden" data-aos="fade-down">
                <div className="absolute top-0 left-0 w-full h-full z-0 ">
                    <img src="/images/escultura.jpg" alt="Fondo Artístico" className="object-cover w-full h-full opacity-20" />
                </div>
                <div className="container mx-auto px-4 z-10 relative">
                    <h2 className="text-5xl font-bold mb-8 text-center text-blue-900" data-aos="fade-down">¿Quiénes Somos?</h2>
                    <p className="text-xl text-gray-700" data-aos="fade">Nos apasiona el arte y la creatividad.</p>
                    <img src="/images/escultura.jpg" alt="Introducción al Taller" className="mt-8 rounded-xl shadow-lg" data-aos="zoom-in"/>
                </div>
            </section>

            {/* About the Owner Section */}
            <section className="py-12 bg-white" data-aos="fade-down">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <img src="/images/marian.jpg" alt="Dueño" className="w-72 h-72 rounded-full shadow-lg mb-8 md:mb-0 md:mr-8" data-aos="zoom-in"/>
                    <div data-aos="fade-right">
                        <h2 className="text-5xl font-bold mb-4 text-blue-900">Acerca del Dueño</h2>
                        <p className="text-xl text-gray-700">Comprometido a fomentar una comunidad de artistas y aficionados al arte.</p>
                    </div>
                </div>
            </section>

            {/* Owner's Art Section */}
            <section className="py-12 bg-palette-grey3" data-aos="fade-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-8 text-center text-blue-900" data-aos="fade">Arte del Dueño</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {ART_PIECES.map((artPiece, index) => (
                            <div key={artPiece.name} className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:bg-gray-100" data-aos="fade-up">
                                <img src={`/images/${artPiece.name}.jpg`} alt={`Arte del Dueño: ${artPiece.name}`} className="w-full h-56 object-cover rounded-t-xl mb-4" />
                                <p className="text-lg text-gray-700 hover:text-gray-800">{artPiece.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Our Journey Section */}
            <section className="py-12 " data-aos="fade-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-8 text-center text-blue-900" data-aos="fade">Nuestro Viaje</h2>
                    <VerticalTimeline>
                        {timelineData.map(event => (
                            <VerticalTimelineElement
                                key={event.date}
                                date={event.date}
                                iconStyle={{ background: 'rgb(85,155,239)', color: '#f60000' }}
                                data-aos="fade-left"
                            >
                                <h3 className="text-3xl font-bold">{event.title}</h3>
                                <p className="text-xl">{event.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </section>
            <section className="py-12 text-center ">
                <h2 className="text-5xl font-bold mb-4 text-black" data-aos="fade">¿Listo para unirte a nuestra comunidad?</h2>
                <p className="text-2xl text-black mb-8" data-aos="fade-up">Descubre más y comienza tu viaje artístico con nosotros.</p>
                <div className="mt-16 text-center">
                    <button
                        onClick={() => window.location.href="/contact"}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-md text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:translate-y-[-2px] hover:scale-105 shadow-md hover:shadow-xl hover:bg-blue-700"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Empieza Ahora
                    </button>
                </div>
            </section>

        </div>
    );


}
// Exporting AboutUs component
    export default AboutUs;

