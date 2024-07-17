"use client"
// Here we use Dexscreener to pull up the price of WETH, you can use this example to pull the price for your own token.
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import Eth from "@/public/eth.svg";

interface DexScreenerResponse {
  pairs: {
    chainId: string;
    dexId: string;
    url: string;
    pairAddress: string;
    baseToken: {
      address: string;
      name: string;
      symbol: string;
    };
    quoteToken: {
      address: string;
      name: string;
      symbol: string;
    };
    priceNative: string;
    priceUsd: string;
    liquidity: {
      usd: number;
      base: number;
      quote: number;
    };
    volume: {
      h24: number;
      h24Change: number;
    };
    fees: {
      h24: number;
    };
    txns: {
      h24: {
        buys: number;
        sells: number;
      };
      h24Change: {
        buys: number;
        sells: number;
      };
    };
    createdAt: string;
  }[];
}

const fetchWethPrice = async (): Promise<number | null> => {
  try {
    const response = await fetch('https://api.dexscreener.com/latest/dex/search?q=/WETH%20USDC');
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data: DexScreenerResponse = await response.json();
    const wethPair = data.pairs.find(pair => pair.baseToken.symbol === 'WETH' && pair.quoteToken.symbol === 'USDC');
    if (wethPair) {
      return parseFloat(wethPair.priceUsd);
    } else {
      console.error('WETH-USDC pair not found.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching WETH price:', error);
    return null;
  }
};

const WETHPrice: React.FC = () => {
  const [wethPrice, setWethPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getWethPrice = async () => {
      const price = await fetchWethPrice();
      setWethPrice(price);
      setLoading(false);
    };

    getWethPrice();
  }, []);

  if (loading) {
    return <>
      <Button className='text-md font-semibold'>
          <p className='text-black dark:text-white'>Loading...</p>
          <Loader2 size={14} className="ml-2 animate-spin text-black dark:text-white" />
        </Button>
    </>
  }

  if (wethPrice === null) {
    return null;
  }

  return (
    <Button className='text-md font-semibold text-foreground'>
      <span className='text-black dark:text-white'>${wethPrice}</span>
      <Avatar className='w-4 h-4 ml-2'>
        <AvatarImage src={Eth.src} />
      </Avatar>
    </Button>
  );
};

export default WETHPrice;
