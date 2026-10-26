import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { birthdayDesigns } from "../../data/eventDesigns";
function Birthday() {
  return (
    <PackageGrid
      title="Birthday"
      eyebrow="Parties & Celebrations"
      subtitle="Themed balloon walls, cake tables and party setups for every age."
      seo={{ path: "/birthday", title: "Birthday Party Planner in Lahore & Punjab | Cheap Balloon Decoration", description: "Low-cost birthday party decoration in Lahore, Islamabad, Faisalabad, Multan & all Punjab: balloon arches, neon signs, sequin walls & themed setups for kids and adults. Book your birthday decor today." }}
      fallbackPackages={birthdayDesigns}
    />
  );
}

export default Birthday;
