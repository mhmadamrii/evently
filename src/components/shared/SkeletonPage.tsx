import { Skeleton } from '../ui/skeleton';

export default function SkeletonPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center  border-red-500 bg-dotted-pattern bg-contain md:py-3">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <Skeleton className="h-8 w-2/3 md:w-full" />
            <Skeleton className="h-6 w-4/5 md:w-full" />
            <Skeleton className="h-12 w-full sm:w-fit" />
          </div>

          <div className="flex flex-col gap-[15px]">
            <Skeleton className="h-[20px] w-full object-contain object-center 2xl:max-h-[50vh]" />
            <Skeleton className="h-[20px] w-full object-contain object-center 2xl:max-h-[50vh]" />
            <Skeleton className="h-[20px] w-full object-contain object-center 2xl:max-h-[50vh]" />
          </div>
        </div>
      </section>

      <section
        id="events"
        className="wrapper flex flex-col gap-8 md:gap-12"
      >
        <Skeleton className="h-16 w-2/3 md:w-full" />

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Skeleton className="h-12 w-full md:w-1/3" />
          <Skeleton className="h-12 w-full md:w-2/3" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-200">
            <Skeleton className="mb-2 h-full w-full" />
            <Skeleton className="mb-2 h-full w-full" />
            <Skeleton className="h-full w-full" />
          </div>

          <div className="h-200">
            <Skeleton className="mb-2 h-full w-full" />
            <Skeleton className="mb-2 h-full w-full" />
            <Skeleton className="h-full w-full" />
          </div>

          <div className="h-200">
            <Skeleton className="mb-2 h-full w-full" />
            <Skeleton className="mb-2 h-full w-full" />
            <Skeleton className="h-full w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
