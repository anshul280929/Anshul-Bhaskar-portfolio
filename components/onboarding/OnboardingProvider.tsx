"use client";

import { createContext, useContext, useState } from "react";

type Stage = "loading" | "transition" | "complete";

const OnboardingContext = createContext<any>(null);

export function OnboardingProvider({ children }: any) {
  const [stage, setStage] = useState<Stage>("loading");

  return (
    <OnboardingContext.Provider value={{ stage, setStage }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => useContext(OnboardingContext);