import Section from "@/components/layout/Section";

const EDUCATION = [
  {
    year: "2022 — 2026",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Your University",
    description:
      "Specialization in Artificial Intelligence and Machine Learning. Relevant coursework in Deep Learning, NLP, Computer Vision, and Distributed Systems.",
  },
  {
    year: "2020 — 2022",
    degree: "Higher Secondary (PCM + CS)",
    institution: "Your School",
    description:
      "Foundation in mathematics, physics, and computer science. Developed early interest in algorithmic problem solving.",
  },
  // future enhancement area: add more education entries
];

export default function Education() {
  return (
    <Section id="education">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted uppercase">
          Education
        </p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Academic Foundation
        </h2>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-divider" />

          <div className="flex flex-col gap-16">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Timeline dot */}
                <div
                  className="absolute -left-8 top-[6px] z-[1] h-[15px] w-[15px] shrink-0 rounded-full border-2 border-muted bg-bg transition-colors hover:border-text"
                />

                <div className="flex-1">
                  <span className="mb-2 inline-block font-mono text-xs tracking-wider text-muted/60">
                    {edu.year}
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-text">
                    {edu.degree}
                  </h3>
                  <p className="mb-3 font-mono text-sm text-muted">
                    {edu.institution}
                  </p>
                  <p className="text-sm leading-relaxed text-muted/60">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
