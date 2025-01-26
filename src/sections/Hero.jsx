import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { Vector3 } from "three";
import CanvasLoader from "../components/CanvasLoader.jsx";
import ShivaNataraja from "../components/ShivaNataraja.jsx";
import Model from "../components/Model.jsx";

function MovingPointLight() {
  const light = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    const mouseX = (state.mouse.x * viewport.width) / 2;
    const mouseY = (state.mouse.y * viewport.height) / 2;
    light.current.position.lerp(new Vector3(mouseX, mouseY, 5), 0.1); // Follow mouse with easing
  });

  return <pointLight ref={light} intensity={40} distance={3} />;
}

// import { DirectionalLightHelper } from "three";

// function DirectionalLightWithHelper() {
//   const { intensity, x, y, z } = useControls({
//     intensity: { value: 50, min: 0, max: 100 },
//     x: { value: 0, min: -10, max: 10 },
//     y: { value: 0, min: -10, max: 10 },
//     z: { value: -5, min: -10, max: 10 },
//   });

//   const directionalLight = useRef(null);
//
//   useHelper(directionalLight, DirectionalLightHelper, 2);
//   return (
//     <directionalLight
//       ref={directionalLight}
//       position={[x, y, z]}
//       intensity={intensity}
//     />
//   );
// }

export default function Hero() {
  return (
    <section className="c-space w-full h-screen pt-[80px]">
      <div className="grid lg:grid-cols-10 grid-cols-1 w-full h-full">
        {/* Text Section - 40% */}
        <div className="col-span-4 flex flex-col justify-center items-start p-10 shadow-xl bg-black">
          <h2 className="text-xl text-white mb-3 cursor-default">THE</h2>
          <h1 className="text-4xl text-white mb-5 cursor-default">
            SHIVA NATRAJA
          </h1>
          <ShivaNataraja />
        </div>

        {/* 3D Model Section - 60% */}
        <div className="col-span-6 bg-black h-full">
          <Canvas>
            <directionalLight intensity={20} position={[0, 7.6, -8.4]} />
            <MovingPointLight />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <Model />
              </Suspense>
            </Center>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
