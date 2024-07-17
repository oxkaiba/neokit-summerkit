"use client";

import { useAccount, useBalance } from 'wagmi';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Loader2 } from "lucide-react";
import Eth from "@/public/eth.svg";

export default function OnchainBalance() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: address,
  });

  if (isConnecting) return <div className="text-sm font-semibold flex justify-center items-center">
    Connecting… <Loader2 size={12} className="ml-2 animate-spin text-black" />
  </div>;
  if (isDisconnected) return null;
  if (isLoading) return <div className="text-sm font-semibold flex justify-center items-center">
    Fetching balance… <Loader2 size={12} className="ml-2 animate-spin text-black" /></div>;
  if (isError) return null;

  let formattedBalance = "0";
  if (data) {
    const balance = Number(data.formatted);
    formattedBalance = balance < 0.0001 ? "0" : balance.toFixed(4);
  }

  return (
    <div className="text-sm font-semibold flex justify-center items-center px-2 text-black">
      {formattedBalance}&nbsp;{data?.symbol} <Avatar className='w-4 h-4 ml-2 hidden md:flex'>
        <AvatarImage src={Eth.src} />
      </Avatar>
    </div>
  );
}
