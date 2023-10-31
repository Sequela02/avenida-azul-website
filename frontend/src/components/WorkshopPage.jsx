import React, { useEffect } from 'react';
import WorkshopCard from './WorkshopCard';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
const workshopsData = [
    {
        id: 1,
        title: 'Oil Painting Mastery',
        medium: 'Oil Painting',
        image: '/images/goku1.jpg' ,
        description: 'Learn the intricate techniques of oil painting...',
        price: 50,
        ageRange: '18+',
        duration: '2 Hours',
        //... add other details like materials, schedules, and prerequisites
    },
    {
        id: 1,
        title: 'Oil Painting Mastery',
        medium: 'Oil Painting',
        image: '/images/goku1.jpg' ,
        description: 'Learn the intricate techniques of oil painting...',
        price: 50,
        ageRange: '18+',
        duration: '2 Hours',
        //... add other details like materials, schedules, and prerequisites
    },
    //... other workshop data
];




const WorkshopPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <div className="bg-lightpurple-100 min-h-screen py-12">

            {/* Header */}
            <div data-aos="fade-down"
                 className="relative overflow-hidden py-24 mb-16 bg-gradient-to-r from-blue-600 to-purple-700">
                <div className="relative z-10 text-center pb-8">
                    <motion.h1
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="text-5xl font-extrabold text-white mb-4 tracking-wide"
                    >
                        Discover & Master
                    </motion.h1>
                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className="text-xl text-white max-w-xl mx-auto mb-8"
                    >
                        Ignite your passion. Evolve your art.
                    </motion.p>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 0.8}}
                        transition={{delay: 0.6}}
                        className="bg-white bg-opacity-80 rounded-xl py-2 px-4 max-w-sm mx-auto backdrop-blur-md"
                    >
                        <p className="text-gray-900 font-medium">"Art is the journey of a free soul." - Alev Oguz</p>
                    </motion.div>
                </div>
            </div>

            {/* Workshops Section */}
            <div className="container mx-auto px-4 py-24">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1}}
                >
                    {workshopsData.map((workshop, index) => (
                        <WorkshopCard
                            key={workshop.id}
                            workshop={workshop}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Inspirational Phrase */}
            <motion.div
                initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{delay: 1.5}}
                data-aos="zoom-in-up"
                className="text-center py-24 mt-16 bg-gradient-to-tl from-blue-500 to-purple-600 relative z-10"
            >
                <div className="bg-opacity-90 bg-white backdrop-blur-lg p-4 rounded-lg inline-block">
                    <h2 className="text-3xl font-bold mb-6">"Every artist was first an amateur." - Ralph Waldo
                        Emerson</h2>
                    <p className="text-lg mb-4">Start your journey. Craft your masterpiece.</p>
                </div>
            </motion.div>
        </div>
    );
}

export default WorkshopPage;