// "use client";

// import Navbar from "./sections/Navbar";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
// import Testimonials from "./sections/Testimonials";
// import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";
// import Experience from "./sections/Experience";

// export default function Home() {
//   return (
//     <main className="max-w-7xl mx-auto relative">
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Testimonials />
//       <Experience />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

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
