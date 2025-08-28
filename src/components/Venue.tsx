import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Clock, Users } from "lucide-react";

const Venue = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const glowTextShadow = {
    textShadow:
      "0 0 10px #b70606ff, 0 0 10px #500350, 0 0 10px #500350, 0 0 10px #500350",
  };
  return (
    <section id="venue" className="relative py-20 px-4  overflow-hidden">
      {/* backgound image  */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center opacity-10">
        <img
          src="/Venue_Section/redbull_logo.png"
          alt="Background Decoration"
          className="w-3/4 max-w-[800px] object-contain"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              width: "120%",
              left: "-10%",
              transform: `rotate(${-2 + i * 1}deg)`,
            }}
            animate={{
              x: [-100, window.innerWidth + 100],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

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
              <h1
                className="hidden lg:flex text-6xl sm:text-8xl font-black text-white opacity-30 absolute inset-0 pointer-events-none select-none uppercase tracking-wider items-center justify-center"
                style={{ transform: "translateY(-25px)" }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(to bottom, #f50e0eff, #1a1a1a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  RACE LOCATION
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
                  RACE LOCATION
                </span>
              </h2>
            </div>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="carbon-texture bg-gradient-carbon border-2 border-primary/50 rounded-xl p-8">
              <h3 className="font-orbitron text-3xl font-bold text-gradient-chrome mb-8">
                VENUE DETAILS
              </h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-rajdhani text-2xl font-semibold text-foreground">
                      Location
                    </h2>
                    <p className="text-base font-semibold text-gray-400">
                      RVSCET Jamshedpur
                    </p>
                    <p className="text-base font-semibold text-gray-400">
                      Jharkhand, India
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-accent/20 border border-accent/50 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-2xl font-semibold text-foreground">
                      Date
                    </h3>
                    <p className="ttext-base font-semibold text-gray-400">
                      October 7-8, 2025
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-chrome/20 border border-chrome/50 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-chrome" />
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-2xl font-semibold text-foreground">
                      Duration
                    </h4>
                    <p className="text-base font-semibold text-gray-400">
                      24 Hours Non-Stop
                    </p>
                    <p className="text-base font-semibold text-gray-400">
                      9:00 AM Start
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-neon-green/20 border border-neon-green/50 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-2xl font-semibold text-foreground">
                      Capacity
                    </h4>
                    <p className="text-base font-semibold text-gray-400">
                      200+ Participants
                    </p>
                    <p className="text-base font-semibold text-gray-400">
                      Teams of 2-4
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="carbon-texture  border-accent/30 rounded-xl p-8 relative overflow-hidden">
              <h3 className="font-orbitron text-xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                RVS College of Engineering & Technology, JAMSHEDPUR, Jharkhand,
                831012
              </h3>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-primary/30">
                  <div className="space-y-4">
                    {/* TECH HUB Animated Card */}
                    <div className="h-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg border border-accent/20 relative overflow-hidden">
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                      />

                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <h4 className="font-orbitron text-xl font-bold text-gradient-chrome">
                            TECH HUB
                          </h4>
                          <p className="text-lg text-muted-foreground font-rajdhani font-bold">
                            Innovation Center
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Map Embed for RVSCET, JSR */}
                    <div className="overflow-hidden rounded-lg border border-primary/30">
                      <iframe
                        title="RVSCET Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.9231419783423!2d86.27123017454844!3d22.805311624402464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e30ff76d3319%3A0x4986ace5ea086802!2sRVS%20College%20Of%20Engineering%20And%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1754156990148!5m2!1sen!2sin"
                        width="100%"
                        height="250"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[250px] border-0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 border-2 border-accent/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-primary/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
