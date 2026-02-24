"use client";

import { useEffect, useState } from "react";
import { useOnboarding } from "./OnboardingProvider";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const { setStage } = useOnboarding();

  useEffect(() => {
  // disable scroll
  document.body.style.overflow = "hidden";

  const interval = setInterval(() => {
    setProgress((p) => {
      if (p >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setStage("transition");
        }, 400);

        return 100;
      }
      return p + 1;
    });
  }, 20);

  return () => {
    clearInterval(interval);
    document.body.style.overflow = "auto";
  };
}, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="w-64 h-[2px] bg-divider">
        
        <div
          className="h-full bg-white transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-sm text-muted">{progress}%</p>
    </div>
  );
}