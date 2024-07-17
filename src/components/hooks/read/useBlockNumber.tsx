'use client';

import React from 'react';
import Link from 'next/link';
import { useBlockNumber } from 'wagmi';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';


export default function BlockNumber() {
  const { data, isLoading } = useBlockNumber({
    chainId: 8453,
    watch: true,
  });
  //@ts-ignore
  const getLinkUrl = (blockNumber) =>
    `https://basescan.org/block/${blockNumber}`;

  return (
    <div className="flex items-center">
      {isLoading ? (

        <Button className='text-md font-semibold'>
          <p className='text-black dark:text-white'>Loading...</p>
          <Loader2 size={14} className="ml-2 animate-spin text-black dark:text-white" />
        </Button>


      ) : (
        data !== undefined && (
          <Link
            className="flex items-center"
            href={getLinkUrl(data)}
            passHref
            target="_blank"
          >
            <HoverCard>
              <HoverCardTrigger>
                <Button className='text-md font-semibold'>
                  <p className='text-black dark:text-white'>{data.toString()}</p>
                  <span className="bg-main dark:bg-white rounded-full ml-2 h-2.5 w-2.5 inline-block animate-pulse"></span>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className='bg-transparent border-none'>
                <Card className='text-sm font-medium mb-4 ml-2 p-3 bg-background border-black'>
                  <p className='text-black dark:text-white'>The most recent block on Base.</p>
                </Card>
              </HoverCardContent>
            </HoverCard>
          </Link>
        )
      )}
    </div>
  );
}
