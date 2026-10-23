import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { baratDesigns } from "../../data/eventDesigns";
function Barat() {
  return (
    <PackageGrid
      title="Barat"
      eyebrow="Sehra · Rukhsati · Nikah"
      subtitle="Royal entries, red joras and grand stages for the barat day."
      fallbackPackages={baratDesigns}
    />
  );
}

export default Barat;
