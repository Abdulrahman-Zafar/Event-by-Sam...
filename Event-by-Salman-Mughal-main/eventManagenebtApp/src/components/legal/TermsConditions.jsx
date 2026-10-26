import React from "react";
import { useSeo } from "../../lib/seo";
import LegalPage, { LegalSection } from "./LegalPage";
import { CancellationPolicy, PaymentPolicy } from "./BookingPolicy";

function TermsConditions() {
  useSeo({
    path: "/terms-and-conditions",
    title: "Terms & Conditions",
    description:
      "Terms and conditions for event bookings with Event By Salman Mughal.",
  });
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="October 2026"
      intro="By booking any service with Event By Salman Mughal, you agree to the following terms. Please read them carefully before confirming your booking."
    >
      <LegalSection title="Booking Confirmation">
        <ul>
          <li>A booking is confirmed only after the 40% advance is received.</li>
          <li>Dates are reserved on a first-come, first-served basis; enquiries do not hold a date.</li>
          <li>The final quotation, items and design are agreed in writing (WhatsApp is acceptable).</li>
        </ul>
      </LegalSection>

      <PaymentPolicy />

      <CancellationPolicy />

      <LegalSection title="Designs, Flowers & Décor">
        <ul>
          <li>
            Photos on our website are samples. Your final setup will closely match the selected
            design, but may vary slightly with venue size, lighting and season.
          </li>
          <li>
            Fresh flowers depend on market availability. If a flower is unavailable, we will replace
            it with one of equal quality and similar colour.
          </li>
          <li>Changes to the design must be requested at least 7 days before the event.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Venue, Timing & Setup">
        <ul>
          <li>
            The client must arrange venue access for our team in time for setup (usually 4 to 8
            hours before the event, depending on the package).
          </li>
          <li>
            Any venue permission, generator / electricity supply or hall charges are the client's
            responsibility unless included in the quotation.
          </li>
          <li>
            Delays caused by venue restrictions or late access may reduce setup time and are not our
            liability.
          </li>
          <li>Extra hours beyond the agreed time for DJ, sound or lighting are charged separately.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Our Equipment & Property">
        <ul>
          <li>
            All furniture, sofas, lights, sound systems, props and décor items remain the property
            of Event By Salman Mughal.
          </li>
          <li>Any damage or loss caused by guests will be charged to the client at repair or replacement cost.</li>
          <li>Our team will dismantle and collect all items after the event.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Photography Services">
        <ul>
          <li>Edited photos are delivered within the time agreed in your package.</li>
          <li>Raw (unedited) files are not included unless agreed in advance.</li>
          <li>With your permission, selected photos may be used in our portfolio.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Digital Cards">
        <ul>
          <li>Please check all names, dates and venue details before final approval.</li>
          <li>Changes after approval may carry a small revision charge.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Weather & Unforeseen Events">
        <p>
          We are not responsible for delays or changes caused by events beyond our control, such
          as heavy rain, storms, strikes, road closures, power failures or government restrictions.
          In such cases we will work with you to reschedule, and your advance will be carried
          forward to the new date.
        </p>
      </LegalSection>

      <LegalSection title="Safety & Conduct">
        <p>
          For everyone's safety, our team may refuse to operate equipment in unsafe conditions. We
          expect respectful behaviour towards our staff at all times.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these terms from time to time. The version in effect on the date of your
          booking will apply to your event.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

export default TermsConditions;
