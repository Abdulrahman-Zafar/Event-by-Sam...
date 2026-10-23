import React from "react";
import PackageGrid from "../../packages/PackageGrid";
import { soundSystemDesigns } from "../../../data/eventDesigns";
function SoundSystem() {
  return (
    <PackageGrid
      title="DJ & Sound"
      eyebrow="Dholki to Dance Floor"
      subtitle="Professional DJ, sound and party lighting for mehndi and sangeet nights."
      fallbackPackages={soundSystemDesigns}
    />
  );
}

export default SoundSystem;
