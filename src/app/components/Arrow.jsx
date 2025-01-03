/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Pun1shR (https://sketchfab.com/pun1shr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/arrow-bd395aa897ad45a19505f63d82519df3
Title: arrow
*/

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

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: c0ntra5t (https://sketchfab.com/c0ntr5t)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/arrow-3d-42d651db7fbd4dc59ade13f72fefb02c
Title: ARROW 3D
*/
// "use client";
// import React, { useRef, useEffect } from "react";
// import { useGLTF } from "@react-three/drei";
// import gsap from "gsap";
// import { MeshStandardMaterial } from "three";

// export default function Arrow(props) {
//   const { nodes, materials } = useGLTF("models/arrow_3d.glb");
//   const targetRef = useRef();
//   useEffect(() => {
//     if (targetRef.current) {
//       gsap.to(targetRef.current.position, {
//         y: targetRef.current.position.y + 0.5,
//         duration: 1.5,
//         repeat: -1,
//         yoyo: true,
//       });
//     }
//   }, []);

//   if (materials["Scene_-_Root"]) {
//     materials["Scene_-_Root"].color.set("lightblue");
//   }

//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         geometry={nodes.Arrow__0.geometry}
//         material={materials["Scene_-_Root"]}
//         ref={targetRef}
//         rotation={[0, Math.PI / 5, 0]}
//         scale={0.2}
//         position={[7, -8, 1.5]}
//       />
//     </group>
//   );
// }

// useGLTF.preload("models/arrow_3d.glb");
