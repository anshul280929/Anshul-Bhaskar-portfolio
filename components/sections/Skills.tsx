import Section from "@/components/layout/Section";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Rust"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Three.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "FastAPI", "Django", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    title: "AI / ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "Hugging Face",
      "OpenCV",
      "scikit-learn",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Kubernetes", "AWS", "Linux", "CI/CD"],
  },
  // future enhancement area: add more categories
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted uppercase">
          Tech Stack
        </p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Tools & Technologies
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={i}>
              <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-text uppercase">
                {cat.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
