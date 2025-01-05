"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF, useVideoTexture, useAnimations } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Computer(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/screen.glb");
  const { actions } = useAnimations(animations, group);

  const txt = useVideoTexture(
    props.texture ? props.texture : "/textures/project/tax.mp4",
    {
      loop: true,
      muted: true,
      autoplay: true,
      crossOrigin: "Anonymous",
    }
  );

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
    if (materials.material) {
      materials.material.color.set("#D3D3D3"); // Устанавливаем цвет светло-серый
    }
  }, [txt, materials.material]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, [txt]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, 2, 0]}
      scale={[2.5, 2.5, 2.5]}
    >
      {/* Экран с видеотекстурой */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        position={[0.014, 0.009, 0.272]}
        scale={[0.848, 0.475, 0.001]}
        rotation={[0, 0, 0]}
      >
        <meshBasicMaterial map={txt} toneMapped={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material}
        position={[0.443, 0.01, 0.279]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0, 0.002, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.material}
        position={[-0.417, 0.01, 0.279]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0, 0.002, 0]}
      />
    </group>
  );
}

useGLTF.preload("models/screen.glb");

// "use client";

// import React, { useRef, useEffect } from "react";
// import { useGLTF, useVideoTexture } from "@react-three/drei";
// import gsap from "gsap";

// export default function Computer(props) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/models/screen.glb");

//   // Подключение видеотекстуры
//   const txt = useVideoTexture(
//     props.texture || "/textures/project/tax.mp4", // Используем видео из пропсов или дефолтное
//     {
//       loop: true,
//       muted: true,
//       autoplay: true,
//       crossOrigin: "Anonymous",
//     }
//   );

//   // Настройка текстуры
//   useEffect(() => {
//     if (txt) txt.flipY = true;
//     materials.material.color.set("#FFFFFF");
//   }, [txt]);

//   // Анимация с GSAP
//   useEffect(() => {
//     gsap.to(group.current.rotation, {
//       y: 0,
//       from: Math.PI / 2,
//       duration: 1,
//       ease: "power3.out",
//     });
//   }, []);

//   return (
//     <group
//       ref={group}
//       {...props}
//       dispose={null}
//       position={[0, 2, 0]}
//       scale={[2.5, 2.5, 2.5]}
//     >
//       {/* Экран с видеотекстурой */}
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_7.geometry}
//         position={[0.014, 0.009, 0.272]}
//         scale={[0.848, 0.475, 0.001]}
//       >
//         <meshBasicMaterial map={txt} toneMapped={false} />
//       </mesh>
//       {/* Остальные элементы */}
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_5.geometry}
//         material={materials.material}
//         position={[0.443, 0.01, 0.279]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[0.1, 0.002, 0.1]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_9.geometry}
//         material={materials.material}
//         position={[-0.417, 0.01, 0.279]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={[0.1, 0.002, 0.1]}
//       />
//     </group>
//   );
// }

// // Оставляем предзагрузку модели
// useGLTF.preload("/models/screen.glb");
