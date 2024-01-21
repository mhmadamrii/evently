import SkeletonPage from '~/components/shared/SkeletonPage';

export default async function Loading() {
  // await new Promise((resolve) =>
  //   setTimeout(resolve, 10000),
  // );
  return (
    <div>
      <SkeletonPage />
    </div>
  );
}
