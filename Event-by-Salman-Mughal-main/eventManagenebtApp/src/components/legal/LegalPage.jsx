import React, { useEffect } from "react";

/**
 * Plain, Shopify-style layout for the Privacy Policy and Terms & Conditions
 * pages: a centred title and a narrow column of simple text.
 */
function LegalPage({ title, updated, intro, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-28 pb-24 text-left">
      <article className="max-w-3xl mx-auto px-5 text-[15px] leading-7 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-normal text-center text-gray-900 mb-10">{title}</h1>
        {updated && <p className="text-gray-500 mb-6">Last updated: {updated}</p>}
        {intro && <p className="mb-6">{intro}</p>}
        <div className="space-y-8">{children}</div>
      </article>
    </div>
  );
}

export function LegalSection({ title, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-3">{title}</h2>
      <div className="space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">{children}</div>
    </section>
  );
}

export default LegalPage;
