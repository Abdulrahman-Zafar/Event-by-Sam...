import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { walimaDesigns } from "../../data/eventDesigns";
function Walima() {
  return (
    <PackageGrid
      title="Walima"
      eyebrow="Elegant Receptions"
      subtitle="Graceful floral stages and refined décor for your walima reception."
      fallbackPackages={walimaDesigns}
    />
  );
}

export default Walima;
