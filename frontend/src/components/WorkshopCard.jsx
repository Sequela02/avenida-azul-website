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
            <div className="flex justify-center items-center h-[300px] md:h-[400px] lg:h-[500px]">
                <img
                    className="w-[100%] md:w-[75%] lg:w-[50%] xl:w-[40%] object-cover"
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
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Medio: {workshop.medium}</span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rango de edad: {workshop.ageRange}</span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Duración: {workshop.duration}</span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Dias: {workshop.schedule}</span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Horario: {workshop.hora}</span>
            </div>
            <div className="px-6 pt-4 pb-2 bg-white bg-opacity-80 backdrop-blur-md">
                <span className="text-blue-500 font-semibold">Precio: ${workshop.price}</span>
            </div>
            <div className="px-6 pt-4 pb-2 bg-white bg-opacity-80 backdrop-blur-md">

            </div>
        </div>
    );
};

export default WorkshopCard;
