import { useLocale } from "../hooks/useLocale";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="mx-auto">
        <section>
          <div className="bg-purple-50 px-72 py-8 font-sans-serif text-sm text-black-purple">
            <h1 className="m-4 border-black-purple text-center text-3xl font-bold">
              Cr3ators Studio Code of Conduct (v1.0.0)
            </h1>
            <p>
              このCode of Conductは、Cr3ators
              Studioの全ての活動におけるコミュニティの一員としての振る舞いについて述べたものです
            </p>
            <h2 className="m-4 border-black-purple text-center text-xl font-bold">
              他者を尊重する
            </h2>
            <p>
              私たちのコミュニティメンバーは、
              技術、趣味、信仰など、各自が大事にしているものをお互いに尊重し、敬意を持って接します。{" "}
              <br />
              お互いの意見は必ずしも一致するとは限りませんが、意見の不一致を振る舞いや礼儀の悪さ、個人攻撃の言い訳にしてはなりません。
              <br />
              人々が不愉快さや脅威を感じるコミュニティは生産的なコミュニティでないことを肝に銘じておくべきです。
            </p>
            <h2 className="m-4 border-black-purple text-center text-xl font-bold">
              攻撃的な発言をしない
            </h2>
            <p>
              コミュニティメンバーは自由に議論し、自分の意見を言うことができます。
              <br />
              しかし、その自由は他者への尊重の上に成り立つものであり、発言の自由を理由に攻撃的な発言をすることは認められません。
            </p>
            <h2 className="m-4 border-black-purple text-center text-xl font-bold">
              ハラスメントをしない
            </h2>
            <p>
              ハラスメントには、性別、性的自認、外形的な性別、年齢、性的指向、障害、身体的特徴、身体のサイズ、人種、民族、宗教（あるいは無宗教）を理由とする攻撃的な言動が含まれます。
              <br />
              また、公共空間における性的な画像、悪意による脅迫、ストーキング、つきまとい、嫌がらせの写真および録画、トークやイベントの継続的な妨害、不適切な物理的接触、不適切にセクシャルな注意を引く行為も含まれます。
              <br />
              違反行為の態様によっては、退席を求めることや以降の参加を認めないことがあります。有償イベントの場合、払い戻しを受けることはできません。
              <br />
              しかし、誰もが問題を意識せずに違反行為を行う可能性があります。このCode
              of
              Conductは問題を改善するためのものであり、実効的な改善が期待できるうちは違反を繰り返さないよう注意するに留めることを目指します。
              <br />
              このCode of
              Conductに反する問題のある行為を受けたり、困っていそうな人を発見した場合は、メールかTwitterのDMを通じてコミュニティ運営メンバーに連絡し対応を求めてください。
              メールアドレス : rihohearts@gmail.com Twitter : @cr3atorsstudio
            </p>
            ライセンス: クリエイティブ・コモンズ 表示 - 継承
            3.0で公開されています。
            <h2 className="m-4 border-black-purple text-center text-xl font-bold">
              ライセンス表記
            </h2>
            <p>
              このCode of Conductは以下のCode of
              Conductを変更・再利用しています。
            </p>
            <ul className="list-inside list-disc">
              <li>
                <a
                  href="https://gist.github.com/atsushieno/b6fa985354b5583f027d10618f6d1438"
                  target="_blank"
                >
                  Community Code of Conduct日本語訳
                </a>
              </li>
              <li>
                <a
                  href="https://www.ubuntulinux.jp/community/conduct"
                  target="_blank"
                >
                  Ubuntu Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/camphor-/code-of-conduct"
                  target="_blank"
                >
                  CAMPHOR- Code of Conduct (v1.0.0)
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <div className="flex justify-between bg-white p-8 font-sans-serif text-gray-900">
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
