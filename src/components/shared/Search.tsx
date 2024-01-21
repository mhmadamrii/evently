'use client';

import React from 'react';
import Image from 'next/image';

import { Input } from '../ui/input';
import {
  useRouter,
  useSearchParams,
} from 'next/navigation';

import {
  formUrlQuery,
  removeKeysFromQuery,
} from '~/lib/utils';

export default function Search({
  placeholder = 'search title...',
}: {
  placeholder: string;
}) {
  const [query, setQuery] = React.useState<string>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['query'],
        });
      }
      router.push(newUrl, { scroll: false });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchParams, router]);

  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />

      <Input
        type="text"
        placeholder={placeholder}
        className="p-regular border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement>,
        ) => setQuery(e.target.value)}
      />
    </div>
  );
}
