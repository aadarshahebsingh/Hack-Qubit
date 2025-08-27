import React, { useEffect, useRef, useState } from 'react';

const events = [
  { name: 'Inauguration', time: '10:00 AM' },
  { name: 'Team Registration', time: '10:30 AM' },
  { name: 'Problem Statement Release', time: '11:00 AM' },
  { name: 'Hacking Starts', time: '12:00 PM' },
  { name: 'Mentor Sessions', time: '3:00 PM' },
  { name: 'Midnight Snacks', time: '12:00 AM' },
  { name: 'Final Submission', time: '7:00 AM' },
  { name: 'Judging', time: '8:00 AM' },
  { name: 'Closing Ceremony', time: '10:00 AM' }
];

const ScheduleTrack: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<number>(0);
  const [lightStage, setLightStage] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = cardRef.current?.scrollTop ?? 0;
      const index = Math.min(events.length - 1, Math.floor(scrollTop / 130));
      setActiveEvent(index);
    };

    const refCurrent = cardRef.current;
    refCurrent?.addEventListener('scroll', handleScroll);
    return () => refCurrent?.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setLightStage((prev) => (prev + 1) % 3);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="venue">
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* 🔊 Background Audio */}
      <audio autoPlay loop src="/car-sound.mp3" />

      {/* 🚦 Tricolor Countdown Lights */}
      <div className="flex space-x-4 mb-6 z-10 mt-6">
        <div
          className={`w-5 h-5 rounded-full shadow-md transition-all duration-300 ${
            lightStage === 0 ? 'bg-red-500 shadow-red-500' : 'bg-gray-700'
          }`}
        />
        <div
          className={`w-5 h-5 rounded-full shadow-md transition-all duration-300 ${
            lightStage === 1 ? 'bg-yellow-400 shadow-yellow-400' : 'bg-gray-700'
          }`}
        />
        <div
          className={`w-5 h-5 rounded-full shadow-md transition-all duration-300 ${
            lightStage === 2 ? 'bg-green-500 shadow-green-500' : 'bg-gray-700'
          }`}
        />
      </div>

      {/* 🏁 Heading */}
      <div className="relative text-center mb-4">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-transparent stroke-red-500 absolute inset-0 -translate-y-1">
          🏎️ Hackathon Race Schedule
        </h1>
        <h1 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent relative">
          🏎️ Hackathon Race Schedule
        </h1>
      </div>

      {/* 📋 Card with Video + Events */}
      <div className="relative w-[90%] max-w-3xl h-[75vh] rounded-2xl border border-red-600 shadow-2xl overflow-hidden">
        {/* 🎥 Video Background */}
        <video
          src={"trackVideo"}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-2xl"
        />

        {/* 🗓️ Events */}
        <div
          ref={cardRef}
          className="relative z-10 h-full overflow-y-scroll px-6 py-8 space-y-6"
        >
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex items-center justify-between rounded-xl px-6 py-4 bg-black bg-opacity-70 text-white shadow-md backdrop-blur-md transition-transform duration-300 w-[80%] ${
                index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'
              } ${
                index === activeEvent
                  ? 'scale-105 border-4 border-yellow-400 shadow-yellow-500'
                  : 'opacity-70'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center p-1 border border-white animate-pulse">
                  <img
                    src={"car"}
                    alt="car"
                    className="object-contain w-full h-full"
                  />
                </div>
                <img src={"flag"} alt="flag" className="w-5 h-5" />
              </div>
              <div className="text-right">
                <div className="font-semibold text-lg">{event.name}</div>
                <div className="text-sm text-gray-300">{event.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
  
};

export default ScheduleTrack;
