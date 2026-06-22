const EXPERIENCE = [
  {
    period: "2022 — 2025",
    role: "Microsoft Office Trainer",
    org: "Baraigram DPO & Computer Traning Center",
    desc: "Trained learners across Word, Excel, and PowerPoint for nearly three years — covering everything from fundamentals to advanced, job-ready workflows.",
    tags: ["MS Word", "MS Excel", "PowerPoint", "Mentoring"],
  },
  {
    period: "2024 — 2025",
    role: "Graphics Design Trainer",
    org: "NextGenius IT",
    desc: "Taught graphics design for one year, focusing on branding, layout, and visual communication while guiding students through hands-on creative projects.",
    tags: ["Graphics Design", "Branding", "Layout"],
  },
  {
    period: "May 2025",
    role: "Practical Training",
    org: "High Tech, Rajshahi",
    desc: "Completed hands-on practical training, strengthening real-world technical skills and professional workflow in a working environment.",
    tags: ["Hands-on", "Professional Workflow"],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="scroll-mt-16 py-12 lg:py-16"
    >
      <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-foreground">
        Experience
      </h2>
      <ol className="relative space-y-8 border-l border-border pl-6">
        {EXPERIENCE.map((item) => (
          <li key={item.role} className="relative">
            <span className="absolute -left-[1.6rem] top-1.5 size-3 rounded-full border-2 border-primary bg-background" />
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {item.period}
            </p>
            <h3 className="mt-1 font-semibold text-foreground">
              {item.role}{" "}
              <span className="font-normal text-muted-foreground">· {item.org}</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
