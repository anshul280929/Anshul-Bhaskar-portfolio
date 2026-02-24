import Section from "@/components/layout/Section";

const PROJECTS = [
  {
    title: "RAG Knowledge Engine",
    description:
      "Retrieval-augmented generation system for enterprise document Q&A with semantic search.",
    tech: ["Python", "LangChain", "ChromaDB", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-Time Object Detector",
    description:
      "Edge-deployed computer vision model for real-time object detection with custom YOLO architecture.",
    tech: ["PyTorch", "OpenCV", "ONNX", "TensorRT"],
    github: "#",
    demo: null,
  },
  {
    title: "AI Code Reviewer",
    description:
      "Automated code review tool using LLMs to analyze pull requests and suggest improvements.",
    tech: ["TypeScript", "OpenAI API", "GitHub Actions", "Next.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Neural Style Transfer App",
    description:
      "Web application for applying artistic neural style transfer to user-uploaded images in real-time.",
    tech: ["React", "TensorFlow.js", "Node.js", "WebGL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Distributed ML Pipeline",
    description:
      "Scalable machine learning pipeline for training and deploying models across distributed clusters.",
    tech: ["Apache Spark", "Kubernetes", "MLflow", "Python"],
    github: "#",
    demo: null,
  },
  // future enhancement area: add more projects, link to dedicated project pages
];

export default function Projects() {
  return (
    <Section id="projects">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted uppercase">
          Projects
        </p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Selected Work
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="group flex h-full flex-col border border-divider p-6 transition-all duration-300 hover:border-muted"
            >
              {/* Number */}
              <span className="mb-4 font-mono text-xs text-muted/60">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-text">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {/* Tech */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-wider text-muted/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="font-mono text-xs text-muted transition-colors hover:text-text"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="font-mono text-xs text-muted transition-colors hover:text-text"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
