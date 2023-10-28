import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importing the AOS CSS

function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
        });
    }, []);
    return (
        <div className="bg-lightblue-200 min-h-screen" >

            {/* Hero Section */}
            <section className="relative h-screen flex justify-center items-center" data-aos="fade-up">
            <img src="/images/background.jpg" alt="Art Workshop" className="absolute h-full w-full object-cover"/>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* <-- Filter for the hero image */}
                <div className="relative z-10 text-center animate-fadeIn">      <h1 className="text-6xl font-extrabold text-white mb-4 transform hover:scale-105 transition-transform">¡Bienvenido a tu rincón del arte!</h1>
                    <p className="text-2xl font-medium text-white mb-6">Descubre el artísta que hay en ti.</p>
                    <button className="bg-blue-800 text-white px-8 py-4 rounded-full hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transform hover:scale-105 transition-transform">
                        <Link to="/about">Ver más</Link>
                    </button>
                </div>
            </section>


            {/* Workshops Section */}
            <section className="py-12 " data-aos="fade-left" >
                <div className="container mx-auto px-4" data-aos="fade-right">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
                        {['pintura', 'escultura', 'dibujo'].map(workshop => (
                            <div key={workshop} className="relative bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform" data-aos="fade-left">
                                <img src={`/images/${workshop}.jpg`} alt={`${workshop} Workshop`} className="w-full h-48 object-cover rounded-t-xl" />
                                <div className="p-4">
                                    <h3 className="text-2xl font-semibold mb-4">Talleres de {workshop}</h3>
                                    <p className="text-blue-700">amosai {workshop}.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Testimonials */}
            <section className="py-12 bg-blue-100" data-aos="fade-down">
                <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">Lo que nuestros estudiantes dicen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Add more blockquotes as needed */}
                        <blockquote className="bg-white p-8 rounded-xl shadow-lg">
                            <p className="text-2xl mb-6 text-gray-700">"Muy guape la maestra."</p>
                            <cite className="text-blue-700 font-medium">- Juan Mendoza</cite>
                        </blockquote>
                        <blockquote className="bg-white p-8 rounded-xl shadow-lg">
                            <p className="text-2xl mb-6 text-gray-700">"No bebas y conduzcas, pero si lo haces, llámame."</p>
                            <cite className="text-blue-700 font-medium">- Saul Goodman</cite>
                        </blockquote>
                        <blockquote className="bg-white p-8 rounded-xl shadow-lg">
                            <p className="text-2xl mb-6 text-gray-700">"Amosaimiapa."</p>
                            <cite className="text-blue-700 font-medium">- yatelasabe</cite>
                        </blockquote>

                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 bg-blue-50" data-aos="zoom-in-up">
                <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">¿Listo para comenzar tu aventura en Avenida Azul?</h2>
                    <button className="bg-blue-800 text-white px-8 py-4 rounded-full hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transform hover:scale-105 transition-transform">
                        <Link to="/information">Empieza ahora</Link>
                    </button>
                </div>
            </section>


        </div>
    );
}

export default HomePage;
