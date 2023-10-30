import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * HomePage component - The landing page of the application.
 *
 * This component is responsible for rendering the landing page.
 * It includes sections such as Hero, Workshops, Testimonials, and Call to Action.
 */
function HomePage() {

    // Initialize AOS (Animate on Scroll) library
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
        });
    }, []);

    // List of workshops
    const workshops = ['pintura', 'escultura', 'dibujo'];

    return (
        <div className="bg-lightblue-200 min-h-screen">

            {/* Hero Section */}
            <HeroSection />

            {/* Workshops Section */}
            <WorkshopsSection workshops={workshops} />

            {/* Testimonials */}
            <TestimonialsSection />

            {/* Call to Action */}
            <CallToActionSection />

        </div>
    );
}

/**
 * HeroSection component - Represents the hero section of the HomePage.
 */
const HeroSection = () => (
    <section className="relative h-screen flex justify-center items-center" data-aos="fade-up">
        <img src="/images/background.jpg" alt="Art Workshop" className="absolute h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
            <h1 className="text-6xl font-extrabold text-white mb-4">¡Bienvenido a tu rincón del arte!</h1>
            <p className="text-2xl font-medium text-white mb-6">Descubre el artista que hay en ti.</p>
            <NavigationButton destination="/about" label="Ver más" />
        </div>
    </section>
);

/**
 * WorkshopsSection component - Represents the workshops section of the HomePage.
 *
 * @param {Object} props - Component properties.
 * @param {string[]} props.workshops - An array of workshops.
 */
const WorkshopsSection = ({ workshops }) => (
    <section className="py-12" data-aos="fade-left">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {workshops.map(workshop => (
                    <WorkshopCard key={workshop} workshop={workshop} />
                ))}
            </div>
        </div>
    </section>
);

/**
 * WorkshopCard component - Represents a single workshop card.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.workshop - The type of workshop.
 */
const WorkshopCard = ({ workshop }) => (
    <div className="relative bg-white p-6 rounded-xl shadow-lg" data-aos="fade-left">
        <img src={`/images/${workshop}.jpg`} alt={`${workshop} Workshop`} className="w-full h-48 object-cover rounded-t-xl" />
        <div className="p-4">
            <h3 className="text-2xl font-semibold mb-4">Talleres de {workshop}</h3>
            <p className="text-blue-700">Aprende más sobre {workshop}.</p>
        </div>
    </div>
);

/**
 * TestimonialsSection component - Represents the testimonials section of the HomePage.
 */
const TestimonialsSection = () => (
    <section className="py-12 bg-blue-100" data-aos="fade-down">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">Lo que nuestros estudiantes dicen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                    { quote: "Muy guape la maestra.", author: "Juan Mendoza" },
                    { quote: "No bebas y conduzcas, pero si lo haces, llámame.", author: "Saul Goodman" },
                    { quote: "Amosaimiapa.", author: "yatelasabe" },
                ].map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    </section>
);

/**
 * TestimonialCard component - Represents a single testimonial card.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.quote - The testimonial quote.
 * @param {string} props.author - The author of the quote.
 */
const TestimonialCard = ({ quote, author }) => (
    <blockquote className="bg-white p-8 rounded-xl shadow-lg">
        <p className="text-2xl mb-6 text-gray-700">"{quote}"</p>
        <cite className="text-blue-700 font-medium">- {author}</cite>
    </blockquote>
);

/**
 * CallToActionSection component - Represents the call to action section of the HomePage.
 */
const CallToActionSection = () => (
    <section className="py-12 bg-blue-50" data-aos="zoom-in-up">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">¿Listo para comenzar tu aventura en Avenida Azul?</h2>
            <NavigationButton destination="/information" label="Empieza ahora" />
        </div>
    </section>
);

/**
 * NavigationButton component - A reusable navigation button.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.destination - The URL to navigate to.
 * @param {string} props.label - The label for the button.
 */
const NavigationButton = ({ destination, label }) => (
    <button className="bg-blue-800 text-white px-8 py-4 rounded-full hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
        <Link to={destination}>{label}</Link>
    </button>
);


export default HomePage;
