import "../styles/globals.css";
import { Navbar } from "../components";
function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
