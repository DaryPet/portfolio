// import { Suspense, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

// // import Developer from "../components/Developer";
// import CanvasLoader from "../components/Loader";
// import { workExperiences } from "../constants/index";

// const Experience = () => {
//   return (
//     <section className="c-space my-20">
//       <div className="w-full text-white-600">
//         <h3 className="head-text"> My work Experience</h3>
//       </div>
//       <div className="work-container">
//         <div className="work-canvas">
//           <Canvas></Canvas>
//         </div>
//       </div>
//       <div className="work-content">
//         <div className="sm:py-10 py-5 sm:px-5 px-2.5">
//           {workExperiences.map(
//             ({ id, name, pos, duration, title, anomation, icon }) => (
//               <div
//                 key={id}
//                 onClick={() => setAnimationName(item.animation.toLowerCase())}
//                 onPointerOver={() =>
//                   setAnimationName(item.animation.toLowerCase())
//                 }
//                 onPointerOut={() => setAnimationName("idle")}
//                 className="work-content_container group"
//               >
//                 <div className="flex flex-col h-full justify-start items-center py-2">
//                   <div className="work-content_logo">
//                     <img className="w-full h-full" src={icon} alt="" />
//                   </div>

//                   <div className="work-content_bar" />
//                 </div>

//                 <div className="sm:p-5 px-2.5 py-5">
//                   <p className="font-bold text-white-800">{name}</p>
//                   <p className="text-sm mb-5">
//                     {pos} -- <span>{duration}</span>
//                   </p>
//                   <p className="group-hover:text-white transition-all ease-in-out duration-500">
//                     {title}
//                   </p>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Experience;
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// import Developer from "../components/Developer";
import CanvasLoader from "../components/Loader";
import { workExperiences } from "../constants/index";
// const Developer = dynamic(() => import("../components/Developer"), {
//   ssr: false,
// });
// const Rr = dynamic(() => import("../components/Rr"), {
//   ssr: false,
// });
const Chunk = dynamic(() => import("../components/Chunk"), {
  ssr: false,
});

const Experience = () => {
  const [animationName, setAnimationName] = useState("running");

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={5} />
              <spotLight position={[8, 8, 10]} angle={0.3} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                {/* <Developer
                  position-y={-2.5}
                  scale={3}
                  animationName={animationName}
                /> */}
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
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("sitting")}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
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
