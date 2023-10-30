import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const timelineData = [
        {
            date: '2001',
            title: 'Workshop Founded',
            description: 'The inception of our beloved workshop.',
        },
        {
            date: '2005',
            title: 'First Exhibition',
            description: 'Held our first art exhibition showcasing artworks from budding artists.',
        },
        // ... Add more events
    ];
    const ART_PIECES = [
        {
            name: 'goku1',
            description: 'Descripción detallada de la primera pieza de arte.'
        },
        {
            name: 'goku2',
            description: 'Descripción detallada de la segunda pieza de arte.'
        },
        {
            name: 'mob',
            description: 'Descripción detallada de la tercera pieza de arte.'
        },
        {
            name: 'mob',
            description: 'Descripción detallada de la tercera pieza de arte.'
        },
        // ... agregar cualquier otra pieza de arte con su descripción correspondiente
    ];


    return (
        <div className="bg-lightblue-200 min-h-screen px-8 py-12">

            <section className="py-12 bg-lightblue-200" data-aos="fade-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-blue-800" data-aos="fade-zoom-in">¿Quiénes somos?</h2>
                    <p className="text-lg text-gray-700" data-aos="fade-in">
                nos gusta oler pintura y thinner  </p>

                    <img src="/images/testimage.jpg" alt="Workshop Introduction" className="mt-8 rounded-xl shadow-lg" data-aos="fade-left"/>
                </div>
            </section>

            {/* About the Owner */}
            <section className="py-12 bg-white" data-aos="fade-up">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <img src="/images/marian.jpg" alt="Owner" className="w-64 h-64 rounded-full shadow-lg mb-8 md:mb-0 md:mr-8" data-aos="fade-right"/>
                    <div data-aos="fade-left">
                        <h2 className="text-4xl font-bold mb-4 text-blue-800">Sobre el dueño</h2>
                        <p className="text-lg text-gray-700">
                            me gusta chambear y alv q machin chambeo
                        </p>

                    </div>
                </div>
            </section>

            {/* About the Owner's Art */}
            <section className="py-12 bg-blue-100" data-aos="fade-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-blue-800" data-aos="fade-zoom-in">Arte del Dueño</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ART_PIECES.map((artPiece, index) => (
                            <div key={artPiece.name} className="bg-white p-4 rounded-xl shadow-lg" data-aos={(index % 2 === 0) ? 'fade-left' : 'fade-right'}>
                                <img src={`/images/${artPiece.name}.jpg`} alt={`Owner Art: ${artPiece.name}`} className="w-full h-48 object-cover rounded-t-xl" />
                                <div className="p-4">
                                    <p className="text-lg text-gray-700">
                                        {artPiece.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-12 bg-gray-100" data-aos="fade-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-blue-800" data-aos="fade-zoom-in">Our Journey</h2>

                    <VerticalTimeline>
                        {timelineData.map(event => (
                            <VerticalTimelineElement
                                key={event.date}
                                date={event.date}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                // You can also add a custom icon if you want
                                data-aos="zoom-in"
                            >
                                <h3 className="text-2xl font-bold">{event.title}</h3>
                                <p>{event.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </section>

        </div>
    );
}

export default AboutUs;
