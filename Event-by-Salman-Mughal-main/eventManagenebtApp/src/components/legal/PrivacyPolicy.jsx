import React from "react";
import LegalPage, { LegalSection } from "./LegalPage";
import { CancellationPolicy, PaymentPolicy } from "./BookingPolicy";

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy & Booking Policy"
      updated="October 2026"
      intro="Your trust matters to us. This page explains how we handle your personal information, and the payment and cancellation policy that applies to every booking."
    >
      <PaymentPolicy />

      <CancellationPolicy />

      <LegalSection title="Information We Collect">
        <p>When you contact us or book an event, we may collect:</p>
        <ul>
          <li>Your name, phone / WhatsApp number and email address</li>
          <li>Event details: type, date, venue, city and guest count</li>
          <li>Your selected designs, themes and special requests</li>
          <li>Payment records (amount, date and method; we never store card details)</li>
        </ul>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <ul>
          <li>To plan, confirm and deliver your event</li>
          <li>To share quotations, design ideas and booking updates</li>
          <li>To contact you on WhatsApp or by phone about your booking</li>
          <li>To improve our services based on your feedback</li>
        </ul>
        <p>We do not sell, rent or trade your personal information to anyone.</p>
      </LegalSection>

      <LegalSection title="Sharing With Vendors">
        <p>
          We only share the details needed to deliver your event (for example, venue address and
          timing) with our trusted vendors such as florists, lighting, sound and photography teams.
        </p>
      </LegalSection>

      <LegalSection title="Photos & Videos of Your Event">
        <p>
          We may photograph our décor setups to show in our portfolio and on social media. We will
          never publish close-up photos of you, the bride, groom or your family without your
          permission. Simply tell us if you prefer that no photos of your event are shared.
        </p>
      </LegalSection>

      <LegalSection title="Data Security & Retention">
        <p>
          We keep your information safe and only for as long as needed for your booking, accounts
          and legal requirements. You may ask us at any time to view, correct or delete your
          personal information.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          We may update this policy from time to time. The latest version will always be available
          on this page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

export default PrivacyPolicy;
