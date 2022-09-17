import { AppProps } from "next/app";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../styles/index.css";
import { usePageView } from "../hooks/usePageView";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Google Analytics の PV をカウントするイベント
  usePageView();

  return <Component {...pageProps} />;
}
