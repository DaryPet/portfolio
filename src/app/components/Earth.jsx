"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Earth(props) {
  const { nodes, materials } = useGLTF("models/earth.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Material.001"]}
        position={[0, 1.078, 0]}
      />
    </group>
  );
}

useGLTF.preload("models/earth.glb");
