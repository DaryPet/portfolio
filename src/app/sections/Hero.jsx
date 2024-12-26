// "use client"; // Указание, что это клиентский компонент

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

// function Portfolio() {
//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <OrbitControls />
//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color="orange" />
//       </mesh>
//     </Canvas>
//   );
// }

// export default Portfolio;

"use client";
import { Leva, useControls } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

// import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import ReactLogo from "../components/ReactLogo";
import Button from "../components/Button";
import CanvasLoader from "../components/Loader";
import HeroCamera from "../components/HeroCamera";
import { calculateSizes } from "../constants/index.js";
import HackerRoom from "../components/HackerRoom.jsx";
import Arrow from "../components/Arrow";
import Target from "../components/Target.jsx";

const Hero = () => {
  // const controls = useControls({
  //   schemaOrFolderName: "HackerRoom",
  //   settingsOrDepsOrSchema: {
  //     rotationX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //   },
  // });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          {/* Darya Petrenko <span className="waving-hand">👋</span> */}
          Darya Petrenko
        </p>
        <p className="hero_tag text-gray_gradient ">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0 my-20">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            {/* <Leva hidden />  */}
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            {/* <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group> */}
            <group>
              <Target position={sizes.targetPosition} />
              <Arrow position={sizes.arrowPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute  bottom-0 left-0 right-0 w-full z-10 c-space">
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
