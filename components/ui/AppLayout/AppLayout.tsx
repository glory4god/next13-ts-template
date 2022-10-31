export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto w-full h-full p-8 bg-slate-100">{children}</main>
    </>
  );
}
