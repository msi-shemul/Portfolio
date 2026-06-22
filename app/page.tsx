import { SidebarIntro } from "@/components/sidebar-intro"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <SidebarIntro />

          <main className="pt-8 lg:w-[56%] lg:py-24">
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ServicesSection />
            <ContactSection />

            <footer className="py-10 text-sm text-muted-foreground">
              <p>
                Designed &amp; built by{" "}
                <span className="font-medium text-foreground">
                  Md Shakibul Islam Shemul
                </span>
                . &copy; {new Date().getFullYear()} MSIS.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
