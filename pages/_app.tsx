import { AppProps } from "next/app";
import "../styles/index.css";
import { usePageView } from "../hooks/usePageView";
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Google Analytics の PV をカウントするイベント
  usePageView();
  const { chains, provider } = configureChains(
    [chain.mainnet],
    [
      alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "Creators Studio",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: `var(--bg-connect-wallet-btn)`,
          borderRadius: "large",
        })}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
