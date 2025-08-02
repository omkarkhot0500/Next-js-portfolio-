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
import { ExternalLink, Mail } from "lucide-react";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Omkar Khot</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Full-stack developer. MERN warrior. Anime lover.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I'm a passionate developer focused on building efficient and intuitive web
          applications using the MERN stack. Currently exploring real-time apps
          with Socket.IO and building impactful college-level platforms like
          lost-and-found systems and leave managers. Always leveling up — one
          line of code at a time.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <CodeSnippet title="welcome.ts" code={code.welcome} />

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
