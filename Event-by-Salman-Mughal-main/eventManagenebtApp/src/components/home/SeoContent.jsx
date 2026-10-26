import React from "react";
import { Link } from "react-router-dom";

// Visible, keyword-rich content for search engines (and customers).
// The FAQ is also published as FAQPage structured data for Google.

const services = [
  { name: "Mehndi Stage Decoration", path: "/mhandi" },
  { name: "Barat Stage Decoration", path: "/barat" },
  { name: "Walima Stage Decoration", path: "/walima" },
  { name: "Birthday Party Decoration", path: "/birthday" },
  { name: "Wedding House Lighting", path: "/lighting" },
  { name: "DJ & Sound System", path: "/soundsystem" },
  { name: "Wedding Photography", path: "/photography" },
  { name: "Digital Wedding Cards", path: "/digital-cards" },
];

const faqs = [
  {
    q: "Who is the best and most affordable event planner in Lahore?",
    a: "Event By Salman Mughal is a trusted, low-cost event planner in Lahore offering complete wedding and party services: mehndi, barat and walima stage decoration, birthday parties, house lighting, DJ, photography and digital cards, all at budget-friendly prices.",
  },
  {
    q: "Do you offer cheap / low budget wedding decoration in Lahore?",
    a: "Yes. We design packages for every budget, from simple, low-cost mehndi and birthday setups to grand barat and walima stages. Share your budget on WhatsApp and we'll suggest the best design for it.",
  },
  {
    q: "How much advance is required to book an event?",
    a: "A 40% advance confirms your booking, and the remaining payment is made on the event day. See our Privacy & Booking Policy for cancellation details.",
  },
  {
    q: "Which cities do you serve?",
    a: "We are based in Lahore and Muzaffargarh and also serve Multan, Kot Addu, Faisalabad, Jhang, Bahawalpur, Islamabad and other cities in Punjab.",
  },
  {
    q: "Do you provide shaadi house lighting and DJ for mehndi?",
    a: "Yes. We provide full shaadi ghar fairy-light decoration, street and gali lighting, and professional DJ and sound systems for mehndi, dholki and parties.",
  },
  {
    q: "How can I book Event By Salman Mughal?",
    a: "Call or WhatsApp us on 0310 6881263, or fill in the booking form on our Contact page and your details will open directly in WhatsApp.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function SeoContent() {
  return (
    <section className="bg-[#faf6ef] py-16 px-4 sm:px-6 lg:px-8 text-left">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif-elegant text-3xl sm:text-4xl font-semibold text-[#2b1d0e] text-center">
          Best &amp; Affordable Event Planner in Lahore
        </h2>
        <p className="mt-5 text-gray-700 leading-relaxed">
          Looking for the <strong>best event planner in Lahore</strong> who also fits your budget?{" "}
          <strong>Event By Salman Mughal</strong> is a <strong>low-cost, affordable event planner</strong> and
          wedding decorator serving <strong>Lahore</strong>, <strong>Muzaffargarh</strong> and across Punjab.
          From colourful <strong>mehndi stage decoration</strong> and royal <strong>barat stages</strong> to
          elegant <strong>walima receptions</strong>, fun <strong>birthday party decoration</strong>,{" "}
          <strong>shaadi house lighting</strong>, <strong>DJ sound systems</strong> and{" "}
          <strong>wedding photography</strong>, we handle every detail so your family can simply enjoy the day.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We believe a beautiful shaadi shouldn't cost a fortune. That's why we offer{" "}
          <strong>budget wedding packages</strong> and some of the most competitive prices in Lahore, without
          compromising on fresh flowers, quality lighting or on-time setup.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-[#2b1d0e]">Our Event Services</h3>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map((s) => (
            <li key={s.path}>
              <Link to={s.path} className="text-[#9a6b1f] hover:text-[#c8902e] hover:underline font-medium">
                {s.name} in Lahore →
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 text-xl font-semibold text-[#2b1d0e]">Frequently Asked Questions</h3>
        <div className="mt-4 divide-y divide-[#ead9b6] border-y border-[#ead9b6]">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-4">
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-gray-900">
                {q}
                <span className="ml-4 text-[#c8902e] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeoContent;
