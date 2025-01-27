// "use client";

// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { useMediaQuery } from "react-responsive";
// import { PerspectiveCamera } from "@react-three/drei";
// import dynamic from "next/dynamic";
// import { calculateSizes } from "../constants/index";
// import CanvasLoader from "../components/Loader";
// import HeroCamera from "../components/HeroCamera";
// import Button from "../components/Button.jsx";
// import OfficeA from "../components/OfficeA";

// // const OfficeA = dynamic(() => import("../components/OfficeA"), {
// //   ssr: false,
// //   loading: () => <CanvasLoader />,
// // });

// const ReactLogo = dynamic(() => import("../components/ReactLogo"), {
//   ssr: false,
//   loading: () => <CanvasLoader />,
// });

// const Rings = dynamic(() => import("../components/Rings"), {
//   ssr: false,
//   loading: () => <CanvasLoader />,
// });

// const Arrow = dynamic(() => import("../components/Arrow"), {
//   ssr: false,
//   loading: () => <CanvasLoader />,
// });

// const Target = dynamic(() => import("../components/Target"), {
//   ssr: false,
//   loading: () => <CanvasLoader />,
// });

// const Hero = () => {
//   const isSmall = useMediaQuery({ maxWidth: 440 });
//   const isMobile = useMediaQuery({ minWidth: 441, maxWidth: 767 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

//   const sizes = calculateSizes(isSmall, isMobile, isTablet);

//   return (
//     <section className="min-h-screen w-full flex flex-col relative" id="home">
//       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
//         <h2 className="md:text-3xl text-xl font-medium text-white text-center animate-fadeIn">
//           Welcome to my world
//         </h2>
//         {/* <p className="hero_tag text-gray_gradient">Your Vision - My Code.</p> */}
//         <p className="hero_tag text-white animate-typing">
//           Your Vision - My Code.
//         </p>
//       </div>

//       <div className="w-full h-full absolute inset-0">
//         <Canvas dpr={[1, 2]} className="w-full h-full">
//           <Suspense fallback={<CanvasLoader />}>
//             <PerspectiveCamera makeDefault position={[0, 0, 30]} />

//             <HeroCamera isMobile={isMobile}>
//               <OfficeA
//                 scale={sizes.deskScale}
//                 position={sizes.deskPosition}
//                 rotation={[0, -Math.PI / 2, 0]}
//               />
//             </HeroCamera>

//             <group>
//               <Target
//                 position={sizes.targetPosition}
//                 renderOrder={9999}
//                 depthTest={false}
//               />
//               <ReactLogo position={sizes.reactLogoPosition} />
//               <Rings position={sizes.ringPosition} />
//               <Arrow
//                 position={sizes.arrowPosition}
//                 renderOrder={9999}
//                 depthTest={false}
//               />
//             </group>
//             <ambientLight intensity={0.8} />
//             <directionalLight position={[-10, -10, 20]} intensity={2.0} />
//           </Suspense>
//         </Canvas>
//       </div>

//       <div className="absolute bottom-1 left-0 right-0 w-full z-10 c-space">
//         <a href="#contact" className="w-fit">
//           <Button
//             name="Let's work together"
//             isBeam
//             containerClass="sm:w-fit w-full sm:min-w-96"
//           />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import dynamic from "next/dynamic";
import { calculateSizes } from "../constants/index";
import CanvasLoader from "../components/Loader";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button.jsx";
import OfficeA from "../components/OfficeA";

// Динамические импорты
const ReactLogo = dynamic(() => import("../components/ReactLogo"), {
  ssr: false,
  loading: () => <CanvasLoader />,
});
const Rings = dynamic(() => import("../components/Rings"), {
  ssr: false,
  loading: () => <CanvasLoader />,
});
const Arrow = dynamic(() => import("../components/Arrow"), {
  ssr: false,
  loading: () => <CanvasLoader />,
});
const Target = dynamic(() => import("../components/Target"), {
  ssr: false,
  loading: () => <CanvasLoader />,
});

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 639);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sizes = calculateSizes(isMobile, false, false);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
        <h2 className="md:text-3xl text-xl font-medium text-white text-center animate-fadeIn">
          Welcome to my world
        </h2>
        <p className="hero_tag text-gray_gradient animate-fadeIn">
          Your Vision - My Code.
        </p>
      </div>

      <div className="w-full h-full absolute inset-0 z-0">
        {isMobile ? (
          <img
            src="/assets/hero-mobile.jpg"
            alt="Hero Mobile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <Canvas dpr={[1, 2]} className="w-full h-full">
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
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Rings position={sizes.ringPosition} />
                <Arrow position={sizes.arrowPosition} />
              </group>
              <ambientLight intensity={0.8} />
              <directionalLight position={[-10, -10, 20]} intensity={2.0} />
            </Suspense>
          </Canvas>
        )}
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
