"use client";
import dynamic from "next/dynamic";
import { Suspense, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const Chunk = dynamic(() => import("../components/Chunk"), { ssr: false });
const CanvasLoader = dynamic(() => import("../components/Loader"), {
  ssr: false,
});

import { workExperiences } from "../constants/index";

const Experience = () => {
  const [animationName, setAnimationName] = useState("running");

  const handleAnimation = useCallback((name) => {
    setAnimationName(name.toLowerCase());
  }, []);

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <h2 className="head-text">My Work Experience</h2>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas
              shadows
              dpr={[1, 1.5]}
              gl={{ antialias: false }}
              camera={{ position: [0, 0, 5], fov: 75 }}
            >
              <ambientLight intensity={0.5} />
              <spotLight
                position={[8, 8, 10]}
                angle={0.3}
                penumbra={1}
                intensity={0.8}
              />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Chunk
                  position-y={-2.5}
                  scale={1}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleAnimation(item.animation)}
                  onPointerOver={() => handleAnimation(item.animation)}
                  onPointerOut={() => handleAnimation("sitting")}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img
                        className="w-full h-full"
                        src={item.icon}
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="work-content_bar" />
                  </div>
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} — <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
