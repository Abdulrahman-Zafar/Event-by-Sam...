import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { walimaDesigns } from "../../data/eventDesigns";
function Walima() {
  return (
    <PackageGrid
      title="Walima"
      eyebrow="Elegant Receptions"
      subtitle="Graceful floral stages and refined décor for your walima reception."
      seo={{ path: "/walima", title: "Walima Stage Decoration in Lahore | Affordable Reception Decor", description: "Elegant walima & reception stage decoration in Lahore: white florals, fairy lights, chandeliers & pastel themes. 24+ walima designs at low cost." }}
      fallbackPackages={walimaDesigns}
    />
  );
}

export default Walima;
