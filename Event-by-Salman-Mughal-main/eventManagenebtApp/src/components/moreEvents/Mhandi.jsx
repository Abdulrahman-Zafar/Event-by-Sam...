import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { mehndiDesigns } from "../../data/eventDesigns";
function Mhandi() {
  return (
    <PackageGrid
      title="Mehndi"
      eyebrow="Rang · Dholki · Henna"
      subtitle="Colourful stages, gaddi seating and bridal henna for your mehndi raat."
      fallbackPackages={mehndiDesigns}
    />
  );
}

export default Mhandi;
