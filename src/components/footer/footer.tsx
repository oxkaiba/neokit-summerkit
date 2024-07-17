import Link from 'next/link';
import BlockNumber from "@/components/hooks/read/useBlockNumber";
import WETHPrice from '@/components/hooks/read/useWETHPrice';
import { Button } from '../ui/button';
import { FaDiscord } from "react-icons/fa";
import { PiXLogoFill } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import { siteConfig } from '@/lib/site';
import { SiFarcaster } from "react-icons/si";
import { ModeToggle } from '../ui/mode-toggle';

const Footer = () => {
  return (
    <div className='w-full border-t-2 border-black'>
      <footer className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center p-2.5 px-4">
          <div className='flex items-center gap-3'>
            <BlockNumber />
            <WETHPrice />
          </div>
          <div className="gap-3 hidden md:flex items-center">
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
        </div>
      </footer>
    </div>
  );
};

export default Footer;
