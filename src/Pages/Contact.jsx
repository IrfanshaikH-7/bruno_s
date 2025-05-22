import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/Contact.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_332sgls",
        "template_wubfn3t",
        form.current,
        "-CfMmUgKcwYhK5LwO"
      )
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send the message, please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b  pt-24 md:pt-40 from-[#1A0B1E] to-[#2D1B35] text-white">
      {/* Header would be included here */}

      {/* Main Content */}
      <div className="main-container py-8">
        <div className="max-w-6xl mx-auto py-6">
          <h1 className="text-6xl font-afacad font-bold mb-6 text-[#FFFFFF] text-center">
            Contact Us
          </h1>

          <p className="text-xl font-afacad text-center text-[#FBE5D8] mb-12 max-w-4xl mx-auto">
            Please tell us a little more about yourself and your organization so
            that we can recommend the language-learning solution best suited to
            your needs.
          </p>

          <div className="flex font-afacad flex-col rounded-3xl overflow-hidden bg-[#000000] lg:flex-row gap-8">
            {/* Image on left - only shown on larger screens */}
            <div className="hidden lg:block lg:w-1/2 h-[640px] relative">
              <img
                src={image}
                alt="Contact illustration"
                className="w-full h-full object-cover"
              />
              {/* Blurred black overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent backdrop-blur-xs"></div>
            </div>

            {/* Form on right */}
            <div className="w-full lg:w-1/2 rounded-3xl">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-[#000000] rounded-2xl p-8 shadow-lg h-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-afacad text-xl font-medium mb-2"
                    >
                      First Name<span className="text-[#532959]">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Sam"
                      className="w-full bg-[#080808] font-afacad rounded-lg px-4 py-3 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xl font-afacad font-medium mb-2"
                    >
                      Last Name<span className="text-[#532959]">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Klin"
                      className="w-full bg-[#080808] font-afacad rounded-lg px-4 py-3 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-afacad text-xl font-medium mb-2"
                    >
                      Email<span className="text-[#532959]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="sam12@gmail.com"
                      className="w-full bg-[#080808] font-afacad rounded-lg px-4 py-3 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-afacad text-xl font-medium mb-2"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91"
                      className="w-full bg-[#080808] font-afacad rounded-lg px-4 py-3 focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block font-afacad text-xl font-medium mb-2"
                    >
                      Subject<span className="text-[#532959]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject of your message"
                      className="w-full bg-[#080808] font-afacad rounded-lg px-4 py-3 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block font-afacad text-xl font-medium mb-2"
                    >
                      Message<span className="text-[#532959]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Write here..."
                      className="w-full bg-[#080808] font-afacad rounded-lg px-4 py-3 focus:outline-none"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-afacad bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-[#FFFFFF] rounded-lg px-8 py-3 font-medium hover:from-[#5d2f63] hover:via-[#8d5674] hover:to-[#5d2f63] transition-all shadow-lg hover:shadow-purple-900/30 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer would be included here */}
    </div>
  );
};

export default Contact;
