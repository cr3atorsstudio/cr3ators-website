import { useLocale } from "../hooks/useLocale";
import { SecttionH2 } from "./typography/section-h2";
import { SecttionTitle } from "./sections/section-title";

const CodeOfConductJapanese = () => {
  const locale = useLocale().locale;
  return (
    <div className='border-1 flex flex-col justify-center rounded-lg border-white bg-white pt-10'>
      <SecttionTitle>Cr3ators Studio Code of Conduct (v1.0.0)</SecttionTitle>
      <div className='text-l mx-8 flex flex-col justify-center lg:mx-64'>
        <div className='mb-8'>
          このCode of Conductは、Cr3ators
          Studioの全ての活動におけるコミュニティの一員としての振る舞いについて述べたものです。
        </div>
        <SecttionH2>他者を尊重する</SecttionH2>
        <div className='mb-8'>
          私たちのコミュニティメンバーは、
          技術、趣味、信仰など、各自が大事にしているものをお互いに尊重し、敬意を持って接します。
          <br />
          お互いの意見は必ずしも一致するとは限りませんが、意見の不一致を振る舞いや礼儀の悪さ、個人攻撃の言い訳にしてはなりません。
          <br />
          人々が不愉快さや脅威を感じるコミュニティは生産的なコミュニティでないことを肝に銘じておくべきです。
        </div>
        <SecttionH2>攻撃的な発言をしない</SecttionH2>
        <div className='mb-8'>
          コミュニティメンバーは自由に議論し、自分の意見を言うことができます。しかし、その自由は他者への尊重の上に成り立つものであり、発言の自由を理由に攻撃的な発言をすることは認められません。
        </div>
        <SecttionH2>ハラスメントをしない</SecttionH2>
        <div className='mb-8'>
          ハラスメントには、性別、性的自認、外形的な性別、年齢、性的指向、障害、身体的特徴、身体のサイズ、人種、民族、宗教（あるいは無宗教）を理由とする攻撃的な言動が含まれます。
          また、公共空間における性的な画像、悪意による脅迫、ストーキング、つきまとい、嫌がらせの写真および録画、トークやイベントの継続的な妨害、不適切な物理的接触、不適切にセクシャルな注意を引く行為も含まれます。
        </div>
        <div className='mb-8'>
          違反行為の態様によっては、退席を求めることや以降の参加を認めないことがあります。有償イベントの場合、払い戻しを受けることはできません。
          <br />
          しかし、誰もが問題を意識せずに違反行為を行う可能性があります。このCode
          of
          Conductは問題を改善するためのものであり、実効的な改善が期待できるうちは違反を繰り返さないよう注意するに留めることを目指します。
        </div>
        <div className='my-10'>
          このCode of
          Conductに反する問題のある行為を受けたり、困っていそうな人を発見した場合は、
          <br />
          メールかTwitterのDMを通じてコミュニティ運営メンバーに連絡し対応を求めてください。
          <br />
          <br />
          メールアドレス :{" "}
          <a href='mailto:rihohearts@gmail.com'>rihohearts@gmail.com</a>
          <br />
          Twitter :{" "}
          <a href='https://twitter.com/cr3atorsstudio'>@cr3atorsstudio</a>
          <br />
          ライセンス: クリエイティブ・コモンズ 表示 - 継承
          3.0で公開されています。
        </div>
        <SecttionH2>ライセンス表記</SecttionH2>
        このCode of Conductは以下のCode of Conductを変更・再利用しています。
        <br />
        <br />
        <a href='https://gist.github.com/atsushieno/b6fa985354b5583f027d10618f6d1438'>
          Community Code of Conduct日本語訳
        </a>
        <br />
        <a href='http://www.ubuntulinux.jp/community/conduct'>
          Ubuntu Code of Conduct
        </a>
        <br />
        <a href='https://github.com/camphor-/code-of-conduct'>
          CAMPHOR- Code of Conduct (v1.0.0)
        </a>
        <br />
      </div>
    </div>
  );
};

export default CodeOfConductJapanese;
