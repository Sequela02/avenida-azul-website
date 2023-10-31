import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkshopCard = ({ workshop }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <motion.div
            className="rounded overflow-hidden shadow-lg m-4 bg-gradient-to-br from-blue-200 to-purple-200 hover:bg-gradient-to-bl hover:from-purple-200 hover:to-blue-200 transition-all duration-500 ease-in-out hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto"
            whileHover={{ scale: 1.05 }}
            data-aos="fade-up"
        >
            <img className="w-full h-48 object-cover" src={workshop.image} alt={workshop.title} />
            <div className="px-6 py-4 bg-white bg-opacity-80 backdrop-blur-md">
                <div className="font-bold text-xl mb-2">{workshop.title}</div>
                <p className="text-gray-700 text-base">{workshop.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-wrap bg-white bg-opacity-80 backdrop-blur-md">
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Medium: {workshop.medium}</span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Age: {workshop.ageRange}</span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Duration: {workshop.duration}</span>
            </div>
            <div className="px-6 pt-4 pb-2 bg-white bg-opacity-80 backdrop-blur-md">
                <span className="text-blue-500 font-semibold">Price: ${workshop.price}</span>
            </div>
            <div className="px-6 pt-4 pb-2 bg-white bg-opacity-80 backdrop-blur-md">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                    Register Now
                </motion.button>
            </div>
        </motion.div>
    );
};

export default WorkshopCard;
