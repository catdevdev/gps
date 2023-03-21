import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Mars = () => {
  const planet = useRef();

  // @ts-ignore
  useFrame(() => (planet.current.rotation.y += 0.0002));

  return (
    <mesh
      // @ts-ignore
      ref={planet}
      visible
      position={[0, 0, 0]}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#00bfff" />
    </mesh>
    // <mesh>
    //     <sphereGeometry args={[1, 32, 32]} />
    //     <meshStandardMaterial color="#E1DC59" />
  );
};

export default Mars;
