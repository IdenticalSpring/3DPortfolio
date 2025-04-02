import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function EyeModel() {
  const group = useRef();
  const { scene } = useGLTF("/assets/ballfinal.glb", true);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const initialRotationRef = useRef({ x: 0, y: 0 });

  const defaultRotation = { x: -Math.PI / 6, y: Math.PI / 5 };

  useEffect(() => {
    if (group.current) {
      group.current.rotation.x = defaultRotation.x;
      group.current.rotation.y = defaultRotation.y;
    }
  }, []);

  useFrame(() => {
    if (!isDragging && group.current) {
      group.current.rotation.x += (defaultRotation.x - group.current.rotation.x) * 0.1;
      group.current.rotation.y += (defaultRotation.y - group.current.rotation.y) * 0.1;
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
      position={[0.2, 0.2, 0]}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp}
    >
      <primitive object={scene} scale={[1.8, 1.8, 1.8]} />
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
