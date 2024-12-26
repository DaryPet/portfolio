// import { useGLTF } from "@react-three/drei";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const Target = (props) => {
//   const targetRef = useRef();
//   const { scene } = useGLTF(
//     "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
//   );

//   useGSAP(() => {
//     gsap.to(targetRef.current.position, {
//       y: targetRef.current.position.y + 0.5,
//       duration: 1.5,
//       repeat: -1,
//       yoyo: true,
//       zIndex: 20,
//     });
//   });

//   return (
//     <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5} >
//       <primitive object={scene} />
//     </mesh>
//   );
// };

// export default Target;
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = ({ renderOrder = 9999, depthTest = false, ...props }) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  // Обходим всю сцену и выставляем нужные флаги на каждом меше
  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.renderOrder = renderOrder;
        obj.material.depthTest = depthTest === false ? false : true;
        obj.material.depthWrite = false;
        obj.material.transparent = true;
      }
    });
  }, [scene, renderOrder, depthTest]);

  // GSAP-анимация
  useGSAP(() => {
    if (!targetRef.current) return;
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group
      ref={targetRef}
      {...props}
      rotation={[0, Math.PI / 5, 0]}
      scale={1.5}
    >
      {/* Вместо <mesh> оборачиваем всё в <group>, чтобы не перезаписывать меши внутри */}
      <primitive object={scene} />
    </group>
  );
};

export default Target;
