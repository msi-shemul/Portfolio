const STATS = [
  { value: "3+", label: "Years as MS Office Trainer" },
  { value: "1+", label: "Year as Graphics Trainer" },
  { value: "100+", label: "Learners Trained" },
]

export function AboutSection() {
  return (
    <section id="about" aria-label="About me" className="scroll-mt-16 py-12 lg:py-16">
      <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-foreground lg:sr-only">
        About
      </h2>
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          I&apos;m{" "}
          <span className="font-medium text-foreground">
            Md Shakibul Islam Shemul
          </span>
          , a productivity and design professional who turns everyday tools into
          real results. My core strength is the{" "}
          <span className="font-medium text-foreground">
            Microsoft Office suite
          </span>{" "}
          — building structured Word documents, formula-driven Excel workbooks,
          and presentation-ready PowerPoint decks.
        </p>
        <p>
          For roughly{" "}
          <span className="font-medium text-foreground">three years (2022–2025)</span>{" "}
          I worked as an MS Office trainer, guiding students from the basics to
          confident, job-ready skills. Alongside that, I spent{" "}
          <span className="font-medium text-foreground">a year (2024–2025)</span>{" "}
          as a graphics design trainer, teaching layout, branding, and visual
          communication.
        </p>
        <p>
          I also build for the web, creating clean and responsive websites. In{" "}
          <span className="font-medium text-foreground">May 2025</span> I
          completed hands-on practical training at{" "}
          <span className="font-medium text-foreground">High Tech, Rajshahi</span>
          , sharpening my real-world technical workflow.
        </p>
      </div>

      <dl className="mt-10 grid grid-cols-3 gap-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-card p-4 text-center"
          >
            <dt className="text-2xl font-bold text-primary sm:text-3xl">
              {s.value}
            </dt>
            <dd className="mt-1 text-xs leading-snug text-muted-foreground">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
