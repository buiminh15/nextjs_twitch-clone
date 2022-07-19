import "../styles/globals.css";
import { Navbar } from "../components";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
      <div className="w-full min-h-screen">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
