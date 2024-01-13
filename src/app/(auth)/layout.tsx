export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-center bg-cove min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-fixed bg-center">
      {children}
    </div>
  );
}
