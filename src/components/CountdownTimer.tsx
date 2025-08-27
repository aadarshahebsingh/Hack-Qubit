import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <motion.div
          key={value}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="carbon-texture bg-gradient-carbon border-2 border-primary/50 rounded-lg p-4 md:p-6 min-w-16 md:min-w-20 text-center"
        >
          <span className="font-orbitron text-2xl md:text-4xl font-bold text-gradient-speed">
            {value.toString().padStart(2, '0')}
          </span>
        </motion.div>
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1 -left-1 -right-1 -bottom-1 border-2 border-accent/30 rounded-lg"
        />
      </div>
      <span className="mt-2 text-xs md:text-sm font-rajdhani font-semibold text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4 gap-4 md:gap-8">
        <TimeUnit value={timeLeft.days} label="Days" delay={0} />
        <TimeUnit value={timeLeft.hours} label="Hours" delay={0.1} />
        <TimeUnit value={timeLeft.minutes} label="Minutes" delay={0.2} />
        <TimeUnit value={timeLeft.seconds} label="Seconds" delay={0.3} />
      </div>
    </div>
  );
};

export default CountdownTimer;