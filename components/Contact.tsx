import { Mail, Github, Linkedin, FileText } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sierra@example.com",
    href: "mailto:sierra@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sierralee",
    href: "https://github.com/sierralee",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sierralee",
    href: "https://linkedin.com/in/sierralee",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Ready to contribute from day one.
            </h2>
          </div>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              I&apos;m open to full-time remote engineering roles on US-based product
              teams. I onboard fast, communicate clearly, and ship without
              hand-holding.
            </p>
            <p>
              Prefer a quick call? Reach out on LinkedIn. Want to dive straight
              in? Email works.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="p-2.5 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors">
                <Icon size={18} className="text-gray-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">{label}</p>
                <p className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  {value}
                </p>
              </div>
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-900 bg-gray-900 hover:bg-gray-700 transition-all duration-200"
          >
            <div className="p-2.5 rounded-xl bg-white/10">
              <FileText size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Resume</p>
              <p className="text-sm text-white font-medium">Download PDF</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
