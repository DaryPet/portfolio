import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function OfficeA(props) {
  const { nodes, materials } = useGLTF("/models/office.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.051, 0.743, 0.876]} rotation={[0, -0.736, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.M_Cactus_1024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.M_Cactus_1024}
          position={[0.01, 0.122, 0.014]}
        />
      </group>
      <group
        position={[-0.235, 1.321, 2.261]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.381}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[0.433, 0.031, -0.442]}
          rotation={[-0.02, -0.022, 0]}
        /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[-0.441, 0.037, 0.073]}
          rotation={[-0.032, 0.035, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[-0.583, 0.03, -0.495]}
          rotation={[-0.034, -0.059, -0.003]}
        />
      </group>
      <group
        position={[0.035, 0.743, 1.904]}
        rotation={[-Math.PI, 1.358, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials.M_TapeRecorder_1024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_71.geometry}
          material={materials.M_TapeRecorder_Tape_Rotors_Glass_1024}
        />
      </group>
      <group position={[-0.22, 2.009, 2.101]}>
        {/* <group position={[0.048, -0.008, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_79.geometry}
            material={materials.M_Vent_1024}
            rotation={[Math.PI / 3, 0, 0]}
          />
        </group> */}
        {/* <group position={[0.133, 0.004, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_85.geometry}
            material={materials.M_Vent_1024}
          />
          <group position={[-0.159, -0.004, 0]}></group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_87.geometry}
            material={materials.M_Vent_1024}
            position={[0, -0.114, 0]}
          />
        </group> */}
      </group>
      <group
        position={[0.996, 0.565, 0.619]}
        rotation={[-3.126, -1.002, -1.576]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_103.geometry}
          material={materials.M_Clipboard_Notepad_1024}
          position={[0.006, -0.034, 0.001]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.381}
        />
      </group>
      {/* <group position={[-0.039, 0.743, 1.563]} rotation={[0, 0.454, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_109.geometry}
          material={materials["M_Lamps_CCTV_2048.001"]}
        />
        <group position={[0, 0.061, 0]} rotation={[0, 0, 0.811]}>
          <group position={[0, 0.118, 0]} rotation={[0, 0, -0.976]}>
            <group position={[0, 0.279, 0]} rotation={[0, 0, -0.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_115.geometry}
                material={materials["M_Lamps_CCTV_2048.001"]}
              />
              <group position={[0, 0.366, 0]} rotation={[0, 0, -0.603]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_119.geometry}
                  material={materials["M_Lamps_CCTV_2048.001"]}
                  position={[0, 0.083, 0]}
                />
              </group> */}
      {/* </group>
          </group> */}
      {/* </group> */}
      {/* </group> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.M_Computer_2048}
        position={[0.488, 0.743, 0.925]}
        rotation={[0, 0.168, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.M_Computer_2048}
        position={[0.061, 0.743, 0.472]}
        rotation={[0, -0.387, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.M_Computer_2048}
        position={[0.103, 0.91, 0.502]}
        rotation={[0, -0.269, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.M_Filebox_1024}
        position={[-0.084, 0.743, 1.283]}
        rotation={[0, 1.531, 0]}
        scale={[1.096, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.M_Filebox_1024}
        position={[-0.075, 0.743, 1.398]}
        rotation={[-Math.PI, 1.512, -Math.PI]}
        scale={[1.096, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.M_Filebox_1024}
        position={[-0.084, 0.743, 1.281]}
        rotation={[0, 1.531, 0]}
        scale={[1.096, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.M_Filebox_1024}
        position={[-0.075, 0.743, 1.398]}
        rotation={[-Math.PI, 1.512, -Math.PI]}
        scale={[1.096, 1, 1]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.M_Office_PinBoard_Photo_Notepad_1024}
        position={[-0.034, 0.743, 1.116]}
        rotation={[Math.PI / 2, 0, -1.814]}
        scale={0.381}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_68.geometry}
        material={materials.M_Table_2048}
        position={[0.213, 0.006, 1.171]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_95.geometry}
        material={materials.Poster_1024}
        position={[-0.246, 1.568, 1.317]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.619, 0.309, 0.619]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_107.geometry}
        material={materials.M_OfficeStool_Bin_2048}
        position={[0.923, 0.008, 0.77]}
        rotation={[-Math.PI, -0.416, -Math.PI]}
        scale={[1.235, 1, 1.235]}
      />
    </group>
  );
}

useGLTF.preload("/models/office.glb");
