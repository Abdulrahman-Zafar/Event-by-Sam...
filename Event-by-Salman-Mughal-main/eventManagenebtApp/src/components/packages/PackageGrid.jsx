import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

/**
 * Shared design gallery used by every event page (Mehndi, Barat, Walima,
 * Birthday, Lighting, Sound System).
 * `fallbackPackages` is the list of designs to show (from src/data/eventDesigns.js).
 */
function PackageGrid({ title, subtitle, eyebrow, heroImage, fallbackPackages }) {
  const packages = fallbackPackages;
  const [active, setActive] = useState(null); // { pkg, index }

  const [filter, setFilter] = useState("All");

  const allDesigns = packages.map((pkg) => ({
    ...pkg,
    images: (pkg.images || []).filter(Boolean),
  }));
  // Category tabs appear only when designs carry a `tag` (e.g. Photography).
  const tags = [...new Set(allDesigns.map((d) => d.tag).filter(Boolean))];
  const designs =
    filter === "All" ? allDesigns : allDesigns.filter((d) => d.tag === filter);

  // Steps through the open design's photos, then on to the next design.
  const step = (dir) => {
    setActive(({ pkg, index }) => {
      const next = index + dir;
      if (next >= 0 && next < pkg.images.length) return { pkg, index: next };
      const pos = designs.findIndex((d) => (d._id || d.id) === (pkg._id || pkg.id));
      const nextPkg = designs[(pos + dir + designs.length) % designs.length];
      return { pkg: nextPkg, index: dir > 0 ? 0 : nextPkg.images.length - 1 };
    });
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });


  const cover = heroImage || allDesigns[0]?.images[0];

  return (
    <div className="bg-[#faf6ef] min-h-screen">
      {/* Page banner */}
      <section className="relative h-[46vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        {cover && (
          <img src={cover} alt="" className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#faf6ef]" />
        <div className="relative z-10 px-4 pt-16 text-center">
          <p className="text-[#e9c77b] tracking-[0.35em] uppercase text-xs sm:text-sm mb-3">
            {eyebrow || "Event By Salman Mughal"}
          </p>
          <h1 className="font-signature text-6xl sm:text-7xl md:text-8xl text-white drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl mx-auto text-white/85 text-base sm:text-lg font-serif-elegant italic">
              {subtitle}
            </p>
          )}
          <div className="mt-5 inline-flex items-center gap-3 text-[#e9c77b]">
            <span className="h-px w-10 bg-[#e9c77b]" />
            <span className="text-sm tracking-widest">{allDesigns.length} DESIGNS</span>
            <span className="h-px w-10 bg-[#e9c77b]" />
          </div>
        </div>
      </section>

      {/* Design grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-6 relative z-10">
        {tags.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {["All", ...tags].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFilter(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide border transition ${
                  filter === t
                    ? "bg-gradient-to-r from-[#b8862b] to-[#e0b354] text-white border-transparent shadow-md"
                    : "bg-white text-[#7a5a1e] border-[#e6d4ae] hover:border-[#c8902e]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {designs.map((pkg, i) => (
            <article
              key={pkg._id || pkg.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_-12px_rgba(60,40,10,0.25)] hover:shadow-[0_20px_40px_-12px_rgba(60,40,10,0.4)] transition-all duration-500 hover:-translate-y-1 text-left"
            >
              <button
                type="button"
                onClick={() => setActive({ pkg, index: 0 })}
                className="relative block w-full aspect-[4/5] overflow-hidden cursor-zoom-in"
              >
                <img
                  src={pkg.images[0]}
                  alt={pkg.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#7a5a1e] text-xs font-semibold tracking-widest px-3 py-1 rounded-full">
                  DESIGN {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                  <Expand size={16} />
                </span>
                {pkg.images.length > 1 && (
                  <span className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    {pkg.images.length} photos
                  </span>
                )}
              </button>
              <div className="p-5">
                <h2 className="font-serif-elegant text-2xl font-semibold text-[#2b1d0e] mb-1">
                  {pkg.title}
                </h2>
                {pkg.description && (
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{pkg.description}</p>
                )}
                <Link
                  to="/contactus"
                  state={{ design: `${title} – ${pkg.title}` }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#9a6b1f] hover:text-[#c8902e] transition"
                >
                  Book this design <ChevronRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-serif-elegant italic text-xl text-gray-700 mb-5">
            Didn't find your exact style? We'll create a custom design just for you.
          </p>
          <Link
            to="/contactus"
            className="inline-block bg-gradient-to-r from-[#b8862b] to-[#e0b354] text-white font-semibold tracking-wide py-3 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-2 sm:left-6 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.pkg.images[active.index]}
              alt={active.pkg.title}
              className="max-h-[78vh] w-auto mx-auto rounded-lg shadow-2xl object-contain"
            />
            <figcaption className="text-center mt-4 text-white">
              <span className="font-serif-elegant text-2xl">{active.pkg.title}</span>
              <Link
                to="/contactus"
                state={{ design: `${title} – ${active.pkg.title}` }}
                className="block mt-3 mx-auto w-fit bg-[#c8902e] hover:bg-[#b07a20] text-white text-sm font-semibold py-2 px-6 rounded-full"
              >
                Book this design
              </Link>
            </figcaption>
          </figure>
          <button
            className="absolute right-2 sm:right-6 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}

export default PackageGrid;
