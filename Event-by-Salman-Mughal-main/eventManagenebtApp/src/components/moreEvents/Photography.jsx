import React from "react";
import PackageGrid from "../packages/PackageGrid";
import { photographyDesigns } from "../../data/eventDesigns";
function Photography() {
  return (
    <PackageGrid
      title="Photography"
      eyebrow="Wedding · Bridal · Couple · Party"
      subtitle="Professional photo shoots for shaadi functions, couples, portraits and celebrations."
      seo={{ path: "/photography", title: "Wedding Photographer in Lahore, Islamabad & Punjab | Affordable Photoshoots", description: "Professional, affordable wedding photographer in Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Sialkot, Gujranwala & all Punjab: barat, walima, mehndi, bridal, pre-wedding, fashion & party photoshoots." }}
      fallbackPackages={photographyDesigns}
    />
  );
}

export default Photography;
