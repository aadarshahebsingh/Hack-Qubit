import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is HackGenesis?",
      answer:
        "24 hours. One hackathon. Code with purpose, create with passion, and conquer real-world challenges — that’s HackGenesis."
    },
    {
      question: "Who can participate in HackGenesis?",
      answer: "Any engineering undergraduate student is eligible to participate."
    },
    {
      question: "Do I need to have a team before registering?",
      answer:
        "Teams can consist of 1 to 4 members, and you're welcome to register either solo or with a team."
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Bring your laptop, chargers, any hardware you plan to use, and your enthusiasm!"
    },
    {
      question: "Are there any costs to participate?",
      answer:
        "HackGenesis has a nominal registration fee of ₹600 per team. This covers meals, snacks, workspace, mentorship, and exciting prizes."
    },
    {
      question: "What are the judging criteria?",
      answer:
        "Projects will be evaluated based on Innovation & Creativity (30%), Technical Implementation (25%), User Experience & Design (20%), Business Viability (15%), and Presentation Quality (10%)."
    },
    {
      question: "Can I work on a pre-existing project?",
      answer:
        "No, all projects must be started from scratch during the hackathon. However, you can use existing APIs, frameworks, and open-source libraries."
    },
    {
      question: "What technologies can I use?",
      answer:
        "You're free to use any programming languages, frameworks, APIs, and tools you're comfortable with."
    },
    {
      question: "Can I attend the hackathon remotely?",
      answer:
        "No, the hackathon is an offline event and will be conducted at RVS College of Engineering and Technology."
    },
    {
      question: "What happens if I can't stay for the full 24 hours?",
      answer:
        "We encourage you to stay for the full 24 hours — it's mandatory, except in case of a medical emergency or any other situation with proper valid reasons."
    },
    {
      question: "Whom can I contact for additional queries?",
      answer:
        'If you have any further queries, feel free to <a href="mailto:hackgenesisrvscet@gmail.com" class="text-primary underline">email us</a>. You can also reach out to our student coordinators through the provided phone numbers.'
    },
    {
      question: "What prizes can I win?",
      answer:
        "With a total prize pool of over ₹30,000 and exciting goodies worth thousands, the top teams will be rewarded: ₹15,000 for first place, ₹10,000 for second, and ₹5,000 for third."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 px-4 overflow-hidden">
      {/* Background Circuit */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          <defs>
            <path
              id="circuit"
              d="M100,400 Q300,100 600,400 Q900,700 1100,400 Q900,100 600,400 Q300,700 100,400"
              fill="none"
              stroke="hsl(0, 84%, 55%)"
              strokeWidth="2"
            />
          </defs>
          <use href="#circuit" />
          <motion.circle
            r="4"
            fill="hsl(0, 84%, 55%)"
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              offsetPath:
                "path('M100,400 Q300,100 600,400 Q900,700 1100,400 Q900,100 600,400 Q300,700 100,400')"
            }}
          />
        </svg>
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
                className="hidden lg:flex text-6xl sm:text-9xl font-orbitron font-black opacity-30 pointer-events-none select-none uppercase tracking-wider absolute inset-0 items-center justify-center"
                style={{ transform: "translateY(-32px)" }}
              >
                <span
                  style={{
                    background: "linear-gradient(to bottom, #f50e0eff, #1a1a1a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  FAQ's
                </span>
              </h1>
              <h2 className="text-4xl sm:text-6xl font-orbitron font-extrabold uppercase tracking-wide text-white relative z-10">
                <span
                  style={{
                    background: "linear-gradient(to bottom, #f50e0eff, #1a1a1a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  FAQ's
                </span>
              </h2>
            </div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl text-gray-300 font-rajdhani max-w-3xl mx-auto font-bold"
          >
            Everything you need to know before hitting the track
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-primary/30 rounded-xl overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-rajdhani text-lg font-bold text-foreground">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 bg-accent/20 border border-accent/50 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-accent" />
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <div className="pl-14">
                      <p
                        className="text-gray-300 font-rajdhani leading-relaxed font-base font-semibold"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                </motion.div>

                {isOpen && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;