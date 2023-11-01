import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../components/styles/style.css';
import { motion } from 'framer-motion';
function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Shorter duration for quicker animations
        });
    }, []);

    const workshops = ['pintura', 'escultura', 'dibujo'];

    return (
        <div className="bg-gradient-to-t from-blue-100 via-purple-100 purple-100 to-white min-h-screen">
            <HeroSection />
            <WorkshopsSection workshops={workshops} />
            <TestimonialsSection />
            <CallToActionSection />
        </div>
    );
}
const HeroSection = () => (
    <section className="relative min-h-screen flex justify-center items-center bg-white" data-aos="fade-down">
        <div className="absolute inset-0">
            <img src="/images/background.jpg" alt="Art Workshop" className="h-full w-full object-cover opacity-70" />
        </div>
        <div className="relative z-10 text-center p-4 md:p-0">
            <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4">Unleash Your Inner Artist!</h1>
            <p className="text-xl md:text-2xl font-medium text-black mb-6">Descubre, aprende, y crea.</p>
            <NavigationButton destination="/about" label="Explore Now" />
        </div>
    </section>
);


const WorkshopsSection = ({ workshops }) => {
    const bgStyle = {
        background: 'linear-gradient( white)',
    };

    return (
        <section className="py-12" style={bgStyle} data-aos="fade-up">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {workshops.map(workshop => (
                        <WorkshopCard key={workshop} workshop={workshop} />
                    ))}
                </div>
            </div>
        </section>
    );
};





const WorkshopCard = ({ workshop }) => {
    const hoverVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05 },
    };

    return (
        <motion.div
            className="relative bg-white p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
            data-aos="fade-up"
            initial="initial"
            whileHover="hover"
            variants={hoverVariants}
        >
            <img
                src={`/images/${workshop}.jpg`}
                alt={`${workshop} Workshop`}
                className="w-full h-48 object-cover rounded-t-xl transition-all duration-300 ease-in-out hover:opacity-80"
            />
            <div className="p-4">
                <motion.h3
                    className="text-2xl font-semibold mb-4 transition-all duration-300 ease-in-out hover:text-blue-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Talleres de {workshop}
                </motion.h3>
                <motion.p
                    className="text-blue-700 transition-all duration-300 ease-in-out hover:text-blue-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Aprende más sobre {workshop}.
                </motion.p>
            </div>
        </motion.div>
    );
};

const TestimonialsSection = () => (
    <section className="py-12 bg-white" data-aos="fade-down">
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

const TestimonialCard = ({ quote, author }) => (
    <blockquote className="bg-white p-8 rounded-xl shadow-lg">
        <p className="text-2xl mb-6 text-gray-700">"{quote}"</p>
        <cite className="text-blue-700 font-medium">- {author}</cite>
    </blockquote>
);

const CallToActionSection = () => (
    <section className="py-12" data-aos="slide-right">
    <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">¿Listo para comenzar tu aventura en Avenida Azul?</h2>
            <NavigationButton destination="/contact" label="Empieza ahora" />
        </div>
    </section>
);



const NavigationButton = ({ destination, label }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300); // Reset after 300ms
        window.scrollTo(0, 0); // Lleva al usuario al inicio de la página
    };

    return (
        <Link to={destination} onClick={handleClick}>
            <button
                className={`text-white px-8 py-4 rounded-full 
                           bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-md
                            hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 
                            active:from-blue-800 active:via-purple-800 active:to-blue-800  
                            transition-all duration-300 ease-in-out transform hover:scale-105 hover:-rotate-3
                            ${isClicked ? 'animate-bounce' : ''}`}
            >
                {label}
            </button>
        </Link>
    );
};



export default HomePage;
