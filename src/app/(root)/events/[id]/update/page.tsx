import EventForm from '~/components/shared/EventForm';

import { auth } from '@clerk/nextjs';
import { getEventById } from '~/lib/actions/event.actions';

export default async function UpdateEvent({
  params,
}: {
  params: { id: string };
}) {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(params.id);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm
          type="Update"
          event={event}
          eventId={event._id}
          userId={userId}
        />
      </div>
    </>
  );
}
