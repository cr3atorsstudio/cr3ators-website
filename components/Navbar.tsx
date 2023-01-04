import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "../hooks/useLocale";

const Navbar = () => {
  const locale = useLocale().locale;
  return (
    <>
      <header className="sticky top-0 z-40 flex w-full flex-none items-center bg-white p-4 shadow md:px-8">
        <Link href="/" className="flex-none">
          <span className="text-l cursor-pointer font-sans-serif font-bold text-gray-900 md:text-2xl">
            CREATORS STUDIO
          </span>
        </Link>

        <nav className="ml-auto flex columns-3 place-content-around items-center gap-4">
          <a href="https://twitter.com/cr3atorsstudio" target="_blank">
            <Image
              src="/twitter.svg"
              alt="Twitter Logo"
              width={29.72}
              height={24.14}
            />
          </a>
          <a href="https://www.instagram.com/cr3atorsstudio" target="_blank">
            <Image
              src="/instagram.svg"
              alt="Instagram Logo"
              width={28.55}
              height={28.55}
            />
          </a>
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button onClick={openConnectModal} type="button">
                          <Image
                            src="/wallet.svg"
                            alt="Instagram Logo"
                            width={36}
                            height={36}
                          />
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} type="button">
                          Wrong network
                        </button>
                      );
                    }
                    return (
                      <div style={{ display: "flex", gap: 12 }}>
                        <button
                          onClick={openChainModal}
                          style={{ display: "flex", alignItems: "center" }}
                          type="button"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: "hidden",
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? "Chain icon"}
                                  src={chain.iconUrl}
                                  style={{ width: 12, height: 12 }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>
                        <button onClick={openAccountModal} type="button">
                          {account.displayName}
                          {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ""}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>

          <a
            className="
            rounded-2xl border border-black bg-gradient-to-r from-[#FFADDD] to-[#B6E6FF] px-2 py-2 font-sans-serif text-sm
            text-base font-bold text-gray-900"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxfARwmnEqTP_LXfeNBXHgz_X9taZqn4kRRlRnVFVnDMgqdg/viewform"
            target="_blank"
          >
            Join Community
          </a>

          <div className="gap-0">
            <Link href="/" locale={locale === "ja" ? "en" : "ja"} passHref>
              <span
                className={
                  locale === "ja"
                    ? "select-none font-sans-serif text-gray-900"
                    : "select-none font-sans-serif text-gray-500"
                }
              >
                JP
              </span>
            </Link>
            &nbsp;&#47;&nbsp;
            <Link href="/" locale={locale === "ja" ? "en" : "ja"} passHref>
              <span
                className={
                  locale === "ja"
                    ? "select-none font-sans-serif text-gray-500"
                    : "select-none font-sans-serif text-gray-900"
                }
              >
                EN
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
