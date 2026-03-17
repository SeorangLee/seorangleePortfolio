import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-7 animate-fade-in">

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
          Available for US remote roles
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.05]">
          Sierra Lee
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 font-light tracking-tight">
          Full-Stack Engineer
        </p>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          I design and build full-stack SaaS products — from database schema to
          deployed UI. Clean architecture, fast delivery, and code that&apos;s built
          to last.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-colors duration-200"
          >
            Let&apos;s talk →
          </a>
        </div>

      </div>

      <a
        href="#about"
        className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-300 hover:text-gray-500 transition-colors duration-200"
        aria-label="Scroll down"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
