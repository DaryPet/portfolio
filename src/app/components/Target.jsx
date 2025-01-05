import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = ({ renderOrder = 9999, depthTest = false, ...props }) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.renderOrder = renderOrder;
        obj.material.depthTest = depthTest;
        obj.material.depthWrite = false;
        obj.material.transparent = true;
      }
    });
  }, [scene, renderOrder, depthTest]);

  useGSAP(() => {
    if (!targetRef.current) return;
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  }, [targetRef]);

  return (
    <group
      ref={targetRef}
      scale={1.5}
      {...props}
      rotation={[0, Math.PI / 5, 0]}
    >
      <primitive object={scene} />
    </group>
  );
};

export default Target;
