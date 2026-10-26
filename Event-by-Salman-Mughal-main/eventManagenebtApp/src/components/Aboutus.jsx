import React from "react";
import { useSeo } from "../lib/seo";
import { motion } from "framer-motion";
import ceoPhoto from "../assets/salman-mughal-ceo.jpg";

const features = [
  {
    title: "Creative Design",
    desc: "At Event by Salman Mughal, we craft visually stunning and unique event designs that reflect your personality, culture, and vision."
  },
  {
    title: "Perfect Execution",
    desc: "Our experienced team ensures flawless execution, handling every detail with precision for a smooth and stress-free event."
  },
  {
    title: "Client Satisfaction",
    desc: "We prioritize your happiness by delivering exceptional experiences that exceed expectations and create lasting memories."
  }
];


export default function About() {
  useSeo({
    path: "/Aboutus",
    title: "About Us | Salman Mughal – Event Planner in Lahore",
    description:
      "Meet Salman Mughal, founder of Event By Salman Mughal – a mechanical engineer turned passionate event planner serving Lahore, Muzaffargarh and all of Punjab.",
  });
  return (
    <div className="bg-black text-white">

      {/* 🔥 Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4"
        style={{ background: "linear-gradient(135deg, #000000, #7a1f00, #e7591c)" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-bold mb-4"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-200 max-w-2xl"
        >
          Event by Salman Mughal creates unforgettable wedding, mehndi,
          and celebration experiences with elegance and perfection.
        </motion.p>
      </section>

      {/* ✨ About Content */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.img
          src="https://www.lighttoweruae.com/wp-content/uploads/2024/12/RIC07665.jpg"
          alt="event"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl shadow-2xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-orange-500">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We specialize in luxury event planning, from weddings and mehndi
            events to walima receptions. Our team focuses on creativity,
            perfection, and attention to detail to make your events truly
            unforgettable.
          </p>
        </motion.div>
      </section>

      {/* 👑 Owner Section */}
      <section className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #e7591c, #000000)" }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12"
        >
          Meet The Founder & CEO
        </motion.h2>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto bg-white text-black rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-5 text-left"
        >
          <div className="md:col-span-2 relative">
            <img
              src={ceoPhoto}
              alt="Salman Mughal, Founder & CEO of Event By Salman Mughal"
              className="w-full h-96 md:h-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 md:hidden">
              <h3 className="text-2xl font-bold text-white">Salman Mughal</h3>
              <p className="text-sm text-orange-200">Founder & CEO</p>
            </div>
          </div>

          <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
            <div className="hidden md:block">
              <h3 className="text-3xl font-bold">Salman Mughal</h3>
              <p className="text-sm font-semibold tracking-widest uppercase text-orange-600 mt-1">
                Founder & CEO
              </p>
            </div>

            <p className="mt-5 text-gray-700 leading-relaxed">
              By degree, I am a <span className="font-semibold">Mechanical Engineer</span>. I was
              trained to build machines, measure tolerances and solve problems with precision.
              But my heart was always somewhere else: in the glow of fairy lights, the scent of
              fresh genda phool, and the moment a family sees their dream stage for the first time.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              So I followed that passion. Today I bring the same engineering discipline to every
              event: careful planning, perfect timing and attention to the smallest detail. But I
              design with my heart, because a shaadi is not just an event. It is a memory a family
              will carry for the rest of their lives.
            </p>

            <blockquote className="mt-6 border-l-4 border-orange-500 pl-4 italic text-gray-800">
              "Engineering taught me how things work. Your celebrations taught me why they matter."
            </blockquote>

            <p className="mt-5 text-gray-700 leading-relaxed">
              When you trust us with your mehndi, barat or walima, you are not hiring a vendor.
              You are welcoming someone who will treat your happiness as his own.
            </p>

            <p className="mt-6 text-2xl font-signature text-orange-600">Salman Mughal</p>
          </div>
        </motion.div>
      </section>

      {/* 🚀 Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
    {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] p-6 rounded-xl text-center shadow-lg hover:shadow-orange-500/20 transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">
                {item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

