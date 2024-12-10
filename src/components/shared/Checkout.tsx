'use client';

import { IEvent } from '~/lib/database/models/event.models';
import { Button } from '../ui/button';
import { checkoutOrder } from '~/lib/actions/order.actions';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout({
  event,
  userId,
}: {
  event: IEvent;
  userId: string;
}) {
  const onCheckout = async () => {
    const order = {
      eventTitle: event?.title,
      eventId: event?._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };

    await checkoutOrder(order);
  };

  useEffect(() => {
    const query = new URLSearchParams(
      window.location.search,
    );
    if (query.get('success')) {
      console.log(
        'Order placed! You will receive an email confirmation.',
      );
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.',
      );
    }
  }, []);

  return (
    <form action={onCheckout} method="post">
      <Button
        type="submit"
        role="link"
        size="lg"
        className="button sm:w-fit"
      >
        {event.isFree ? 'Get Ticket' : 'Buy Ticket'}
      </Button>
    </form>
  );
}
