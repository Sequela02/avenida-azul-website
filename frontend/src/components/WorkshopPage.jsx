import React, { useEffect } from 'react';
import WorkshopCard from './WorkshopCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
const workshopsData = [
    {
        id: 1,
        title: 'Taller de Dibujo',
        medium: 'Grafito',
        image: '/images/goku1.jpg' ,
        description: 'Learn the intricate techniques of oil painting...',
        price: 50,
        ageRange: '18+',
        duration: '2 Hours',
        schedule: 'Lunes, Miercoles y Viernes',
        hora: '3:00 a 5:00 PM'
        //... add other details like materials, schedules, and prerequisites
    },
    {
        id: 1,
        title: 'Taller de oleo sobre lienzo',
            medium: 'Oleo',
        image: '/images/background2.jpg' ,
        description: 'Learn the intricate techniques of oil painting...',
        price: 50,
        ageRange: 'Cualquier edad',

        duration: '1 Hora',
        schedule: 'Martes y Jueves',
        hora: '1:00 a 3:00 PM'
        //... add other details like materials, schedules, and prerequisites
    },
    //... other workshop data
];




const WorkshopPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,

        });
    }, []);

    return (
        <div className="bg-gradient-to-t from-blue-100 via-purple-100 purple-100 to-white min-h-screen ">

            {/* Encabezado */}
            <div data-aos="fade-down"
                 className="relative overflow-hidden py-24 mb-0 bg-gradient-to-r from-blue-600 to-purple-700">
                <div className="text-center pb-8">
                    <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">Descubre & Domina</h1>
                    <p className="text-xl text-white max-w-xl mx-auto mb-8">Enciende tu pasión. Evoluciona tu arte.</p>
                    <div className="bg-white bg-opacity-80 rounded-xl py-2 px-4 max-w-sm mx-auto backdrop-blur-md">
                        <p className="text-gray-900 font-medium mb-2">"En cada rincón oscuro del arte, hay una luz esperando ser descubierta."</p>
                        <span className="text-gray-600">- Junji Ito</span>
                    </div>
                </div>
            </div>



    {/* Sección de Talleres */}
            <div className="bg-gradient-to-t from-blue-100 via-purple-100 to-white py-10">
                <div className="container mx-auto px-4">
                    {/* Título de la Sección */}
                    <div className="text-center mb-16" data-aos="fade-down">
                        <h2 className="text-4xl font-bold text-blue-800 mb-4 " data-aos="fade-up">Nuestros Talleres</h2>
                        <p className="text-gray-600" data-aos="fade-down">Explora nuestra amplia gama de talleres diseñados para ti.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {workshopsData.map((workshop, index) => (
                            <div
                                key={workshop.id}  // mover el atributo "key" aquí
                                className="transform hover:scale-105 transition-transform duration-300 bg-purple-100 hover:bg-blue-100 rounded-lg"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <WorkshopCard workshop={workshop} />
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => window.location.href="/contact"}
                            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:translate-y-[-2px] hover:scale-105 shadow-md hover:shadow-xl hover:bg-blue-700"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Empieza Ahora
                        </button>
                    </div>



                </div>
            </div>

            {/* Frase Inspiracional */}
            <div data-aos="zoom-in-up" className="text-center py-24 mt-16 bg-white relative z-10">
                <div className="bg-opacity-90 bg-white backdrop-blur-lg p-4 rounded-lg inline-block">
                    <h2 className="text-3xl font-serif font-bold mb-4 cursor-pointer hover:text-blue-400 transition-colors">"No
                        hay un momento que perder, no hay un camino equivocado."</h2>
                    <p className="text-lg mb-4 font-medium cursor-pointer hover:text-purple-500 transition-colors">-
                        Lin-Manuel Miranda, Hamilton</p>
                    <p>Empieza tu viaje. Crea tu obra maestra.</p>
                </div>
            </div>

        </div>
    );
}

    export default WorkshopPage;