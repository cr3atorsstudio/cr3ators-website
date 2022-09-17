import { AppProps } from "next/app";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {!!process.env.NEXT_PUBLIC_MEASUREMENT_ID && (
        <HelmetProvider>
          <Helmet>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
            ></script>
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', { send_page_view: false });
              `}
            </script>
          </Helmet>
        </HelmetProvider>
      )}
      <Component {...pageProps} />
    </>
  );
}
