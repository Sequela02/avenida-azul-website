import React, { useEffect } from 'react';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';


const SocialFooter = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, []);

    const socials = [
        { platform: 'Instagram', icon: faInstagram, handle: 'TUAVENIDAZUL_', link: 'https://www.instagram.com/avenidaazul_/' },
        { platform: 'Facebook', icon: faFacebookF, handle: 'AVENIDA AZUL', link: 'https://www.facebook.com/profile.php?id=100094594316715' },
    ];

    return (
        <footer className="bg-gradient-to-t from-white to-blue-100 py-8" >
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold mb-2" data-aos="fade-down">
                    ¡Síguenos para más novedades!
                </h1>
                <h2 className="text-2xl font-semibold mb-4" data-aos="fade-down">
                    ¡Mantente conectado!
                </h2>
                <p className="mb-4" data-aos="fade-up" data-aos-delay="200">
                    Síguenos en redes sociales para obtener las últimas actualizaciones sobre nuestros talleres y galería.
                </p>
                <div className="flex flex-col items-center space-y-4" data-aos="fade-up" data-aos-delay="400">
                    {socials.map((social, index) => (
                        <div className="flex items-center space-x-6"> {/* Increased space-x value */}
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center transform hover:scale-110 hover:-rotate-6 transition-all duration-300 ease-in-out"
                            >
                                <FontAwesomeIcon
                                    icon={social.icon}
                                    size="2x"
                                    className="hover:text-gray-500"
                                    data-aos="zoom-in"
                                    data-aos-delay={`${index * 100 + 500}`}
                                />
                                <span className="ml-2 text-xl hover:text-gray-500">{social.handle}</span> {/* Added margin-left */}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default SocialFooter;
