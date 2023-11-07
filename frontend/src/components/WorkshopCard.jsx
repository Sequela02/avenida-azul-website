import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkshopCard = ({ workshop }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div
            className="rounded overflow-hidden shadow-lg m-4 bg-gradient-to-br from-blue-200 to-purple-200 hover:bg-gradient-to-bl hover:from-purple-200 hover:to-blue-200 transition-all duration-500 ease-in-out hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto"
            data-aos="fade-up"
        >
            <div className="flex justify-center items-center h-64 md:h-80 lg:h-96">
                <img
                    className="w-full h-full object-cover"
                    src={workshop.image}
                    alt={workshop.title}
                    loading="lazy"
                />
            </div>

            <div className="px-6 py-4 bg-white bg-opacity-80 backdrop-blur-md">
                <div className="font-bold text-xl mb-2">{workshop.title}</div>
                <p className="text-gray-700 text-base">{workshop.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-wrap bg-white bg-opacity-80 backdrop-blur-md">
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Medio: {workshop.mediums.join(', ')}</span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rango de edad: {workshop.ageRange}</span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Duración: {workshop.duration}</span>
                {Object.entries(workshop.timeSlots).map(([day, times]) => (
                    <span key={day} className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{day}: {Array.isArray(times) ? times.join(' & ') : times}</span>
                ))}
            </div>
            <div className="px-6 pt-4 pb-2 bg-white bg-opacity-80 backdrop-blur-md">
                <span className="text-blue-500 font-semibold">Precio: ${workshop.price} por 4 clases, una por semana</span>
            </div>
            {/* Additional content can be included here if necessary */}
        </div>


    );
};

export default WorkshopCard;
