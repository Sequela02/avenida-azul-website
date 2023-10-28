import React from 'react';

function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-4 md:py-6 mt-8">
            <div className="container mx-auto px-4 flex justify-center items-center md:flex-row">

                {/* Logo Circle Holder */}
                <div className="w-20 h-20 mb-4 md:w-24 md:h-24 md:mr-8">
                    <img src="/images/profilepic.jfif" alt="Canitas Logo" className="rounded-full object-cover w-full h-full shadow-lg border-2 border-white"/>
                </div>

                <div className="text-center">
                    <h4 className="text-xl md:text-2xl font-semibold mb-2">About the Developer</h4>
                    <p className="text-sm md:text-base">Website designed and developed by <span className="underline hover:text-blue-600 transition duration-300">Canitas</span>.</p>
                    <p className="mt-2"><a href="https://portafolio-canitas02-0dfaf8416ab5.herokuapp.com/" className="text-sm md:text-base hover:text-green-400 transition duration-300">View My Portfolio</a></p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
