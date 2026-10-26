import React from "react";
import PackageGrid from "../../packages/PackageGrid";
import { soundSystemDesigns } from "../../../data/eventDesigns";
function SoundSystem() {
  return (
    <PackageGrid
      title="DJ & Sound"
      eyebrow="Dholki to Dance Floor"
      subtitle="Professional DJ, sound and party lighting for mehndi and sangeet nights."
      seo={{ path: "/soundsystem", title: "DJ & Sound System in Lahore | Mehndi & Dholki DJ", description: "Professional DJ and sound system for mehndi, dholki and parties in Lahore and across Punjab with dance-floor lighting. Affordable DJ packages." }}
      fallbackPackages={soundSystemDesigns}
    />
  );
}

export default SoundSystem;
