import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Code, Calendar, Zap, Award, Clock, Building, Star } from "lucide-react";

const statsData = [
  {
    id: 1,
    number: "500+",
    label: "Hackers",
    icon: Users,
    image: "/Event_Section/helixPhoto2.jpg",
    gradient: "from-red-600 to-orange-500",
    size: "large",
    delay: 0.1
  },
  {
    id: 2,
    number: "10+",
    label: "Partners",
    icon: Building,
    image: "/Event_Section/dpsmu.jpeg",
    gradient: "from-blue-600 to-cyan-500",
    size: "medium",
    delay: 0.2
  },
  {
    id: 3,
    number: "36+",
    label: "Hack Hours",
    icon: Clock,
    image: "/Event_Section/purty_sir.jpeg",
    gradient: "from-purple-600 to-pink-500",
    size: "small",
    delay: 0.3
  },
  {
    id: 4,
    number: "100+",
    label: "Projects",
    icon: Code,
    image: "/Event_Section/paper.jpeg",
    gradient: "from-green-600 to-teal-500",
    size: "large",
    delay: 0.4
  },
  {
    id: 5,
    number: "50+",
    label: "Events",
    icon: Calendar,
    image: "/Event_Section/hacka3.jpeg",
    gradient: "from-yellow-600 to-orange-500",
    size: "medium",
    delay: 0.5
  },
  {
    id: 6,
    number: "25+",
    label: "Awards",
    icon: Award,
    image: "/Event_Section/headphone.jpeg",
    gradient: "from-indigo-600 to-blue-500",
    size: "small",
    delay: 0.6
  },
  {
    id: 7,
    number: "1M+",
    label: "Lines of Code",
    icon: Code,
    image: "/Event_Section/aiskill2.jpeg",
    gradient: "from-rose-600 to-pink-500",
    size: "large",
    delay: 0.7
  },
  {
    id: 8,
    number: "48",
    label: "Winning Teams",
    icon: Trophy,
    image: "/Event_Section/arka2.jpeg",
    gradient: "from-amber-600 to-yellow-500",
    size: "medium",
    delay: 0.8
  },
  {
    id: 9,
    number: "99%",
    label: "Satisfaction Rate",
    icon: Star,
    image: "/Event_Section/vlog2.png",
    gradient: "from-emerald-600 to-green-500",
    size: "small",
    delay: 0.9
  },
  {
    id: 10,
    number: "24/7",
    label: "Innovation",
    icon: Zap,
    image: "/Event_Section/aiskill1.jpeg",
    gradient: "from-violet-600 to-purple-500",
    size: "large",
    delay: 1.0
  },
  {
    id: 11,
    number: "15+",
    label: "AI Projects",
    icon: Code,
    image: "/Event_Section/arka.jpeg",
    gradient: "from-cyan-600 to-blue-500",
    size: "medium",
    delay: 1.1
  },
  {
    id: 12,
    number: "8",
    label: "Drone Teams",
    icon: Zap,
    image: "/Event_Section/ch.jpeg",
    gradient: "from-orange-600 to-red-500",
    size: "small",
    delay: 1.2
  }
];

const PastEvents = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const mouseX = useSpring(0, { stiffness: 150, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 30 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Optimized mouse parallax effect
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x * 20);
        mouseY.set(y * 20);
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', updateMousePosition);
      return () => section.removeEventListener('mousemove', updateMousePosition);
    }
  }, [mouseX, mouseY]);

  const getCardHeight = (size: string) => {
    switch (size) {
      case "large": return "h-80 md:h-96";
      case "medium": return "h-60 md:h-72";
      case "small": return "h-48 md:h-56";
      default: return "h-64 md:h-76";
    }
  };

  // Split items into columns for masonry effect
  const distributeItems = (items: typeof statsData) => {
    const columns = 4; // 4 columns for desktop
    const columnArrays: typeof statsData[] = Array.from({ length: columns }, () => []);
    
    items.forEach((item, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push(item);
    });
    
    return columnArrays;
  };

  const itemColumns = distributeItems(statsData);

  return (
    <motion.section
    id='events'
      ref={sectionRef} 
      className="relative py-24 px-4 overflow-hidden min-h-screen bg-background"
      style={{ opacity }}
    >
      {/* Optimized Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY, x: mouseX, rotateX: mouseY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-neon-blue/10" />

        {/* Reduced Racing Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            style={{
              top: `${10 + i * 15}%`,
              left: `${-20 + i * 5}%`,
              width: "140%",
              transform: `rotate(${-5 + i * 2}deg)`,
            }}
            initial={{ opacity: 0.2, scaleX: 0.8 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Reduced Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 relative z-10"
      >
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
                PAST EVENTS
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
                PAST EVENTS
              </span>
            </h2>
          </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold"
        >
          Every hackathon tells a story of innovation, collaboration, and
          breakthrough moments.
        </motion.p>
      </motion.div>

      {/* Pinterest-style Masonry Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Mobile: Single column */}
        <div className="block md:hidden">
          <div className="flex flex-col gap-4">
            {statsData.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: stat.delay * 0.7,
                    type: "spring",
                    stiffness: 120,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`${getCardHeight(
                    stat.size
                  )} relative w-full mx-2 mb-4`}
                >
                  <Card
                    className="h-full relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm group cursor-pointer transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20"
                    onMouseEnter={() => setHoveredCard(stat.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${stat.image})` }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

                    {/* Racing Stripe */}
                    {hoveredCard === stat.id && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-20`}
                        initial={{ backgroundPosition: "0% 50%" }}
                        animate={{ backgroundPosition: "100% 50%" }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}

                    {/* Speed Lines */}
                    {hoveredCard === stat.id && (
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    )}

                    {/* Content */}
                    <div className="relative h-full p-4 md:p-6 flex flex-col justify-center items-center text-center text-white z-10">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                        className="mb-2 md:mb-4"
                      >
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-neon-yellow drop-shadow-lg" />
                      </motion.div>

                      <motion.h3
                        whileHover={{ scale: 1.1 }}
                        className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 drop-shadow-lg"
                      >
                        {stat.number}
                      </motion.h3>

                      <motion.p
                        whileHover={{ y: -2 }}
                        className="text-xs md:text-sm lg:text-base font-bold tracking-wider drop-shadow-lg opacity-90"
                      >
                        {stat.label}
                      </motion.p>

                      <motion.div
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          boxShadow:
                            "0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)",
                        }}
                      />
                    </div>

                    <motion.div
                      className="absolute top-2 right-2 w-4 h-4 bg-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                      whileHover={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                      }}
                      transition={{ duration: 0.8 }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Masonry columns */}
        <div className="hidden md:flex gap-4">
          {itemColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col flex-1 gap-4">
              {column.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: stat.delay * 0.7,
                      type: "spring",
                      stiffness: 120,
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`${getCardHeight(
                      stat.size
                    )} relative w-full mx-2`}
                  >
                    <Card
                      className="h-full relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm group cursor-pointer transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20"
                      onMouseEnter={() => setHoveredCard(stat.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${stat.image})` }}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

                      {/* Racing Stripe */}
                      {hoveredCard === stat.id && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-20`}
                          initial={{ backgroundPosition: "0% 50%" }}
                          animate={{ backgroundPosition: "100% 50%" }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      )}

                      {/* Speed Lines */}
                      {hoveredCard === stat.id && (
                        <motion.div
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      )}

                      {/* Content */}
                      <div className="relative h-full p-4 md:p-6 flex flex-col justify-center items-center text-center text-white z-10">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.4 }}
                          className="mb-2 md:mb-4"
                        >
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-neon-yellow drop-shadow-lg" />
                        </motion.div>

                        <motion.h3
                          whileHover={{ scale: 1.1 }}
                          className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 drop-shadow-lg"
                        >
                          {stat.number}
                        </motion.h3>

                        <motion.p
                          whileHover={{ y: -2 }}
                          className="text-xs md:text-sm lg:text-base font-bold tracking-wider drop-shadow-lg opacity-90"
                        >
                          {stat.label}
                        </motion.p>

                        <motion.div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            boxShadow:
                              "0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)",
                          }}
                        />
                      </div>

                      <motion.div
                        className="absolute top-2 right-2 w-4 h-4 bg-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                        whileHover={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 90, 0],
                        }}
                        transition={{ duration: 0.8 }}
                      />
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Racing Circuit */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none">
        <motion.div
          className="absolute bottom-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          initial={{ scaleX: 0.5, opacity: 0.3 }}
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.section>
  );
};

export default PastEvents;