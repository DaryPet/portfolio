// "use client";

// import React, { useEffect, useRef } from "react";
// import { useGraph } from "@react-three/fiber";
// import { useGLTF, useAnimations, useFBX } from "@react-three/drei";

// export default function Developer({ animationName = "sitting", ...props }) {
//   const group = useRef();

//   const { nodes, materials } = useGLTF("/models/animations/me.glb");

//   const { animations: sittingAnimation } = useFBX(
//     "/models/animations/sitting.fbx"
//   );
//   const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
//   const { animations: runningAnimation } = useFBX(
//     "/models/animations/running.fbx"
//   );
//   const { animations: victoryAnimation } = useFBX(
//     "/models/animations/victory.fbx"
//   );

//   sittingAnimation[0].name = "sitting";
//   idleAnimation[0].name = "idle";
//   runningAnimation[0].name = "running";
//   victoryAnimation[0].name = "victory";

//   const { actions } = useAnimations(
//     [
//       sittingAnimation[0],
//       idleAnimation[0],
//       runningAnimation[0],
//       victoryAnimation[0],
//     ],
//     group
//   );

//   useEffect(() => {
//     if (actions && actions[animationName]) {
//       actions[animationName].reset().fadeIn(0.5).play();
//     } else {
//       console.error(`Animation "${animationName}" not found in actions.`);
//     }
//     return () => {
//       if (actions && actions[animationName]) {
//         actions[animationName].fadeOut(0.5);
//       }
//     };
//   }, [animationName, actions]);

//   return (
//     <group {...props} dispose={null} ref={group}>
//       <primitive object={nodes.Hips} />
//       <skinnedMesh
//         name="EyeLeft"
//         geometry={nodes.EyeLeft.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeLeft.skeleton}
//         morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="EyeRight"
//         geometry={nodes.EyeRight.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeRight.skeleton}
//         morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="Wolf3D_Head"
//         geometry={nodes.Wolf3D_Head.geometry}
//         material={materials.Wolf3D_Skin}
//         skeleton={nodes.Wolf3D_Head.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="Wolf3D_Teeth"
//         geometry={nodes.Wolf3D_Teeth.geometry}
//         material={materials.Wolf3D_Teeth}
//         skeleton={nodes.Wolf3D_Teeth.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Hair.geometry}
//         material={materials.Wolf3D_Hair}
//         skeleton={nodes.Wolf3D_Hair.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Glasses.geometry}
//         material={materials.Wolf3D_Glasses}
//         skeleton={nodes.Wolf3D_Glasses.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Top.geometry}
//         material={materials.Wolf3D_Outfit_Top}
//         skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
//         material={materials.Wolf3D_Outfit_Bottom}
//         skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
//         material={materials.Wolf3D_Outfit_Footwear}
//         skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Body.geometry}
//         material={materials.Wolf3D_Body}
//         skeleton={nodes.Wolf3D_Body.skeleton}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/models/animations/me.glb");
