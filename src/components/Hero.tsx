import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import SpeedParticles from "./SpeedParticles";
import { Button } from "./ui/button";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth transform values
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "4px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden text-white scroll-smooth"
    >
      {/* Star Background */}
      <div className="absolute inset-0 z-0 bg-[url('/stars.svg')] bg-cover bg-center animate-pulse opacity-30" />

      {/* Optional Particles */}
      <SpeedParticles />

      {/* Scroll Animation Wrapper */}
      <motion.div
        style={{ y, scale, filter: blur, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center will-change-transform"
      >
        {/* Images Container */}
        <div className="w-screen h-screen relative z-50 flex items-center justify-center overflow-hidden">
          {/* Back image */}
          <img
            src="/HomePage/HQ-GLOW-RED.png"
            alt="Background"
            className="absolute w-3/4 h-3/4 object-contain mix-blend-screen opacity-90 z-30 translate-y-[-70px]"
          />

          {/* Front image */}
          <img
            src="/HomePage/car2.png"
            alt="Foreground Car"
            className="absolute w-3/4 h-3/4 max-w-none object-contain opacity-90 z-20"
          />
          <motion.img
  src="/HomePage/driver2.png"
  alt="Driver"
  className="absolute w-1/3 h-1/3 max-w-none object-contain z-40"
  animate={{ y: [-90, -70, -90] }} // move up and down
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>


          {/* Buttons on top of the car */}
          <div className="absolute top-[65%] z-30 flex flex-col gap-4 items-center">
            <Button
              variant="racing"
              size="xl"
              className="min-w-48 animate-glow-pulse"
            >
              REGISTER NOW
            </Button>
            <Button
  variant="neon"
  size="xl"
  className="min-w-48 relative overflow-hidden font-bold text-lg text-white border-2 border-red-500 shadow-[0_0_10px_red] hover:scale-105 transition-transform"
>
  {/* Checkered background */}
  <span className="absolute inset-0 bg-[linear-gradient(45deg,#fff_25%,#000_25%,#000_50%,#fff_50%,#fff_75%,#000_75%,#000_100%)] bg-[length:20px_20px] opacity-60" />

  {/* Overlay for better text contrast */}
  <span className="absolute inset-0 bg-black/30" />

  {/* Button text */}
  <span className="relative z-10">LEARN MORE</span>
</Button>

          </div>
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 z-5 pointer-events-none opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{ top: `${i * 5}%` }}
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Stars } from "@react-three/drei";
// import CountdownTimer from "./CountdownTimer";
// import SpeedParticles from "./SpeedParticles";
// import { Button } from "@/components/ui/button";

// const Hero = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen w-full overflow-hidden bg-background"
//     >
//       {/* Lightweight 3D Stars Background */}
//       <div className="absolute inset-0 z-0">
//         <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
//           <Stars
//             radius={200}
//             depth={30}
//             count={2000}
//             factor={3}
//             fade
//             speed={0.8}
//           />
//         </Canvas>
//       </div>

//       {/* Optimized SpeedParticles Canvas */}
//       <SpeedParticles />

//       {/* Content */}
//       <motion.div
//         style={{ y, opacity }}
//         className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
//       >
//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-['Orbitron'] text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-widest text-slate-100 uppercase italic"
//         >
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#999] via-white to-[#999]">
//             HACK
//           </span>
//           <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#09f]">
//             GENESIS
//           </span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="text-lg md:text-xl font-rajdhani font-medium text-muted-foreground tracking-wide mt-4"
//         >
//           CODE FAST. BUILD SMART. WIN BIG.
//         </motion.p>

//         {/* Countdown Timer */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.2 }}
//           className="mt-8"
//         >
//           <CountdownTimer targetDate="2025-08-30T09:00:00" />
//         </motion.div>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.8 }}
//           className="mt-6 flex flex-col sm:flex-row gap-4"
//         >
//           <Button variant="racing" size="xl" className="min-w-48 animate-glow-pulse">
//             REGISTER NOW
//           </Button>
//           <Button variant="neon" size="xl" className="min-w-48">
//             LEARN MORE
//           </Button>
//         </motion.div>
//       </motion.div>

//       {/* Optional: Simple grid glow effect */}
//       <div className="absolute inset-0 z-5 pointer-events-none">
//         <div className="w-full h-full opacity-5">
//           {[...Array(15)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
//               style={{
//                 top: `${i * 6.5}%`,
//                 width: "100%"
//               }}
//               animate={{ opacity: [0.1, 0.3, 0.1], scaleX: [1, 1.2, 1] }}
//               transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// components/Hero.tsx
// import { useRef } from 'react';
// import {
//   motion,
//   useScroll,
//   useTransform,
//   LazyMotion,
//   domAnimation
// } from 'framer-motion';
// import CountdownTimer from './CountdownTimer';
// import SpeedParticles from './SpeedParticles';
// import { Button } from './ui/button';

// const Hero = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end start'],
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

//   return (
//     <LazyMotion features={domAnimation}>
//       <section
//         ref={containerRef}
//         id="hero"
//         className="relative h-screen w-full overflow-hidden bg-black text-white pt-20" // 👈 Add pt-20 to offset nav height
//       >
//         {/* Background Stars */}
//         <div className="absolute inset-0 z-0 bg-[url('/stars.svg')] bg-cover bg-center opacity-30 pointer-events-none" />

//         {/* Optional speed particles */}
//         <SpeedParticles />

//         {/* Scroll-Animated Content */}
//         <motion.div
//           style={{ y: translateY, opacity }}
//           className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center will-change-transform"
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="mb-8"
//           >
//             <h1 className="font-['Orbitron'] text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-widest uppercase italic leading-tight">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#999] via-white to-[#999]">
//                 HACK
//               </span>
//               <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#09f]">
//                 GENESIS
//               </span>
//             </h1>
//             <p className="mt-4 text-xl md:text-2xl font-rajdhani font-medium text-muted-foreground tracking-widest">
//               CODE FAST. BUILD SMART. WIN BIG.
//             </p>
//           </motion.div>

//           {/* Countdown */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="mb-12"
//           >
//             <CountdownTimer targetDate="2025-08-30T09:00:00" />
//           </motion.div>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="flex flex-col gap-4"
//           >
//             <Button variant="racing" size="xl" className="min-w-48 animate-glow-pulse">
//               REGISTER NOW
//             </Button>
//             <Button variant="neon" size="xl" className="min-w-48">
//               LEARN MORE
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Grid Lines */}
//         <div className="absolute inset-0 z-5 pointer-events-none opacity-10">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
//               style={{ top: `${i * 5}%` }}
//               animate={{ opacity: [0.05, 0.15, 0.05] }}
//               transition={{
//                 duration: 2,
//                 delay: i * 0.1,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             />
//           ))}
//         </div>
//       </section>
//     </LazyMotion>
//   );
// };

// export default Hero;
