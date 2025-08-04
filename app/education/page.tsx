import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCard } from "@/components/ui/hover-card";
import { code } from "@/config/codeContent";

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          I learned a lot, but the real learning happens in the code editor!
        </PageHeaderHeading>
        <PageHeaderDescription>
          Education has been the solid ground from which I launched my
          exploration into computer science and AI/ML. Along the way, practical
          projects and coding sessions have sharpened my technical foundation
          well beyond the classroom.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        {/* BTech - GAT */}
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
            Bachelor of Engineering in Computer Science (AI & ML) · Global
            Academy of Technology, Bengaluru
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Current
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Dec 2022 – Present
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Pursuing B.E. in Computer Science with a focus on Artificial
            Intelligence and Machine Learning. Building a robust foundation in
            theory and hands-on development, with a current CGPA of 8.56.
          </p>
        </li>

        {/* PU College */}
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
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Pre-University (PCM & CS) · Vidyavahini PU College, Tumkur
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2020 – 2022
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Studied Physics, Chemistry, Mathematics, and Computer Science during
            pre-university, achieving 89.67%. Key exposure to computer
            fundamentals and analytical thinking.
          </p>
        </li>
      </ol>

      <CodeSnippet code={code.educationJourney} title="educationJourney.ts" />

      <Pager
        prevHref="/skills-tools"
        nextHref="/contact"
        prevTitle="Skills & Tools"
        // nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;
