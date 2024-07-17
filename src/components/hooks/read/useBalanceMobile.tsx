"use client";

import { useAccount, useBalance } from 'wagmi';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Eth from "@/public/eth.svg";
import { Button } from '@/components/ui/button';

export default function OnchainBalanceMobile() {
  const { address, isDisconnected } = useAccount();
  const { data } = useBalance({
    address: address,
  });

  let formattedBalance = "0";
  if (data) {
    const balance = Number(data.formatted);
    formattedBalance = balance < 0.0001 ? "0" : balance.toFixed(4);
  }

  if (isDisconnected) {
    return null;
  }

  return (
    <div className='px-2'>
      <Button className='flex w-full text-foreground mb-1'>
        {formattedBalance} {data?.symbol}
        <Avatar className='w-5 h-5 ml-2'>
          <AvatarImage src={Eth.src} />
        </Avatar>
      </Button>
    </div>
  );
}
