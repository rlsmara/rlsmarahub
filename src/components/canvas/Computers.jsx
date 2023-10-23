import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; // Help to draw on canvas

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./old_pc/scene.gltf');

  return (
    <mesh>
      <ambientLight color="#5940FF" intensity={0.3} />
      <hemisphereLight color="#D1CAFF" groundColor="#5940FF" intensity={2} />
      <pointLight color="#5940FF" intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.25 : 1.5}
        position={isMobile ? [0, -1.75, 0] : [0, -2.75, 0]}
        rotation={[0, 0, -0.05]}
      />
    </mesh>
  )
}


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add event listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [])


  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;