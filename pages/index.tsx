// import Intro from "../components/intro";
// import HomeBody from "../components/HomeBody";
import Head from "next/head";
// import Footer from "../components/footer";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useLocale } from "../hooks/useLocale";
import { useCallback, useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSite";
import Image from 'next/image'

export default function Index() {
  const [isMenuOpen, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false);
  }, [useWindowSize()]);

  const menuFunction = useCallback(() => {
    setOpenMenu(!isMenuOpen);
  }, [isMenuOpen]);

  const locale = useLocale().locale;
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
          <Image src="/twitter.svg" alt="Twitter Logo" width={29.72} height={24.14} />
          <Image src="/instagram.svg" alt="Instagram Logo" width={28.55} height={28.55} />
          {/* Connect Walletさせる */}
          <Image src="/wallet.svg" alt="Instagram Logo" width={30} height={30} />

          <button className="
            font-sans-serif text-base font-bold text-gray-900 rounded-full border-black border px-[20px] py-[14px]
            bg-gradient-to-r from-[#FFADDD] to-[#B6E6FF]
          ">
            Join Community
          </button>

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
      <main className="mx-auto">
        <section className="p-10">
          <div className="flex flex-wrap justify-between content-center">
            <div className="my-auto">
            <h1 className="font-sans-serif">
              <span className="block text-[80px] leading-tight font-semibold">
                Empowering <br />
                womxn in Web3
              </span>
            </h1>
            <section className="block w-30 text-2xl my-6">
              <p>Close the gender gap before Web3 becomes male-dominated.</p>
            </section>
            <button className="
              font-sans-serif text-2xl font-bold text-gray-900 rounded-full border-black border px-[28px] py-[18px]
              bg-gradient-to-r from-[#FFADDD] to-[#B6E6FF]
              flex items-center justify-between w-80
            ">
              Join Community
              <Image className="ml-8" src="/arrow-right.svg" alt="right arrow" width={24} height={24} />
            </button>
            </div>
            <div>
            <img src="https://fakeimg.pl/625x580/" width={625} height={580}/>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-around bg-yellow-50 px-40 py-32 text-brown">
            <div className="">
              <Image src="/20percent.svg" width={290} height={135} />
            </div>
            <div className="w-[600px]">
              <section className="text-xl">
                <h1 className="text-bold text-4xl mb-3">Web3≠男性</h1>
                <p>Web3の世界でもジェンダーギャップが発生しています。女性の暗号資産保有率は2割程度にとどまっています。ステレオタイプができるとそのイメージを払拭することは困難です。しかし「Web3＝男性」というステレオタイプが現実のものとなりつつあります。</p>
              </section>
            </div>
          </div>
        </section>
        <section>What we do?</section>
        <section>Stay tuned!</section>
        <section>Roadmap</section>
        <section>Team</section>
        <section>Creators Studio News</section>
      </main>
      <footer></footer>
      {/* <Intro />
      <HomeBody />
      <Footer /> */}
    </>
  );
}
