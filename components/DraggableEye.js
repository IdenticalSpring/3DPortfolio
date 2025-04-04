import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function EyeModel() {
  const group = useRef();
  const { scene } = useGLTF("/assets/lan cuoi roi thoi.glb", true);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position with correct vertical orientation
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1 // Keep this negative sign
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (group.current) {
      // Adjusted vertical rotation calculation
      const targetYRotation = mouse.current.x * 0.5;
      const targetXRotation = -mouse.current.y * 0.3; // Added negative sign here

      group.current.rotation.y += (targetYRotation - group.current.rotation.y) * 0.1;
      group.current.rotation.x += (targetXRotation - group.current.rotation.x) * 0.1;
    }
  });

  return (
    <group ref={group} position={[0.2, 0.2, 0]}>
      <primitive object={scene} scale={[1.5, 1.5, 1.5]} />
    </group>
  );
}
export default function DraggableEye() {
  return (
    <Canvas style={{ width: "100vw", height: "100vw" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <EyeModel />
    </Canvas>
  );
}