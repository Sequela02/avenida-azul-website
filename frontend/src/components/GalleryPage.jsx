import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/style.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,


};

const getSliderSettings = (artworkCount, windowWidth) => ({
    ...sliderSettings,
    infinite: artworkCount > 1,
    slidesToShow: windowWidth > 768 ? Math.min(artworkCount, 3) : 1,
    centerMode: artworkCount < 3,
});


const ARTISTS = [
    {
        name: "Marian Scott",
        artworks: [
            {
                title: "Itachi Uchiha",
                imageUrl: "/images/goku1.jpg",
                date: "2023-01-05",
                medium: "Acrílico sobre lienzo enmarcado",
                price: 150,
                forSale: true,
                description: "Itachi con cuervos."
            },
            {
                title: "hola gatito",
                imageUrl: "/images/goku2.jpg",
                date: "2022-11-20",
                medium: "Óleo sobre papel",
                forSale: false,
                description: "Michi."
            },
            {
                title: "Marina Calma",
                imageUrl: "/images/mob.jpg",
                date: "2022-08-15",
                medium: "Watercolor",
                price: 100,
                forSale: true,
                description: "Retrato."
            },
            {
                title: "Girl",
                imageUrl: "/images/girl.png",
                date: "2022-08-15",
                medium: "Acuarela sobre papel",
                price: 100,
                forSale: true,
                description: "Chica bonita."
            }


        ]
    },
    {
        name: "Ricardo Armenta",
        artworks: [
            {
                title: "Itachi Uchiha",
                imageUrl: "/images/goku1.jpg",
                date: "2023-01-05",
                medium: "Acrílico sobre lienzo enmarcado",
                price: 150,
                forSale: true,
                description: "Itachi con cuervos."
            },
            {
                title: "hola gatito",
                imageUrl: "/images/goku2.jpg",
                date: "2022-11-20",
                medium: "Óleo sobre papel",
                forSale: false,
                description: "Michi."
            },
            {
                title: "Marina Calma",
                imageUrl: "/images/mob.jpg",
                date: "2022-08-15",
                medium: "Watercolor",
                price: 100,
                forSale: true,
                description: "Retrato."
            },
            {
                title: "Girl",
                imageUrl: "/images/girl.png",
                date: "2022-08-15",
                medium: "Acuarela sobre papel",
                price: 100,
                forSale: true,
                description: "Chica bonita."
            }


        ]
    }
];

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
        <div className="bg-gradient-to-t from-blue-100 via-purple-100 to-white">
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 gap-y-12 py-5">
                    {ARTISTS.map((artist, artistIndex) => (
                        <div key={artist.name} className="flex flex-col h-[600px]" data-aos="fade-up">
                            <h3 className="text-2xl font-bold mb-4 text-blue-800">{artist.name}</h3>
                            <Slider {...getSliderSettings(artist.artworks.length, windowWidth)}>
                                {artist.artworks.map((artwork, index) => (
                                    <div key={artwork.title} className="p-2 hover:shadow-lg transition-shadow duration-300">
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
                                                    {artwork.forSale && <span className="ml-2 bg-red-600 text-white py-1 px-2 rounded">A la venta</span>}
                                                    <p className="text-base text-gray-700 mt-2 overflow-ellipsis overflow-hidden">{artwork.description}</p>
                                                    <p className="text-sm text-gray-500 italic">{artwork.medium}</p>
                                                </div>
                                            </div>
                                            {artwork.forSale && <p className="text-sm text-center text-green-500 font-bold absolute bottom-2 w-full">Available for ${artwork.price}</p>}
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
        </div>
    );



}
