import CodeSnippet from "@/components/code-snippet";
import { PageActions } from "@/components/page-header";
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageHeader } from "@/components/page-header";
import Pager from "@/components/pager";
import { Button } from "@/components/ui/button";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader className="px-4 sm:px-6 md:px-8">
        <PageHeaderHeading className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Omkar Khot
        </PageHeaderHeading>

        <PageHeaderHeading className="mt-2 text-muted-foreground text-lg sm:text-xl md:text-2xl leading-snug sm:leading-normal">
          🌌 Lost in the Stack, Found in the Flow — Building Scalable, Real-Time
          Web Solutions
        </PageHeaderHeading>

        <PageHeaderDescription className="mt-3 max-w-prose text-sm sm:text-base md:text-lg">
          I’m a passionate full-stack developer crafting efficient, intuitive
          applications with the MERN stack. Currently exploring real-time
          experiences with Socket.IO and delivering impactful platforms like
          lost-and-found systems and smart leave managers. Always pushing
          boundaries — one line of code at a time.
        </PageHeaderDescription>

        <PageActions className="mt-4 flex flex-wrap gap-3">
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <div className="px-4 sm:px-6 md:px-8">
        <CodeSnippet title="welcome.ts" code={code.welcome} />
      </div>

      <Pager
        prevHref="/"
        nextHref="/experience"
        prevTitle="Previous"
        nextTitle="Experience"
      />
    </>
  );
};

export default IntroductionPage;
