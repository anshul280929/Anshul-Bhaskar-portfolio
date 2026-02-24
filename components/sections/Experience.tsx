import Section from "@/components/layout/Section";

const EXPERIENCE = [
  {
    year: "2025 — Present",
    role: "AI Research Intern",
    company: "Company Name",
    description:
      "Working on large language model fine-tuning and RAG systems for enterprise knowledge management. Reduced inference latency by 40% through model optimization techniques.",
    tech: ["Python", "PyTorch", "LangChain", "FastAPI"],
  },
  {
    year: "2024 — 2025",
    role: "Full Stack Developer",
    company: "Company Name",
    description:
      "Built and deployed production web applications serving 10K+ users. Implemented CI/CD pipelines and microservice architectures.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    year: "2023 — 2024",
    role: "Machine Learning Intern",
    company: "Company Name",
    description:
      "Developed computer vision pipelines for defect detection in manufacturing. Achieved 95% accuracy on production datasets.",
    tech: ["TensorFlow", "OpenCV", "Python", "AWS"],
  },
  // future enhancement area: add more experience entries
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted uppercase">
          Experience
        </p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Professional Journey
        </h2>

        <div className="relative pl-8">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-divider" />

          <div className="flex flex-col gap-16">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative flex gap-6">
                <div
                  className="absolute -left-8 top-[6px] z-[1] h-[15px] w-[15px] shrink-0 rounded-full border-2 border-muted bg-bg transition-colors hover:border-text"
                />

                <div className="flex-1">
                  <span className="mb-2 inline-block font-mono text-xs tracking-wider text-muted/60">
                    {exp.year}
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-text">
                    {exp.role}
                  </h3>
                  <p className="mb-3 font-mono text-sm text-muted">
                    {exp.company}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted/60">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-divider px-3 py-1 font-mono text-[10px] tracking-wider text-muted/60 transition-colors hover:text-text"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
