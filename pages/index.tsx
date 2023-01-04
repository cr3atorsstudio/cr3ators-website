import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useLocale } from "../hooks/useLocale";
import { useCallback, useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSite";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Index() {
  const [isMenuOpen, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false);
  }, [useWindowSize()]);

  // const menuFunction = useCallback(() => {
  //   setOpenMenu(!isMenuOpen);
  // }, [isMenuOpen]);

  const locale = useLocale().locale;
  const text = useLocale().t;
  return (
    <>
      <Head>
        <title>Creators Studio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:ital,wght@0,300;0,400;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/creatorsstudio.jpeg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/creatorsstudio.jpeg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/creatorsstudio.jpeg"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/creatorsstudio.jpeg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/creatorsstudio.jpeg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta
          name="description"
          content={`Welcome to Creators Studio! We are the web3 community for womxn `}
        />
        <meta property="og:image" content="/favicon/creatorsstudio.jpeg" />
      </Head>
      <Navbar />
      <main className="mx-auto">
        <section className="p-6 md:p-20">
          <div className="flex flex-col content-center justify-between">
            <div className="flex flex-col  justify-center md:flex-row">
              <div>
                <h1 className="font-sans-serif">
                  <span className="block text-4xl font-semibold leading-tight sm:tracking-normal md:text-8xl md:tracking-normal">
                    {text.HERO_TITLE}
                  </span>
                </h1>
                <section className="w-30 my-6 block sm:text-xl md:text-2xl">
                  <p>{text.HERO_DESCRIPTION}</p>
                </section>
                <div className="flex justify-center">
                  <a
                    className="mt-4
                flex w-2/3 items-center rounded-full border border-black bg-gradient-to-r from-[#FFADDD]
                to-[#B6E6FF] px-[28px] py-[18px]
                font-sans-serif font-bold text-gray-900 md:w-80 md:text-2xl"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfxfARwmnEqTP_LXfeNBXHgz_X9taZqn4kRRlRnVFVnDMgqdg/viewform"
                    target="_blank"
                  >
                    Join Community
                    <div className="ml-2 flex items-center md:ml-4">
                      <Image
                        className="md:ml-8"
                        src="/arrow-right.svg"
                        alt="right arrow"
                        width={24}
                        height={24}
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="">
                <img src="teammtg.png" width={580} height={580} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center justify-around bg-yellow-50 py-14 px-4 text-brown md:flex-row md:py-32 md:px-40">
            <div className="flex justify-center">
              <Image src="/20percent.svg" width={290} height={135} />
            </div>
            <div className="sm:w-full md:w-[600px]">
              <section>
                <div className="mt-16 text-xl md:mt-auto">
                  <h1 className="text-bold mb-6 text-2xl md:text-4xl">
                    {text.SECTION_20_TITLE}
                  </h1>
                  <p className="text-xl leading-8">
                    {text.SECTION_20_DESCRIPTION}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-blue-50 p-4 pb-14 text-regal-blue md:p-14">
            <section>
              <div className="mx-auto w-full pb-12 text-xl md:w-3/6">
                <h1 className="mt-10 mb-4 text-center font-sans-serif text-2xl font-bold md:mt-0 md:text-4xl">
                  {text.SECTION_WHAT_WE_DO_TITLE}
                </h1>
                <p className=" leading-8">
                  {text.SECTION_WHAT_WE_DO_DESCRIPTION}
                </p>
              </div>
            </section>
            <section>
              <div className="text-m mb-10 flex basis-1/2 flex-row flex-col rounded-lg bg-white p-6 md:flex-row md:p-10">
                <div className="basis-2/3 md:pr-10">
                  <h1 className="mb-4 font-sans-serif text-3xl font-bold tracking-wide md:text-6xl md:leading-relaxed">
                    {text.SECTION_ACTIVITIES_FIRST_TITLE}
                  </h1>
                  <p className="text-sm leading-7 md:text-base">
                    {text.SECTION_ACTIVITIES_FIRST_DESCRIPTION}
                  </p>
                </div>
                <div className="mt-6 basis-1/3 rounded-lg bg-[#FFC2E6] p-[21px]">
                  <img
                    src="socialmedia.gif"
                    className=""
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </section>
            <div className="flex flex-col md:flex-row">
              <section className="w-full basis-1/2">
                <div className="peer-h-max rounded-lg border-4 border-white bg-white md:mr-4">
                  <div className="peer-w-max flex h-96 justify-center rounded-t-lg bg-blue-50 p-6">
                    <img className="h-full w-auto" src="boat.png" />
                  </div>
                  <div className="p-8">
                    <h1 className="md:relaxed mb-4 font-sans-serif text-2xl font-bold leading-10 md:text-3xl">
                      {text.SECTION_ACTIVITIES_SECOND_TITLE}
                    </h1>
                    <p className="md:leading-7">
                      {text.SECTION_ACTIVITIES_SECOND_DESCRIPTION}
                    </p>
                  </div>
                </div>
              </section>
              <section className="mt-10 basis-1/2 md:mt-0">
                <div className="h-full rounded-lg border-4 border-white bg-white md:ml-4">
                  <div className="peer-w-max flex h-96 justify-center rounded-t-lg bg-blue-50 p-6">
                    <img className="h-full" src="documents.png" />
                  </div>
                  <div className="p-8">
                    <h1 className="md:relaxed mb-4 font-sans-serif text-2xl font-bold leading-10 md:text-3xl">
                      {text.SECTION_ACTIVITIES_THIRD_TITLE}
                    </h1>
                    <p className="md:leading-7">
                      {text.SECTION_ACTIVITIES_THIRD_DESCRIPTION}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white py-10 text-gray-900">
            <div className="mx-4 flex flex-col rounded-3xl bg-gradient-to-r from-[#d6f0ff]/75 via-[#ffe0a4]/75 to-[#f5a5d4]/75 p-6 md:mx-auto md:w-2/3 md:flex-row md:p-10">
              <div className="basis-1/2 md:mr-20">
                <h1 className="mt-4 mb-10 font-sans-serif text-4xl font-bold md:mt-0 md:text-6xl">
                  {text.SECTION_JOIN_COMMUNITY_TITLE}
                </h1>
                <ul className="ml-4 list-disc">
                  <li>{text.SECTION_JOIN_COMMUNITY_TEXT1}</li>
                  <li>{text.SECTION_JOIN_COMMUNITY_TEXT2}</li>
                  <li>{text.SECTION_JOIN_COMMUNITY_TEXT3}</li>
                </ul>
                <p className="mt-4">{text.SECTION_JOIN_COMMUNITY_TEXT4}</p>
                <div className="flex justify-center">
                  <a
                    className="
                  mt-10 flex w-52 items-center justify-between rounded-full border border-black bg-white
                  px-[20px] py-[14px] font-sans-serif text-base font-bold text-gray-900"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfxfARwmnEqTP_LXfeNBXHgz_X9taZqn4kRRlRnVFVnDMgqdg/viewform"
                    target="_blank"
                  >
                    Join Community
                    <Image
                      className="ml-8"
                      src="/arrow-right.svg"
                      alt="right arrow"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
              <div className="flex w-full basis-1/2 justify-center">
                <img src="crypto.png" className="" width={410} height={410} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-purple-50 p-8 font-sans-serif text-black-purple">
            <h1 className="mb-4 border-black-purple text-center text-4xl font-bold md:text-6xl">
              Roadmap
            </h1>
            <div className="flex flex-col items-center justify-center md:ml-64 ">
              <ol className="relative border-l border-black-purple">
                <li className="mb-10 ml-6">
                  <span
                    className="
                    absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#d6f0ff] via-[#ffe0a4] to-[#f5a5d4]
                    font-bold ring-8 ring-[1px] ring-black-purple
                  "
                  >
                    Q1
                  </span>
                  <div className="m-4 text-sm font-normal md:m-10 md:text-base">
                    <ul className="ml-4 list-disc md:ml-16">
                      <li>Webサイトリニューアル</li>
                      <li>NFTリリース</li>
                      <li>ホワイトペーパー発表</li>
                      <li>第一弾プロジェクト完成発表</li>
                    </ul>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span
                    className="
                    absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-bold ring-8 ring-[1px]
                    ring-black-purple
                  "
                  >
                    Q2
                  </span>
                  <div className="m-4 text-sm font-normal md:m-10 md:text-base">
                    <ul className="ml-4 list-disc md:ml-16">
                      <li>ハッカソン、カンファレンスに女性50人参加</li>
                      <li>IDOプラットフォームのフロントエンド開発</li>
                      <li>クリエイター育成プロジェクト開始</li>
                    </ul>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span
                    className="
                    absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-bold ring-8 ring-[1px]
                    ring-black-purple
                  "
                  >
                    Q3
                  </span>
                  <div className="m-4 text-sm font-normal md:m-10 md:text-base">
                    <ul className="ml-4 list-disc md:ml-16">
                      <li>ベータ版IDOプラットフォームの立ち上げ</li>
                      <li>テストレビュー</li>
                      <li>DAOトークンのローンチ/プリセール</li>
                      <li>プロジェクト募集</li>
                    </ul>
                  </div>
                </li>
                <li className="ml-6">
                  <span
                    className="
                    absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 font-bold ring-8 ring-[1px]
                    ring-black-purple
                  "
                  >
                    Q4
                  </span>
                  <div className="m-4 text-sm font-normal md:m-10 md:text-base">
                    <ul className="ml-4 list-disc md:ml-16">
                      <li>IDOプラットフォームのフルリリース</li>
                      <li>DAO Token / Public Sale</li>
                      <li>5プロジェクト立ち上げ</li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white p-8 font-sans-serif text-gray-900">
            <h1 className="mb-4 text-center text-6xl font-bold">Team</h1>
            <div className="flex flex-col items-center justify-center text-center md:flex-row">
              <div className="flex flex-col items-center">
                <Image src="/riho.png" width={480} height={480} />
                <span className="text-lg font-bold">Riho</span>
                <span className="mb-1 block">Software Engineer</span>
                <a href="https://twitter.com/rllllho" target="_blank">
                  <Image
                    src="/twitter.svg"
                    alt="Twitter Logo"
                    width={29.72}
                    height={24.14}
                  />
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/risa.png" width={480} height={480} />
                <span className="text-lg font-bold">Risa</span>
                <span className="mb-1  block">
                  Software Developer / wannabe crypto witch
                </span>
                <a href="https://twitter.com/risacan_eth" target="_blank">
                  <Image
                    src="/twitter.svg"
                    alt="Twitter Logo"
                    width={29.72}
                    height={24.14}
                  />
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/miho.png" width={480} height={480} />
                <span className="text-lg font-bold">Miho</span>
                <span className="mb-1  block">Software Developer</span>
                <a href="https://twitter.com/pluto_04" target="_blank">
                  <Image
                    src="/twitter.svg"
                    alt="Twitter Logo"
                    width={29.72}
                    height={24.14}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center justify-center gap-4 bg-gray-900 p-10 font-sans-serif text-white md:flex-row">
            <div>
              <h1 className="text-6xl font-bold">Creators’ Studio News</h1>
              <span>Want to get updates from Creators Studio?</span>
            </div>
            <div>
              <button
                className="
                rounded-full border border-black bg-gradient-to-r from-[#FFADDD] to-[#B6E6FF] px-[20px] py-[14px]
                text-base font-bold text-gray-900
              "
              >
                Subscribe to our Newsletter
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="flex justify-between bg-white py-28 px-8 font-sans-serif text-gray-900">
          <span className="text-2xl font-bold">Creators Studio</span>
          <div>
            <span className="mx-4">
              <a href="https://twitter.com/cr3atorsstudio" target="_blank">
                <Image
                  src="/twitter.svg"
                  alt="Twitter Logo"
                  width={29.72}
                  height={24.14}
                />
              </a>
            </span>
            <span className="mx-4">
              <a
                href="https://www.instagram.com/cr3atorsstudio"
                target="_blank"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram Logo"
                  width={28.55}
                  height={28.55}
                />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
