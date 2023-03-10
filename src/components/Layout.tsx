import Head from 'next/head';
import LeftPannel from './LeftPannel';
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
      <div className='flex gap-16 md:mx-16 mx-4 bg-white'>
        <LeftPannel />
        <main className='mt-4 w-full'>{children}</main>
      </div>
    </>
  );
}

export default Layout;
