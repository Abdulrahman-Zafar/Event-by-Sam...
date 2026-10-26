import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { mehndiDesigns } from "../../data/eventDesigns";
function Mhandi() {
  return (
    <PackageGrid
      title="Mehndi"
      eyebrow="Rang · Dholki · Henna"
      subtitle="Colourful stages, gaddi seating and bridal henna for your mehndi raat."
      seo={{ path: "/mhandi", title: "Mehndi Stage Decoration in Lahore & Punjab | Low Cost Mehndi Decor", description: "Affordable mehndi stage decoration in Lahore, Multan, Muzaffargarh, Faisalabad & all Punjab: genda phool, chhatri, gaddi seating, swing & neon themes. 17+ mehndi designs at budget-friendly prices. Book on WhatsApp." }}
      fallbackPackages={mehndiDesigns}
    />
  );
}

export default Mhandi;
