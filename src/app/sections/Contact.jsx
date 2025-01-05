"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      toast.success("Thank you for your message 😃", {
        position: "top-center",
        autoClose: 2000,
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      toast.error("Failed to send your message. Please try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <section className=" c-space my-20" id="contact">
      <ToastContainer />
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container">
          <h3 className="text-4xl font-bold text-center text-white-600 mb-4 mt-4">
            Let's talk
          </h3>
          <p className="text-lg text-white-600">
            Looking to build a new website, improve your existing platform, or
            bring a unique project to life, I’m here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col space-y-7"
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
                rows={
                  windowWidth <= 375
                    ? 1
                    : windowWidth > 375 && windowWidth <= 540
                    ? 2
                    : windowWidth > 540 && windowWidth <= 1000
                    ? 3
                    : windowWidth > 1001 && windowWidth <= 1050
                    ? 4
                    : windowWidth > 1051 && windowWidth <= 1200
                    ? 5
                    : windowWidth > 1201 && windowWidth <= 1240
                    ? 7
                    : 10
                }
                className="field-input resize-none w-full"
                placeholder="Hi, I'm interested in..."
              />
            </label>

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
