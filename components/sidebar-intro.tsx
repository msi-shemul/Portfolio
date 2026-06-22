"use client"

import { useEffect, useState } from "react"
import { Mail, ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/github-icon"

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
]

export function SidebarIntro() {
  const [active, setActive] = useState("about")

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24 py-16">
      <div className="lg:pr-8">
        <a
          href="#about"
          onClick={(e) => handleNav(e, "about")}
          className="inline-flex items-center gap-3"
          aria-label="MSIS — Md Shakibul Islam Shemul home"
        >
          <span className="flex size-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 font-mono text-base font-bold tracking-tight text-primary">
            MSIS
          </span>
        </a>

        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Md Shakibul Islam Shemul
        </h1>
        <h2 className="mt-3 text-lg font-medium text-foreground/90">
          MS Office Specialist · Graphics Designer · Web Developer
        </h2>
        <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
          I help teams and learners get the most out of their tools — from
          polished documents and data-driven spreadsheets to clean visual
          design, modern websites and efficient Python automation.
        </p>

        {/* Desktop nav */}
        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul className="flex flex-col gap-4">
            {NAV.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNav(e, item.id)}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-primary"
                          : "w-8 bg-muted-foreground/40 group-hover:w-16 group-hover:bg-foreground"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 flex items-center gap-5" aria-label="Social links">
        <li>
          <a
            href="https://github.com/msi-shemul"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub profile"
          >
            <GithubIcon className="size-6" />
          </a>
        </li>
        <li>
          <a
            href="mailto:mshemul674@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Send an email"
          >
            <Mail className="size-6" />
          </a>
        </li>
        <li>
          <a
            href="mailto:mshemul674@gmail.com"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Get in touch
            <ArrowUpRight className="size-4" />
          </a>
        </li>
      </ul>
    </header>
  )
}
