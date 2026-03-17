import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Products I&apos;ve shipped.
            </h2>
          </div>
          <p className="text-gray-500 leading-relaxed">
            Each project was designed, built, and deployed by me — end to end.
            Not tutorials, not clones. Real problems, real solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group border border-gray-100 shadow-none hover:shadow-md hover:border-gray-200 transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6 flex flex-col h-full space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">{project.tagline}</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 shrink-0 mt-0.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal rounded-full bg-gray-50 text-gray-500 border-0 hover:bg-gray-100"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
