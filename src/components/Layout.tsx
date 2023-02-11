import Head from 'next/head';
import Navbar from './Navbar';

type LayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

function Layout({
  title = 'Besocial',
  description = 'Generated by create next app',
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='md:mx-16 bg-red-200'>{children}</main>
    </>
  );
}

export default Layout;
