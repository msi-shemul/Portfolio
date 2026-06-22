import { FileText, Table2, Presentation, Palette, Code2, Zap } from "lucide-react"

const SKILL_GROUPS = [
  {
    icon: FileText,
    title: "Microsoft Word",
    desc: "Professional documents, reports, templates, mail merge, and formatting.",
    tags: ["Documents", "Templates", "Mail Merge"],
  },
  {
    icon: Table2,
    title: "Microsoft Excel",
    desc: "Formulas, pivot tables, charts, and data cleanup for clear insights.",
    tags: ["Formulas", "Pivot Tables", "Charts"],
  },
  {
    icon: Presentation,
    title: "Microsoft PowerPoint",
    desc: "Engaging, presentation-ready decks with consistent visual design.",
    tags: ["Slide Design", "Animations", "Pitch Decks"],
  },
  {
    icon: Palette,
    title: "Graphics Design",
    desc: "Branding, social media creatives, posters, and layout fundamentals.",
    tags: ["Branding", "Layout", "Visual Identity"],
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Clean, responsive websites and interfaces built for the modern web.",
    tags: ["HTML & CSS", "JavaScript", "Responsive"],
  },
  {
    icon: Zap,
    title: "Python Programming",
    desc: "Backend scripting, automation, and data processing with Python.",
    tags: ["Scripts", "Automation", "Backend"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills" className="scroll-mt-16 py-12 lg:py-16">
      <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-foreground">
        Skills
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {SKILL_GROUPS.map((skill) => {
          const Icon = skill.icon
          return (
            <article
              key={skill.title}
              className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {skill.desc}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
