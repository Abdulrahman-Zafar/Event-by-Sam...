import React from "react";
import { LegalSection } from "./LegalPage";

// Payment and cancellation rules shown on both the Privacy Policy and the
// Terms & Conditions pages, so they always stay identical.

export function PaymentPolicy() {
  return (
    <LegalSection title="Booking & Payment">
      <p>
        <strong>A 40% advance payment is required to confirm your booking.</strong> Your date is
        reserved only after the advance is received.
      </p>
      <p>
        <strong>The remaining 60% must be paid in full on the booked event day</strong>, before the
        event begins.
      </p>
      <ul>
        <li>Payments can be made by cash, bank transfer, JazzCash or Easypaisa.</li>
        <li>A receipt or written confirmation is given for every payment.</li>
        <li>Any extra items added after booking are charged separately and paid on the event day.</li>
      </ul>
    </LegalSection>
  );
}

export function CancellationPolicy() {
  return (
    <LegalSection title="Cancellation & Refunds">
      <p>If you cancel your booking, refunds of the advance payment are made as follows:</p>
      <ul>
        <li><strong>30 days or more before the event:</strong> advance refunded, minus 10% processing charges.</li>
        <li><strong>15 to 29 days before the event:</strong> 50% of the advance refunded.</li>
        <li><strong>7 to 14 days before the event:</strong> 25% of the advance refunded.</li>
        <li><strong>Less than 7 days before the event:</strong> no refund, as flowers, materials and vendors are already booked.</li>
        <li><strong>Cancellation or no-show on the event day:</strong> no refund; full payment may be charged for setups already completed.</li>
      </ul>
      <p>
        You may move your event to a new date once, free of charge, if you inform us at least 15
        days in advance (subject to availability). Your advance is carried forward to the new date.
      </p>
      <p>
        Cancellations must be sent to us in writing on WhatsApp. Approved refunds are paid within 7
        to 14 working days. If we cancel from our side, you will receive a 100% refund of all
        payments made.
      </p>
    </LegalSection>
  );
}
