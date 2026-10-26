import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { photographyDesigns } from "../../data/eventDesigns";
function Photography() {
  return (
    <PackageGrid
      title="Photography"
      eyebrow="Wedding · Bridal · Couple · Party"
      subtitle="Professional photo shoots for shaadi functions, couples, portraits and celebrations."
      seo={{ path: "/photography", title: "Wedding Photographer in Lahore | Affordable Photo Shoots", description: "Affordable wedding, bridal, mehndi, couple, fashion and party photography in Lahore. Professional photo shoots by Event By Salman Mughal." }}
      fallbackPackages={photographyDesigns}
    />
  );
}

export default Photography;
