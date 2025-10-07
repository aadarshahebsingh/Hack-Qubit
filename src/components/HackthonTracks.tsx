import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Brain,
  Shield,
  GraduationCap,
  Banknote,
  Icon,
  Globe,
  Users,
  X,
  ChevronDown,
  CircleHelp,
  ChevronUp,
} from "lucide-react";

const problemDomains = [
  {
    id: "D1",
    domain: "Cybersecurity",
    problem: [
      {
        problemId: "CS1",
        title: "Detection and Prevention of Fileless Malware",
        context:
          "Fileless malware runs entirely in memory, exploiting trusted system tools, making it difficult for traditional antivirus systems to detect. Organizations need real-time defense mechanisms to secure digital infrastructure.",
        description:
          "Develop a cyber defense solution capable of detecting and preventing fileless malware in real time. Monitor system activities, identify suspicious behaviors, and take preventive actions like blocking malicious processes, alerting administrators, or isolating compromised components. Techniques like machine learning, behavioral analysis, and system telemetry monitoring can enhance detection accuracy.",
        goal: [
          "Implement real-time behavioral detection for PowerShell, WMI, and registry modifications",
          "Provide immediate prevention mechanisms without disrupting normal operations",
          "Use machine learning and anomaly detection to differentiate malicious activities",
          "Continuously monitor system utilities for misuse",
          "Generate detailed threat logs with severity and remediation recommendations",
          "Ensure lightweight, secure, and resource-efficient design",
          "Offer an intuitive dashboard for alert management and policy control",
        ],
      },
      {
        problemId: "CS2",
        title:
          "Privacy-Focused Encrypted Messaging Platform with Self-Destructing Messages",
        context:
          "With growing concerns over digital privacy and data misuse, users increasingly seek secure ways to communicate online. Many existing messaging platforms collect metadata, store messages on centralized servers, or expose user data to potential breaches.",
        description:
          "Develop a secure and privacy-focused messaging platform that ensures complete end-to-end encryption, allowing users to exchange messages, media, and files safely. The system should include features such as self-destructing messages, zero data retention, and metadata protection. The solution must prioritize anonymity, usability, and robust encryption protocols while maintaining high performance and accessibility across devices.",
        goal: [
          "Implement end-to-end encryption for all user communications",
          "Enable self-destructing messages and zero data retention policies",
          "Prevent storage of metadata that could compromise privacy",
          "Ensure anonymity and user control over message lifespan",
          "Design a lightweight, cross-platform web and mobile interface",
          "Maintain high security without compromising speed or usability",
          "Protect against man-in-the-middle and server-side attacks",
        ],
      },
    ],
  },
  {
    id: "D2",
    domain: "Public Safety & Welfare",
    problem: [
      {
        problemId: "HW1",
        title: "Smart Health Diagnostics and Assistance Platform",
        context:
          "Many individuals delay medical consultation due to lack of awareness or access. There is a need for an accessible digital platform to understand symptoms, receive preliminary assessments, and take timely health actions.",
        description:
          "Design a smart health diagnostics platform that allows users to input symptoms or upload images of health concerns and receive quick assessments. The platform should support continuous health monitoring, preventive care suggestions, and seamless communication with healthcare professionals or emergency services.",
        goal: [
          "Accurately interpret user-reported symptoms",
          "Analyze uploaded images to detect visible health conditions",
          "Integrate with wearable devices for continuous health monitoring",
          "Generate alerts and preventive health recommendations",
          "Provide real-time guidance through a virtual assistant",
          "Enable communication with doctors and emergency responders",
          "Ensure data privacy and secure handling of health information",
        ],
      },
      {
        problemId: "PW1",
        title: "Multiscript Transliteration System for Indian Languages",
        context:
          "India has a rich diversity of languages with unique scripts, creating barriers for people who cannot read unfamiliar scripts. Existing tools often alter pronunciation, affecting understanding and communication.",
        description:
          "Design a comprehensive solution, accessible via web and mobile platforms, that automatically detects, reads, and transliterates text from any Indian script into another in real time. The solution should handle typed and image-based inputs, preserve pronunciation, and provide an intuitive interface while ensuring strong data privacy.",
        goal: [
          "Support multiple Indian scripts with accurate handling of ligatures, vowels, and consonants",
          "Maintain correct pronunciation and phonetic equivalence across scripts",
          "Efficiently detect and extract text from signboards, documents, and other sources",
          "Enable real-time transliteration with minimal delay",
          "Provide offline functionality for low-network environments",
          "Ensure local or encrypted processing for data privacy",
          "Design an easy-to-use multilingual interface for all age groups",
        ],
      },
    ],
  },
  {
    id: "D3",
    domain: "FinTech",
    problem: [
      {
        problemId: "FT1",
        title: "Intelligent Income Tax Assistant for Common People",
        context:
          "Filing income tax returns is often confusing for salaried individuals, especially first-time earners. Errors, reliance on paid services, and data privacy concerns are common issues.",
        description:
          "Develop a technology-driven solution that helps users calculate, understand, and file income tax seamlessly. Use intelligent document processing and natural language understanding to extract data from inputs, compare tax regimes, and guide users step-by-step while ensuring high data security.",
        goal: [
          "Automate accurate tax computation from user inputs and uploaded documents",
          "Provide interactive guidance via chatbot or voice assistant",
          "Extract key details from Form-16 and salary slips automatically",
          "Offer personalized deduction suggestions and missed saving alerts",
          "Compare old and new tax regimes and suggest the most beneficial option",
          "Ensure transparency in calculations and maintain strict data privacy",
          "Design a simple, multilingual interface suitable for non-technical users",
        ],
      },
      {
        problemId: "FT4",
        title: "AI Chatbot for Personal Finance",
        context:
          "Many users find it difficult to track spending, manage budgets, and make informed financial decisions. Personalized guidance is often unavailable, especially for young professionals and first-time earners.",
        description:
          "Develop an AI-powered chatbot that helps users manage their personal finances by tracking expenses, providing budgeting advice, predicting future spending patterns, and suggesting personalized saving goals. The chatbot should be interactive, easy to use, and integrate with users’ financial data securely, empowering them to make smarter financial decisions.",
        goal: [
          "Track user spending and categorize transactions automatically",
          "Provide personalized budgeting advice based on financial behavior",
          "Predict future expenses using historical data and trends",
          "Suggest tailored saving goals to meet short- and long-term objectives",
          "Ensure secure handling of sensitive financial data",
          "Offer a conversational interface via web and mobile platforms",
          "Promote financial literacy and informed decision-making for users",
        ],
      },
    ],
  },
  {
    id: "D5",
    domain: "Web3 & Digital Governance",
    problem: [
      {
        problemId: "PW2",
        title:
          "Web3-Enabled Birth and Death Registration System for Rural Areas",
        context:
          "In many rural areas, registering births and deaths is often delayed or inaccurate due to lack of awareness, manual paperwork, or inaccessible government offices. This leads to legal, social, and welfare challenges for citizens who cannot prove their identity or claim benefits promptly.",
        description:
          "Develop a Web3-enabled registration system that allows secure, transparent, and tamper-proof recording of birth and death events in rural areas. The solution should provide an easy-to-use interface accessible via mobile and web platforms, work offline or in low-network conditions, and integrate with local authorities to ensure official recognition. Blockchain technology can ensure data integrity and reduce fraud while giving citizens control over their own records.",
        goal: [
          "Enable secure, tamper-proof registration of births and deaths using blockchain",
          "Provide web and mobile access for rural users with offline support",
          "Integrate with local government authorities for official validation",
          "Allow citizens to securely access and share their records",
          "Simplify registration workflow to reduce errors and delays",
          "Ensure data privacy and compliance with legal requirements",
          "Promote adoption through awareness campaigns and easy onboarding",
        ],
      },
      {
        problemId: "WG2",
        title: "Decentralized Donations Platform for Verified Social Causes",
        context:
          "Traditional donation systems often involve multiple intermediaries, leading to delays, reduced transparency, and doubts about fund utilization. Donors may not be confident that their contributions reach the intended social causes.",
        description:
          "Develop a Web3-enabled decentralized donations platform that directly connects donors with verified social causes, ensuring transparency, accountability, and traceability of funds. The platform should allow donors to track donations in real time, verify causes, and facilitate secure transactions without relying on intermediaries. Blockchain technology can provide tamper-proof records and enhance trust between donors and organizations.",
        goal: [
          "Create a secure, decentralized platform for direct donations",
          "Verify social causes to ensure legitimacy and transparency",
          "Enable donors to track funds and usage in real time",
          "Ensure privacy and security of donor information",
          "Support web and mobile access for ease of use",
          "Promote trust and reduce reliance on intermediaries",
          "Facilitate seamless, low-cost transactions using blockchain",
        ],
      },
    ],
  },
  {
    id: "D8",
    domain: "AI & Machine Learning",
    problem: [
      {
        problemId: "AI2",
        title: "Hate Speech and Offensive Content Detection in Social Media",
        context:
          "The rapid growth of social media has amplified the spread of harmful, hateful, and offensive content online. Manual moderation is insufficient to handle the volume and speed at which such content spreads, creating the need for intelligent, automated moderation tools.",
        description:
          "Develop an AI/ML-powered natural language processing (NLP) model capable of detecting and classifying hate speech or offensive comments in social media text. The solution should leverage pre-trained models like BERT, RoBERTa, or similar transformers to understand context, sentiment, and tone accurately. It must focus on improving accuracy, fairness, and minimizing algorithmic bias to ensure ethical and inclusive moderation. The final model should be adaptable for integration with social media platforms to promote safer online spaces.",
        goal: [
          "Develop an NLP model for classifying hate speech and offensive content",
          "Leverage pre-trained transformer models like BERT or RoBERTa for contextual understanding",
          "Improve detection accuracy across diverse languages and dialects",
          "Implement fairness and bias mitigation techniques to ensure ethical moderation",
          "Design scalable APIs for integration with social media platforms",
          "Support multilingual analysis to promote inclusivity",
          "Enhance transparency and explainability in moderation decisions",
        ],
      },
      {
        problemId: "AI3",
        title: "Startup Success Prediction",
        context:
          "Predicting a startup’s success is a complex challenge influenced by multiple factors such as financial performance, team composition, product-market fit, and external market conditions. Early prediction can help investors, founders, and policymakers make informed decisions and reduce the risk of failure.",
        description:
          "Develop an AI/ML-based predictive model that analyzes financial indicators, founding team data, and market trends to determine the likelihood of a startup’s success or failure. The model should leverage historical startup data, perform feature engineering, and use advanced machine learning algorithms to identify key success patterns. The final system should present interpretable insights, helping stakeholders understand what factors contribute most to success.",
        goal: [
          "Collect and preprocess startup-related datasets including funding, team size, and industry data",
          "Develop predictive models using machine learning algorithms to classify startups as successful or unsuccessful",
          "Identify and rank key features influencing startup outcomes",
          "Implement explainable AI techniques to make predictions transparent and interpretable",
          "Design an interactive dashboard to visualize prediction results and key metrics",
          "Ensure model generalization across industries and funding stages",
          "Provide actionable insights for founders, investors, and policymakers",
        ],
      },
    ],
  },
  {
    id: "D13",
    domain: "EdTech & Smart Campus",
    problem: [
      {
        problemId: "ED1",
        title: "Rural Digital Education Platform",
        context:
          "Many rural schools struggle with outdated computers, poor internet connectivity, and limited access to quality digital learning materials. Students often lack basic digital skills, widening the educational gap between urban and rural areas. Teachers face challenges delivering interactive and engaging lessons without proper technological resources.",
        description:
          "Develop a digital education solution for rural schools that works offline, supports low-end devices, and provides interactive learning content in local languages. The platform should empower students to build essential digital skills, improve learning outcomes, and prepare them for future academic and professional opportunities. Teacher dashboards should allow monitoring of student progress and classroom performance to ensure effective learning.",
        goal: [
          "Provide offline-accessible digital learning content for rural students",
          "Support low-end devices and local language content",
          "Enable interactive lessons to enhance student engagement",
          "Offer teacher dashboards to track student progress and performance",
          "Bridge the digital literacy gap between rural and urban students",
          "Improve academic outcomes and prepare students for future opportunities",
          "Promote equitable access to quality digital education",
        ],
      },
      {
        problemId: "ED2",
        title: "Language Learning Assistant",
        context:
          "Students learning new languages often struggle with pronunciation, grammar, and fluency. Traditional classroom methods may not provide personalized feedback, making it difficult to improve language skills effectively.",
        description:
          "Develop an AI-powered language learning assistant that helps students improve pronunciation and grammar in real time. The system should analyze spoken and written inputs, provide corrective feedback, suggest improvements, and track progress over time. The platform should support multiple languages and offer an engaging, interactive experience for learners of all ages.",
        goal: [
          "Detect and correct pronunciation errors in spoken language",
          "Provide grammar correction for written and spoken inputs",
          "Offer real-time feedback and improvement suggestions",
          "Track student progress and learning patterns over time",
          "Support multiple languages for diverse learners",
          "Create an engaging and interactive learning experience",
          "Enable both web and mobile accessibility for wider reach",
        ],
      },
    ],
  },
];

const themes = [
  {
    id: 1,
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-blue-500 to-purple-600",
    description: "Build intelligent solutions using AI and ML technologies",
    position: { desktop: { x: 15, y: 25 }, mobile: { x: 20, y: 15 } },
  },
  {
    id: 2,
    title: "Web3 & Digital Governance",
    icon: Globe,
    color: "from-green-500 to-emerald-600",
    description: "Explore blockchain and decentralized technologies",
    position: { desktop: { x: 75, y: 15 }, mobile: { x: 80, y: 25 } },
  },
  {
    id: 3,
    title: "Cybersecurity",
    icon: Shield,
    color: "from-red-500 to-pink-600",
    description: "Secure digital identities and protect data",
    position: { desktop: { x: 85, y: 55 }, mobile: { x: 20, y: 40 } },
  },
  {
    id: 4,
    title: "EdTech & Smart Campus",
    icon: GraduationCap,
    color: "from-orange-500 to-yellow-600",
    description: "Transform education with technology",
    position: { desktop: { x: 70, y: 85 }, mobile: { x: 80, y: 55 } },
  },
  {
    id: 5,
    title: "Public Safety & Welfare",
    icon: Users,
    color: "from-teal-500 to-cyan-600",
    description: "Enhance community safety and welfare",
    position: { desktop: { x: 25, y: 90 }, mobile: { x: 20, y: 70 } },
  },
  {
    id: 6,
    title: "FinTech",
    icon: Banknote,
    color: "from-indigo-500 to-blue-600",
    description: "Revolutionize financial technology",
    position: { desktop: { x: 10, y: 65 }, mobile: { x: 80, y: 85 } },
  },
];

// Custom Modal Component
const CustomModal = ({
  isOpen,
  onClose,
  title,
  icon: Icon,
  color,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-background border border-primary/30 rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary/20">
          <div className="flex items-center gap-3">
            {Icon && (
              <div
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${color} p-2`}
              >
                <Icon className="w-full h-full text-white" />
              </div>
            )}
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(80vh-80px)]">
          <div className="p-6">{children}</div>
        </div>
      </motion.div>
    </div>
  );
};

const SponsorCard = () => {
  const sponsor = {
    logo: "/icon.png",
    name: "Izzki Tech Challenge: Unlock Extra Rewards!",
    about:
      "Izzki Tech is an NVIDIA Inception and AI Kiran Partner, with over 20 years of experience delivering for Fortune 500s and startups. We build practical AI that proves efficiency and growth within 30 days.",
    problemStatement: {
      description:
        "Turning Facebook leads into booked clinic appointments is a critical, high-impact business problem. Your challenge is to build the AI solution that can prove efficiency and growth within 30 days.",
      deliverables: [
        "Import & clean leads.csv (dedupe, consent filter, normalize sources).",
        "Landing + one-screen booking (writes to bookings).",
        "On confirmation, POST to /sendMessage stub (console payload).",
        "Generate Weekly Growth Brief (HTML/PDF) showing KPIs + uplift vs baseline + 3 next actions.",
      ],
    },
  };


  return (
    <div className="max-w-5xl mx-auto  rounded-2xl shadow-md p-6 mt-20 text-md font-rajdhani border border-red-500">
      {/* Header Section */}
      <div
        className="flex justify-between items-center cursor-pointer"
       
      >
        <div className="flex items-center space-x-4">
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="w-14 h-15 object-contain  rounded-xl shadow-sm"
          />
          <div>
            <h2 className="text-xl font-bold text-yellow-400">{sponsor.name}</h2>
            <p className="text-sm font-rajdhani font-bold text-white">{sponsor.about}</p>
          </div>
        </div>

      </div>

      {/* Animated dropdown content */}
      <AnimatePresence>
        { (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4 p-4 border rounded-lg shadow-sm "
          >
            {/* Problem Statement */}
            <p className="mb-4 text-white text-md font-rajdhani font-bold">
              {sponsor.problemStatement.description}
            </p>
            <p className="mb-4 text-purple-500 text-md font-rajdhani font-bold">
              One-liner: Turn Facebook leads into booked clinic appointments in
              one screen, and auto-generate a Weekly Growth Brief in 24 hours.
            </p>

            {/* Deliverables as bullet points */}
            <ul className="list-disc list-inside space-y-2 text-yellow-50 text-md font-rajdhani font-bold">
              {sponsor.problemStatement.deliverables.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HackathonTracks = () => {
  const containerRef = useRef(null);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0, rotation: 0 });
  const [openProblemId, setOpenProblemId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springCarProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const unsubscribe = springCarProgress.on("change", (latest) => {
      const progress = Math.min(Math.max(latest, 0), 1);

      const trackPoints = isMobile
        ? [
            { x: 10, y: 10, rotation: 45 },
            { x: 85, y: 20, rotation: 135 },
            { x: 15, y: 35, rotation: -45 },
            { x: 85, y: 50, rotation: 90 },
            { x: 15, y: 65, rotation: -135 },
            { x: 85, y: 80, rotation: 180 },
            { x: 50, y: 95, rotation: -90 },
          ]
        : [
            { x: 5, y: 20, rotation: 45 },
            { x: 80, y: 10, rotation: 90 },
            { x: 90, y: 50, rotation: 135 },
            { x: 75, y: 80, rotation: 180 },
            { x: 20, y: 85, rotation: -135 },
            { x: 5, y: 60, rotation: -90 },
            { x: 15, y: 30, rotation: 0 },
          ];

      const segmentLength = 1 / (trackPoints.length - 1);
      const currentSegment = Math.floor(progress / segmentLength);
      const segmentProgress = (progress % segmentLength) / segmentLength;

      if (currentSegment < trackPoints.length - 1) {
        const startPoint = trackPoints[currentSegment];
        const endPoint = trackPoints[currentSegment + 1];

        const x = startPoint.x + (endPoint.x - startPoint.x) * segmentProgress;
        const y = startPoint.y + (endPoint.y - startPoint.y) * segmentProgress;
        const rotation =
          startPoint.rotation +
          (endPoint.rotation - startPoint.rotation) * segmentProgress;

        setCarPosition({ x, y, rotation });
      }
    });

    return unsubscribe;
  }, [springCarProgress, isMobile]);

  const toggleProblem = (id) => {
    setOpenProblemId(openProblemId === id ? null : id);
  };

  const getDomainProblems = (domainTitle) => {
    return (
      problemDomains.find((domain) => domain.domain === domainTitle)?.problem ||
      []
    );
  };

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTheme(null);
    setOpenProblemId(null);
  };

  // Desktop track path - Complex F1 style curves
  const desktopTrackPath =
    "M 100 200 Q 300 50 600 100 Q 900 150 950 400 Q 900 700 700 850 Q 500 950 300 900 Q 100 850 50 600 Q 100 400 200 350 Q 400 300 500 250 Q 700 200 800 300 Q 850 450 750 550 Q 600 600 450 550 Q 300 500 250 400 Q 200 300 300 250";

  // Mobile track path - Vertical S-curves
  const mobileTrackPath =
    "M 80 50 Q 200 80 150 150 Q 100 220 180 280 Q 260 340 120 400 Q 50 460 150 520 Q 250 580 100 640 Q 50 700 150 750";

  return (
    <section
      id="problems"
      ref={containerRef}
      className="min-h-screen relative overflow-hidden py-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,transparent_50%)] opacity-10" />

      {/* Speed lines animation */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}%`,
              left: `-${20 + Math.random() * 40}%`,
            }}
            animate={{
              x: [`${-100}%`, `${window.innerWidth + 100}px`],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
                PROBLEM STATEMENT
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
                PROBLEM STATEMENT
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Track Container */}
        <div className="relative w-full h-[600px] md:h-[800px] mx-auto max-w-6xl">
          {/* Track SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={isMobile ? "0 0 300 700" : "0 0 1000 1000"}
            fill="none"
          >
            {/* 3D Track Effects */}
            <defs>
              {/* Track surface gradient */}
              <linearGradient
                id="trackSurface"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="50%" stopColor="#2d2d2d" />
                <stop offset="100%" stopColor="#1a1a1a" />
              </linearGradient>

              {/* Neon blue side lighting */}
              <linearGradient id="neonBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#40e0d0" stopOpacity="1" />
                <stop offset="100%" stopColor="#00bcd4" stopOpacity="0.8" />
              </linearGradient>

              {/* Red and white curb pattern */}
              <pattern
                id="curbPattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="10" height="20" fill="#ff0000" />
                <rect x="10" y="0" width="10" height="20" fill="#ffffff" />
              </pattern>

              {/* Glow effects */}
              <filter
                id="neonGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter
                id="trackShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="12"
                  floodColor="#000000"
                  floodOpacity="0.6"
                />
              </filter>
            </defs>

            {/* Track shadow/depth */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="#000000"
              strokeWidth="32"
              strokeOpacity="0.4"
              fill="none"
              transform="translate(4, 8)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Main track surface */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="url(#trackSurface)"
              strokeWidth="24"
              fill="none"
              filter="url(#trackShadow)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
            />

            {/* Red and white curbs (outer) */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="url(#curbPattern)"
              strokeWidth="6"
              fill="none"
              transform="translate(15, 0)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Red and white curbs (inner) */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="url(#curbPattern)"
              strokeWidth="6"
              fill="none"
              transform="translate(-15, 0)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Neon blue side lighting (outer) */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="url(#neonBlue)"
              strokeWidth="3"
              fill="none"
              filter="url(#neonGlow)"
              transform="translate(18, 0)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
            />

            {/* Neon blue side lighting (inner) */}
            <motion.path
              d={isMobile ? mobileTrackPath : desktopTrackPath}
              stroke="url(#neonBlue)"
              strokeWidth="3"
              fill="none"
              filter="url(#neonGlow)"
              transform="translate(-18, 0)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
            />
          </svg>

          {/* Ferrari SF71H Formula 1 Car */}
          <motion.div
            className="absolute w-12 h-6 md:w-16 md:h-8 pointer-events-none z-20"
            style={{
              left: `${carPosition.x}%`,
              top: `${carPosition.y}%`,
              transform: `translate(-50%, -50%) rotate(${carPosition.rotation}deg)`,
            }}
          >
            {/* Tire smoke trail */}
            <motion.div
              className="absolute right-full top-1/2 w-16 h-4 pointer-events-none"
              animate={{
                opacity: [0.6, 0.3, 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 0.4, repeat: Infinity }}
            >
              <div className="w-full h-full bg-gradient-to-l from-gray-400/50 to-transparent rounded-full blur-sm" />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-white/30 to-transparent rounded-full blur-xs" />
            </motion.div>

            {/* Main Ferrari body */}
            <motion.div
              className="relative w-full h-full"
              animate={{
                filter: [
                  "drop-shadow(0 0 8px #dc2626)",
                  "drop-shadow(0 0 12px #dc2626) drop-shadow(0 0 16px #dc2626)",
                  "drop-shadow(0 0 8px #dc2626)",
                ],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {/* Car chassis */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-500 rounded-lg shadow-xl">
                {/* Ferrari front nose */}
                <div className="absolute left-0 top-1/2 w-1/4 h-1/3 bg-red-600 rounded-l-full transform -translate-y-1/2" />

                {/* Cockpit area */}
                <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-gray-900 rounded-sm" />

                {/* Halo safety device */}
                <div className="absolute left-1/3 top-1/6 w-1/3 h-1/6 border border-gray-400 rounded-t-full" />

                {/* Side mirrors */}
                <div className="absolute left-1/3 top-0 w-1 h-1 bg-gray-400 rounded" />
                <div className="absolute left-1/3 bottom-0 w-1 h-1 bg-gray-400 rounded" />

                {/* Ferrari branding stripe */}
                <div className="absolute left-1/4 top-1/2 w-1/2 h-0.5 bg-white transform -translate-y-1/2" />

                {/* Rear wing */}
                <div className="absolute right-0 top-1/3 w-1/6 h-1/3 bg-red-500 border border-red-700" />
              </div>

              {/* Glowing brake discs */}
              <motion.div
                className="absolute left-1/8 top-1/2 w-1 h-1 bg-orange-400 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 4px #fb923c",
                    "0 0 8px #fb923c, 0 0 12px #f97316",
                    "0 0 4px #fb923c",
                  ],
                }}
                transition={{ duration: 0.3, repeat: Infinity }}
              />
              <motion.div
                className="absolute right-1/8 top-1/2 w-1 h-1 bg-orange-400 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 4px #fb923c",
                    "0 0 8px #fb923c, 0 0 12px #f97316",
                    "0 0 4px #fb923c",
                  ],
                }}
                transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }}
              />
            </motion.div>

            {/* Speed particles */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute right-full top-1/2 w-1 h-px bg-cyan-400"
                style={{
                  left: `-${(i + 1) * 8}px`,
                  top: `${50 + (Math.random() - 0.5) * 20}%`,
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>

          {/* Theme Nodes */}
          {themes?.map((theme, index) => {
            const Icon = theme?.icon;
            const position = isMobile
              ? theme.position.mobile
              : theme.position.desktop;

            return (
              <motion.div
                key={theme.id}
                className="absolute z-10"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.button
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${theme.color} p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleThemeClick(theme)}
                >
                  <Icon className="w-full h-full text-white drop-shadow-lg" />

                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/50"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Theme label */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    initial={{ opacity: 1 }}
                  >
                    <span className="text-xs md:text-sm font-semibold text-foreground px-2 py-1 rounded ">
                      {theme.title}
                    </span>
                  </motion.div>
                </motion.button>
              </motion.div>
            );
          })}

          {/* Progress indicator */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Track Progress:</span>
              <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Modal */}
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedTheme?.title}
        icon={selectedTheme?.icon}
        color={selectedTheme?.color}
      >
        {selectedTheme && (
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              {selectedTheme.description}
            </p>

            {/* Problem Statements */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">
                Problem Statements
              </h3>
              {getDomainProblems(selectedTheme.title).length > 0 ? (
                getDomainProblems(selectedTheme.title).map((problem) => (
                  <div
                    key={problem.problemId}
                    className="border border-primary/30 rounded-xl overflow-hidden"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleProblem(problem.problemId)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CircleHelp className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-rajdhani text-lg font-bold text-foreground">
                          {problem.title}
                        </h3>
                      </div>

                      {/* Chevron */}
                      <div
                        className={`w-8 h-8 bg-accent/20 border border-accent/50 rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 ${
                          openProblemId === problem.problemId
                            ? "rotate-180"
                            : ""
                        }`}
                      >
                        <ChevronDown className="w-5 h-5 text-accent" />
                      </div>
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openProblemId === problem.problemId
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-4">
                        <div className="pl-14">
                          <p className="text-gray-300 font-rajdhani leading-relaxed font-base font-semibold mb-3">
                            {problem.context}
                          </p>

                          <h5 className="font-semibold text-orange-400">
                            Description:
                          </h5>
                          <ul className="list-disc list-inside mb-4 text-white space-y-1">
                            {problem?.description}
                          </ul>

                          <h5 className="font-semibold text-green-400">
                            Goals:
                          </h5>
                          <ul className="list-decimal list-inside text-white space-y-1">
                            {problem.goal.map((goal, i) => (
                              <li key={i}>{goal}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg text-muted-foreground">
                    Problem statements for this domain will be available soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </CustomModal>
      <SponsorCard />
    </section>
  );
};

export default HackathonTracks;



// import { useEffect, useRef, useState } from 'react';
// import { motion, useScroll, useSpring, } from 'framer-motion';
// import { Brain, Shield, GraduationCap, Banknote, Globe, Users } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// const themes = [
//   {
//     id: 1,
//     title: "AI & Machine Learning",
//     icon: Brain,
//     color: "from-blue-500 to-purple-600",
//     description: "Build intelligent solutions using AI and ML technologies",
//     position: { desktop: { x: 15, y: 25 }, mobile: { x: 20, y: 15 } }
//   },
//   {
//     id: 2,
//     title: "Web3 & Digital Governance",
//     icon: Globe,
//     color: "from-green-500 to-emerald-600",
//     description: "Explore blockchain and decentralized technologies",
//     position: { desktop: { x: 75, y: 15 }, mobile: { x: 80, y: 25 } }
//   },
//   {
//     id: 3,
//     title: "Cybersecurity & Digital Identity",
//     icon: Shield,
//     color: "from-red-500 to-pink-600",
//     description: "Secure digital identities and protect data",
//     position: { desktop: { x: 85, y: 55 }, mobile: { x: 20, y: 40 } }
//   },
//   {
//     id: 4,
//     title: "EdTech & Smart Campus",
//     icon: GraduationCap,
//     color: "from-orange-500 to-yellow-600",
//     description: "Transform education with technology",
//     position: { desktop: { x: 70, y: 85 }, mobile: { x: 80, y: 55 } }
//   },
//   {
//     id: 5,
//     title: "Public Safety & Welfare",
//     icon: Users,
//     color: "from-teal-500 to-cyan-600",
//     description: "Enhance community safety and welfare",
//     position: { desktop: { x: 25, y: 90 }, mobile: { x: 20, y: 70 } }
//   },
//   {
//     id: 6,
//     title: "FinTech & Smart Transactions",
//     icon: Banknote,
//     color: "from-indigo-500 to-blue-600",
//     description: "Revolutionize financial technology",
//     position: { desktop: { x: 10, y: 65 }, mobile: { x: 80, y: 85 } }
//   }
// ];

// const HackathonTracks = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [selectedTheme, setSelectedTheme] = useState<number | null>(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [carPosition, setCarPosition] = useState({ x: 0, y: 0, rotation: 0 });
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const springCarProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     const unsubscribe = springCarProgress.on('change', (latest) => {
//       const progress = Math.min(Math.max(latest, 0), 1);
      
//       // Define track path points for desktop and mobile
//       const trackPoints = isMobile ? [
//         { x: 10, y: 10, rotation: 45 },
//         { x: 85, y: 20, rotation: 135 },
//         { x: 15, y: 35, rotation: -45 },
//         { x: 85, y: 50, rotation: 90 },
//         { x: 15, y: 65, rotation: -135 },
//         { x: 85, y: 80, rotation: 180 },
//         { x: 50, y: 95, rotation: -90 }
//       ] : [
//         { x: 5, y: 20, rotation: 45 },
//         { x: 80, y: 10, rotation: 90 },
//         { x: 90, y: 50, rotation: 135 },
//         { x: 75, y: 80, rotation: 180 },
//         { x: 20, y: 85, rotation: -135 },
//         { x: 5, y: 60, rotation: -90 },
//         { x: 15, y: 30, rotation: 0 }
//       ];

//       const segmentLength = 1 / (trackPoints.length - 1);
//       const currentSegment = Math.floor(progress / segmentLength);
//       const segmentProgress = (progress % segmentLength) / segmentLength;

//       if (currentSegment < trackPoints.length - 1) {
//         const startPoint = trackPoints[currentSegment];
//         const endPoint = trackPoints[currentSegment + 1];

//         const x = startPoint.x + (endPoint.x - startPoint.x) * segmentProgress;
//         const y = startPoint.y + (endPoint.y - startPoint.y) * segmentProgress;
//         const rotation = startPoint.rotation + (endPoint.rotation - startPoint.rotation) * segmentProgress;

//         setCarPosition({ x, y, rotation });
//       }
//     });

//     return unsubscribe;
//   }, [springCarProgress, isMobile]);

//   // Desktop track path - Complex F1 style curves
//   const desktopTrackPath = "M 100 200 Q 300 50 600 100 Q 900 150 950 400 Q 900 700 700 850 Q 500 950 300 900 Q 100 850 50 600 Q 100 400 200 350 Q 400 300 500 250 Q 700 200 800 300 Q 850 450 750 550 Q 600 600 450 550 Q 300 500 250 400 Q 200 300 300 250";
  
//   // Mobile track path - Vertical S-curves
//   const mobileTrackPath = "M 80 50 Q 200 80 150 150 Q 100 220 180 280 Q 260 340 120 400 Q 50 460 150 520 Q 250 580 100 640 Q 50 700 150 750";

//   return (
//     <section
//       id="problems"
//       ref={containerRef}
//       className="min-h-screen relative overflow-hidden py-20"
//     >
//       {/* Background effects */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,transparent_50%)] opacity-10" />

//       {/* Speed lines animation */}
//       <div className="absolute inset-0 overflow-hidden">
//         {Array.from({ length: 20 }).map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
//             style={{
//               top: `${Math.random() * 100}%`,
//               width: `${20 + Math.random() * 60}%`,
//               left: `-${20 + Math.random() * 40}%`,
//             }}
//             animate={{
//               x: [`${-100}%`, `${window.innerWidth + 100}px`],
//             }}
//             transition={{
//               duration: 2 + Math.random() * 3,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           {/* <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
//             Hackathon Tracks
//           </h2> */}
//           <div className="relative text-center mb-10 flex flex-col items-center justify-center">
//             <h1
//               className="hidden lg:flex text-6xl sm:text-7xl font-orbitron font-black opacity-30 pointer-events-none select-none uppercase tracking-wider absolute inset-0 items-center justify-center"
//               style={{ transform: "translateY(-32px)" }}
//             >
//               <span
//                 style={{
//                   background: "linear-gradient(to bottom, #f50e0eff, #1a1a1a)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 PROBLEM STATEMENT
//               </span>
//             </h1>

//             <h2 className="text-4xl sm:text-5xl font-orbitron font-extrabold uppercase tracking-wide text-white relative z-10">
//               <span
//                 style={{
//                   background: "linear-gradient(to bottom, #f50e0eff, #1a1a1a)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 PROBLEM STATEMENT
//               </span>
//             </h2>
//           </div>
//         </motion.div>

//         {/* Track Container */}
//         <div className="relative w-full h-[600px] md:h-[800px] mx-auto max-w-6xl">
//           {/* Track SVG */}
//           <svg
//             className="absolute inset-0 w-full h-full"
//             viewBox={isMobile ? "0 0 300 700" : "0 0 1000 1000"}
//             fill="none"
//           >
//             {/* 3D Track Effects */}
//             <defs>
//               {/* Track surface gradient */}
//               <linearGradient
//                 id="trackSurface"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="100%"
//               >
//                 <stop offset="0%" stopColor="#1a1a1a" />
//                 <stop offset="50%" stopColor="#2d2d2d" />
//                 <stop offset="100%" stopColor="#1a1a1a" />
//               </linearGradient>

//               {/* Neon blue side lighting */}
//               <linearGradient id="neonBlue" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.8" />
//                 <stop offset="50%" stopColor="#40e0d0" stopOpacity="1" />
//                 <stop offset="100%" stopColor="#00bcd4" stopOpacity="0.8" />
//               </linearGradient>

//               {/* Red and white curb pattern */}
//               <pattern
//                 id="curbPattern"
//                 x="0"
//                 y="0"
//                 width="20"
//                 height="20"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <rect x="0" y="0" width="10" height="20" fill="#ff0000" />
//                 <rect x="10" y="0" width="10" height="20" fill="#ffffff" />
//               </pattern>

//               {/* Glow effects */}
//               <filter
//                 id="neonGlow"
//                 x="-50%"
//                 y="-50%"
//                 width="200%"
//                 height="200%"
//               >
//                 <feGaussianBlur stdDeviation="6" result="coloredBlur" />
//                 <feMerge>
//                   <feMergeNode in="coloredBlur" />
//                   <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//               </filter>

//               <filter
//                 id="trackShadow"
//                 x="-50%"
//                 y="-50%"
//                 width="200%"
//                 height="200%"
//               >
//                 <feDropShadow
//                   dx="0"
//                   dy="8"
//                   stdDeviation="12"
//                   floodColor="#000000"
//                   floodOpacity="0.6"
//                 />
//               </filter>
//             </defs>

//             {/* Track shadow/depth */}
//             <motion.path
//               d={isMobile ? mobileTrackPath : desktopTrackPath}
//               stroke="#000000"
//               strokeWidth="32"
//               strokeOpacity="0.4"
//               fill="none"
//               transform="translate(4, 8)"
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               transition={{ duration: 2, ease: "easeInOut" }}
//             />

//             {/* Main track surface */}
//             <motion.path
//               d={isMobile ? mobileTrackPath : desktopTrackPath}
//               stroke="url(#trackSurface)"
//               strokeWidth="24"
//               fill="none"
//               filter="url(#trackShadow)"
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
//             />

//             {/* Red and white curbs (outer) */}
//             <motion.path
//               d={isMobile ? mobileTrackPath : desktopTrackPath}
//               stroke="url(#curbPattern)"
//               strokeWidth="6"
//               fill="none"
//               transform="translate(15, 0)"
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
//             />

//             {/* Red and white curbs (inner) */}
//             <motion.path
//               d={isMobile ? mobileTrackPath : desktopTrackPath}
//               stroke="url(#curbPattern)"
//               strokeWidth="6"
//               fill="none"
//               transform="translate(-15, 0)"
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
//             />

//             {/* Neon blue side lighting (outer) */}
//             <motion.path
//               d={isMobile ? mobileTrackPath : desktopTrackPath}
//               stroke="url(#neonBlue)"
//               strokeWidth="3"
//               fill="none"
//               filter="url(#neonGlow)"
//               transform="translate(18, 0)"
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
//             />

//             {/* Neon blue side lighting (inner) */}
//             <motion.path
//               d={isMobile ? mobileTrackPath : desktopTrackPath}
//               stroke="url(#neonBlue)"
//               strokeWidth="3"
//               fill="none"
//               filter="url(#neonGlow)"
//               transform="translate(-18, 0)"
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
//             />
//           </svg>

//           {/* Ferrari SF71H Formula 1 Car */}
//           <motion.div
//             className="absolute w-12 h-6 md:w-16 md:h-8 pointer-events-none z-20"
//             style={{
//               left: `${carPosition.x}%`,
//               top: `${carPosition.y}%`,
//               transform: `translate(-50%, -50%) rotate(${carPosition.rotation}deg)`,
//             }}
//           >
//             {/* Tire smoke trail */}
//             <motion.div
//               className="absolute right-full top-1/2 w-16 h-4 pointer-events-none"
//               animate={{
//                 opacity: [0.6, 0.3, 0.6],
//                 scale: [1, 1.2, 1],
//               }}
//               transition={{ duration: 0.4, repeat: Infinity }}
//             >
//               <div className="w-full h-full bg-gradient-to-l from-gray-400/50 to-transparent rounded-full blur-sm" />
//               <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-white/30 to-transparent rounded-full blur-xs" />
//             </motion.div>

//             {/* Main Ferrari body */}
//             <motion.div
//               className="relative w-full h-full"
//               animate={{
//                 filter: [
//                   "drop-shadow(0 0 8px #dc2626)",
//                   "drop-shadow(0 0 12px #dc2626) drop-shadow(0 0 16px #dc2626)",
//                   "drop-shadow(0 0 8px #dc2626)",
//                 ],
//               }}
//               transition={{ duration: 1, repeat: Infinity }}
//             >
//               {/* Car chassis */}
//               <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-500 rounded-lg shadow-xl">
//                 {/* Ferrari front nose */}
//                 <div className="absolute left-0 top-1/2 w-1/4 h-1/3 bg-red-600 rounded-l-full transform -translate-y-1/2" />

//                 {/* Cockpit area */}
//                 <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-gray-900 rounded-sm" />

//                 {/* Halo safety device */}
//                 <div className="absolute left-1/3 top-1/6 w-1/3 h-1/6 border border-gray-400 rounded-t-full" />

//                 {/* Side mirrors */}
//                 <div className="absolute left-1/3 top-0 w-1 h-1 bg-gray-400 rounded" />
//                 <div className="absolute left-1/3 bottom-0 w-1 h-1 bg-gray-400 rounded" />

//                 {/* Ferrari branding stripe */}
//                 <div className="absolute left-1/4 top-1/2 w-1/2 h-0.5 bg-white transform -translate-y-1/2" />

//                 {/* Rear wing */}
//                 <div className="absolute right-0 top-1/3 w-1/6 h-1/3 bg-red-500 border border-red-700" />
//               </div>

//               {/* Glowing brake discs */}
//               <motion.div
//                 className="absolute left-1/8 top-1/2 w-1 h-1 bg-orange-400 rounded-full"
//                 animate={{
//                   boxShadow: [
//                     "0 0 4px #fb923c",
//                     "0 0 8px #fb923c, 0 0 12px #f97316",
//                     "0 0 4px #fb923c",
//                   ],
//                 }}
//                 transition={{ duration: 0.3, repeat: Infinity }}
//               />
//               <motion.div
//                 className="absolute right-1/8 top-1/2 w-1 h-1 bg-orange-400 rounded-full"
//                 animate={{
//                   boxShadow: [
//                     "0 0 4px #fb923c",
//                     "0 0 8px #fb923c, 0 0 12px #f97316",
//                     "0 0 4px #fb923c",
//                   ],
//                 }}
//                 transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }}
//               />
//             </motion.div>

//             {/* Speed particles */}
//             {Array.from({ length: 3 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute right-full top-1/2 w-1 h-px bg-cyan-400"
//                 style={{
//                   left: `-${(i + 1) * 8}px`,
//                   top: `${50 + (Math.random() - 0.5) * 20}%`,
//                 }}
//                 animate={{
//                   scaleX: [0, 1, 0],
//                   opacity: [0, 1, 0],
//                 }}
//                 transition={{
//                   duration: 0.2,
//                   repeat: Infinity,
//                   delay: i * 0.1,
//                 }}
//               />
//             ))}
//           </motion.div>

//           {/* Theme Nodes */}
//           {themes.map((theme, index) => {
//             const Icon = theme.icon;
//             const position = isMobile
//               ? theme.position.mobile
//               : theme.position.desktop;

//             return (
//               <motion.div
//                 key={theme.id}
//                 className="absolute z-10"
//                 style={{
//                   left: `${position.x}%`,
//                   top: `${position.y}%`,
//                   transform: "translate(-50%, -50%)",
//                 }}
//                 initial={{ scale: 0, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <motion.button
//                       className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${theme.color} p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group`}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => setSelectedTheme(theme.id)}
//                     >
//                       <Icon className="w-full h-full text-white drop-shadow-lg" />

//                       {/* Pulse ring */}
//                       <motion.div
//                         className="absolute inset-0 rounded-full border-2 border-white/50"
//                         animate={{
//                           scale: [1, 1.5, 1],
//                           opacity: [0.7, 0, 0.7],
//                         }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                       />

//                       {/* Theme label */}
//                       <motion.div
//                         className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
//                         initial={{ opacity: 0 }}
//                         whileHover={{ opacity: 1 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <span className="text-xs md:text-sm font-semibold text-foreground bg-background/90 px-2 py-1 rounded backdrop-blur-sm">
//                           {theme.title}
//                         </span>
//                       </motion.div>
//                     </motion.button>
//                   </DialogTrigger>

//                   <DialogContent className="max-w-2xl">
//                     <DialogHeader>
//                       <DialogTitle className="text-2xl flex items-center gap-3">
//                         <div
//                           className={`w-8 h-8 rounded-full bg-gradient-to-br ${theme.color} p-2`}
//                         >
//                           <Icon className="w-full h-full text-white" />
//                         </div>
//                         {theme.title}
//                       </DialogTitle>
//                     </DialogHeader>
//                     <div className="space-y-4">
//                       <p className="text-xl text-muted-foreground">
//                         {theme.description}
//                       </p>
//                       <div className="p-4 bg-muted/50 rounded-lg">
//                         <p className="text-lg      text-muted-foreground">
//                           Detailed track information and requirements will be
//                           available soon.
//                         </p>
//                       </div>
//                       {/* <Button className="w-full">Learn More</Button> */}
//                     </div>
//                   </DialogContent>
//                 </Dialog>
//               </motion.div>
//             );
//           })}

//           {/* Progress indicator */}
//           <motion.div
//             className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//           >
//             <div className="flex items-center gap-2">
//               <span className="text-sm font-medium">Track Progress:</span>
//               <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-primary to-accent"
//                   style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HackathonTracks;
