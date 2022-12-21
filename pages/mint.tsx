import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { mintNFT } from "../lib/mint";
import { CONTRACT_ADDRESS } from "../lib/constants";
import { ethers } from "ethers";
import abi from "../lib/CreatorsNFT.json";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import { useLocale } from "../hooks/useLocale";

const contractABI = abi.abi;

const Mint: NextPage = () => {
  const [mintContract, setContract] = useState<ethers.Contract | null>(null);
  const [num, setNum] = useState(0);
  const [tokenId, setTokenId] = useState(0);
  const [error, setError] = useState("");
  const [supporterNftNum, setSupporterNftNum] = useState(0);
  const [creatorNftNum, setCreatorNftNum] = useState(0);

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum as any);
      const signer = provider.getSigner();

      const creatorsNft = mintContract
        ? mintContract
        : new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

      setContract(creatorsNft);
    } else {
      console.log("wallet is not connected");
    }
  }, []);

  useEffect(() => {
    if (mintContract) {
      getNftNum();
    }
  }, [mintContract]);

  const getNftNum = useCallback(async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum as any);
        const signer = provider.getSigner();
        const creatorsNft = mintContract
          ? mintContract
          : new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

        const creator = await creatorsNft.balanceOf(CONTRACT_ADDRESS, 0);
        const supporter = await creatorsNft.balanceOf(CONTRACT_ADDRESS, 1);

        setSupporterNftNum(supporter.toNumber());
        setCreatorNftNum(creator.toNumber());
      } else {
        throw new Error("wallet is not connected");
      }
    } catch (error) {
      console.error(
        "Something went wrong while getting the number of NFT available"
      );
    }
  }, [mintContract]);

  const onMint = useCallback(
    async (currentNum: number) => {
      setError("");

      if (currentNum <= 0) {
        setError("Please enter a number greater than 0");
      }

      if (currentNum > 0 && mintContract) {
        await mintNFT(mintContract, currentNum, tokenId);
      }
    },
    [mintContract]
  );

  const onCreatorClick = useCallback(() => {
    setTokenId(0);
  }, []);

  const onSupporterClick = useCallback(() => {
    setTokenId(1);
  }, []);

  const increment = useCallback(() => {
    setNum((num) => num + 1);
    setError("");
  }, []);

  const decrement = useCallback(() => {
    setNum((num) => (num > 0 ? num - 1 : 0));
    setError("");
  }, []);

  const locale = useLocale().locale;
  const text = useLocale().t;

  return (
    <>
      <Head>
        <title>Creators Studio</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:ital,wght@0,300;0,400;1,400&display=swap'
          rel='stylesheet'
        />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/creatorsstudio.jpeg'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/creatorsstudio.jpeg'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/creatorsstudio.jpeg'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/creatorsstudio.jpeg'
          color='#000000'
        />
        <link rel='shortcut icon' href='/favicon/creatorsstudio.jpeg' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
        <meta name='theme-color' content='#000' />
        <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
        <meta
          name='description'
          content={`Welcome to Creators Studio! We are the web3 community for womxn `}
        />
        <meta property='og:image' content='/favicon/creatorsstudio.jpeg' />
      </Head>
      <header className="flex items-center sticky top-0 z-40 w-full flex-none bg-white shadow p-4 px-8">
        <Link href='/' className="flex-none">
          <span className='text-2xl font-sans-serif font-bold text-gray-900 cursor-pointer'>
            CREATORS STUDIO
          </span>
        </Link>

        <nav className="flex items-center ml-auto columns-3 gap-4 place-content-around">
          <a href="https://twitter.com/cr3atorsstudio" target="_blank"><Image src="/twitter.svg" alt="Twitter Logo" width={29.72} height={24.14} /></a>
          <a href="https://www.instagram.com/cr3atorsstudio" target="_blank"><Image src="/instagram.svg" alt="Instagram Logo" width={28.55} height={28.55} /></a>
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
              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated');

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button onClick={openConnectModal} type="button">
                          <Image src="/wallet.svg" alt="Instagram Logo" width={36} height={36} />
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
                      <div style={{ display: 'flex', gap: 12 }}>
                        <button
                          onClick={openChainModal}
                          style={{ display: 'flex', alignItems: 'center' }}
                          type="button"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: 'hidden',
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? 'Chain icon'}
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
                            : ''}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>

          <a className="
            font-sans-serif text-base font-bold text-gray-900 rounded-full border-black border px-[20px] py-[14px]
            bg-gradient-to-r from-[#FFADDD] to-[#B6E6FF]"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxfARwmnEqTP_LXfeNBXHgz_X9taZqn4kRRlRnVFVnDMgqdg/viewform"
            target="_blank"
          >
            Join Community
          </a>

          <div className="gap-0">
            <Link href='/' locale={locale === "ja" ? "en" : "ja"} passHref>
              <span className={locale === "ja" ? "font-sans-serif text-gray-900 select-none" : "font-sans-serif text-gray-500 select-none" }>
                JP
              </span>
            </Link>
            &nbsp;&#47;&nbsp;
            <Link href='/' locale={locale === "ja" ? "en" : "ja"} passHref>
              <span className={locale === "ja" ? "font-sans-serif text-gray-500 select-none" : "font-sans-serif text-gray-900 select-none"}>
                EN
              </span>
            </Link>
          </div>
        </nav>
      </header>
      <main className="bg-white font-sans-serif ">
        <section className="flex h-screen flex-col">
          <h1 className="mt-16 text-center text-[64px] font-bold text-text-gray-900">
            Creators Studio NFT
          </h1>

          <div className="mx-auto mt-16 w-4/5 rounded-3xl bg-white p-6 drop-shadow-card">
            <h2 className="mt-5 mb-10 ml-10 text-4xl font-bold text-mint-subtitle">
              500 uniquely generated Creators Community NFT!
            </h2>
            <div className="flex items-center justify-between">
              <p className="ml-10 w-1/2 text-2xl leading-relaxed">
                The Creators Community NFT is a unique initiative that uses
                blockchain technology to raise awareness about gender inequality
                in web3 and increase the number of women and gender minorities
                to close the gender gap in web3. By minting the NFTs, we hope to
                generate funds that can be used to support gender equality
                initiatives.
              </p>
              <img
                className="mr-20 w-1/3"
                src="documents.png"
                alt="woman holding documents"
              />
            </div>
          </div>
        </section>

        <section className="h-screen bg-mint-purple p-1">
          <h2 className="mt-10 mb-16 text-center text-5xl font-bold text-mint-subtitle ">
            Collection
          </h2>
          <div className="mx-auto flex w-4/5 justify-center ">
            <div className="mx-4 flex flex-col items-center">
              <p>Creator</p>
              <label htmlFor="creator" className="mb-1 ">
                <img
                  src="maru.png"
                  alt=""
                  className={`m-1 h-72 w-72 cursor-pointer drop-shadow-collection ${
                    tokenId === 0 && "border-4 border-mint-subtitle"
                  }`}
                />
              </label>
              <input
                id="creator"
                type="radio"
                value=""
                name="default-radio"
                className="hidden"
                onClick={onCreatorClick}
              />
              <p>{creatorNftNum} available </p>
            </div>

            <div className="mx-4 flex flex-col items-center">
              <p>Suporter</p>
              <label htmlFor="supporter" className="mb-1">
                <img
                  src="shikaku.png"
                  alt=""
                  className={`m-1 h-72 w-72 cursor-pointer drop-shadow-collection ${
                    tokenId === 1 && "border-4 border-mint-subtitle"
                  }`}
                />
              </label>
              <input
                id="supporter"
                type="radio"
                value=""
                name="default-radio"
                className="hidden"
                min={0}
                onClick={onSupporterClick}
              />
              <p>{supporterNftNum} available </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="mt-12 flex items-center justify-center">
              <img
                src="minus-button.png"
                alt=""
                className="h-12 w-12 cursor-pointer"
                onClick={decrement}
              />
              <input
                type="number"
                id="number-input"
                className="mx-3 h-16 w-32 appearance-none rounded-md border border-black-purple p-1 text-center text-2xl font-bold"
                value={num}
                onChange={(e) => setNum(Number(e.currentTarget.value))}
                min={0}
              />
              <img
                src="plus-button.png"
                alt=""
                className="h-12 w-12 cursor-pointer"
                onClick={increment}
              />
            </div>
            <p className="text-red-500">{error}</p>
            <button
              className="mt-20 h-16 w-32 cursor-pointer rounded-full bg-mint-button font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
              onClick={() => onMint(num)}
              disabled={error !== "" && true}
            >
              Mint
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Mint;
