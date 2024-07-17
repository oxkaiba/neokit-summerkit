import CustomConnectButton from '../connectButton';
import OnchainBalance from '@/components/hooks/read/useBalance';
import Image from 'next/image';
import Summer from "@/public/skit.svg";
import BaseWordmark from "@/public/base-brand-kit/symbol/Base_Symbol_Black.svg"
import { NavMenu } from './nav-menu';
import { MobileNav } from './mobile-menu';
import { CustomCreateWalletButton } from '../customCreateWalletButton';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <div className='border-b-2 border-black'>
      <header className="sticky top-0 max-w-6xl mx-auto w-full pb-0.5">
        <nav className="flex justify-between items-center p-2.5">
          <div className="flex items-center gap-1 ml-1.5">
            <Button size="icon" className='cursor-default'>
              <Image src={Summer} alt="Summer" className=' contrast-150' />
            </Button>
            <div className="flex flex-col ml-2 items-center">
              <span className="leading-1 text-2xl onchainsummer-font text-black dark:text-white">
                SuMmer Kit
              </span>
              <span className="items-center text-sm font-semibold flex -mt-1.5 leading-3 text-black">
                BOILERPLATE & TOOLS ON
                <Image src={BaseWordmark} alt="Base" width={16} className='ml-0.5' />
              </span>
            </div>
            <NavMenu />
          </div>
          <div className="flex">
            <div className="hidden md:flex space-x-2 pr-2 items-center">
              <OnchainBalance />
              <CustomCreateWalletButton />
              <CustomConnectButton />
            </div>
            <div className="flex md:hidden">
              <MobileNav />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;