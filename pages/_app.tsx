import { AppProps } from "next/app";
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // @ts-ignore: Unreachable code error
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
