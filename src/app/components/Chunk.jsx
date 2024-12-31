import React, { useEffect, useRef, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

export default function Chunk(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/animations/chunk.glb");

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      const action = actions["Take 001"];
      if (action) {
        action.play();
        action.setLoop(THREE.LoopRepeat, Infinity);
      } else {
        console.warn("error");
      }
    }
  }, [actions]);

  return <primitive ref={group} object={clone} {...props} dispose={null} />;
}

useGLTF.preload("/models/animations/chunk.glb");
