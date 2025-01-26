// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import ShivaNataraja from "../components/ShivaNatraja";

export default function Hero() {
  return (
    <section className="c-space w-full h-full my-20">
      <div className="grid lg:grid-cols-10 grid-cols-1 w-full h-full py-10">
        {/* Text Section - 40% */}
        <div className="col-span-4 flex flex-col justify-center items-start p-10 shadow-xl">
          <h2 className="text-xl text-white mb-3">THE</h2>
          <h1 className="text-4xl text-white mb-5">SHIVA NATRAJA</h1>
          <ShivaNataraja />
        </div>

        {/* 3D Model Section - 60% */}
        <div className="col-span-6 bg-black">
          <h1>Hello</h1>
        </div>
      </div>
    </section>
  );
}
