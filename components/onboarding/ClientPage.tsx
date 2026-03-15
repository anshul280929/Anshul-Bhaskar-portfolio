"use client";

import { useOnboarding } from "./OnboardingProvider";
import { useEffect } from "react";
import Loader from "./Loader";
import Transition from "./Transition";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Chatbot from "@/components/sections/Chatbot";
import Contact from "@/components/sections/Contact";


export default function ClientPage() {
  const { stage,theme  } = useOnboarding();
  useEffect(() => {
    if (stage === "transition") {
      window.scrollTo({
        top: 0,
        behavior: "instant" as ScrollBehavior,
      });
    }
  }, [stage]);
  useEffect(() => {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
}, [theme]);

  return (
    <>
    
      {stage === "loading" && <Loader />}
      {stage === "transition" && <Transition />}

      {stage === "complete" && (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Chatbot />
      <Contact />
    </>
  )}
    </>
  );
}