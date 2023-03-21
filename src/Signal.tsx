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

function Signal(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // @ts-ignore
  useFrame((state, delta) => {
    if (
      props.isStarted &&
      props.distanceToSatellite * 10 > ref.current.scale.x
    ) {
      ref.current.scale.x += delta * 2.5;
      ref.current.scale.y += delta * 2.5;
      ref.current.scale.z += delta * 2.5;
    }
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      position={[0, 0, 0]}
    >
      <Html>
        <div style={{ color: "white", fontSize: 32 }}>
          {props.satelliteName}
        </div>
      </Html>
      <sphereBufferGeometry args={[0.1, 15, 15]} />
      <meshStandardMaterial opacity={0.5} transparent color={"red"} />
    </mesh>
  );
}

export { Signal };
