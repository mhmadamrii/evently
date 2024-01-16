import React from 'react';
import Link from 'next/link';
import Checkout from './Checkout';

import { IEvent } from '~/lib/database/models/event.models';
import { Button } from '../ui/button';

import {
  SignedIn,
  SignedOut,
  useUser,
} from '@clerk/nextjs';

export default function CheckoutButton({
  event,
}: {
  event: IEvent;
}) {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished =
    new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer available.
        </p>
      ) : (
        <>
          <SignedOut>
            <Button
              asChild
              className="button rounded-full"
              size="lg"
            >
              <Link href="/sign-in">Get Tickets</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
}
