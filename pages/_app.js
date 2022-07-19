import "../styles/globals.css";
import { Layout, Navbar } from "../components";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
