import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";
import { ContactShadows, OrbitControls, Sky, Stars } from "@react-three/drei";
import Mars from "./Mars";
import { Card, Container, Form, InputGroup } from "react-bootstrap";
import { Device } from "./Device";
import "bootstrap/dist/css/bootstrap.min.css";
import * as math from "mathjs";

function App() {
  const [count, setCount] = useState(0);

  // const [
  //   [devicePositionX, devicePositionY, devicePositionZ],
  //   setDevicePosition,
  // ] = useState([0.6, 0.6, 0.6]);

  const [devicePositionX, setDevicePositionX] = useState(0.6);
  const [devicePositionY, setDevicePositionY] = useState(0.6);
  const [devicePositionZ, setDevicePositionZ] = useState(0.6);

  const [distanceToSatellite1, setDistanceToSatellite1] = useState(2.5);
  const [distanceToSatellite2, setDistanceToSatellite2] = useState(2);
  const [distanceToSatellite3, setDistanceToSatellite3] = useState(3);

  ////
  ////
  ////
  ////
  ////

  // const p1 = [1, 2, 3]; // [x, y, z] coordinates of the first point
  // const p2 = [4, 5, 6]; // [x, y, z] coordinates of the second point
  // const p3 = [7, 8, 9]; // [x, y, z] coordinates of the third point
  // const d1 = 2; // distance from the unknown point to the first point
  // const d2 = 3; // distance from the unknown point to the second point
  // const d3 = 4; // distance from the unknown point to the third point

  // const eq1 = `(${p1[0]} - x)**2 + (${p1[1]} - y)**2 + (${p1[2]} - z)**2 = ${
  //   d1 ** 2
  // }`;
  // const eq2 = `(${p2[0]} - x)**2 + (${p2[1]} - y)**2 + (${p2[2]} - z)**2 = ${
  //   d2 ** 2
  // }`;
  // const eq3 = `(${p3[0]} - x)**2 + (${p3[1]} - y)**2 + (${p3[2]} - z)**2 = ${
  //   d3 ** 2
  // }`;

  // const result = math.evaluate([eq1, eq2, eq3], ["x", "y", "z"]);

  // console.log(result); // { x: 5, y: 6, z: 7 }

  return (
    <Container style={{ width: 900 }} className="mt-5 p-5 border shadow">
      <h3 className="mb-3">Calc position of Satellites</h3>
      <Canvas style={{ width: "90%", height: 500, margin: "0 auto" }}>
        <Stars />
        {/* <Sky></Sky> */}
        <Device
          satelliteName="device"
          position={[devicePositionX, devicePositionY, devicePositionZ]}
        />
        <Box
          satelliteName="#1"
          position={[
            +distanceToSatellite1 + +devicePositionX,
            0 + +devicePositionY,
            0 + +devicePositionZ,
          ]}
        />
        <Box
          satelliteName="#2"
          position={[
            0 + +devicePositionX,
            +distanceToSatellite2 + +devicePositionY,
            0 + +devicePositionZ,
          ]}
        />
        <Box
          satelliteName="#3"
          position={[
            0 + +devicePositionX,
            0 + +devicePositionY,
            +distanceToSatellite3 + +devicePositionZ,
          ]}
        />
        <Mars />
        <ambientLight />
        <axesHelper args={[10]} />
        <OrbitControls></OrbitControls>
        <ContactShadows></ContactShadows>
        <pointLight position={[10, 10, 10]} />
        <color attach="background" args={["black"]} />
      </Canvas>
      <InputGroup className="mt-5 shadow">
        <InputGroup.Text id="basic-addon1">device position X</InputGroup.Text>
        <Form.Control
          onChange={(e) => setDevicePositionX(e.target.value)}
          value={devicePositionX}
          placeholder="device position X"
          aria-label="device position X"
        />
        <InputGroup.Text id="basic-addon2">device position Y</InputGroup.Text>
        <Form.Control
          onChange={(e) => setDevicePositionY(e.target.value)}
          value={devicePositionY}
          placeholder="device position Y"
          aria-label="device position Y"
        />
        <InputGroup.Text id="basic-addon3">device position Z</InputGroup.Text>
        <Form.Control
          onChange={(e) => setDevicePositionZ(e.target.value)}
          value={devicePositionZ}
          placeholder="device position Z"
          aria-label="device position Z"
        />
      </InputGroup>
      <InputGroup className="mt-3 shadow">
        <InputGroup.Text id="basic-addon1">
          distance to satellite №1
        </InputGroup.Text>
        <Form.Control
          onChange={(e) => setDistanceToSatellite1(e.target.value)}
          value={distanceToSatellite1}
          placeholder="distance to satellite #1"
          aria-label="distance to satellite #1"
        />
        <InputGroup.Text id="basic-addon2">
          distance to satellite #2
        </InputGroup.Text>
        <Form.Control
          onChange={(e) => setDistanceToSatellite2(e.target.value)}
          value={distanceToSatellite2}
          placeholder="distance to satellite #2"
          aria-label="distance to satellite #2"
        />
        <InputGroup.Text id="basic-addon3">
          distance to satellite #3
        </InputGroup.Text>
        <Form.Control
          onChange={(e) => setDistanceToSatellite3(e.target.value)}
          value={distanceToSatellite3}
          placeholder="distance to satellite #3"
          aria-label="distance to satellite #3"
        />
      </InputGroup>
      <h4 className="mt-3 mb-3">Calculation Results:</h4>
      <div className="mt-3 mb-5" style={{ display: "flex", gap: 24 }}>
        <Card style={{ display: "flex", alignItems: "center" }}>
          <Card.Title>Satellite #1</Card.Title>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: "blue",
            }}
          />
          <h5 className="mt-3">
            x: {+devicePositionX + +distanceToSatellite1}, y: {devicePositionY},
            z: {devicePositionZ}
          </h5>
        </Card>
        <Card style={{ display: "flex", alignItems: "center" }}>
          <Card.Title>Satellite #2</Card.Title>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: "blue",
            }}
          />
          <h5 className="mt-3">
            x: {devicePositionX}, y: {+devicePositionY + +distanceToSatellite2},
            z: {devicePositionZ}
          </h5>
        </Card>
        <Card style={{ display: "flex", alignItems: "center" }}>
          <Card.Title>Satellite #3</Card.Title>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: "blue",
            }}
          />
          <h5 className="mt-3">
            x: {devicePositionX}, y: {devicePositionY}, z:{" "}
            {+devicePositionZ + +distanceToSatellite3}
          </h5>
        </Card>
      </div>
      <h4 className="mt-3 mb-3">Cals position of Device (trilateration)</h4>
      <Canvas style={{ width: "90%", height: 500, margin: "0 auto" }}>
        <Stars />
        {/* <Sky></Sky> */}
        <Device
          satelliteName="device"
          position={[devicePositionX, devicePositionY, devicePositionZ]}
        />
        <Box
          satelliteName="#1"
          position={[
            +distanceToSatellite1 + +devicePositionX,
            0 + +devicePositionY,
            0 + +devicePositionZ,
          ]}
          isStarted={true}
          distanceToSatellite={distanceToSatellite1}
        />
        <Box
          satelliteName="#2"
          position={[
            0 + +devicePositionX,
            +distanceToSatellite2 + +devicePositionY,
            0 + +devicePositionZ,
          ]}
          isStarted={true}
          distanceToSatellite={distanceToSatellite2}
        />
        <Box
          satelliteName="#3"
          position={[
            0 + +devicePositionX,
            0 + +devicePositionY,
            +distanceToSatellite3 + +devicePositionZ,
          ]}
          isStarted={true}
          distanceToSatellite={distanceToSatellite3}
        />
        <Mars />
        <ambientLight />
        <axesHelper args={[10]} />
        <OrbitControls></OrbitControls>
        <ContactShadows></ContactShadows>
        <pointLight position={[10, 10, 10]} />
        <color attach="background" args={["black"]} />
      </Canvas>
      <h4 className="mt-3 mb-3">Calculation Results:</h4>
      <Card style={{ display: "flex", alignItems: "center" }}>
        <Card.Title>Device #3</Card.Title>
        <div
          style={{
            width: 25,
            height: 25,
            borderRadius: "50%",
            background: "red",
          }}
        />
        <h5 className="mt-3">
          x: {devicePositionX}, y: {devicePositionY}, z: {devicePositionZ}
        </h5>
      </Card>
    </Container>
  );
}

export default App;
