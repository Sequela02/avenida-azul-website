import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
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
                title: "Fourth Artwork",
                imageUrl: "/images/escultura.jpg",
                date: "2023-10-15",
                medium: "Digital",
                price: 200,
                forSale: false,
                description: "An abstract digital painting."
            },
            {
                title: "Retrato de una Dama",
                imageUrl: "/images/escultura.jpg",
                date: "2022-11-20",
                medium: "Oil on Canvas",
                forSale: false,
                description: "An intricate portrait showcasing the details of a woman's visage."
            }
        ]
    },
    {
        name: "Juan",
        artworks: [
            {
                title: "Landscape 1",
                imageUrl: "/images/escultura.jpg",
                date: "2023-01-02",
                medium: "Photography",
                price: 100,
                forSale: true,
                description: "A beautiful landscape of a mountain range."
            }, {
                title: "Landscape 1",
                imageUrl: "/images/escultura.jpg",
                date: "2023-01-02",
                medium: "Photography",
                price: 100,
                forSale: true,
                description: "A beautiful landscape of a mountain range."
            }, {
                title: "Landscape 1",
                imageUrl: "/images/escultura.jpg",
                date: "2023-01-02",
                medium: "Photography",
                price: 100,
                forSale: true,
                description: "A beautiful landscape of a mountain range."
            }

        ]
    }
];
const getSliderSettings = (artworkCount, windowWidth) => ({
    ...sliderSettings,
    infinite: artworkCount > 1,
    slidesToShow: windowWidth > 768 ? Math.min(artworkCount, 3) : 1,
    centerMode: artworkCount < 3
});

export default function GalleryPage() {
    const [zoomedImage, setZoomedImage] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleArtworkClick = (imageUrl) => {
        setZoomedImage(imageUrl);
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-200 to-blue-100">
            <div className="grid grid-cols-1 gap-y-12"> {/* Using grid for artists */}
                {ARTISTS.map((artist, artistIndex) => (
                    <div key={artist.name} className="flex flex-col h-[600px]" data-aos="fade-up"> {/* Set a fixed height for artist container */}
                        <h3 className="text-2xl font-bold mb-4 text-blue-800">{artist.name}</h3>
                        <Slider {...getSliderSettings(artist.artworks.length, windowWidth)}>
                            {artist.artworks.map((artwork, index) => (
                                <div key={artwork.title} className="p-2">
                                    <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col h-[500px] relative">
                                        <div className="h-[200px] mb-2">
                                            <img
                                                src={artwork.imageUrl}
                                                alt={artwork.title}
                                                className="w-full h-full object-cover rounded-t-xl hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                                                onClick={() => handleArtworkClick(artwork.imageUrl)}
                                            />
                                        </div>
                                        <div className="flex-grow flex flex-col justify-between overflow-auto">
                                            <div>
                                                <h4 className="text-lg font-bold mb-2 inline">{artwork.title}</h4>
                                                {artwork.forSale && <span className="ml-2 bg-red-600 text-white py-1 px-2 rounded">For Sale</span>}
                                                <p className="text-base text-gray-700 mt-2 overflow-ellipsis overflow-hidden">{artwork.description}</p>
                                                <p className="text-sm text-gray-500 italic">{artwork.medium}</p>
                                            </div>
                                        </div>
                                        {artwork.forSale && <p className="text-sm text-center text-red-600 font-bold absolute bottom-2 w-full">Available for ${artwork.price}</p>}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                ))}
            </div>

            {zoomedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <button className="absolute top-4 right-4 text-white p-2 rounded" aria-label="Close" onClick={() => setZoomedImage(null)}>X</button>
                    <img src={zoomedImage} alt="Zoomed Artwork" className="max-h-[80%] max-w-[90%]"/>
                </div>
            )}
        </div>
    );}
