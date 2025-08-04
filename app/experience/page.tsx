import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          You need it to get the job, but the job’s what gives it!
        </PageHeaderHeading>
        <PageHeaderDescription>
          Throughout my journey as a developer, I have had the opportunity to
          work with cutting-edge technologies while also mastering the fine art
          of debugging at 2 AM. From building dynamic web applications to
          deciphering cryptic error messages, my experience has been a mix of
          structured learning and spontaneous problem-solving. Each project and
          internship has sharpened my ability to write clean code, collaborate
          effectively, and most importantly—fix bugs before they fix me.
        </PageHeaderDescription>
      </PageHeader>
      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        {/* 4. Web Development Intern · Skilign */}

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>

          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Web Development Intern ·{" "}
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="https://drive.google.com/file/d/1090S2bN407VD4PYoVzncDaUH4cWyofGo/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Skilign
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-2">
                <iframe
                  src="https://drive.google.com/file/d/1090S2bN407VD4PYoVzncDaUH4cWyofGo/preview"
                  className="w-full h-48 rounded border"
                  allow="autoplay"
                ></iframe>
              </HoverCardContent>
            </HoverCard>
          </h3>

          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Oct. 2024 – Dec. 2024
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Collaborated on the initial setup by evaluating and recommending the
            tech stack, shaping the platform architecture. Supported the team in
            building frontend and backend components using React, MongoDB, and
            RESTful APIs.
          </p>
        </li>

        {/* 5. Freelance Web Developer · Metal Casting Industry Website */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Freelance Web Developer · Metal Casting Industry Website
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan. 2025 – Feb. 2025
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Developed and deployed a fully responsive website for a metal
            casting company using React and Netlify, improving digital presence
            with smooth navigation and strong lead generation.
          </p>
        </li>

        {/* 6. Contributor · Code Daily With Me */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Contributor ·{" "}
            <a
              href="https://code.dailywith.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Code Daily With Me
            </a>
          </h3>

          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Ongoing
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Integrated frontend components for a DSA progress tracker platform,
            aligning them with a dynamic DSA sheet-based structure. Focused on
            responsive UI and real-time data updates.
          </p>
        </li>

        {/* 7. Lead Developer · Official Club Website */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Lead Developer · Official Club Website
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Date not specified
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Developed and deployed the official responsive website for a college
            department club to showcase events, teams, and projects. Boosted
            student engagement and visibility.
          </p>
        </li>

        {/* 8. Lead Developer · College Department LMS */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Lead Developer · College Department LMS
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Date not specified
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Built a custom Learning Management System for internal departmental
            use, streamlining assignment tracking, submissions, and
            communication between faculty and students.
          </p>
        </li>
      </ol>
      <CodeSnippet code={code.experience} title="experience.ts" />
      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};

export default ExperiencePage;
