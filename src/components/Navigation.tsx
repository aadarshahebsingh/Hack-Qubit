// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "HOME", href: "#hero" },
//     { name: "ABOUT", href: "#about" },
//     { name: "VENUE", href: "#venue" },
//     { name: "PRIZES", href: "#prizes" },
//     { name: "PROBLEMS", href: "#problems" },
//     { name: "SPONSORS", href: "#sponsors" },
//     { name: "FAQ", href: "#faq" },
//   ];

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     element?.scrollIntoView({ behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-background/95 backdrop-blur-md border-b border-primary/20"
//             : "bg-transparent"
//         }`}
//       >
//         <div className='max-w-7xl mx-auto px-4'>
//           <div className='flex items-center justify-between h-16 md:h-20'>
//             {/* Logo */}

//             {/* Desktop Navigation */}
//             <div className='hidden md:flex items-center justify-center space-x-8 w-full'>
//               {navItems.map((item, index) => (
//                 <motion.button
//                   key={item.name}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   onClick={() => scrollToSection(item.href)}
//                   className='font-rajdhani font-semibold text-lg text-red-500 hover:text-red-500 transition-colors relative group drop-shadow-[0_0_5px_red] md:text-xl'
//                 >
//                   {item.name}
//                   <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
//                 </motion.button>
//               ))}
//             </div>

//             {/* CTA Button */}

//             {/* Mobile Menu Button */}
//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className='md:hidden w-10 h-10 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center'
//             >
//               {isMobileMenuOpen ? (
//                 <X className='w-5 h-5 text-primary' />
//               ) : (
//                 <Menu className='w-5 h-5 text-primary' />
//               )}
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ opacity: 0, x: "100%" }}
//         animate={{
//           opacity: isMobileMenuOpen ? 1 : 0,
//           x: isMobileMenuOpen ? "0%" : "100%",
//         }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         className={`fixed top-0 right-0 h-full w-64 bg-background/95 backdrop-blur-md border-l border-primary/20 z-40 md:hidden ${
//           isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
//         }`}
//       >
//         <div className='pt-20 px-6'>
//           <div className='space-y-6'>
//             {navItems.map((item, index) => (
//               <motion.button
//                 key={item.name}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{
//                   opacity: isMobileMenuOpen ? 1 : 0,
//                   x: isMobileMenuOpen ? 0 : 20,
//                 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 onClick={() => scrollToSection(item.href)}
//                 className='block w-full text-left font-rajdhani font-semibold text-lg text-muted-foreground hover:text-primary transition-colors'
//               >
//                 {item.name}
//               </motion.button>
//             ))}

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{
//                 opacity: isMobileMenuOpen ? 1 : 0,
//                 x: isMobileMenuOpen ? 0 : 20,
//               }}
//               transition={{ duration: 0.3, delay: 0.7 }}
//               className='pt-6'
//             >
//               <Button variant='racing' size='lg' className='w-full'>
//                 REGISTER NOW
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setIsMobileMenuOpen(false)}
//           className='fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden'
//         />
//       )}
//     </>
//   );
// };

// export default Navigation;


import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT", href: "#about" },
  { name: "VENUE", href: "#venue" },
  { name: "PRIZES", href: "#prizes" },
  {name: "SCHEDULE", href:"#timeline"},
  { name: "PROBLEMS", href: "#problems" },
  {name:"EVENTS",href:"#events"},
  { name: "SPONSORS", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🧠 Debounced scroll effect
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Nav Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-primary/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-4">
              <img
                src="/Navigation_Bar/HQ-LOGO.png"
                alt="Logo 1"
                className="h-20 w-auto"
              />
              <img
                src="/Navigation_Bar/helix_redlogo.png"
                alt="Logo 2"
                className="h-20 w-auto"
              />
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-center space-x-8 w-full">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-rajdhani font-semibold text-lg text-red-500 hover:text-red-500 transition-colors relative group md:text-xl drop-shadow-[0_0_5px_red]"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <img
                src="/Navigation_Bar/rvsLogoHackQubit.png"
                alt="Logo 3"
                className="h-20 w-auto"
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="md:hidden w-10 h-10 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-primary" />
                ) : (
                  <Menu className="w-5 h-5 text-primary" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-background/95 backdrop-blur-md border-l border-primary/20 z-40 md:hidden"
            >
              <div className="pt-20 px-6 space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block w-full text-left font-rajdhani font-semibold text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <Button variant="racing" size="lg" className="w-full">
                    REGISTER NOW
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
