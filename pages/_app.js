import MainLayout from '@/src/components/layout/main-layout';
import '@/styles/globals.css'
import {SessionProvider} from 'next-auth/react';

function MyApp({ Component, pageProps,session }) {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        
        <Component {...pageProps} />
        
      </MainLayout>
      </SessionProvider>

  );
}

export default MyApp;