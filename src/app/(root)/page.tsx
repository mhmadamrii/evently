import Image from 'next/image';
import { SearchParamProps } from '~/types';

export default function Home({
  searchParams,
}: SearchParamProps) {
  return (
    <main className="flex bg-blue-600">
      <h1 className="text-4xl text-red-500">Hello world</h1>
    </main>
  );
}
