import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { photographyDesigns } from "../../data/eventDesigns";
function Photography() {
  return (
    <PackageGrid
      title="Photography"
      eyebrow="Wedding · Bridal · Couple · Party"
      subtitle="Professional photo shoots for shaadi functions, couples, portraits and celebrations."
      fallbackPackages={photographyDesigns}
    />
  );
}

export default Photography;
