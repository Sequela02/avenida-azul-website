import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Contact Form Component
const ContactForm = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };
    // Map Component
    // This needs to be global for Google Maps to call it
    window.initMap = () => {
        document.dispatchEvent(new Event('google-map-loaded'));
    };



    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md border border-gray-300" data-aos="fade-up">
        {[
                { id: 'name', type: 'text', label: 'Nombre' },
                { id: 'email', type: 'email', label: 'Correo Electrónico' },
                { id: 'subject', type: 'text', label: 'Asunto' },
            ].map(({ id, type, label }) => (
                <div key={id} className="space-y-2">
                    <label htmlFor={id} className="block text-lg font-medium text-gray-700 tracking-wide">
                        {label}
                    </label>
                    <input
                        type={type}
                        name={id}
                        id={id}
                        value={formData[id]}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full bg-gray-100 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform transform hover:scale-105"
                    />
                </div>
            ))}
            <div className="space-y-2">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 tracking-wide">
                    Mensaje
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-3 w-full bg-gray-100 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform transform hover:scale-105"
                ></textarea>
            </div>
            <div>
                <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Enviar
                </button>
            </div>
        </form>
    );
};

// Main Contact Page Component
const ContactPage = () => {
    const MapComponent = () => {
        useEffect(() => {
            console.log("Loading script...");

            // Check if the Google Maps script is already loaded
            if (window.google && window.google.maps) {
                initializeMap();
                return;
            }

            // Check if the script has already been appended
            const existingScript = document.querySelector("script[src*='maps.googleapis.com/maps/api/js']");
            if (existingScript) return;

            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);

            script.onload = () => {
                console.log("Script loaded successfully");
                initializeMap();
            };

            script.onerror = () => {
                console.error("Error loading the script");
            };

        }, []);

        const initializeMap = () => {
            const mapElement = document.getElementById("googleMap");
            if (!mapElement || !window.google || !window.google.maps) return;

            const location = { lat: 29.115894418243492, lng: -110.98628852628435 };
            const map = new window.google.maps.Map(mapElement, {
                center: location,
                zoom: 15,
            });

            // Add a marker
            const marker = new window.google.maps.Marker({
                position: location,
                map: map,
                title: '83139, Fraccionamiento las Torres, 83139 Hermosillo, Son.'
            });
        }

        return (
            <div id="googleMap" className="w-full h-full border" data-aos="zoom-in" />
        );
    };


// Mensaje predeterminado para WhatsApp
    const mensajePredeterminado = "Hola, estoy interesado en obtener más información sobre sus servicios. ¿Podrían proporcionarme más detalles? Gracias.";

    const linkWhatsApp = `https://wa.me/+526624029609?text=${encodeURIComponent(mensajePredeterminado)}`;

    return (
        <div className="container mx-auto px-6 py-12 space-y-10 bg-gradient-to-t from-blue-100 via-purple-100 to-white">
            <h1 className="text-4xl font-bold mb-6 py-12 transition-transform transform hover:scale-105" data-aos="fade-down">Creemos algo juntos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-102" data-aos="fade-up">

                {/* Contact Form Section */}
                <div className="bg-purple-100 p-6 rounded-lg transition-shadow hover:shadow-md" data-aos="fade-right">
                    <h2 className="text-2xl font-semibold mb-4">Envíanos un mensaje</h2>
                    <ContactForm />
                </div>
                {/* Contact Details and Map Section */}
                <div className="bg-blue-100 p-6 rounded-lg transition-shadow hover:shadow-md" data-aos="fade-left">
                <h2 className="text-2xl font-semibold mb-4">Encuéntranos</h2>
                    {/* Map Component */}
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 h-60 mb-4 " data-aos="fade-left">
                        <MapComponent />
                    </div>
                    {/* Contact Details */}
                    <div className="space-y-4" data-aos="fade-left">
                        <div>
                            <h3 className="font-semibold text-xl">Dirección:</h3>
                            <p>Blvd. Las Torres Esq. Leandro P. Gaxiola Col. Sonomex 83130 Hermosillo, Sonora, México</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl">Teléfono:</h3>
                            <p>
                                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                                <a href="tel:6623387875" className="text-blue-500 hover:underline">662 338 7875</a>
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl">WhatsApp:</h3>
                            <p>
                                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-green-500" />
                                <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
                                    662 402 9609
                                </a>
                            </p>
                            <small className="block text-gray-500">Haz clic para enviar un mensaje por WhatsApp.</small>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ContactPage;
