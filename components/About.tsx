import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "5+", label: "Years of professional experience" },
  { value: "20+", label: "Production applications shipped" },
  { value: "3", label: "SaaS products launched end-to-end" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Shipping software that holds up under real conditions.
            </h2>
          </div>
          <div className="space-y-5 text-gray-500 leading-relaxed">
            <p>
              I&apos;m a full-stack engineer with 5+ years of experience building
              production web applications. I work across the entire stack —
              system design, API architecture, database modeling, and the
              frontend layer — and I take ownership of all of it.
            </p>
            <p>
              My core stack is React and Next.js on the frontend, Python and
              Django on the backend, with PostgreSQL for persistence. I write
              code that&apos;s readable, tested, and maintainable by the next
              engineer who touches it.
            </p>
            <p>
              I work best on product-focused teams where I can contribute
              meaningfully from day one. I&apos;m async-first, timezone-flexible, and
              experienced collaborating with distributed teams across the US.
            </p>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-4xl font-bold tracking-tight text-gray-900">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
