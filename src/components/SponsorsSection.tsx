import { Card, CardContent } from "@/components/ui/card";
import { Building, Handshake, Star, Zap } from "lucide-react";
import { Users, Eye, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

export const SponsorsSection = () => {
  const sponsorTiers = [
    {
      tier: "Diamond Sponsor",
      features: [
        "Exclusive brand logo prominently displayed with HackGenesis every time.",
        "Print ads with title on banner and posters.",
        "Deliver a keynote address during the opening and closing ceremony",
      ],
      investment: "From ₹30,000+",
      glowColor: "rgba(185, 242, 255, 0.7)",
      borderColor: "rgba(100, 200, 255, 0.8)",
      accentColor: "text-cyan-300",
      icon: <Building className="w-8 h-8" />,
    },
    {
      tier: "Gold Sponsors",
      features: [
        "Brand logo prominently displayed on banners.",
        "Print ads on banner",
        "Display your brand logo on all event materials and official communications",
      ],
      investment: "From ₹20,000+",
      glowColor: "rgba(255, 215, 0, 0.7)",
      borderColor: "rgba(255, 200, 50, 0.8)",
      accentColor: "text-yellow-300",
      icon: <Star className="w-8 h-8" />,
    },
    {
      tier: "Silver Sponsor",
      features: ["Logo placement", "Prize sponsorship", "Print ads on Posters"],
      investment: "From ₹10,000+",
      glowColor: "rgba(192, 192, 192, 0.7)",
      borderColor: "rgba(200, 200, 220, 0.8)",
      accentColor: "text-gray-300",
      icon: <Handshake className="w-8 h-8" />,
    },
  ];

  return (
    <section
      id="sponsors"
      className="py-20 relative overflow-hidden bg-transparent px-4"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-xl"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ["#60a5fa", "#fbbf24", "#a3a3a3"][i % 3]
              }, transparent)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
                BE OUR SPONSOR
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
                BE OUR SPONSOR
              </span>
            </h2>
          </div>
        </div>

        <div className="mb-20">
          <motion.h3
            className="text-3xl font-orbitron font-bold text-center mb-8 italic text-white"
            style={{
              textShadow:
                "0 0 5px #3770ffff, 0 0 10px #2069a0ff, 0 0 20px #ffffff",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sponsorship Perks
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Engagement",
                description:
                  "Interact directly with participants during Q&A sessions, fostering connections and collaborations.",
                icon: <Users className="w-8 h-8 text-primary" />,
                glow: "0 0 20px rgba(59, 130, 246, 0.5)",
              },
              {
                title: "Brand Visibility",
                description:
                  "Gain recognition as a key contributor, strengthening your presence within the tech community.",
                icon: <Eye className="w-8 h-8 text-accent" />,
                glow: "0 0 20px rgba(220, 38, 38, 0.5)",
              },
              {
                title: "Post-Event Marketing",
                description:
                  "Benefit from extensive outreach through press releases, social media coverage, and content creation.",
                icon: <Megaphone className="w-8 h-8 text-yellow-400" />,
                glow: "0 0 20px rgba(234, 179, 8, 0.5)",
              },
            ].map((perk, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-muted/10 p-6 rounded-2xl border border-muted h-full flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  boxShadow: perk.glow,
                  height: "100%",
                }}
              >
                <div className="mb-4 p-2 rounded-full bg-card/50">
                  {perk.icon}
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2 font-orbitron italic">
                  {perk.title}
                </h4>
                <p className="text-xl text-base text-muted-foreground font-rajdhani font-semibold flex-grow">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <motion.h3
            className="text-3xl font-orbitron font-bold text-center mb-8 italic text-white"
            style={{
              textShadow:
                "0 0 5px #3770ffff, 0 0 10px #2069a0ff, 0 0 20px #ffffff",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sponsorship Packages
          </motion.h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {sponsorTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-full"
              >
                {/* Pulsing Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-lg z-0"
                  style={{
                    backgroundColor: tier.glowColor,
                    boxShadow: `0 0 30px ${tier.glowColor}`,
                  }}
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <Card
                  className={`bg-card border relative z-10 overflow-hidden h-full flex flex-col`}
                  style={{
                    borderColor: tier.borderColor,
                    boxShadow: `0 0 15px ${tier.glowColor}`,
                    height: "100%",
                  }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-center mb-6">
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border mb-4 mx-auto"
                        style={{
                          borderColor: tier.borderColor,
                          boxShadow: `0 0 15px ${tier.glowColor}`,
                        }}
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <span className={tier.accentColor}>{tier.icon}</span>
                      </motion.div>
                      <h4
                        className={`text-2xl font-bold ${tier.accentColor} mb-2 font-orbitron italic`}
                      >
                        {tier.tier}
                      </h4>
                      <p className="text-xl font-bold text-muted-foreground">
                        {tier.investment}
                      </p>
                    </div>

                    <ul className="text-l space-y-1 mb-3 flex-grow">
                      {tier.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start space-x-2"
                          whileHover={{ x: 5 }}
                        >
                          <span className={tier.accentColor}>•</span>
                          <span className="text-m text-muted-foreground font-bold">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border pointer-events-none"
                      style={{
                        borderColor: tier.borderColor,
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 10px ${tier.glowColor}`,
                          `0 0 20px ${tier.glowColor}`,
                          `0 0 10px ${tier.glowColor}`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};