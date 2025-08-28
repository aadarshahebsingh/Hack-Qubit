import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock,
  MapPin,
  Trophy,
  Users,
  Coffee,
  Code,
  Presentation,
  Award,
} from "lucide-react";

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const timelineEvents = [
    {
      time: "09:00 AM",
      title: "REGISTRATION & CHECK-IN",
      description:
        "Team registration, badge collection, and welcome kit distribution",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      day: "Day 1 - October 7",
    },
    {
      time: "10:00 AM",
      title: "OPENING CEREMONY",
      description:
        "Welcome address, problem statement reveals, and hackathon kickoff",
      icon: Trophy,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
      day: "Day 1 - October 7",
    },
    {
      time: "11:00 AM",
      title: "HACKING BEGINS",
      description:
        "24-hour coding marathon starts. Teams begin building their solutions",
      icon: Code,
      color: "text-neon-green",
      bgColor: "bg-neon-green/10",
      borderColor: "border-neon-green/30",
      day: "Day 1 - October 7",
    },
    {
      time: "01:00 PM",
      title: "LUNCH BREAK",
      description: "Fuel up for the long coding session ahead",
      icon: Coffee,
      color: "text-chrome",
      bgColor: "bg-chrome/10",
      borderColor: "border-chrome/30",
      day: "Day 1 - October 7",
    },
    {
      time: "06:00 PM",
      title: "TECH TALKS & MENTORING",
      description: "Industry expert sessions and mentor consultations",
      icon: Presentation,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      day: "Day 1 - October 7",
    },
    {
      time: "08:00 PM",
      title: "DINNER & NETWORKING",
      description: "Evening meal and networking with fellow hackers",
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
      day: "Day 1 - October 7",
    },
    {
      time: "12:00 AM",
      title: "MIDNIGHT ENERGY BOOST",
      description:
        "Coffee, snacks, and motivation to keep coding through the night",
      icon: Coffee,
      color: "text-neon-yellow",
      bgColor: "bg-neon-yellow/10",
      borderColor: "border-neon-yellow/30",
      day: "Night Session",
    },
    {
      time: "06:00 AM",
      title: "BREAKFAST & FINAL SPRINT",
      description: "Morning fuel for the final push towards submission",
      icon: Coffee,
      color: "text-chrome",
      bgColor: "bg-chrome/10",
      borderColor: "border-chrome/30",
      day: "Day 2 - October 8",
    },
    {
      time: "09:00 AM",
      title: "SUBMISSION DEADLINE",
      description: "Final submissions and project demonstrations begin",
      icon: Clock,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      day: "Day 2 - October 8",
    },
    {
      time: "09:30 AM",
      title: "JUDGING & PRESENTATIONS",
      description: "Team presentations and evaluation by expert judges",
      icon: Presentation,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
      day: "Day 2 - October 8",
    },
    {
      time: "10:30 PM",
      title: "CLOSING CEREMONY",
      description: "Results announcement, prize distribution, and celebration",
      icon: Award,
      color: "text-neon-green",
      bgColor: "bg-neon-green/10",
      borderColor: "border-neon-green/30",
      day: "Day 2 - October 8",
    },
  ];

  return (
    <section id="timeline" className="relative py-20 px-4 overflow-hidden">
      {/* Racing Track Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="flex justify-center items-center h-full relative">
          {/* Vertical gradient bar */}
          <div className="w-2 h-full bg-gradient-to-b from-primary via-accent to-primary mr-4"></div>

          {/* PNG image in background */}
          <img
            src="/Event_Section/track1.png"
            alt="Background Decoration"
            className="h-full object-contain opacity-70"
          />
        </div>
      </div>

      <div ref={containerRef} className="max-w-4xl mx-auto relative z-10">
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
                className="hidden lg:flex text-6xl sm:text-7xl font-black opacity-30 pointer-events-none select-none uppercase tracking-wider absolute inset-0 items-center justify-center"
                style={{ transform: "translateY(-32px)" }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(to bottom, #f50e0eff, #1a1a1a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  RACE SCHEDULE
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
                  RACE SCHEDULE
                </span>
              </h2>
            </div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto font-semibold"
          >
            24 hours of high-speed innovation from start to finish line
          </motion.p>
        </motion.div>

        {/* Timeline Track */}
        <div className="relative">
          {/* Central Racing Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: isLeft ? -50 : 50 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Event Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div
                      className={`carbon-texture bg-gradient-carbon border-2 ${event.borderColor} rounded-xl p-6 relative`}
                    >
                      {/* Day Label */}
                      <div className="absolute -top-3 left-4 px-3 py-1 bg-background border border-primary/30 rounded-full">
                        <span className="text-l font-rajdhani font-semibold text-muted-foreground">
                          {event.day}
                        </span>
                      </div>

                      {/* Event Details */}
                      <div className="flex items-start space-x-4">
                        <div
                          className={`${event.bgColor} ${event.borderColor} border-2 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className={`w-6 h-6 ${event.color}`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span
                              className={`font-orbitron text-lg font-bold ${event.color}`}
                            >
                              {event.time}
                            </span>
                          </div>

                          <h4 className="font-orbitron text-lg font-bold text-gradient-chrome mb-2">
                            {event.title}
                          </h4>

                          <p className="text-base text-muted-foreground font-rajdhani leading-relaxed font-semibold">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* Speed Lines */}
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.2,
                        }}
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                      />
                    </div>
                  </div>

                  {/* Racing Checkpoint */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      className={`w-8 h-8 ${event.bgColor} ${event.borderColor} border-4 rounded-full relative`}
                    >
                      <div
                        className={`absolute inset-2 ${event.color.replace(
                          "text-",
                          "bg-"
                        )} rounded-full`}
                      ></div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Finish Line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-4 carbon-texture bg-gradient-carbon border-2 border-primary/50 rounded-xl px-8 py-4">
              <Trophy className="w-8 h-8 text-primary animate-pulse-racing" />
              <span className="font-orbitron text-xl font-bold text-gradient-speed">
                FINISH LINE
              </span>
              <Trophy
                className="w-8 h-8 text-primary animate-pulse-racing"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
