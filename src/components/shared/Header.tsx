import Link from 'next/link';
import Image from 'next/image';

import {
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="logo"
          />
        </Link>

        <div className="flex w-32 justify-end gap-3"></div>
      </div>
      <h1>Some header</h1>
      <h1>Some header</h1>
    </header>
  );
}
