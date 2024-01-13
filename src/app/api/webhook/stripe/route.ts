import { NextResponse } from 'next/server';

export const GET = () => {
  try {
    return NextResponse.json({ data: 'Hello world' });
  } catch (error) {
    console.log(error);
  }
};
