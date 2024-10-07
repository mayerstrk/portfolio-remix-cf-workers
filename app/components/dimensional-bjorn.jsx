import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Box3, Vector3 } from "three";

export default function Model({ width = "100%", height = "400px" }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div style={{ width, height }}>Loading...</div>;
  }

  return (
    <div style={{ width, height }}>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls enableZoom={true} enablePan={false} />
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene() {
  const modelRef = useRef();
  const { nodes, materials } = useGLTF("/dimensional-bjorn.gltf");
  const { size } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      const box = new Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new Vector3());
      modelRef.current.position.sub(center);
    }
  }, []);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  const scale = Math.min(size.width, size.height) / 5000;

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 50]} />
      <group scale={scale}>
        <group ref={modelRef} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.arm_left.geometry}
            material={materials["Material.1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.arm_right.geometry}
            material={materials["Material.1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pc.geometry}
            material={materials["Material.1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.table.geometry}
            material={materials["Material.1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body.geometry}
            material={materials["Material.1"]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/dimensional-bjorn.gltf");
