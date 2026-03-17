interface TechCategory {
  label: string;
  items: string[];
}

const techCategories: TechCategory[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Python", "Django", "Django REST Framework", "Node.js"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "Redis", "SQLite"],
  },
  {
    label: "Infrastructure & Tooling",
    items: ["Git", "Docker", "Vercel", "AWS"],
  },
];

function TechPill({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm text-gray-600 bg-gray-50 border border-gray-100 hover:border-gray-300 hover:text-gray-900 transition-colors duration-200">
      {name}
    </span>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-32 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
              Tech Stack
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              What I build with.
            </h2>
          </div>
          <p className="text-gray-500 leading-relaxed">
            A focused, production-proven stack. No chasing trends — every tool
            here has been used to ship real products used by real users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {techCategories.map((category) => (
            <div key={category.label} className="space-y-4">
              <p className="text-xs font-semibold tracking-wider uppercase text-gray-400">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <TechPill key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
