import { motion } from "framer-motion";
import { Github, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "hackgenesis.rvscet@gmail.com", label: "Email" },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    {
      icon: Instagram,
      href: "https://www.instagram.com/helix.rvscet/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/helix-tech-ai-club",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-secondary/20 to-background py-16 px-4 overflow-hidden">
      {/* F1 Rear Wing Design */}
      <div className="absolute inset-0 opacity-10">
        <svg
          viewBox="0 0 1200 400"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(0, 84%, 55%)" />
              <stop offset="50%" stopColor="hsl(200, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(0, 84%, 55%)" />
            </linearGradient>
          </defs>

          {/* Wing Shape */}
          <path
            d="M100 200 Q300 100 600 200 Q900 300 1100 200 L1100 250 Q900 350 600 250 Q300 150 100 250 Z"
            fill="url(#wingGradient)"
            opacity="0.3"
          />
          <path
            d="M150 220 Q350 140 600 220 Q850 300 1050 220 L1050 240 Q850 320 600 240 Q350 160 150 240 Z"
            fill="url(#wingGradient)"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* HackGenesis Branding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
  {/* Logo 1 */}
  <img
    src="/Navigation_Bar/HQ-LOGO.png"
    alt="Logo 1"
    className="w-10 h-10 object-contain rounded"
  />

  {/* Logo 2 */}
  <img
    src="/Navigation_Bar/helix_redlogo.png"
    alt="Logo 2"
    className="w-10 h-10 object-contain rounded"
  />

  {/* Logo 3 */}
  <img
    src="/Navigation_Bar/rvslogo.png"
    alt="Logo 3"
    className="w-10 h-10 object-contain rounded"
  />
</div>


            <p className="text-muted-foreground font-rajdhani leading-relaxed text-base font-bold">
              Where coding meets the precision and intensity of Formula 1
              racing. 24 hours of high-speed innovation at RVSCET Jamshedpur.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-orbitron text-xl font-bold text-gradient-chrome">
              EVENT INFO
            </h4>

            <div className="space-y-4">
              <div>
                <h5 className="font-rajdhani font-semibold text-foreground">
                  Date & Time
                </h5>
                <p className="text-muted-foreground text-base font-bold">
                  September 7-8, 2025 • 24 Hours
                </p>
              </div>

              <div>
                <h5 className="font-rajdhani font-semibold text-foreground">
                  Venue
                </h5>
                <p className="text-muted-foreground text-base font-bold">
                  RVSCET Jamshedpur, Jharkhand
                </p>
              </div>

              <div>
                <h5 className="font-rajdhani font-semibold text-foreground">
                  Organizer
                </h5>
                <p className="text-muted-foreground text- font-bold">
                  Helix - Technical Club
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-orbitron text-xl font-bold text-gradient-electric">
              QUICK LINKS
            </h4>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Registration",
                "Guidelines",
                "Schedule",
                "Contact",
                "About Helix",
                "Campus Map",
                "Accommodation",
                "Support",
              ].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground hover:text-primary text-base font-bold font-rajdhani transition-all duration-300 relative"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Racing Stripe Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-0.5 bg-gradient-speed mb-8 origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-8">
            <p className="text-muted-foreground text-base font-bold font-rajdhani">
              © 2025 HackGenesis. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-muted-foreground font-rajdhani">
              <a
                href="#"
                className="hover:text-primary transition-colors text-base font-bold"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors text-base font-bold"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors text-base font-bold"
              >
                Code of Conduct
              </a>
            </div>
          </div>

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center space-x-2 text-sm text-muted-foreground font-rajdhani"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-racing"></div>
            <span className="text-base font-bold">
              Built with speed & precision
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Speed Lines Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>
    </footer>
  );
};

export default Footer;
