import ContributionGraph from "@/components/contribution-graph";
import EducationList from "@/components/education-list";
import ExperienceTimeline from "@/components/experience-timeline";
import { HackathonItem } from "@/components/hackathon-card";
import Hero from "@/components/hero";
import PulseDot from "@/components/motion/PulseDot";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/project-card";
import SectionHeader from "@/components/section-header";
import SkillsGroup from "@/components/skills-group";
import { DATA } from "@/data/resume";

export default function Page() {
  const featured = DATA.projects.slice(0, 2);
  const rest = DATA.projects.slice(2);

  return (
    <main id="main" className="bg-[#08090A] text-[#F5F5F5]">
      <div className="mx-auto w-[min(100%-40px,980px)]">
        <Hero />

        {/* ——— GITHUB ——— */}
        <section aria-label="GitHub activity" className="pb-20 sm:pb-24">
          <Reveal>
            <ContributionGraph />
          </Reveal>
        </section>

        {/* ——— ABOUT ——— */}
        <section id="about" aria-labelledby="about-title" className="scroll-mt-20 pb-20 sm:pb-24">
          <SectionHeader
            index="01"
            label="About"
            title="I build software that solves real problems."
          />
          <p
            id="about-title"
            className="sr-only"
          >
            About
          </p>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[680px] text-[15.5px] leading-relaxed text-[#A3A7AA]">
              {DATA.summary}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="mt-6 grid max-w-[680px] gap-px overflow-hidden rounded-lg border border-[#262A2D] bg-[#262A2D] sm:grid-cols-3">
              {[
                ["Location", DATA.location],
                ["Role", "Software Developer"],
                ["Focus", "Systems · Backend · AI"],
              ].map(([k, v]) => (
                <div key={k} className="bg-[#0D0F10] px-4 py-3">
                  <dt className="meta-mono uppercase tracking-wider">{k}</dt>
                  <dd className="mt-1 text-[14px] text-[#F5F5F5]">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* ——— EXPERIENCE ——— */}
        <section id="experience" aria-labelledby="exp-title" className="scroll-mt-20 pb-20 sm:pb-24">
          <SectionHeader
            index="02"
            label="Work Experience"
            title="Experience"
            intro="Professional engineering work across backend, full-stack and mobile."
          />
          <span id="exp-title" className="sr-only">Work Experience</span>
          <div className="mt-8">
            <ExperienceTimeline items={DATA.work} />
          </div>
        </section>

        {/* ——— EDUCATION ——— */}
        <section id="education" aria-labelledby="edu-title" className="scroll-mt-20 pb-20 sm:pb-24">
          <SectionHeader
            index="03"
            label="Education"
            title="Education"
          />
          <span id="edu-title" className="sr-only">Education</span>
          <div className="mt-8">
            <EducationList items={DATA.education} />
          </div>
        </section>

        {/* ——— SKILLS ——— */}
        <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20 pb-20 sm:pb-24">
          <SectionHeader
            index="04"
            label="Skills"
            title="Technical skills"
            intro="Grouped by where I use them. Green is hover emphasis only."
          />
          <span id="skills-title" className="sr-only">Skills</span>
          <div className="mt-8 rounded-lg border border-[#262A2D] bg-[#0D0F10] p-5 sm:p-6">
            <SkillsGroup skills={DATA.skills} />
          </div>
        </section>

        {/* ——— PROJECTS ——— */}
        <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 pb-20 sm:pb-24">
          <SectionHeader
            index="05"
            label="Projects"
            title="Selected work"
            intro="Systems, applications and experiments — featuring screenshots, concise scope and direct links."
          />
          <span id="projects-title" className="sr-only">Projects</span>

          <div className="mt-8 grid gap-4">
            {featured.map((p, i) => (
              <ProjectCard
                key={p.title}
                href={p.href}
                title={p.title}
                description={p.description}
                dates={p.dates}
                tags={p.technologies}
                image={p.image}
                links={p.links}
                featured
                index={i}
              />
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {rest.map((p, i) => (
              <ProjectCard
                key={p.title}
                href={p.href}
                title={p.title}
                description={p.description}
                dates={p.dates}
                tags={p.technologies}
                image={p.image}
                links={p.links}
                index={featured.length + i}
              />
            ))}
          </div>
        </section>

        {/* ——— HACKATHONS ——— */}
        <section id="hackathons" aria-labelledby="hack-title" className="scroll-mt-20 pb-20 sm:pb-24">
          <SectionHeader
            index="06"
            label="Hackathons"
            title="Builds & hackathons"
            intro={`${DATA.hackathons.length} hackathon builds — compact timeline of what was shipped in 2–3 day sprints.`}
          />
          <span id="hack-title" className="sr-only">Hackathons</span>
          <ol className="relative mt-8 border-l border-[#262A2D]">
            {DATA.hackathons.map((h, i) => (
              <HackathonItem
                key={`${h.title}-${h.dates}`}
                title={h.title}
                description={h.description}
                dates={h.dates}
                location={h.location}
                index={i}
              />
            ))}
          </ol>
        </section>

        {/* ——— CONTACT ——— */}
        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 pb-24">
          <Reveal y={36}>
            <div className="rounded-lg border border-[#262A2D] bg-[#0D0F10] p-8 text-center sm:p-12">
              <p className="section-label justify-center">
                07 / Contact
              </p>
              <h2
                id="contact-title"
                className="mx-auto mt-3 max-w-[560px] text-[32px] font-bold leading-tight tracking-tight sm:text-[40px]"
              >
                LET&apos;S BUILD SOMETHING.
              </h2>
              <p className="mx-auto mt-3 flex max-w-[520px] items-center justify-center gap-2 text-[13px] text-[#A3A7AA]">
                <PulseDot />
                <span className="font-mono text-[12px]">
                  Open to interesting projects
                </span>
              </p>
              <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-relaxed text-[#A3A7AA]">
                Have an interesting project, opportunity, or engineering problem?
                My inbox is open — I reply to thoughtful messages.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                <a
                  href={`mailto:${DATA.contact.email}`}
                  className="btn-primary"
                >
                  {DATA.contact.email}
                </a>
                <a
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn
                </a>
                <a
                  href={DATA.contact.social.GitHub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
