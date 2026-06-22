import { ArrowUpRight, FileSpreadsheet, PenTool, MonitorSmartphone, GraduationCap } from "lucide-react"

const SERVICES = [
  {
    icon: FileSpreadsheet,
    title: "Office Documents & Spreadsheets",
    desc: "Polished Word reports, automated Excel workbooks, and presentation-ready PowerPoint decks tailored to your needs.",
  },
  {
    icon: PenTool,
    title: "Graphics Design",
    desc: "Logos, social media creatives, posters, and brand assets with a clean, consistent visual identity.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Development",
    desc: "Responsive, fast, and modern websites built with care — from landing pages to multi-section sites.",
  },
  {
    icon: GraduationCap,
    title: "Training & Mentoring",
    desc: "One-on-one or group training in MS Office and graphics design, from beginner basics to job-ready skills.",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="scroll-mt-16 py-12 lg:py-16"
    >
      <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-foreground">
        Services
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <article
              key={service.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </article>
          )
        })}
      </div>

      <a
        href="https://github.com/msi-shemul"
        target="_blank"
        rel="noreferrer"
        className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
      >
        See my work on GitHub
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </section>
  )
}
