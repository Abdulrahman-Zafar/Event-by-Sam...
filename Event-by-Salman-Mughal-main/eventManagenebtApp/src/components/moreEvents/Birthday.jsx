import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { birthdayDesigns } from "../../data/eventDesigns";
function Birthday() {
  return (
    <PackageGrid
      title="Birthday"
      eyebrow="Parties & Celebrations"
      subtitle="Themed balloon walls, cake tables and party setups for every age."
      fallbackPackages={birthdayDesigns}
    />
  );
}

export default Birthday;
