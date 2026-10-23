import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { lightingDesigns } from "../../data/eventDesigns";
function Lighting() {
  return (
    <PackageGrid
      title="House Lighting"
      eyebrow="Shaadi House Lighting"
      subtitle="Light up the whole ghar — walls, balconies, doors, trees and lawns."
      fallbackPackages={lightingDesigns}
    />
  );
}

export default Lighting;
