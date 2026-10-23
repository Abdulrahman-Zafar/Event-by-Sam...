import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { WHATSAPP_BOOKING_LINK } from "../../lib/links";
const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1920`;

const heroSlides = [
  { id: 1, imgSrc: px(39820649), altText: "Marigold mehndi stage decoration" },
  { id: 2, imgSrc: px(39820645), altText: "Saffron mehndi stage canopy" },
  { id: 3, imgSrc: px(34389342), altText: "Ivory walima stage with roses" },
  { id: 4, imgSrc: px(39629374), altText: "Floral barat stage" },
];
const serviceCards = [
  {
    id: 1,
    title: "Wedding Planning",
    description:
      "Customized wedding planning services to ensure your shaadi is a memorable and joyous celebration.",
    imgSrc:
      "https://images.pexels.com/photos/13156145/pexels-photo-13156145.jpeg?auto=compress&cs=tinysrgb&w=1600",
    altText: "Outdoor wedding stage setup at night",
  },
  {
    id: 2,
    title: "Mehndi Events",
    description:
      "Expertly designed mehndi events that reflect your unique style and cultural traditions for a perfect celebration.",
    imgSrc:
      "https://images.pexels.com/photos/39820645/pexels-photo-39820645.jpeg?auto=compress&cs=tinysrgb&w=1600",
    altText: "Colorful mehndi stage with drapery and flowers",
  },
  {
    id: 3,
    title: "Walima Receptions",
    description:
      "From venue selection to decor, we handle every detail for your walima, ensuring a seamless experience.",
    imgSrc:
      "https://images.pexels.com/photos/34389342/pexels-photo-34389342.jpeg?auto=compress&cs=tinysrgb&w=1600",
    altText: "Elegant Walima reception setup under a white canopy",
  },
];

export default function Home() {
  const slides = heroSlides;
  const highlightCards = serviceCards;

  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id || slide.id}>
            <img
              src={slide.imgSrc}
              alt={slide.altText || "hero slide"}
            />
          </SwiperSlide>
        ))}

        <div className="hero-overlay" />
        <div className="slide-content">
          <p className="hero-eyebrow">Mehndi · Barat · Walima · Celebrations</p>
          <h2 className="hero-title">
            <span className="hero-title-small">Event By</span>
            <span className="font-signature hero-title-script">Salman Mughal</span>
          </h2>
          <div className="hero-divider">
            <span />
            <em>✦</em>
            <span />
          </div>
          <p className="hero-subtitle font-serif-elegant">
            Crafting unforgettable Pakistani weddings &amp; events across Punjab
          </p>
          <div className="hero-actions">
            <a
              href={WHATSAPP_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn--gold"
            >
              Book Your Event
            </a>
            <Link to="/Event" className="hero-btn hero-btn--ghost">
              Explore Designs
            </Link>
          </div>
        </div>
      </Swiper>

      {/* Bottom Services Section */}

      <section className="bg-gradient-to-r from-orange-600 to-black py-8 px-4 sm:px-6 lg:px-8 ">
        <div className="text-center ">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Services Highlights
          </h2>
          <p className="text-lg text-red-100 mb-12 max-w-2xl mx-auto">
            Event By Salman Mughal, we create unforgettable experiences for
            weddings, mehndi, and other special occasions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightCards.map((card) => (
              <div
                key={card._id || card.id}
                className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300"
              >
                <img
                  src={card.imgSrc}
                  alt={card.altText || card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/Event"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-8 rounded-full transition duration-300"
          >
            See More
          </Link>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-8 sm:mb-20 mt-10">
            Creating Unforgettable Moments Together
          </h1>
          <div className="overflow-hidden rounded-lg  mb-10">
            <img
              src="https://images.pexels.com/photos/39820645/pexels-photo-39820645.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Beautifully decorated wedding or mehndi event venue with colorful fabrics and chandeliers."
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <h1 className="text-4xl sm:text-5xl text-gray-900 mb-8 sm:mb-20 ">
              Creating Unforgettable Moments Together
            </h1>
            <img
              src="https://images.pexels.com/photos/39629374/pexels-photo-39629374.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-lg  ">
            <h1 className="text-4xl sm:text-5xl text-gray-900 mb-8 sm:mb-20 mt-10">
              Creating Unforgettable Moments Together
            </h1>
            <img
              src="https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <h1 className="text-4xl sm:text-5xl text-gray-900 mb-8 sm:mb-20 mt-10">
              Creating Unforgettable Moments Together
            </h1>
            <img
              src="https://images.pexels.com/photos/33914531/pexels-photo-33914531.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 mt-20">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 text-left">
                Your Event, Our Passion
              </h2>
              <p className="text-gray-600 leading-relaxed text-left">
                Event By Salman Mughal in Punjab, we specialize in customized
                event planning, ensuring your special occasions, from shaadi
                weddings to walima and mehndi events, are truly unforgettable
                and tailored to your desires.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 text-left">
                Memories That Last Forever
              </h2>
              <p className="text-gray-600 leading-relaxed text-left">
                Our dedicated team by Salman Mughal is committed to making your
                events extraordinary, focusing on every detail to create a
                seamless and memorable experience for you and your guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen relative text-white p-4  flex flex-col items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(at center, #e7591c 0%, #000000ff 100%)",
          }}
        ></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl  tracking-tight mb-6">
              Unforgettable Customized Event Planning
            </h1>

            <p className="text-md sm:text-lg text-red-100 mb-10">
              Creating special occasions, from weddings to mehndi celebrations.
            </p>

            <a
              href="#"
              className="inline-block px-10 py-3 text-lg font-semibold border-2 border-white 
                               rounded-lg hover:bg-white hover:text-red-800 transition duration-300 shadow-xl"
            >
              Call Now
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div
              className="p-6 rounded-lg text-center bg-black bg-opacity-30 border-t-4 border-black shadow-xl"
              style={{ backgroundColor: "#953a12" }}
            >
              <h3 className="text-xl font-bold mb-2">Weddings and Shaadis</h3>
              <p className="text-sm text-red-200">
                Specialized services for your dream wedding events.
              </p>
              <Link class="text-white hover:text-orange-500" to="/Mhandi">
                Visit Now
              </Link>
            </div>

            <div
              className="p-6 rounded-lg text-center bg-black bg-opacity-30 border-t-4 border-black shadow-xl"
              style={{ backgroundColor: "#953a12" }}
            >
              <h3 className="text-xl font-bold mb-2">DJ/Sound system</h3>
              <p className="text-sm text-red-200">
                Memorable events tailored to your needs.
              </p>
              <Link class="text-white hover:text-orange-500" to="/Soundsystem">
                Visit Now
              </Link>
            </div>

            <div
              className="p-6 rounded-lg text-center bg-black bg-opacity-30 border-t-4 border-black shadow-xl"
              style={{ backgroundColor: "#953a12" }}
            >
              <h3 className="text-xl font-bold mb-2">BirthDay & Party</h3>
              <p className="text-sm text-red-200">
                Customized event planning just for you.
              </p>
              <Link class="text-white hover:text-orange-500" to="/Birthday">
                Visit Now
              </Link>
            </div>
          </div>
          <Link
            to="/Event"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-8 rounded-full transition duration-300"
          >
            See More
          </Link>
        </div>
      </section>
    </>
  );
}
