"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";
import Rings from "../components/Rings.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
import Target from "../components/Target.jsx";
import Arrow from "../components/Arrow";
import CanvasLoader from "../components/Loader";
import HeroCamera from "../components/HeroCamera";
import { calculateSizes } from "../constants/index";
import dynamic from "next/dynamic";
import OfficeA from "../components/OfficeA";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ minWidth: 441, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <h2 className="md:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Welcome to my world
        </h2>
        <p className="hero_tag text-gray_gradient">Your Vision, My Code.</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <OfficeA
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI / 2, 0]}
              />
            </HeroCamera>

            <group>
              <Target
                position={sizes.targetPosition}
                renderOrder={9999}
                depthTest={false}
              />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Arrow
                position={sizes.arrowPosition}
                renderOrder={9999}
                depthTest={false}
              />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[-10, -10, 20]} intensity={3.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-1 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
