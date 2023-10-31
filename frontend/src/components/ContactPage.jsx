import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Contact Form Component
const ContactForm = () => {
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
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-lg shadow-md w-full max-w-xl mx-auto mt-12 border border-gray-200" data-aos="fade-up">
            <div className="space-y-3">
                <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 tracking-wide">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform transform hover:scale-105"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 tracking-wide">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform transform hover:scale-105"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-lg font-medium text-gray-700 tracking-wide">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform transform hover:scale-105"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-lg font-medium text-gray-700 tracking-wide">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform transform hover:scale-105"
                    ></textarea>
                </div>

                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Submit
                    </button>
                </div>
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



    return (
        <div className="container mx-auto p-4 space-y-8">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
                    <ContactForm />
                </div>

                {/* Contact Details and Map Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Find us</h2>
                    {/* Replace this with a map component in the future */}
                    <div className="bg-gray-300 h-60">
                        <MapComponent />
                    </div>
                    <div className="mt-4">
                        <h3 className="font-semibold">Address:</h3>
                        <p>Blvd. Las Torres Esq. Leandro P. Gaxiola Col. Sonomex 83130 Hermosillo, Sonora, México</p>
                        <h3 className="font-semibold mt-2">Phone:</h3>
                        <p>+52 662 402 9609</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
