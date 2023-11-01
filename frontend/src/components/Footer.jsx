import React, { useEffect } from 'react';

const Logo = () => (
    <div className="transition-opacity duration-1000 opacity-0 w-16 h-16 mb-4 md:w-24 md:h-24 lg:w-28 lg:h-28 md:mr-8 transform hover:scale-105">
        <img
            src="/images/profilepic.jfif"
            alt="Canitas Logo"
            className="rounded-full object-cover w-full h-full shadow-2xl border-4 border-gray-400 hover:border-gray-600"
        />
    </div>
);

const FooterInfo = () => (
    <div className="transition-opacity duration-1000 opacity-0 delay-500 text-center">
        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 transition-colors duration-500 hover:text-gray-600">About the Developer</h4>
        <p className="text-xs md:text-sm lg:text-base transition-colors duration-500 hover:text-gray-600">Website designed and developed by <span className="underline hover:text-gray-600 transition duration-300">Canitas</span>.</p>
        <p className="mt-2">
            <a
                href="https://portafolio-canitas02-0dfaf8416ab5.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm lg:text-base bg-gray-400 px-2 py-1 rounded hover:bg-gray-500 transition duration-300"
            >
                View My Portfolio
            </a>
        </p>
    </div>
);

function Footer() {
    useEffect(() => {
        const logos = document.querySelectorAll(".transition-opacity");
        logos.forEach(el => {
            el.style.opacity = '1';
        });
    }, []);

    return (
        <footer className="bg-white py-2 md:py-4 lg:py-6 mt-4 md:mt-0 lg:mt-8">
            <div className="container mx-auto px-2 md:px-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                <Logo />
                <FooterInfo />
            </div>
        </footer>
    );
}




export default Footer;
