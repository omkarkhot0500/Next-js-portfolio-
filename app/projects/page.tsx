
import CodeSnippet from "@/components/code-snippet";
import { PageHeader } from "@/components/page-header";
import { PageHeaderHeading } from "@/components/page-header";
import Pager from "@/components/pager";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { code } from "@/config/codeContent";
import Link from "next/link";
import { projects } from "./projects";

const ProjectsPage = () => {
  // Identify featured projects by slug or title.
  const isFeaturedProject = (project: (typeof projects)[number]) => {
    return (
      project.slug === "prompt-verse" ||
      project.title.toLowerCase().includes("enterprise it support")
    );
  };

  // Get both featured projects.
  const featuredProjects = projects.filter(isFeaturedProject);

  // Keep all remaining projects in the normal projects section.
  const otherProjects = projects.filter(
    (project) => !isFeaturedProject(project)
  );

  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          A lot of ideas, but some are still under construction!
        </PageHeaderHeading>
      </PageHeader>

      {/* Featured Projects */}
      <section className="mb-12">
        <div className="mb-5">
          <h2 className="text-2xl font-bold tracking-tight">
            Featured Projects
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Some of my best work, showcasing my experience in full-stack
            development, backend engineering, and AI-powered applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card
              title={project.overview}
              key={project.slug}
              className="relative w-full transition-all duration-300 cursor-pointer isolate hover:scale-[1.02] border-primary/30 hover:border-primary/60"
            >
              <CardHeader className="gap-3">
                <div>
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    ★ Featured Project
                  </span>
                </div>

                <CardTitle className="text-xl leading-7">
                  {project.title}
                </CardTitle>

                <CardDescription className="flex flex-col gap-3 text-sm leading-relaxed">
                  {project.tagline}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative z-10 w-fit font-medium text-primary hover:underline"
                  >
                    Explore Project →
                    <span className="absolute inset-0" />
                  </Link>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="mb-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight">
              Other Projects
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Other applications and experiments I've built while exploring
              different technologies and solving practical problems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 card-container">
            {otherProjects.map((project) => (
              <Card
                title={project.overview}
                key={project.slug}
                className="relative w-full transition-all duration-300 cursor-pointer isolate hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="leading-6">
                    {project.title}
                  </CardTitle>

                  <CardDescription className="flex flex-col gap-2">
                    {project.tagline}

                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-muted-foreground"
                    >
                      Learn More...
                      <span className="absolute inset-0" />
                    </Link>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      )}

      <CodeSnippet code={code.projects} title="projects.ts" />

      <Pager
        prevHref="/experience"
        nextHref="/skills-tools"
        prevTitle="Experience"
        nextTitle="Skills & Tools"
      />
    </>
  );
};

export default ProjectsPage;
