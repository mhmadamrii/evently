import { Skeleton } from '../ui/skeleton';

export default function SkeletonPage() {
  return (
    <div className="container mx-auto my-[20px] flex flex-col items-center justify-center gap-6 md:flex-row">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[240px]" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton className="h-[100px] w-[400px]" />
        <Skeleton className="h-[100px] w-[400px]" />
      </div>
    </div>
  );
}
