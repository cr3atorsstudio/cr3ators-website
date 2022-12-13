import Head from "next/head";
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
            <a className="
              font-sans-serif text-2xl font-bold text-gray-900 rounded-full border-black border px-[28px] py-[18px]
              bg-gradient-to-r from-[#FFADDD] to-[#B6E6FF]
              flex items-center justify-between w-80"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfxfARwmnEqTP_LXfeNBXHgz_X9taZqn4kRRlRnVFVnDMgqdg/viewform"
              target="_blank"
            >
              Join Community
              <Image className="ml-8" src="/arrow-right.svg" alt="right arrow" width={24} height={24} />
            </a>
            </div>
            <div>
            <img src="teammtg.png" width={580} height={580}/>
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
        <section>
          <div className="bg-blue-50 text-regal-blue p-10">

            <section>
              <div className="w-3/6 mx-auto pb-10">
                <h1 className="font-sans-serif text-4xl font-bold text-center mb-4">What we do?</h1>
                <p>私たちは、smart contract開発、token engineering、Frontend開発、NFT開発、Eco system戦略、コミュニティ管理など、初期設定において必要な人材を育成して、womxnによるプロジェクト立ち上げを支援します。</p>
              </div>
            </section>

            <section>
              <div className="bg-white rounded-lg p-8 mb-10 text-m grid grid grid-flow-col">
                <div className="">
                  <h1 className="font-sans-serif text-6xl font-bold mb-4">Help “Creators” to build their ideas come to life</h1>
                  <p>
                    私たちは、Web業界のクリエイターのジェンダーギャップを解消することを目的としたコミュニティを立ち上げました。私たちは、男女平等を実現するために、女性クリエイターをサポートし、彼女たちがより活躍できるようにするための取り組みを行っています。
                    私たちは、女性クリエイターが、技術的な知識やスキルを磨き、より自信を持ってクリエイティブなアイデアを実現することができるように、様々なトレーニングやワークショップを実施します。また、実際にアイデアを実現するための資金調達や、プロジェクトマネージメントなどの支援も行います。
                    私たちのコミュニティは、女性クリエイターだけでなく、男性クリエイターや、ジェンダーの問わないクリエイターも歓迎します。私たちは、男女平等を実現するために、みんなで協力し、一緒にアイデアを創造し、女性クリエイターの活躍を応援します。
                    ぜひ、私たちのコミュニティに参加して、Web業界のクリエイターと一緒にアイデアを実現しましょう！
                  </p>
                </div>
                <div className="rounded-lg bg-[#FFC2E6] p-[21px]">
                  <img src="socialmedia.gif" className="" width={600} height={600} />
                </div>
              </div>
            </section>

            <div className="flex">
              <section>
                <div className="bg-white rounded-lg mr-4 border-4 border-white peer-h-max">
                  <div className="rounded-t-lg bg-blue-50 peer-w-max p-auto flex justify-center">
                    <img src="boat.png" width={500} height={354}/>
                  </div>
                  <div className="p-8">
                    <h1 className="font-sans-serif text-xl font-bold mb-4">Get women and gender minorities into the world of Web3</h1>
                    <p>
                      女性クリエイターがWeb3の技術を活用したクリエイティブなアイデアを実現することで、彼女たちのアイデアや個性をより多くの人に発信することができます。また、そのようなアイデアを実現するための資金調達やプロジェクトマネージメントの支援も行うことで、女性クリエイターがより自由に創造的な活動を行うことができるようになります。
                      Web3に特化したクリエイター向けワークショップやハッカソンを開催する。
                      Web3プロジェクトに参加することで、クリエイターが実際に作品を作成し、実現することができる場を提供する。
                      Web3に特化したクリエイター向けの創造的なアイデアを募集し、優秀なアイデアを支援する。
                      Web3に特化したクリエイターを支援するためのコミュニティを作り上げ、互いのサポートやアイデアの交流を促進する。
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <div className="bg-white rounded-lg ml-4 border-4 border-white">
                  <div className="rounded-t-lg bg-blue-50 peer-w-max p-auto flex justify-center">
                    <img src="documents.png" width={500} height={500}/>
                  </div>
                  <div className="p-8">
                    <h1 className="font-sans-serif text-xl font-bold mb-4">
                      私たちの考える未来
                    </h1>
                    <p>
                      女性クリエイターが、Web3の技術を活用したクリエイティブなアイデアを実現している状態では、彼女たちは自由にアイデアを創造し、それを実現することができます。例えば、女性クリエイターがWeb3を使用して、ブロックチェーンを活用した新しい音楽プラットフォームを作成することができます。また、女性クリエイターがWeb3を使用して、分散型Webを活用した新しいSNSを作成することもできます。Web3の技術を活用することで、女性クリエイターは独自のアイデアを実現し、より多くの人々に発信することができます。
                      これにより、女性クリエイターの活躍が促進され、男女平等が実現することが期待されます。また、Web3の技術を活用したクリエイティブなアイデアが実現することで、新しいビジネスやサービスが生まれ、経済的な利益が生み出されることが期待されます。さらに、Web3を活用したクリエイティブなアイデアが実現することで、文化的な多様性やイノベーションが促進されることが期待されます。
                    </p>
                  </div>
                </div>
              </section>
            </div>

          </div>
        </section>
        <section>
          <div className="bg-white text-gray-900 py-10">
            <div className="w-5/6 mx-auto p-10 rounded-3xl bg-gradient-to-r from-[#d6f0ff]/75 via-[#ffe0a4]/75 to-[#f5a5d4]/75 grid grid-flow-col">
              <div className="mr-20">
                <h1 className="font-sans-serif text-6xl font-bold text-center mb-4">Stay tuned!</h1>
                <ul className="list-disc ml-4">
                  <li>Web3はわからないけど、創作活動にNFTをとりいれてみたい</li>
                  <li>Web3で活躍できる人材になりたい</li>
                  <li>情報収集を始めたい</li>
                </ul>
                <p className="mt-4">こんな方はコミュニティに参加してみよう！</p>
                <a className="
                  font-sans-serif text-base font-bold text-gray-900 rounded-full border-black border px-[20px] py-[14px]
                  bg-white mt-10 flex items-center justify-between w-52"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfxfARwmnEqTP_LXfeNBXHgz_X9taZqn4kRRlRnVFVnDMgqdg/viewform"
                  target="_blank"
                 >
                  Join Community
                  <Image className="ml-8" src="/arrow-right.svg" alt="right arrow" width={20} height={20} />
                </a>
              </div>
              <div className="w-[410px]">
                <img src="crypto.png" className="" width={410} height={410} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-purple-50 text-black-purple font-sans-serif p-8">
            <h1 className="text-6xl font-bold text-center mb-4 border-black-purple">Roadmap</h1>
            <div className="ml-64">
              <ol className="relative border-l border-black-purple">
                <li className="mb-10 ml-6">
                  <span className="
                    flex absolute -left-5 justify-center items-center w-10 h-10 rounded-full ring-8 ring-[1px] ring-black-purple font-bold
                    bg-gradient-to-r from-[#d6f0ff] via-[#ffe0a4] to-[#f5a5d4]
                  ">
                    Q1
                  </span>
                  <div className="m-10 text-base font-normal">
                    <ul className="list-disc ml-4">
                      <li>Webサイトリニューアル</li>
                      <li>NFTリリース</li>
                      <li>ホワイトペーパー発表</li>
                      <li>第一弾プロジェクト完成発表</li>
                    </ul>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="
                    flex absolute -left-5 justify-center items-center w-10 h-10 rounded-full ring-8 ring-[1px] ring-black-purple font-bold
                    bg-purple-50
                  ">
                    Q2
                  </span>
                  <div className="m-10 text-base font-normal">
                    <ul className="list-disc ml-4">
                      <li>ハッカソン、カンファレンスに女性50人参加</li>
                      <li>IDOプラットフォームのフロントエンド開発</li>
                      <li>クリエイター育成プロジェクト開始</li>
                    </ul>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="
                    flex absolute -left-5 justify-center items-center w-10 h-10 rounded-full ring-8 ring-[1px] ring-black-purple font-bold
                    bg-purple-50
                  ">
                    Q3
                  </span>
                  <div className="m-10 text-base font-normal">
                    <ul className="list-disc ml-4">
                      <li>ベータ版IDOプラットフォームの立ち上げ</li>
                      <li>テストレビュー</li>
                      <li>DAOトークンのローンチ/プリセール</li>
                      <li>プロジェクト募集</li>
                    </ul>
                  </div>
                </li>
                <li className="ml-6">
                  <span className="
                    flex absolute -left-5 justify-center items-center w-10 h-10 rounded-full ring-8 ring-[1px] ring-black-purple font-bold
                    bg-purple-50
                  ">
                    Q4
                  </span>
                  <div className="m-10 text-base font-normal">
                    <ul className="list-disc ml-4">
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
          <div className="bg-white text-gray-900 font-sans-serif p-8">
            <h1 className="text-6xl font-bold text-center mb-4">Team</h1>
            <div className="flex items-center text-center">
              <div>
                <Image src="/riho.png" width={480} height={480} /><span className="font-bold text-lg">Riho</span>
                <span className="block mb-1">Software Engineer</span>
                <a href="https://twitter.com/rllllho" target="_blank"><Image src="/twitter.svg" alt="Twitter Logo" width={29.72} height={24.14} /></a>
              </div>
              <div>
                <Image src="/risa.png" width={480} height={480} /><span className="font-bold text-lg">Risa</span>
                <span className="block  mb-1">Software Developer / wannabe crypto witch</span>
                <a href="https://twitter.com/risacan_eth" target="_blank"><Image src="/twitter.svg" alt="Twitter Logo" width={29.72} height={24.14} /></a>
              </div>
              <div>
                <Image src="/miho.png" width={480} height={480} /><span className="font-bold text-lg">Miho</span>
                <span className="block  mb-1">Software Developer</span>
                <a href="https://twitter.com/pluto_04" target="_blank"><Image src="/twitter.svg" alt="Twitter Logo" width={29.72} height={24.14} /></a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-gray-900 text-white font-sans-serif p-10 gap-4 flex justify-center items-center">
            <div>
              <h1 className="font-bold text-6xl">Creators’ Studio News</h1>
              <span>Want to get updates from Creators Studio?</span>
            </div>
            <div>
              <button className="
                text-base font-bold text-gray-900 rounded-full border-black border px-[20px] py-[14px]
                bg-gradient-to-r from-[#FFADDD] to-[#B6E6FF]
              ">
                Subscribe to our Newsletter
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="text-gray-900 bg-white font-sans-serif py-28 px-8 flex justify-between">
          <span className="text-2xl font-bold">Creators Studio</span>
          <div>
            <span className="mx-4"><a href="https://twitter.com/cr3atorsstudio" target="_blank"><Image src="/twitter.svg" alt="Twitter Logo" width={29.72} height={24.14} /></a></span>
            <span className="mx-4"><a href="https://www.instagram.com/cr3atorsstudio" target="_blank"><Image src="/instagram.svg" alt="Instagram Logo" width={28.55} height={28.55} /></a></span>
          </div>
        </div>
      </footer>
    </>
  );
}
