import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, } from 'framer-motion';
import { Brain, Shield, GraduationCap, Banknote, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const themes = [
  {
    id: 1,
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-blue-500 to-purple-600",
    description: "Build intelligent solutions using AI and ML technologies",
    position: { desktop: { x: 15, y: 25 }, mobile: { x: 20, y: 15 } }
  },
  {
    id: 2,
    title: "Web3 & Digital Governance",
    icon: Globe,
    color: "from-green-500 to-emerald-600",
    description: "Explore blockchain and decentralized technologies",
    position: { desktop: { x: 75, y: 15 }, mobile: { x: 80, y: 25 } }
  },
  {
    id: 3,
    title: "Cybersecurity & Digital Identity",
    icon: Shield,
    color: "from-red-500 to-pink-600",
    description: "Secure digital identities and protect data",
    position: { desktop: { x: 85, y: 55 }, mobile: { x: 20, y: 40 } }
  },
  {
    id: 4,
    title: "EdTech & Smart Campus",
    icon: GraduationCap,
    color: "from-orange-500 to-yellow-600",
    description: "Transform education with technology",
    position: { desktop: { x: 70, y: 85 }, mobile: { x: 80, y: 55 } }
  },
  {
    id: 5,
    title: "Public Safety & Welfare",
    icon: Users,
    color: "from-teal-500 to-cyan-600",
    description: "Enhance community safety and welfare",
    position: { desktop: { x: 25, y: 90 }, mobile: { x: 20, y: 70 } }
  },
  {
    id: 6,
    title: "FinTech & Smart Transactions",
    icon: Banknote,
    color: "from-indigo-500 to-blue-600",
    description: "Revolutionize financial technology",
    position: { desktop: { x: 10, y: 65 }, mobile: { x: 80, y: 85 } }
  }
];

const HackathonTracks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedTheme, setSelectedTheme] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0, rotation: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springCarProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const unsubscribe = springCarProgress.on('change', (latest) => {
      const progress = Math.min(Math.max(latest, 0), 1);
      
      // Define track path points for desktop and mobile
      const trackPoints = isMobile ? [
        { x: 10, y: 10, rotation: 45 },
        { x: 85, y: 20, rotation: 135 },
        { x: 15, y: 35, rotation: -45 },
        { x: 85, y: 50, rotation: 90 },
        { x: 15, y: 65, rotation: -135 },
        { x: 85, y: 80, rotation: 180 },
        { x: 50, y: 95, rotation: -90 }
      ] : [
        { x: 5, y: 20, rotation: 45 },
        { x: 80, y: 10, rotation: 90 },
        { x: 90, y: 50, rotation: 135 },
        { x: 75, y: 80, rotation: 180 },
        { x: 20, y: 85, rotation: -135 },
        { x: 5, y: 60, rotation: -90 },
        { x: 15, y: 30, rotation: 0 }
      ];

      const segmentLength = 1 / (trackPoints.length - 1);
      const currentSegment = Math.floor(progress / segmentLength);
      const segmentProgress = (progress % segmentLength) / segmentLength;

      if (currentSegment < trackPoints.length - 1) {
        const startPoint = trackPoints[currentSegment];
        const endPoint = trackPoints[currentSegment + 1];

        const x = startPoint.x + (endPoint.x - startPoint.x) * segmentProgress;
        const y = startPoint.y + (endPoint.y - startPoint.y) * segmentProgress;
        const rotation = startPoint.rotation + (endPoint.rotation - startPoint.rotation) * segmentProgress;

        setCarPosition({ x, y, rotation });
      }
    });

    return unsubscribe;
  }, [springCarProgress, isMobile]);

  // Desktop track path - Complex F1 style curves
  const desktopTrackPath = "M 100 200 Q 300 50 600 100 Q 900 150 950 400 Q 900 700 700 850 Q 500 950 300 900 Q 100 850 50 600 Q 100 400 200 350 Q 400 300 500 250 Q 700 200 800 300 Q 850 450 750 550 Q 600 600 450 550 Q 300 500 250 400 Q 200 300 300 250";
  
  // Mobile track path - Vertical S-curves
  const mobileTrackPath = "M 80 50 Q 200 80 150 150 Q 100 220 180 280 Q 260 340 120 400 Q 50 460 150 520 Q 250 580 100 640 Q 50 700 150 750";

  return (
    <section
      id="problems"
      ref={containerRef}
      className="min-h-screen relative overflow-hidden py-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,transparent_50%)] opacity-10" />

      {/* Speed lines animation */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}%`,
              left: `-${20 + Math.random() * 40}%`,
            }}
            animate={{
              x: [`${-100}%`, `${window.innerWidth + 100}px`],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Hackathon Tracks
          </h2> */}
          <div className="relative text-center mb-10 flex flex-col items-center justify-center">
            <h1
              className="hidden lg:flex text-6xl sm:text-7xl font-orbitron font-black opacity-30 pointer-events-none select-none uppercase tracking-wider absolute inset-0 items-center justify-center"
              style={{ transform: "translateY(-32px)" }}
            >
              <span
                style={{
                  background: "linear-gradient(to bottom, #f50e0eff, #1a1a1a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                PROBLEM STATEMENT
              </span>
            </h1>

            <h2 className="text-4xl sm:text-5xl font-orbitron font-extrabold uppercase tracking-wide text-white relative z-10">
              <span
                style={{
                  background: "linear-gradient(to bottom, #f50e0eff, #1a1a1a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                PROBLEM STATEMENT
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Track Container */}
        <div className="relative w-full h-[600px] md:h-[800px] mx-auto max-w-6xl">
          {/* Track SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={isMobile ? "0 0 300 700" : "0 0 1000 1000"}
            fill="none"
          >
            {/* 3D Track Effects */}
            <defs>
              {/* Track surface gradient */}
              <linearGradient
                id="trackSurface"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="50%" stopColor="#2d2d2d" />
                <stop offset="100%" stopColor="#1a1a1a" />
              </linearGradient>

              {/* Neon blue side lighting */}
              <linearGradient id="neonBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#40e0d0" stopOpacity="1" />
                <stop offset="100%" stopColor="#00bcd4" stopOpacity="0.8" />
              </linearGradient>

              {/* Red and white curb pattern */}
              <pattern
                id="curbPattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="10" height="20" fill="#ff0000" />
                <rect x="10" y="0" width="10" height="20" fill="#ffffff" />
              </pattern>

              {/* Glow effects */}
              <filter
                id="neonGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter
                id="trackShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="12"
                  floodColor="#000000"
                  floodOpacity="0.6"
                />
              </filter>
            </defs>

            {/* Track shadow/depth */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="#000000"
              strokeWidth="32"
              strokeOpacity="0.4"
              fill="none"
              transform="translate(4, 8)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Main track surface */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="url(#trackSurface)"
              strokeWidth="24"
              fill="none"
              filter="url(#trackShadow)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
            />

            {/* Red and white curbs (outer) */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="url(#curbPattern)"
              strokeWidth="6"
              fill="none"
              transform="translate(15, 0)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Red and white curbs (inner) */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="url(#curbPattern)"
              strokeWidth="6"
              fill="none"
              transform="translate(-15, 0)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Neon blue side lighting (outer) */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="url(#neonBlue)"
              strokeWidth="3"
              fill="none"
              filter="url(#neonGlow)"
              transform="translate(18, 0)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
            />

            {/* Neon blue side lighting (inner) */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="url(#neonBlue)"
              strokeWidth="3"
              fill="none"
              filter="url(#neonGlow)"
              transform="translate(-18, 0)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
            />
          </svg>

          {/* Ferrari SF71H Formula 1 Car */}
          <motion.div
            className="absolute w-12 h-6 md:w-16 md:h-8 pointer-events-none z-20"
            style={{
              left: `${carPosition.x}%`,
              top: `${carPosition.y}%`,
              transform: `translate(-50%, -50%) rotate(${carPosition.rotation}deg)`,
            }}
          >
            {/* Tire smoke trail */}
            <motion.div
              className="absolute right-full top-1/2 w-16 h-4 pointer-events-none"
              animate={{
                opacity: [0.6, 0.3, 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 0.4, repeat: Infinity }}
            >
              <div className="w-full h-full bg-gradient-to-l from-gray-400/50 to-transparent rounded-full blur-sm" />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-white/30 to-transparent rounded-full blur-xs" />
            </motion.div>

            {/* Main Ferrari body */}
            <motion.div
              className="relative w-full h-full"
              animate={{
                filter: [
                  "drop-shadow(0 0 8px #dc2626)",
                  "drop-shadow(0 0 12px #dc2626) drop-shadow(0 0 16px #dc2626)",
                  "drop-shadow(0 0 8px #dc2626)",
                ],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {/* Car chassis */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-500 rounded-lg shadow-xl">
                {/* Ferrari front nose */}
                <div className="absolute left-0 top-1/2 w-1/4 h-1/3 bg-red-600 rounded-l-full transform -translate-y-1/2" />

                {/* Cockpit area */}
                <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-gray-900 rounded-sm" />

                {/* Halo safety device */}
                <div className="absolute left-1/3 top-1/6 w-1/3 h-1/6 border border-gray-400 rounded-t-full" />

                {/* Side mirrors */}
                <div className="absolute left-1/3 top-0 w-1 h-1 bg-gray-400 rounded" />
                <div className="absolute left-1/3 bottom-0 w-1 h-1 bg-gray-400 rounded" />

                {/* Ferrari branding stripe */}
                <div className="absolute left-1/4 top-1/2 w-1/2 h-0.5 bg-white transform -translate-y-1/2" />

                {/* Rear wing */}
                <div className="absolute right-0 top-1/3 w-1/6 h-1/3 bg-red-500 border border-red-700" />
              </div>

              {/* Glowing brake discs */}
              <motion.div
                className="absolute left-1/8 top-1/2 w-1 h-1 bg-orange-400 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 4px #fb923c",
                    "0 0 8px #fb923c, 0 0 12px #f97316",
                    "0 0 4px #fb923c",
                  ],
                }}
                transition={{ duration: 0.3, repeat: Infinity }}
              />
              <motion.div
                className="absolute right-1/8 top-1/2 w-1 h-1 bg-orange-400 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 4px #fb923c",
                    "0 0 8px #fb923c, 0 0 12px #f97316",
                    "0 0 4px #fb923c",
                  ],
                }}
                transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }}
              />
            </motion.div>

            {/* Speed particles */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute right-full top-1/2 w-1 h-px bg-cyan-400"
                style={{
                  left: `-${(i + 1) * 8}px`,
                  top: `${50 + (Math.random() - 0.5) * 20}%`,
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>

          {/* Theme Nodes */}
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            const position = isMobile
              ? theme.position.mobile
              : theme.position.desktop;

            return (
              <motion.div
                key={theme.id}
                className="absolute z-10"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.button
                      className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${theme.color} p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTheme(theme.id)}
                    >
                      <Icon className="w-full h-full text-white drop-shadow-lg" />

                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/50"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 0, 0.7],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Theme label */}
                      <motion.div
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-xs md:text-sm font-semibold text-foreground bg-background/90 px-2 py-1 rounded backdrop-blur-sm">
                          {theme.title}
                        </span>
                      </motion.div>
                    </motion.button>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${theme.color} p-2`}
                        >
                          <Icon className="w-full h-full text-white" />
                        </div>
                        {theme.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-xl text-muted-foreground">
                        {theme.description}
                      </p>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-lg      text-muted-foreground">
                          Detailed track information and requirements will be
                          available soon.
                        </p>
                      </div>
                      {/* <Button className="w-full">Learn More</Button> */}
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            );
          })}

          {/* Progress indicator */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Track Progress:</span>
              <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HackathonTracks;