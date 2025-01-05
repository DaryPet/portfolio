import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Arrow({
  renderOrder = 9999,
  depthTest = false,
  ...props
}) {
  const { nodes, materials } = useGLTF("models/arrow.glb");
  const targetRef = useRef();
  useEffect(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0.099, -Math.PI / 2]} scale={2.5}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["tex-global"]}
            ref={targetRef}
            rotation={[0, Math.PI / 10, 0]}
            scale={0.2}
            renderOrder={renderOrder}
            material-transparent
            material-depthTest={depthTest}
            material-depthWrite={false}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/arrow.glb");
