'use server';

import { revalidatePath } from 'next/cache';
import { connectToDatabase } from '../database';
import { CreateEventParams } from '~/types';
import { handleError } from '../utils';

/**
 * @params models name
 */

import User from '../database/models/user.model';
import Event from '../database/models/event.models';

export async function getEventById(eventId: string) {}

export async function createEvent({
  userId,
  event,
  path,
}: CreateEventParams) {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);
    console.log('user id', userId);
    console.log('organizer', organizer);

    if (!organizer) throw new Error('Organizer not found');
    console.log('event value', event);

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });
    console.log('result', newEvent);

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    console.log(error);
    handleError(error);
  }
}
