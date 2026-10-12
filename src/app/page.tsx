import ContributionGraph from "@/components/contribution-graph";
import EditorialSection from "@/components/editorial-section";
import EducationList from "@/components/education-list";
import ExperienceTimeline from "@/components/experience-timeline";
import { HackathonItem } from "@/components/hackathon-card";
import Hero from "@/components/hero";
import PulseDot from "@/components/motion/PulseDot";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/project-card";
import SkillsGroup from "@/components/skills-group";
import { DATA } from "@/data/resume";

export default function Page() {
  const featured = DATA.projects.slice(0, 2);
  const rest = DATA.projects.slice(2);

  return (
    <main id="main" className="bg-[#101113] text-[#F5F5F5]">
      <div className="ed-frame">
        <Hero />

        {/* ——— GITHUB ACTIVITY ——— */}
        <EditorialSection
          id="activity"
          index="02"
          label="Activity"
          meta="github.com/ANNI69"
          labelledBy="github-heading"
        >
          <div className="px-5 py-8 sm:px-8 sm:py-10">
            <Reveal>
              <ContributionGraph />
            </Reveal>
          </div>
        </EditorialSection>

        {/* ——— ABOUT ——— */}
        <EditorialSection
          id="about"
          index="03"
          label="About"
          title="I build software that solves real problems."
          labelledBy="about-title"
        >
          <span id="about-title" className="sr-only">
            About
          </span>
          <div className="grid grid-cols-1 gap-6 px-5 py-8 sm:px-8 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <Reveal delay={0.1}>
                <p className="max-w-[640px] text-[15.5px] leading-relaxed text-[#969696]">
                  {DATA.summary}
                </p>
              </Reveal>
            </div>
            <dl className="md:col-span-5">
              {[
                ["Location", DATA.location],
                ["Role", "Software Developer"],
                ["Focus", "Systems · Backend · AI"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={
                    "flex items-baseline justify-between gap-4 py-3 " +
                    (i > 0 ? "border-t border-[#2B2D30]" : "")
                  }
                >
                  <dt className="meta-mono shrink-0 uppercase tracking-[0.18em]">
                    {k}
                  </dt>
                  <dd className="text-right text-[14px] text-[#F5F5F5]">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </EditorialSection>

        {/* ——— EXPERIENCE ——— */}
        <EditorialSection
          id="experience"
          index="04"
          label="Work Experience"
          title="Experience"
          intro="Professional engineering work across backend, full-stack and mobile."
          labelledBy="exp-title"
        >
          <span id="exp-title" className="sr-only">
            Work Experience
          </span>
          <ExperienceTimeline items={DATA.work} />
        </EditorialSection>

        {/* ——— EDUCATION ——— */}
        <EditorialSection
          id="education"
          index="05"
          label="Education"
          title="Education"
          labelledBy="edu-title"
        >
          <span id="edu-title" className="sr-only">
            Education
          </span>
          <EducationList items={DATA.education} />
        </EditorialSection>

        {/* ——— SKILLS ——— */}
        <EditorialSection
          id="skills"
          index="06"
          label="Skills"
          title="Technical skills"
          intro="Grouped by where I use them."
          labelledBy="skills-title"
        >
          <span id="skills-title" className="sr-only">
            Skills
          </span>
          <SkillsGroup skills={DATA.skills} />
        </EditorialSection>

        {/* ——— PROJECTS ——— */}
        <EditorialSection
          id="projects"
          index="07"
          label="Projects"
          title="Selected work"
          intro="Systems, applications and experiments — featuring screenshots, concise scope and direct links."
          labelledBy="projects-title"
        >
          <span id="projects-title" className="sr-only">
            Projects
          </span>
          <div>
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
          <div className="grid gap-px border-t border-[#2B2D30] bg-[#2B2D30] sm:grid-cols-2">
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
        </EditorialSection>

        {/* ——— HACKATHONS ——— */}
        <EditorialSection
          id="hackathons"
          index="08"
          label="Hackathons"
          title="Builds & hackathons"
          intro={`${DATA.hackathons.length} hackathon builds — compact timeline of what was shipped in 2–3 day sprints.`}
          labelledBy="hack-title"
        >
          <span id="hack-title" className="sr-only">
            Hackathons
          </span>
          <ol className="border-t border-[#2B2D30]">
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
        </EditorialSection>

        {/* ——— CONTACT ——— */}
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="scroll-mt-20 border-t border-[#2B2D30]"
        >
          <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-8">
            <p className="ed-label">
              <span className="text-[#6F7579]">09</span>
              <span aria-hidden className="mx-2 text-[#3A3D41]">
                /
              </span>
              <span className="text-[#969696]">Contact</span>
            </p>
          </div>
          <div className="border-t border-[#2B2D30] px-5 py-12 sm:px-8 sm:py-16">
            <Reveal y={36}>
              <h2
                id="contact-title"
                className="max-w-[800px] font-display text-[clamp(2rem,5.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight"
              >
                LET&apos;S BUILD SOMETHING.
              </h2>
              <p className="mt-4 flex max-w-[520px] items-center gap-2 text-[13px] text-[#969696]">
                <PulseDot />
                <span className="font-mono text-[12px]">
                  Open to interesting projects
                </span>
              </p>
              <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-[#969696]">
                Have an interesting project, opportunity, or engineering problem?
                My inbox is open — I reply to thoughtful messages.
              </p>
            </Reveal>
          </div>
          <div className="ed-cells grid-cols-1 sm:grid-cols-3" role="presentation">
            <a
              href={`mailto:${DATA.contact.email}`}
              className="group px-5 py-5 transition-colors duration-150 hover:bg-[#1A1C1F] sm:px-8"
            >
              <p className="ed-label">Email</p>
              <p className="mt-1 break-all text-[15px] text-[#F5F5F5]">
                {DATA.contact.email}
              </p>
            </a>
            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-5 transition-colors duration-150 hover:bg-[#1A1C1F] sm:px-8"
            >
              <p className="ed-label">LinkedIn</p>
              <p className="mt-1 text-[15px] text-[#F5F5F5]">
                Connect →
              </p>
            </a>
            <a
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-5 transition-colors duration-150 hover:bg-[#1A1C1F] sm:px-8"
            >
              <p className="ed-label">GitHub</p>
              <p className="mt-1 text-[15px] text-[#F5F5F5]">@ANNI69 →</p>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
