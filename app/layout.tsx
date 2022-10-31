import Layout from '../components/ui/Layout';
import AppLayout from '../components/ui/AppLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>Application</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Web App" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Layout>
        <AppLayout>{children}</AppLayout>
      </Layout>
    </html>
  );
}
