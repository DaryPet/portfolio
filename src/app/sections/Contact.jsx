"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: "Test Name",
          to_name: "Darya",
          from_email: "test@example.com",
          to_email: "d7akkord@gmail.com",
          message: "Test message",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setLoading(false);
      alert("Thank you for your message 😃");
      setForm({ name: "", email: "", message: "" });
      // formRef.current.reset();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <section className=" c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="text-4xl font-bold text-center text-white mb-4 mt-4">
            Let's talk
          </h3>
          <p className="text-lg text-white-600 mt-3">
            Looking to build a new website, improve your existing platform, or
            bring a unique project to life, I’m here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                // rows={5}
                rows={(() => {
                  const width = window.innerWidth;
                  if (width <= 375) return 3;
                  if (width > 375 && width <= 540) return 4;
                  return 5;
                })()}
                className="field-input resize-none w-full"
                placeholder="Hi, I'm interested in..."
              />
            </label>

            {/* <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              />
            </label> */}

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
