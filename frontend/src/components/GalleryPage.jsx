import React, {useEffect, useState} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'tailwindcss/tailwind.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function GalleryPage() {
    useEffect(() => {
        AOS.init();
    }, []);
    const arrowNext = <SampleNextArrow />;
    const arrowPrev = <SamplePrevArrow />;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // Add the following to hide default arrows
        className: "slick-next:before:hidden slick-prev:before:hidden",
        responsive: [
            {
                breakpoint: 1024,  // Breakpoint for medium screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,  // Breakpoint for small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    const ARTISTS = [
        {
            name: "Maestra",
            artworks: [
                {
                    title: "Atardecer en el Bosque",
                    imageUrl: "/images/goku1.jpg",
                    date: "2023-01-05",
                    medium: "Acrylic on Canvas",
                    price: 150,
                    forSale: true,
                    description: "A vivid portrayal of a sunset amidst the dense woods."
                },
                {
                    title: "Retrato de una Dama",
                    imageUrl: "/images/escultura.jpg",
                    date: "2022-11-20",
                    medium: "Oil on Canvas",
                    forSale: false,
                    description: "An intricate portrait showcasing the details of a woman's visage."
                },
                {
                    title: "Marina Calma",
                    imageUrl: "/images/mob.jpg",
                    date: "2022-08-15",
                    medium: "Watercolor",
                    price: 100,
                    forSale: true,
                    description: "A calming sea view depicting serenity and stillness of the waters."
                },
                {
                    title: "Marina Calma",
                    imageUrl: "/images/mob.jpg",
                    date: "2022-08-15",
                    medium: "Watercolor",
                    price: 100,
                    forSale: true,
                    description: "A calming sea view depicting serenity and stillness of the waters."
                }
            ]

        },  {
            name: "Juan",
            artworks: [
                {
                    title: "Atardecer en el Bosque",
                    imageUrl: "/images/goku1.jpg",
                    date: "2023-01-05",
                    medium: "Acrylic on Canvas",
                    price: 150,
                    forSale: true,
                    description: "A vivid portrayal of a sunset amidst the dense woods."
                },
                {
                    title: "Retrato de una Dama",
                    imageUrl: "/images/escultura.jpg",
                    date: "2022-11-20",
                    medium: "Oil on Canvas",
                    forSale: false,
                    description: "An intricate portrait showcasing the details of a woman's visage."
                },
                {
                    title: "Marina Calma",
                    imageUrl: "/images/mob.jpg",
                    date: "2022-08-15",
                    medium: "Watercolor",
                    price: 100,
                    forSale: true,
                    description: "A calming sea view depicting serenity and stillness of the waters."
                },
                {
                    title: "Marina Calma",
                    imageUrl: "/images/mob.jpg",
                    date: "2022-08-15",
                    medium: "Watercolor",
                    price: 100,
                    forSale: true,
                    description: "A calming sea view depicting serenity and stillness of the waters."
                }
            ]

        }
        ]
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('date');


    return (
        <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-200 to-blue-100">
            <div className="mb-8 flex border p-2 rounded-md shadow-md bg-white">
                <input
                    type="text"
                    placeholder="🔍 Buscar..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="flex-grow px-3 py-2 border-0 outline-none"
                />
                <select
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    className="px-3 py-2 ml-2 border-0 rounded-md bg-blue-100 text-blue-800 cursor-pointer outline-none"
                >
                    <option value="date">Date</option>
                    <option value="artist">Artist</option>
                    <option value="price">Price</option>
                    <option value="style">Style</option>
                </select>
            </div>

            {ARTISTS.map((artist, artistIndex) => (
                <div key={artist.name} className="mb-12" data-aos="zoom-in" data-aos-delay={`${artistIndex * 100}`}>
                    <h3 className="text-2xl font-bold mb-4 text-blue-800">{artist.name}</h3>
                    <Slider {...settings}>
                        {artist.artworks.map((artwork, index) => (
                            <div key={artwork.title} className="p-2">
                                <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300" data-aos="flip-left" data-aos-delay={`${index * 100}`}>
                                    <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-48 object-cover rounded-t-xl mb-2 hover:opacity-90 transition-opacity duration-300" />
                                    <h4 className="text-lg font-bold mb-2">{artwork.title}</h4>
                                    <p className="text-sm text-gray-700">{artwork.description}</p>
                                    {artwork.forSale && <p className="text-sm mt-2 text-green-500">Available for ${artwork.price}</p>}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            ))}
        </div>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} next-arrow-custom`}
            style={{ ...style, display: "block", background: "transparent", zIndex: 10 }}
            onClick={onClick}
        >
            <svg className="transition-transform duration-300 transform hover:rotate-45" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} prev-arrow-custom`}
            style={{ ...style, display: "block", background: "transparent", zIndex: 10 }}
            onClick={onClick}
        >
            <svg className="transition-transform duration-300 transform hover:rotate-45" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}



export default GalleryPage;
