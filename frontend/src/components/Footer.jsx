import React from 'react';

/**
 * Logo component - Displays the developer's logo
 */
const Logo = () => (
    <div className="w-20 h-20 mb-4 md:w-24 md:h-24 md:mr-8 transition-transform duration-500 hover:scale-105">
        <img
            src="/images/profilepic.jfif"
            alt="Canitas Logo"
            className="rounded-full object-cover w-full h-full shadow-lg border-2 border-white"
        />
    </div>
);

/**
 * FooterInfo component - Displays information about the developer
 */
const FooterInfo = () => (
    <div className="text-center">
        <h4 className="text-xl md:text-2xl font-semibold mb-2 transition-colors duration-500 hover:text-purple-300">About the Developer</h4>
        <p className="text-sm md:text-base transition-colors duration-500 hover:text-purple-300">Website designed and developed by <span className="underline hover:text-purple-300 transition duration-300">Canitas</span>.</p>
        <p className="mt-2">
            <a
                href="https://portafolio-canitas02-0dfaf8416ab5.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base hover:text-purple-300 transition duration-300"
            >
                View My Portfolio
            </a>
        </p>

    </div>
);

/**
 * Footer component - Represents the footer of the application.
 */
function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 md:py-6 mt-8">
            <div className="container mx-auto px-4 flex justify-center items-center md:flex-row transition-all duration-500 hover:shadow-lg">
                <Logo />
                <FooterInfo />
            </div>
        </footer>
    );
}

export default Footer;
