import { SecttionTitle } from "./sections/section-title";
import { Subtitle } from "./typography/subtitle";
import { SecttionH3 } from "./typography/section-h3";
import { useLocale } from "../hooks/useLocale";

const AboutUs = () => {
  const t = useLocale().t;
  const locale = useLocale().locale;

  return (
    <div className='border-1 flex flex-col justify-center rounded-lg border-white bg-white pt-10'>
      <SecttionTitle>{t.ABOUT_US}</SecttionTitle>
      <div className='text-l mx-8 flex flex-col justify-center lg:mx-64'>
        <div className='mb-8'>{t.ABOUT_US_HEADLINE}</div>
        <div className='mb-10 flex justify-center'>
          <img src='/logo.jpeg' alt='logo' className='w-32' />
        </div>
        <Subtitle>What is Creators Studio?</Subtitle>
        <div className='mb-8'>{t.WHAT_IS_CS}</div>
        {/* Why Section */}
        <Subtitle>🟢 Why?</Subtitle>
        <div className='mb-8'>{t.WHY_SUBTITLE}</div>
        <SecttionH3>{t.IMBALANCE_IN_EMPLOYMENT_TITLE}</SecttionH3>
        <div className='mb-8'>
          {t.IMBALANCE_IN_EMPLOYMENT_TEXT}
          <br /> <br />
          <span className='font-bold'>{t.IMBALANCE_IN_EMPLOYMENT_EMOJI}</span>
        </div>
        <SecttionH3>{t.WAGE_GAP_TITLE}</SecttionH3>
        <div className='mb-8'>
          {t.WAGE_GAP_TEXT}
          <br /> <br />
          <span className='font-bold'>{t.WAGE_GAP_EMOJI}</span>
        </div>
        <SecttionH3>{t.REPRODUCTION_BIAS_TITLE}</SecttionH3>
        <div className='mb-8'>
          {t.REPRODUCTION_BIAS_TEXT_1}
          <br />
          <br />
          {t.REPRODUCTION_BIAS_TEXT_2}
          <br />
          <br />
          {t.REPRODUCTION_BIAS_TEXT_3}
          <br />
          {t.REPRODUCTION_BIAS_TEXT_4}
          <br /> <br />
          <span className='font-bold'>{t.REPRODUCTION_BIAS_EMOJI}</span>
        </div>
        <SecttionH3>{t.INCREASE_NUMBER_TITLE}</SecttionH3>
        <div className='mb-8'>
          {t.INCREASE_NUMBER_TEXT_1}
          <br /> <br />
          {t.INCREASE_NUMBER_TEXT_2}
          <br /> <br />
          <span className='font-bold'>{t.INCREASE_NUMBER_EMOJI}</span>
        </div>
        <div className='mb-10'>
          <p> {t.REFERENCE}</p>

          <ul className='ml-10 cursor-pointer list-disc text-blue-500'>
            {locale === "ja" ? (
              <>
                <li>
                  <a
                    target='_blank'
                    href='https://www.tokyo-np.co.jp/article/178603'
                  >
                    男女の賃金格差、開示を義務化へ　主要国でも格差大きい日本、女性の働きにくさ要因
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://www2.deloitte.com/content/dam/Deloitte/jp/Documents/technology-media-telecommunications/et/jp-tmt-predictions-2022-07-women-in-tech-jp.pdf'
                  >
                    日本の視点： 日本のテクノロジー業界における
                    女性活躍推進に向けた課題
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://www.eurekalert.org/news-releases/923069'
                  >
                    Who's a CEO? Google image results can shift gender biases
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://www.gemini.com/state-of-crypto'
                  >
                    2022 Global State of Crypto
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a
                    target='_blank'
                    href='https://www.eurekalert.org/news-releases/923069'
                  >
                    Who's a CEO? Google image results can shift gender biases
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://www.gemini.com/state-of-crypto'
                  >
                    2022 Global State of Crypto
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
        {/* Hiring Section */}
        <Subtitle>🔴 {t.HIRING_TITLE}</Subtitle>
        <div className='mb-8'>
          {t.HIRING_CONTENTS_1}
          <br />
          {t.HIRING_CONTENTS_2}
          <br />
          <br />
          <div className='flex flex-col items-center justify-center md:mb-10 lg:flex-row'>
            <a
              href='https://t.co/8oPQLYmjRV'
              target='_blank'
              className=' h-15 mx-3 mb-6 w-60 rounded-md border bg-pink-600 py-3 px-12 text-center font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black md:mb-0 md:h-12 md:px-8'
            >
              {t.APLLY_BUTTON}
            </a>
          </div>
        </div>
        {/* What we do Section */}
        <Subtitle>🔵 {t.WHAT_WE_DO_TITLE}</Subtitle>
        <SecttionH3>{t.WHAT_WE_DO_1_SUBTITLE}</SecttionH3>
        <div className='mb-8'>
          {t.WHAT_WE_DO_1_TEXT}
          <br />
          <ul className='ml-10 list-disc'>
            <li>{t.WHAT_WE_DO_1_LIST_1}</li>
            <li>{t.WHAT_WE_DO_1_LIST_2}</li>
            <li>{t.WHAT_WE_DO_1_LIST_3}</li>
            <li>{t.WHAT_WE_DO_1_LIST_4}</li>
            <li>{t.WHAT_WE_DO_1_LIST_5}</li>
            <li>{t.WHAT_WE_DO_1_LIST_6}</li>
          </ul>
        </div>
        <SecttionH3>{t.WHAT_WE_DO_2_SUBTITLE}</SecttionH3>
        <div className='mb-8'>
          {t.WHAT_WE_DO_2_TEXT}
          <br />
          <ul className='ml-10 list-disc'>
            <li>{t.WHAT_WE_DO_2_LIST_1}</li>
            <li>{t.WHAT_WE_DO_2_LIST_2}</li>
            <li>{t.WHAT_WE_DO_2_LIST_3}</li>
            <li>{t.WHAT_WE_DO_2_LIST_4}</li>
            <li>{t.WHAT_WE_DO_2_LIST_5}</li>
          </ul>
        </div>
        <Subtitle>🟣 {t.GOAL_TITLE}</Subtitle>
        <div className='mb-8'>{t.GOAL_TEXT}</div>
        {/* AboutUS Section */}
        <Subtitle>🟠 About US</Subtitle>
        <SecttionH3>Founders</SecttionH3>
        <div className='mx-5 mb-10 flex flex-col'>
          <img
            src='/riho.jpeg'
            width='150px'
            height='150px'
            alt={`Riho's image`}
            className='rounded-lg'
          />
          <p className='mt-2 font-bold'>Riho</p>
          <p className='hover:underline'>
            <a
              href={`https://twitter.com/rllllho`}
              target='_blank'
              className='text-blue-500'
            >
              @rllllho
            </a>
          </p>
          <ul className='ml-10 list-disc'>
            <li>🏗 Building in web3.</li>
            <li>👩‍💻 Software Engineer</li>
            <li>
              🗣 Organized RailsGirls Tokyo 11th, DevFest Women Tokyo 2019,
              TokyoGirls.rb
            </li>
            <li>💎 Rubyist</li>
          </ul>
        </div>
        <div className='mx-5 mb-10 flex flex-col'>
          <img
            src='/risa.jpeg'
            width='150px'
            height='150px'
            alt={"Risa's image"}
            className='rounded-lg'
          />
          <p className='mt-2 font-bold'>Risa</p>
          <p className='hover:underline'>
            <a
              className='text-blue-500'
              href={`https://twitter.com/risacan_eth`}
              target='_blank'
            >
              @risacan_eth
            </a>
          </p>
          <ul className='ml-10 list-disc'>
            <li>👩‍💻 Software Engineer</li>
            <li>😍 Curious about Web3</li>
            <li>🐕 Shibainu lover</li>
            <li>🖼️ Art lover</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
