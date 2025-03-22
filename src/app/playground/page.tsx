// "use client";

// import { useRef } from "react";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import * as THREE from "three";

// function SpinningModel() {
//   const modelRef = useRef<THREE.Group>(null);
//   const gltf = useLoader(GLTFLoader, "/avatar3d/avatar.gltf");

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <primitive object={gltf.scene} ref={modelRef} scale={1.5} position={[0, -1, 0]} />
//   );
// }

// export default function Playground() {
//   return (
//     <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
//       <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
//         <ambientLight intensity={1} />
//         <directionalLight position={[5, 5, 5]} />
//         <OrbitControls />
//         <SpinningModel />
//       </Canvas>
//     </div>
//   );
// }
