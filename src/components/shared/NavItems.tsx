'use client';

import Link from 'next/link';
import React from 'react';

import { headerLinks } from '~/constants';
import { usePathname } from 'next/navigation';
import { cn } from '~/lib/utils';

export default function NavItems() {
  const pathname = usePathname();

  return (
    <ul
      className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row"
      onClick={() => null}
    >
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={cn(
              'flex-center p-medium-16 whitespace-nowrap',
              { 'text-primary-500': isActive },
            )}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
