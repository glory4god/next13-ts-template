export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="w-full h-full bg-slate-300">{children}</main>
    </>
  );
}
