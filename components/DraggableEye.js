// DraggableEye.js
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

/* 
  EyeModel: Loads your 3D eye and allows click‐and‐drag rotation.
  It scales the eye 120% larger.
*/
function EyeModel() {
  const group = useRef();
  // Ensure your file path is URL‑friendly (rename to remove spaces if needed)
  const { scene } = useGLTF("/assets/3d eye 2ball.glb");

  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const initialRotationRef = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (!isDragging && group.current) {
      group.current.rotation.x += (-group.current.rotation.x) * 0.1;
      group.current.rotation.y += (-group.current.rotation.y) * 0.1;
    }
  });

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    if (group.current) {
      initialRotationRef.current = {
        x: group.current.rotation.x,
        y: group.current.rotation.y,
      };
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !group.current) return;
    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;
    group.current.rotation.y = initialRotationRef.current.y + deltaX * 0.01;
    group.current.rotation.x = initialRotationRef.current.x + deltaY * 0.01;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <group
      ref={group}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp}
    >
      {/* Scale the eye 120% larger */}
      <primitive object={scene} scale={[1.2, 1.2, 1.2]} />
    </group>
  );
}

/*
  WavingRibbon: Builds a custom ribbon geometry along a quadratic Bézier curve.
  • p0 (start) and p2 (end) are fixed so the ribbon tapers (width zero) at both ends.
  • p1 (control) is influenced by the mouse (state.mouse from useFrame).
  • Each frame the vertices are updated so the curve “waves” non‑uniformly.
  • The geometry has two vertices per segment; the left vertices are colored blue and the right white.
*/
function WavingRibbon() {
  const meshRef = useRef();
  const segments = 20; // number of segments along the curve
  const maxWidth = 0.5; // maximum width at the center

  // Create a BufferGeometry that will hold our ribbon vertices and colors.
  const geometryRef = useRef(new THREE.BufferGeometry());
  const positions = new Float32Array((segments + 1) * 2 * 3); // 2 vertices per segment, each 3 components
  const colors = new Float32Array((segments + 1) * 2 * 3);

  // Build indices for triangles between each segment.
  const indices = [];
  for (let i = 0; i < segments; i++) {
    const base = i * 2;
    indices.push(base, base + 1, base + 2);
    indices.push(base + 1, base + 3, base + 2);
  }
  geometryRef.current.setIndex(indices);
  geometryRef.current.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometryRef.current.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // Helper functions for a quadratic Bézier curve.
  function quadraticBezier(p0, p1, p2, t) {
    const oneMinusT = 1 - t;
    return new THREE.Vector3()
      .copy(p0)
      .multiplyScalar(oneMinusT * oneMinusT)
      .add(new THREE.Vector3().copy(p1).multiplyScalar(2 * oneMinusT * t))
      .add(new THREE.Vector3().copy(p2).multiplyScalar(t * t));
  }

  function quadraticBezierDerivative(p0, p1, p2, t) {
    return new THREE.Vector3()
      .subVectors(p1, p0)
      .multiplyScalar(2 * (1 - t))
      .add(new THREE.Vector3().subVectors(p2, p1).multiplyScalar(2 * t));
  }

  // Get a perpendicular vector given a tangent.
  function getPerpVector(tangent) {
    const up = new THREE.Vector3(0, 1, 0);
    let perp = new THREE.Vector3().crossVectors(tangent, up);
    if (perp.lengthSq() < 0.001) {
      perp = new THREE.Vector3(1, 0, 0);
    }
    return perp.normalize();
  }

  // In each frame, update the ribbon geometry.
  useFrame((state) => {
    const mouse = state.mouse; // normalized mouse coordinates in [-1, 1]
    // Define the curve's control points:
    const p0 = new THREE.Vector3(0, -0.5, 0);
    // p1 is influenced by the mouse, so the curve shifts with mouse movement.
    const p1 = new THREE.Vector3(mouse.x * 2, -2, mouse.y * 2);
    const p2 = new THREE.Vector3(0, -3, 0);

    // For each segment, compute the point on the curve and its derivative.
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      // Base point from the quadratic Bézier.
      const point = quadraticBezier(p0, p1, p2, t);
      // Add a varying sine offset for an irregular, waving effect.
      const noise = Math.sin(t * Math.PI * 5 + state.clock.getElapsedTime()) * 0.2 * (1 - t);
      point.x += noise;

      // Compute the tangent and a perpendicular vector.
      const tangent = quadraticBezierDerivative(p0, p1, p2, t).normalize();
      const perp = getPerpVector(tangent);
      // Tapering: width is zero at both ends and maximum in the middle.
      const width = maxWidth * Math.sin(Math.PI * t);
      // Compute left and right vertices.
      const left = new THREE.Vector3().copy(point).addScaledVector(perp, width / 2);
      const right = new THREE.Vector3().copy(point).addScaledVector(perp, -width / 2);

      // Update positions array.
      let indexLeft = i * 2 * 3;
      positions[indexLeft] = left.x;
      positions[indexLeft + 1] = left.y;
      positions[indexLeft + 2] = left.z;

      let indexRight = (i * 2 + 1) * 3;
      positions[indexRight] = right.x;
      positions[indexRight + 1] = right.y;
      positions[indexRight + 2] = right.z;

      // Assign vertex colors:
      // Left vertices: blue (0, 0, 1)
      colors[indexLeft] = 0.0;
      colors[indexLeft + 1] = 0.0;
      colors[indexLeft + 2] = 1.0;
      // Right vertices: white (1, 1, 1)
      colors[indexRight] = 1.0;
      colors[indexRight + 1] = 1.0;
      colors[indexRight + 2] = 1.0;
    }
    // Flag the attributes for update.
    geometryRef.current.attributes.position.needsUpdate = true;
    geometryRef.current.attributes.color.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} geometry={geometryRef.current}>
      <meshStandardMaterial
        vertexColors={true}
        transparent={true}
        opacity={0.7}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/*
  DraggableEye: Combines the draggable eye and the dynamic ribbon.
  The Canvas fills its parent container so that the EyeContainer in Section1 centers it.
*/
export default function DraggableEye() {
  return (
    <Canvas style={{ width: "150%", height: "150%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <EyeModel />
      {/* <WavingRibbon /> */}
    </Canvas>
  );
}
