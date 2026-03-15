"use client";

import { createContext, useContext, useState } from "react";

type Stage = "loading" | "transition" | "complete";
type Theme = "dark" | "light";

const OnboardingContext = createContext<any>(null);

export function OnboardingProvider({ children }: any) {
  const [stage, setStage] = useState<Stage>("loading");
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <OnboardingContext.Provider
      value={{ stage, setStage, theme, setTheme }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => useContext(OnboardingContext);