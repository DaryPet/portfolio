import Image from "next/image";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Hero";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      {/* <Hero /> */}
      <Portfolio />
    </main>
  );
}
