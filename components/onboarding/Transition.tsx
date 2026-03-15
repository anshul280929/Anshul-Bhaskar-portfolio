"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useOnboarding } from "./OnboardingProvider";

export default function Transition() {
  const { setStage, setTheme } = useOnboarding();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setTheme("light"); // switch to white background
    }, 2200); // switch before animation fully ends

    const completeTimer = setTimeout(() => {
      setStage("complete");
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <motion.div
        initial={{ scale: 0, y: "140%", x: "-50%" }}
        animate={{ scale: 28, y: "40%" }}
        transition={{
          duration: 2.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute left-1/2 bottom-0 w-[220px] h-[220px] bg-white rounded-full"
      />
    </div>
  );
}