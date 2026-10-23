import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Smartphone, Share2, Sparkles, Music2 } from "lucide-react";
import ayeshaAhmedCard from "../../assets/digital-card-ayesha-ahmed.png";

// Live digital invitation cards. Add new ones to this list.
const digitalCards = [
  {
    id: 1,
    title: "Ayesha & Ahmed",
    style: "Ivory & Emerald · Royal Script",
    image: ayeshaAhmedCard,
    url: "https://my-wedding-card-liart.vercel.app/",
  },
];

const perks = [
  { icon: Smartphone, title: "Mobile First", text: "Looks stunning on every phone screen." },
  { icon: Share2, title: "Share on WhatsApp", text: "One link for all your guests, no printing." },
  { icon: Sparkles, title: "Animated Design", text: "Elegant motion, petals and gold accents." },
  { icon: Music2, title: "Personalised", text: "Your names, dates, venues and family details." },
];

function DigitalCards() {
  return (
    <div className="bg-[#faf6ef] min-h-screen pt-28 pb-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#9a6b1f] tracking-[0.35em] uppercase text-xs sm:text-sm mb-3">
          Modern Shaadi Invitations
        </p>
        <h1 className="font-signature text-6xl sm:text-7xl text-[#1f3d2b]">Digital Cards</h1>
        <p className="mt-4 max-w-2xl mx-auto font-serif-elegant italic text-lg text-gray-700">
          Beautiful online wedding invitations you can share with family and friends in one tap.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 space-y-10">
        {digitalCards.map((card) => (
          <article
            key={card.id}
            className="grid md:grid-cols-5 gap-0 bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(60,40,10,0.35)] text-left"
          >
            <a
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-3 relative group block overflow-hidden bg-[#f4ecdc]"
            >
              <img
                src={card.image}
                alt={`${card.title} digital wedding card`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition">
                <span className="opacity-0 group-hover:opacity-100 transition bg-white text-[#1f3d2b] font-semibold px-5 py-2 rounded-full inline-flex items-center gap-2">
                  Open live card <ExternalLink size={16} />
                </span>
              </span>
            </a>
            <div className="md:col-span-2 p-8 flex flex-col justify-center">
              <span className="text-xs tracking-[0.3em] text-[#9a6b1f] uppercase">Featured Card</span>
              <h2 className="font-signature text-5xl text-[#1f3d2b] mt-2">{card.title}</h2>
              <p className="text-gray-600 mt-2">{card.style}</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1f3d2b] hover:bg-[#16301f] text-white font-semibold py-3 px-6 rounded-full transition"
                >
                  View Live Card <ExternalLink size={16} />
                </a>
                <Link
                  to="/contactus"
                  state={{ design: `Digital Card – ${card.title} style` }}
                  className="inline-flex items-center gap-2 border-2 border-[#c8902e] text-[#9a6b1f] hover:bg-[#c8902e] hover:text-white font-semibold py-3 px-6 rounded-full transition"
                >
                  Order Yours
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {perks.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#efe4cf]">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-[#f6ecd6] text-[#9a6b1f] mb-3">
              <Icon size={22} />
            </span>
            <h3 className="font-semibold text-[#2b1d0e]">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default DigitalCards;
