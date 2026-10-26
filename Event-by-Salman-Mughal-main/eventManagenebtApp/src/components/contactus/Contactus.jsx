import React from "react";
import { useSeo } from "../../lib/seo";
import { Routes, Route } from "react-router-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { WHATSAPP_BOOKING_LINK, WHATSAPP_BOOKING_NUMBER, WHATSAPP_COMPLAINT_LINK } from "../../lib/links";
const fallbackSettings = {
  phone: "0310 6881263",
  supportPhone: "03219724878",
  email: "",
  address: "Mohallah Qiam Wala, Railway Road, Muzaffargarh",
};

// Our office addresses.
const officeAddresses = [
  { city: "Muzaffargarh", line: "Mohallah Qiam Wala, Railway Road, Muzaffargarh" },
  { city: "Lahore", line: "Khayaban-e-Amin, Block B, Pine Avenue, Lahore" },
];

function Contactus() {
  useSeo({
    path: "/contactus",
    title: "Contact Us | Book an Event Planner & Photographer in Punjab",
    description:
      "Book your mehndi, barat, walima or birthday event. Call or WhatsApp 0310 6881263. Offices in Lahore and Muzaffargarh; serving all major Punjab cities, Islamabad and Rawalpindi.",
  });
  const settings = fallbackSettings;
  const selectedDesign = useLocation().state?.design;
  const inputStyle =
    "leading-[1.6rem] rounded-[5px] border border-[#ff7600] pl-[5px] py-2 outline-none focus:ring-2 focus:ring-[#ff7600]";
    const sendToWhatsApp = () => {
  // Grab field values
  const firstName = document.querySelector('input[name="firstName"]').value;
  const lastName = document.querySelector('input[name="lastName"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const region = document.querySelector('select[name="region"]').value;
  const event = document.querySelector('select[name="event"]').value;

  // Construct WhatsApp message
  const message = `
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Address: ${address}
Region: ${region}
Event: ${event}${selectedDesign ? `
Selected Design: ${selectedDesign}` : ""}
  `;

  // Open WhatsApp with the booking details already typed in the message box.
  window.open(
    `https://wa.me/${WHATSAPP_BOOKING_NUMBER}?text=${encodeURIComponent(message.trim())}`,
    "_blank",
    "noopener,noreferrer"
  );
};
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        background: "radial-gradient(rgb(231,89,28) 0%, rgb(0,0,0) 100%)",
      }}
    >
      <div class="container mx-auto px-4 py-16 max-w-7xl">
        <h1 class="text-4xl font-light text-white mb-10 mt-10 text-center">
          How would you like to contact Event By Salman Mughal?
        </h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 bg-white p-8 md:p-12 rounded-lg shadow-xl">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">
              Request a call.
            </h2>
            <p class="text-gray-600 mb-6">
              Give us some info so the right person can get back to you.
            </p>

            <form class="space-y-4 ">
              <div class="grid grid-cols-1 md:grid-cols-1 text-center md:w-[586px] gap-4 ">
                <input type="text" name="firstName" placeholder="First name" className={inputStyle} aria-label="First name" />
                <input type="text" name="lastName" placeholder="Last name" className={inputStyle} aria-label="Last name" />
                <input type="email" name="email" placeholder="Email" className={inputStyle} aria-label="Email" />
                <input type="tel" name="phone" placeholder="Phone" className={inputStyle} aria-label="Phone" />
                <input type="text" name="address" placeholder="Address" className={inputStyle} aria-label="Address" />
              </div>

              <div class="relative ">
                <label for="country" class="sr-only ">
                  Region
                </label>
                <select
                  id="country"
                  name="region"
                  class="input-style appearance-none bg-white justify-center align-center"
                >
                  <option disabled selected>
                    Region
                  </option>
                  <option value="Lahore">Lahore</option>
                  <option value="Multan">Multan</option>
                  <option value="Muzaffargarh">Muzaffargarh</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Sialkot">Sialkot</option>
                  <option value="Gujranwala">Gujranwala</option>
                  <option value="Khangarh">Khangarh</option>
                  <option value="Bahawalpur">Bahawalpur</option>
                  <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Kot Addu">Kot Addu</option>
                  <option value="Jhang">Jhang</option>
                  <option value="Other">Other</option>
                </select>
                {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex  items-center px-2 text-gray-700">
                            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div> */}
                {/* <p class="text-sm text-gray-700 mt-1 ml-1">Muzaffargarh</p> */}
              </div>

              <div class="relative">
                <label for="product-interest" class="sr-only">
                  {" "}
                  Pick your Event
                </label>
                <select
                  id="product-interest"
                  name="event"
                  class="input-style appearance-none bg-white"
                >
                  <option disabled selected>
                    Pick your Event
                  </option>
                  <option value="Mehndi">Mehndi</option>
                  <option value="Walima">Walima</option>
                  <option value="Barat">Barat</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Party">Party</option>
                  <option value="DJ/Sound System">DJ/Sound System</option>
                  <option value="Lighting">Lighting</option>
                  <option value="Photography">Photography</option>
                  <option value="Digital Card">Digital Card</option>
                </select>
                {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div> */}
              </div>

              <button
                  type="button"
                  onClick={sendToWhatsApp}
                  class="py-2 px-6 font-semibold rounded-md transition duration-150 ease-in-out text-white bg-orange-600 hover:bg-orange-800                 focus:outline-none focus:ring-4 focus:ring-orange-300"
                >
                  Book your Event Now!
                </button>


              <p class="text-xs text-gray-500 pt-4">
                By registering, you agree to the processing of your personal
                data by Event By Salman Mughal as described in the{" "}
                <a href="#" class="text-orange-600 hover:underline">
                  Privacy Statement
                </a>
              </p>
            </form>
          </div>

          <div class="space-y-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Give us a call.
              </h3>
              <p class="text-2xl font-bold text-gray-900 mb-3">
                {settings.phone || fallbackSettings.phone}
              </p>
              <div class="space-y-2">
                <p className="font-semibold text-gray-800">Visit our offices:</p>
                {officeAddresses.map((office) => (
                  <p key={office.city} className="text-gray-700">
                    <span className="font-semibold">{office.city}:</span>{" "}
                    {office.line}
                  </p>
                ))}
                <p>
                  <a href="#" class="secondary-link">
                    Get billing and tech support: {settings.supportPhone || fallbackSettings.supportPhone}
                  </a>
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Chat with us.
              </h3>
              <p class="text-gray-600 mb-4">
                Get product info, and live chat with an agent.
              </p>
              {/* <button class="py-2 px-6 font-semibold rounded-md transition duration-150 ease-in-out text-white bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300" "">
                        LET'S CHAT
                    </button> */}
              <a
                href={WHATSAPP_BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-6 font-semibold rounded-md transition duration-150 ease-in-out text-white bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                LET'S CHAT
              </a>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Leave us Complain
              </h3>
              <p class="text-gray-600 mb-4">
                we are here to resolved your problems
              </p>
              <a
                href={WHATSAPP_COMPLAINT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-6 font-semibold rounded-md transition duration-150 ease-in-out text-white bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                Complain
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
