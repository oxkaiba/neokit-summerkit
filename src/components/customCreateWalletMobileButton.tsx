"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import { useAccount } from 'wagmi';
import { RiStopCircleFill } from "react-icons/ri";
import { CircleCheck } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Card } from './ui/card';
import { siteConfig } from '@/lib/site';
import { Button } from './ui/button';

const formatAddress = (address: string) => {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

let sdk: CoinbaseWalletSDK | null = null;

if (typeof window !== 'undefined') {
  sdk = new CoinbaseWalletSDK({
    appName: 'SummerKit',
    appLogoUrl: siteConfig.logo,
    appChainIds: [8453, 84532],
  });
}

export function CustomCreateWalletMobileButton() {
  const [provider, setProvider] = useState<ReturnType<CoinbaseWalletSDK['makeWeb3Provider']> | null>(null);
  const { isDisconnected } = useAccount();
  const [hasWallet, setHasWallet] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    if (sdk) {
      setProvider(sdk.makeWeb3Provider());
    }
  }, []);

  useEffect(() => {
    async function checkWallet() {
      if (!provider) return;

      try {
        const accounts = await provider.request({
          method: 'eth_accounts',
        }) as string[];

        if (accounts.length > 0) {
          setHasWallet(true);
          setWalletAddress(accounts[0]);
        }
      } catch (error) {
        console.error('Failed to check wallet:', error);
      }
    }

    checkWallet();
  }, [provider]);

  const createWallet = useCallback(async () => {
    if (!provider) {
      console.error('Provider is not initialized');
      return;
    }

    try {
      const accounts = await provider.request({
        method: 'eth_requestAccounts',
      }) as string[];
      const address = accounts[0];
      console.log('Wallet created with address:', address);
      setHasWallet(true);
      setWalletAddress(address);
    } catch (error) {
      console.error('Failed to create wallet:', error);
    }
  }, [provider]);

  if (!provider) {
    return null;
  }

  if (!isDisconnected) {
    return null;
  }

  if (hasWallet) {
    return (
      <HoverCard>
        <HoverCardTrigger>
          <Button
            className="flex items-center text-sm font-semibold"
          >
            <RiStopCircleFill size={18} className='text-foreground' />&nbsp;
            <p className='text-foreground text-xxs'>/</p>&nbsp;
            <CircleCheck size={18} className='text-main dark:text-white' />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className='bg-transparent border-none'>
          <Card className='text-xs font-medium mt-3 ml-2 p-3 bg-white dark:bg-main border-black leading-3'>
            <div className='flex items-center'>
              <p className='dark:text-white text-black'>Smart Wallet found</p>
              <Button size="sm" className="text-black dark:text-white ml-1">
                <p className='mt-0.5 text-xs'>{formatAddress(walletAddress!)}</p>
                <RiStopCircleFill size={14} className='text-main dark:text-white ml-1' />
              </Button>
            </div>
            <p className='mt-2 dark:text-white text-black'>connect it using the connect button.</p>
          </Card>
        </HoverCardContent>
      </HoverCard>
    );
  }

  return (
    <Button className='flex items-center' onClick={createWallet}>
      <RiStopCircleFill size={18} className='text-foreground' />
      <p className='text-sm font-medium ml-1.5 pr-1.5 text-foreground'>Create&nbsp;Wallet</p>
    </Button>
  );
}
