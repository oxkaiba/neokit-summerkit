"use client";
import Image from "next/image";
import * as React from "react";
import Link, { LinkProps } from "next/link";
import OnchainBalanceMobile from "@/components/hooks/read/useBalanceMobile";
import ConnectMobileWalletButton from "@/components/connectMobileButton";
import Summer from "@/public/skit.svg";
import BaseSymbol from "@/public/base-brand-kit/symbol/Base_Symbol_Black.svg"
import { SiFarcaster } from "react-icons/si";
import { useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaDiscord } from "react-icons/fa";
import { PiXLogoFill } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import { siteConfig } from '@/lib/site';
import { ModeToggle } from "../ui/mode-toggle";
import { CustomCreateWalletMobileButton } from "../customCreateWalletMobileButton";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="mr-2" size="icon" style={{ outline: 'none' }}>
          <MenuIcon className="w-5 h-5 text-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className={`bg-card border-l-2 border-black p-1.5`}
      >
        <div className="flex items-center px-2 gap-2.5 mt-2">
          <Button size="icon" className='cursor-default'>
            <Image src={Summer} alt="Summer" className='contrast-150' />
          </Button>
          <div className="flex flex-col items-center mt-0.5">
              <span className="leading-1 text-xl onchainsummer-font text-black dark:text-white">
                SuMmer Kit
              </span>
              <span className="items-center text-xs font-semibold flex -mt-1.5 leading-3 text-black">
                BOILERPLATE & TOOLS ON
                <Image src={BaseSymbol} alt="Base" width={12} className='ml-0.5' />
              </span>
            </div>
        </div>
        <ScrollArea>
          <div className="mb-1 flex justify-between items-center gap-1">
            <div className="w-full space-y-1 mt-4">
              <span className="flex space-x-2 justify-center mb-1 px-2">
                <CustomCreateWalletMobileButton />
                <ConnectMobileWalletButton />
              </span>
              <OnchainBalanceMobile />
            </div>
          </div>
          <div className="space-y-2 px-2">
            <MobileLink
              href="/"
              className="flex items-center"
              onOpenChange={setOpen}>
              <Button className='flex w-full text-foreground'>
                Explore
              </Button>
            </MobileLink>
            <MobileLink
              href={siteConfig.links.trade}
              className="flex items-center"
              onOpenChange={setOpen}>
              <Button className='flex w-full text-foreground'>
                Trade
              </Button>
            </MobileLink>
            <MobileLink
              href={siteConfig.links.bridge}
              className="flex items-center"
              onOpenChange={setOpen}>
              <Button className='flex w-full text-foreground'>
                Bridge
              </Button>
            </MobileLink>
          </div>
          <div className="gap-2 flex items-center justify-center mt-3 mb-3">
            <Link href={siteConfig.links.farcaster} target="_blank">
              <Button size="icon" style={{ outline: 'none' }}>
                <SiFarcaster size={20} className='text-foreground' />
              </Button>
            </Link>
            <Link href={siteConfig.links.twitter} target="blank">
              <Button size="icon" style={{ outline: 'none' }}>
                <PiXLogoFill size={20} className='text-foreground' />
              </Button>
            </Link>
            <Link href={siteConfig.links.discord} target="blank">
              <Button size="icon" style={{ outline: 'none' }}>
                <FaDiscord size={20} className='text-foreground' />
              </Button>
            </Link>
            <Link href={siteConfig.links.telegram} target="blank">
              <Button size="icon" style={{ outline: 'none' }}>
                <BiLogoTelegram size={20} className='text-foreground' />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
