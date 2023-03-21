import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Html,
  OrbitControls,
  Sky,
  Stars,
} from "@react-three/drei";

function Device(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // @ts-ignore
  //   useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      position={props.position}
    >
      <Html>
        <div style={{ color: "white", fontSize: 32 }}>
          {props.satelliteName}
        </div>
        <div style={{ color: "white", fontSize: 14, width: 150 }}>
          x: {props.position[0]}, y: {props.position[1]}, z: {props.position[2]}
        </div>
      </Html>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

export { Device };
