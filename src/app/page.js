"use client";
import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./sections/Navbar"));
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Experience = lazy(() => import("./sections/Experience"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Experience />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
