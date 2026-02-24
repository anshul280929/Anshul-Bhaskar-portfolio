type SectionProps = {
  id: string;
  children: React.ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="
        min-h-screen
        flex
        items-center
        py-32
        border-b border-divider
      "
    >
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}