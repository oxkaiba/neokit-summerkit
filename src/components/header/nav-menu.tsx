'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export function NavMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex ml-6">
      <nav className="flex items-center text-sm font-semibold gap-1">
        <Button size="sm">
          <Link
            href="/"
            className={cn(
              'text-foreground/80 font-semibold',
              pathname === '/'
                ? 'text-foreground font-semibold' // When is selected
                : 'text-foreground/90 font-semibold'
            )}
          >
            <p>
              Explore
            </p>
          </Link>
        </Button>
      </nav>
    </div>
  );
}