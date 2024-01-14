import EventForm from '~/components/shared/EventForm';

import { auth } from '@clerk/nextjs';

export default function CreateEvent() {
  const { sessionClaims, userId: cuk } = auth();

  const userId = sessionClaims?.userId as string;
  console.log('user idddd', userId);
  console.log('cuk', cuk);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
}
