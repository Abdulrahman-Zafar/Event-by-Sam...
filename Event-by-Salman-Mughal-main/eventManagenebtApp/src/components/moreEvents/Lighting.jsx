import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { lightingDesigns } from "../../data/eventDesigns";
function Lighting() {
  return (
    <PackageGrid
      title="House Lighting"
      eyebrow="Shaadi House Lighting"
      subtitle="Light up the whole ghar — walls, balconies, doors, trees and lawns."
      seo={{ path: "/lighting", title: "Wedding House Lighting in Lahore | Shaadi Ghar Lights", description: "Shaadi house lighting in Lahore & Muzaffargarh: fairy-light curtains, balcony lights, gali canopies & tree lighting at affordable rates." }}
      fallbackPackages={lightingDesigns}
    />
  );
}

export default Lighting;
