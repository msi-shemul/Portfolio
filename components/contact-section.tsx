import { Mail, MapPin } from "lucide-react"
import { GithubIcon } from "@/components/github-icon"

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="scroll-mt-16 py-12 lg:py-16"
    >
      <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-foreground">
        Contact
      </h2>
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h3 className="text-balance text-2xl font-bold text-foreground">
          Let&apos;s work together
        </h3>
        <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Need help with Office documents, design work, a website, or training?
          I&apos;d love to hear about your project. Reach out and let&apos;s
          build something great.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:mshemul674@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" />
            mshemul674@gmail.com
          </a>
          <a
            href="https://github.com/msi-shemul"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <GithubIcon className="size-4" />
            github.com/msi-shemul
          </a>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4 text-primary" />
          Rajshahi, Bangladesh
        </p>
      </div>
    </section>
  )
}
