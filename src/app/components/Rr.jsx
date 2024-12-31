/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/animations/rr.glb 
*/

import React from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export default function Rr(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF("/models/animations/rr.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="Blockman">
            <skinnedMesh
              name="Cube008"
              geometry={nodes.Cube008.geometry}
              material={materials.m_body}
              skeleton={nodes.Cube008.skeleton}
            />
            <skinnedMesh
              name="Cube008_1"
              geometry={nodes.Cube008_1.geometry}
              material={materials.m_face}
              skeleton={nodes.Cube008_1.skeleton}
            />
          </group>
        </group>
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/animations/rr.glb");