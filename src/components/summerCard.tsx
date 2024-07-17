import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Summer from "@/public/skit.svg";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import CardImage from "@/public/summercard.png";
import { RefreshCcw } from "lucide-react";
import { RiGithubLine } from "react-icons/ri";

export function SummerCard() {
  return (
    <Card className="w-10/12 md:w-2/3 max-w-lg mx-auto relative overflow-hidden bg-card border-foreground">
      <div className="absolute inset-0 bg-no-repeat bg-right bg-cover opacity-35" style={{ backgroundImage: `url(${CardImage.src})` }}></div>
      <CardHeader className="grid items-start gap-4 space-y-0 relative z-10">
        <div className="space-y-1">
          <CardTitle className="flex items-center justify-between text-lg">
            <span className="flex">
              <p className="text-foreground">SummerKit</p>
              <Image src={Summer} alt="Summer" width={22} height={22} className="ml-1.5 contrast-150 hidden sm:flex" />
            </span>
            <span className="space-x-2 ml-1 flex">
              <Link href="https://docs.dynamic.xyz/introduction/welcome" target="blank">
              <Button size="sm" className="text-black dark:text-white">
                  Dynamic
                </Button>
              </Link>
              <Link href="https://wagmi.sh/react/getting-started" target="blank">
              <Button size="sm" className="text-black dark:text-white">
                  Wagmi
                </Button>
              </Link>
            </span>
          </CardTitle>
          <CardDescription className="text-xs text-foreground">
            Start by grabbing your Dynamic Environment Key and update it in app/layout.tsx.
            <br />
            To update all the links, edit lib/site.ts then begin editing the page by modifying app/page.tsx.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center text-foreground font-semibold">
            <RefreshCcw className="mr-1 h-4 w-4 text-foreground" />
            Updated on 17/07/24
          </div>
          <Link href={siteConfig.links.repo} target="blank">
            <Button>
              <p className="text-foreground text-xs">{siteConfig.version}</p>
              <RiGithubLine className="w-4 h-4 text-foreground ml-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
