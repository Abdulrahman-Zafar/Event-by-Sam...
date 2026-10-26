import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { baratDesigns } from "../../data/eventDesigns";
function Barat() {
  return (
    <PackageGrid
      title="Barat"
      eyebrow="Sehra · Rukhsati · Nikah"
      subtitle="Royal entries, red joras and grand stages for the barat day."
      seo={{ path: "/barat", title: "Barat Stage Decoration in Lahore | Best Wedding Stage Decorators", description: "Royal barat stage decoration in Lahore at affordable prices: floral arches, chandeliers, thrones & rose walls. 26+ barat stage designs by Event By Salman Mughal." }}
      fallbackPackages={baratDesigns}
    />
  );
}

export default Barat;
