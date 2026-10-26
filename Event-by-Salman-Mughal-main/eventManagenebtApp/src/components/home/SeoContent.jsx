import React from "react";
import { Link } from "react-router-dom";

// Visible, keyword-rich content for search engines (and customers).
// The FAQ is also published as FAQPage structured data for Google.

const SERVICE_CITIES = [
  "Lahore",
  "Multan",
  "Muzaffargarh",
  "Faisalabad",
  "Sialkot",
  "Gujranwala",
  "Khangarh",
  "Bahawalpur",
  "Dera Ghazi Khan",
  "Islamabad",
  "Rawalpindi",
];

const services = [
  { name: "Mehndi Stage Decoration", path: "/mhandi" },
  { name: "Barat Stage Decoration", path: "/barat" },
  { name: "Walima Stage Decoration", path: "/walima" },
  { name: "Wedding & Event Photography", path: "/photography" },
  { name: "Birthday Party Decoration", path: "/birthday" },
  { name: "Wedding House Lighting", path: "/lighting" },
  { name: "DJ & Sound System", path: "/soundsystem" },
  { name: "Digital Wedding Cards & Online Invitations", path: "/digital-cards" },
  { name: "Nikah, Engagement & Haldi/Mayun Decoration", path: "/mhandi" },
  { name: "Bridal Room & Fairy-Light Decoration", path: "/lighting" },
];

const faqs = [
  {
    q: "Who is the best and most affordable event planner in Lahore and Punjab?",
    a: "Event By Salman Mughal is a trusted, low-cost event planner based in Lahore and serving all of Punjab. We offer mehndi, barat and walima stage decoration, wedding photography, birthday parties, house lighting, DJ and digital cards at budget-friendly prices.",
  },
  {
    q: "Which cities do you provide event services in?",
    a: "We provide full event and wedding services in Lahore, Multan, Muzaffargarh, Faisalabad, Sialkot, Gujranwala, Khangarh, Bahawalpur, Dera Ghazi Khan (DG Khan), Islamabad and Rawalpindi, as well as other cities across Punjab.",
  },
  {
    q: "Do you offer wedding photography in Lahore, Islamabad and other cities?",
    a: "Yes. Our professional photographers cover barat, walima, nikah and mehndi functions, bridal and pre-wedding shoots, couple sessions, birthdays and parties in Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Sialkot, Gujranwala and all over Punjab.",
  },
  {
    q: "Do you arrange events in South Punjab: Multan, Muzaffargarh, Bahawalpur and DG Khan?",
    a: "Yes. With our office in Muzaffargarh, we regularly decorate mehndi, barat and walima events and provide house lighting, DJ and photography in Multan, Muzaffargarh, Khangarh, Bahawalpur and Dera Ghazi Khan.",
  },
  {
    q: "Do you provide event decoration in Faisalabad, Sialkot and Gujranwala?",
    a: "Yes. Our team travels to Faisalabad, Sialkot and Gujranwala for complete wedding stage decoration, birthday setups, lighting and photography. Book early to reserve your date.",
  },
  {
    q: "Do you make digital wedding cards and online invitations?",
    a: "Yes. We design beautiful animated digital wedding cards for nikah, mehndi, barat, walima and birthdays. You get one link to share with all your guests on WhatsApp, with no printing cost, and we deliver anywhere in Pakistan.",
  },
  {
    q: "Do you offer cheap / low budget wedding decoration?",
    a: "Yes. We design packages for every budget, from simple, low-cost mehndi and birthday setups to grand barat and walima stages, in every city we serve. Share your budget on WhatsApp and we'll suggest the best design for it.",
  },
  {
    q: "Are there extra charges for events outside Lahore?",
    a: "For events outside our Lahore and Muzaffargarh offices, a small travel and transport charge may apply depending on the city and setup size. It is always included clearly in your quotation.",
  },
  {
    q: "How much advance is required to book an event?",
    a: "A 40% advance confirms your booking, and the remaining payment is made on the event day. See our Privacy & Booking Policy for cancellation details.",
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
          Best &amp; Affordable Event Planner in Lahore and All Punjab
        </h2>
        <p className="mt-5 text-gray-700 leading-relaxed">
          Looking for the <strong>best event planner in Lahore</strong>, or anywhere in Punjab, who also fits your
          budget? <strong>Event By Salman Mughal</strong> is a <strong>low-cost, affordable event planner</strong>,
          wedding decorator and <strong>professional photographer</strong> serving{" "}
          <strong>Lahore, Multan, Muzaffargarh, Faisalabad, Sialkot, Gujranwala, Khangarh, Bahawalpur, Dera Ghazi
          Khan, Islamabad and Rawalpindi</strong>. From colourful <strong>mehndi stage decoration</strong> and royal{" "}
          <strong>barat stages</strong> to elegant <strong>walima receptions</strong>, fun{" "}
          <strong>birthday party decoration</strong>, <strong>nikah, engagement and haldi/mayun setups</strong>,{" "}
          <strong>shaadi house lighting</strong>, <strong>DJ sound systems</strong> and{" "}
          <strong>digital wedding cards</strong>, we handle every detail so your family can simply enjoy the day.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong>Wedding photography is one of our specialities.</strong> Our photographers capture barat, walima,
          nikah and mehndi functions, <strong>bridal and pre-wedding photoshoots</strong>, couple sessions,
          fashion shoots, birthdays and family events, delivering beautifully edited photos you'll treasure for
          life, in every city we serve.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Skip the printing cost with our <strong>digital wedding cards</strong>: elegant, animated{" "}
          <strong>online shaadi invitations</strong> for nikah, mehndi, barat, walima and birthdays that you can
          share with every guest on <strong>WhatsApp</strong> in one tap.{" "}
          <Link to="/digital-cards" className="text-[#9a6b1f] underline">
            See a live digital card
          </Link>
          .
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We believe a beautiful shaadi shouldn't cost a fortune. That's why we offer{" "}
          <strong>budget wedding packages</strong> and some of the most competitive prices in Punjab, without
          compromising on fresh flowers, quality lighting, sharp photography or on-time setup.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-[#2b1d0e]">Our Event Services</h3>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map((s) => (
            <li key={s.path}>
              <Link to={s.path} className="text-[#9a6b1f] hover:text-[#c8902e] hover:underline font-medium">
                {s.name} →
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 text-xl font-semibold text-[#2b1d0e]">Cities We Serve</h3>
        <p className="mt-2 text-gray-600 text-sm">
          Event planning, stage decoration and wedding photography in:
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {SERVICE_CITIES.map((city) => (
            <li
              key={city}
              className="bg-white border border-[#ead9b6] text-[#7a5a1e] text-sm font-medium px-4 py-1.5 rounded-full"
            >
              Event Planner in {city}
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
