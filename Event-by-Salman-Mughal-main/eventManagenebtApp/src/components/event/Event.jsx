import React from 'react';
import { useSeo } from "../../lib/seo";
import { Link } from 'react-router-dom';
const eventFeatures = [
    {
        id: 1,
        title: "Mehndi Décor",
        description: "Colourful mehndi stages, gaddi seating, phoolon ki sajawat and bridal henna — everything for a perfect mehndi raat.",
        imgSrc: "https://images.pexels.com/photos/39820645/pexels-photo-39820645.jpeg?auto=compress&cs=tinysrgb&w=1600",
        altText: "Mehndi stage decoration",
        link: "/mhandi"
    },
    {
        id: 2,
        title: "Barat",
        description: "Royal barat entries, grand stages and bridal styling for your rukhsati — tailored to your vision in Punjab.",
        imgSrc: "https://images.pexels.com/photos/39820649/pexels-photo-39820649.jpeg?auto=compress&cs=tinysrgb&w=1600",
        altText: "Barat stage decoration",
        link: "/barat"
    },
    {
        id: 3,
        title: "Walima Reception",
        description: "Elegant floral stages and refined reception décor for a graceful walima.",
        imgSrc: "https://images.pexels.com/photos/39629374/pexels-photo-39629374.jpeg?auto=compress&cs=tinysrgb&w=1600",
        altText: "Walima stage decoration",
        link: "/walima"
    },
    {
        id: 4,
        title: "DJ/Sound System",
        description: "Professional DJ, sound and party lighting for dholki, mehndi and sangeet nights.",
        imgSrc: "https://images.pexels.com/photos/7715459/pexels-photo-7715459.jpeg?auto=compress&cs=tinysrgb&w=1600",
        altText: "DJ setup",
        link: "/soundsystem"
    },
    {
        id: 5,
        title: "Birthday & Party",
        description: "Themed balloon walls, cake tables and party setups for every age.",
        imgSrc: "https://images.pexels.com/photos/14457430/pexels-photo-14457430.jpeg?auto=compress&cs=tinysrgb&w=1600",
        altText: "Birthday and party decoration",
        link: "/birthday"
    },
    {
        id: 6,
        title: "Lighting",
        description: "Shaadi house lighting — fairy lights on walls, doors, balconies, trees and lawns.",
        imgSrc: "https://images.pexels.com/photos/35353119/pexels-photo-35353119.jpeg?auto=compress&cs=tinysrgb&w=1600",
        altText: "Event lighting",
        link: "/lighting"
    },
    {
        id: 7,
        title: "Photography",
        description: "Professional wedding, bridal, mehndi, couple, casual and party photo shoots.",
        imgSrc: "https://images.pexels.com/photos/36908409/pexels-photo-36908409.jpeg?auto=compress&cs=tinysrgb&w=1600",
        altText: "Pakistani bridal photo shoot",
        link: "/photography"
    },
    {
        id: 8,
        title: "Digital Wedding Cards",
        description: "Animated online invitations you can share with every guest on WhatsApp in one tap.",
        imgSrc: "https://images.pexels.com/photos/33469001/pexels-photo-33469001.jpeg?auto=compress&cs=tinysrgb&w=1600",
        altText: "Digital wedding card",
        link: "/digital-cards"
    }
];
const serviceCards = [
    {
        id: 1,
        title: "Wedding Planning",
        description: "Customized wedding planning services to ensure your shaadi is a memorable and joyous celebration.",
        imgSrc: "https://images.pexels.com/photos/13156145/pexels-photo-13156145.jpeg?auto=compress&cs=tinysrgb&w=1600",
        altText: "Outdoor wedding stage setup at night"
    },
    {
        id: 2,
        title: "Mehndi Events",
        description: "Expertly designed mehndi events that reflect your unique style and cultural traditions for a perfect celebration.",
        imgSrc: "https://images.pexels.com/photos/39820645/pexels-photo-39820645.jpeg?auto=compress&cs=tinysrgb&w=1600",
        altText: "Colorful mehndi stage with drapery and flowers"
    },
    {
        id: 3,
        title: "Walima Receptions",
        description: "From venue selection to decor, we handle every detail for your walima, ensuring a seamless experience.",
        imgSrc: "https://images.pexels.com/photos/34389342/pexels-photo-34389342.jpeg?auto=compress&cs=tinysrgb&w=1600",
        altText: "Elegant Walima reception setup under a white canopy"
    },
];

function Event() {
  useSeo({
    path: "/event",
    title: "All Event Services in Lahore | Wedding, Mehndi, Birthday & More",
    description:
      "Complete event services in Lahore & Muzaffargarh: mehndi, barat, walima, birthday, DJ, house lighting, photography and digital wedding cards at budget-friendly prices.",
  });
    const features = eventFeatures;
    const cards = serviceCards;

    return (
        <div className="max-w-[1440px] mx-auto">
            <style>
                {`
                .custom-gradient-bg {
                    background-image: radial-gradient(at center, #e7591c 0%, #000000ff 100%);
                }
                .shaadi-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 0.5rem;
                    cursor: pointer;
                }
                `}
            </style>

            {/* Top Section */}
            <section className="px-4 sm:px-6 lg:px-8">
                <div className="mb-10 md:mb-5 mt-30 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-sans font-normal text-gray-800">
                        Event Planning
                    </h1>
                    <p className="text-base text-gray-600 mt-2">
                        Customized events for unforgettable shaadi, walima, and mehndi celebrations.
                    </p>
                </div>

                {features.map((feature) => {
                    const imgSrc = feature.imgSrc;
                    const altText = feature.altText || feature.title;

                    const cardContent = (
                        <div className="md:flex md:space-x-12 mb-12">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <div className="shaadi-image w-full h-80 md:h-96 shadow-lg">
                                    <img src={imgSrc} alt={altText} />
                                </div>
                            </div>

                            <div className="md:w-1/2 flex flex-col justify-center text-left">
                                <h2 className="text-2xl md:text-3xl font-sans font-semibold text-gray-800 mb-4">
                                    {feature.title}
                                </h2>
                                <p className="text-base text-gray-600 leading-relaxed max-w-sm mb-4">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );

                    const hasLink = feature.link && feature.link.length;
                    const key = feature._id || feature.id;
                    return hasLink ? (
                        <Link to={feature.link} key={key} className="block">
                            {cardContent}
                        </Link>
                    ) : (
                        <div key={key}>
                            {cardContent}
                        </div>
                    );
                })}
            </section>

            {/* Bottom Services Section */}
            <section className="custom-gradient-bg py-16 px-4 sm:px-6 lg:px-8 mt-4 rounded-lg">
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Event Planning Services
                    </h2>
                    <p className="text-lg text-red-100 mb-12 max-w-2xl mx-auto">
                        Event By Salman Mughal, we create unforgettable experiences for weddings, mehndi, and other special occasions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cards.map((card) => {
                            const imgSrc = card.imgSrc;
                            const altText = card.altText || card.title;
                            return (
                                <div key={card._id || card.id} className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
                                    <img
                                        src={imgSrc}
                                        alt={altText}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6 text-left">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Event;
