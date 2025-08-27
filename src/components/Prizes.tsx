import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award } from "lucide-react";

const Prizes = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const prizes = [
    {
      place: "1st",
      amount: "₹15,000",
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30",
      glowColor: "glow-yellow",
      title: "CHAMPION",
    },
    {
      place: "2nd",
      amount: "₹10,000",
      icon: Medal,
      color: "text-gray-300",
      bgColor: "bg-gray-300/10",
      borderColor: "border-gray-300/30",
      glowColor: "glow-chrome",
      title: "RUNNER-UP",
    },
    {
      place: "3rd",
      amount: "₹5,000",
      icon: Award,
      color: "text-amber-600",
      bgColor: "bg-amber-600/10",
      borderColor: "border-amber-600/30",
      glowColor: "glow-red",
      title: "THIRD PLACE",
    },
  ];

  return (
    <section id="prizes" className="relative py-20 px-4  overflow-hidden">
      {/* Racing Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-rows-20 gap-2 h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="border-t border-primary w-full"
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
      <img
        src="/Prize_Image/f1car2.png" // Make sure this path is correct
        alt="F1 Racing Car"
        className="absolute bottom-0 right-0 w-40 md:w-64 lg:w-80 opacity-80 z-10 pointer-events-none"
      />

      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-orbitron text-4xl md:text-5xl font-black text-gradient-speed mb-6 tracking-wide"
          >
            <div className="relative text-center mb-10 flex flex-col items-center justify-center">
              <h1 className="translate-y-[-70px] lg:block text-12xl sm:text-8xl font-black opacity-30 pointer-events-none select-none uppercase tracking-wider absolute inset-0 flex items-center justify-center">
                <span
                  style={{
                    background:
                      "linear-gradient(to bottom, #f50e0eff, #1a1a1a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  PRIZES
                </span>
              </h1>

              <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wide text-white relative z-10">
                <span
                  style={{
                    background:
                      "linear-gradient(to bottom, #f50e0eff, #1a1a1a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  PRIZES
                </span>
              </h2>
            </div>
          </motion.h2>
        </motion.div>

        {/* Podium Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-end mb-16">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            const delay = index === 0 ? 0.8 : index === 1 ? 0.6 : 1.0; // First place appears second
            const height = index === 0 ? "h-80" : index === 1 ? "h-72" : "h-64";

            return (
              <motion.div
                key={prize.place}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 100, scale: 0.8 }
                }
                transition={{ duration: 0.8, delay }}
                className={`carbon-texture bg-gradient-carbon border-2 ${prize.borderColor} rounded-xl p-8 text-center ${height} relative overflow-hidden`}
              >
                {/* Podium Number */}
                <div
                  className={`absolute top-4 right-4 w-12 h-12 ${prize.bgColor} ${prize.borderColor} border rounded-full flex items-center justify-center`}
                >
                  <span
                    className={`font-orbitron text-lg font-bold ${prize.color}`}
                  >
                    {prize.place.replace(/\D/g, "")}
                  </span>
                </div>

                {/* Trophy Icon */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotateY: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className={`${prize.bgColor} ${prize.borderColor} border-2 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center`}
                >
                  <Icon className={`w-10 h-10 ${prize.color}`} />
                </motion.div>

                {/* Prize Details */}
                <h3
                  className={`font-orbitron text-xl font-bold ${prize.color} mb-2`}
                >
                  {prize.title}
                </h3>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: delay + 0.3 }}
                  className="mb-4"
                >
                  <span className="font-orbitron text-3xl md:text-4xl font-black text-gradient-chrome">
                    {prize.amount}
                  </span>
                </motion.div>

                <p className="text-base text-muted-foreground font-rajdhani font-semibold">
                  + Exclusive Merchandise & Recognition
                </p>

                {/* Racing Stripes */}
                <div className="absolute bottom-0 left-0 right-0">
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                    className={`h-1 bg-gradient-to-r from-transparent via-${
                      prize.color.split("-")[1]
                    }-400 to-transparent`}
                  />
                </div>

                {/* Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className={`absolute inset-0 ${prize.borderColor} border-2 rounded-xl pointer-events-none`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
