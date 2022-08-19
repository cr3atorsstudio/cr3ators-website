import Container from "./container";
import { useEffect } from "react";
import { scrollFadeIn } from "./scrollFadeIn";

type Props = {
  bgColor?: string;
  isFading: boolean;
  title: string;
  contents: string;
};
import { EXAMPLE_PATH } from "../lib/constants";

const Section = ({ bgColor, isFading, title, contents }: Props) => {
  useEffect(() => {
    scrollFadeIn();
  }, []);

  return (
    <div
      className={`${bgColor ? bgColor : "bg-neutral-50"} ${
        isFading && "js-show-on-scroll"
      }`}
    >
      <Container>
        <div className='pt-10 pb-28 flex flex-col items-center justify-center'>
          <h3 className='text-4xl lg:text-[2.5rem] font-black text-center mb-10 lg:w-1/2 text-gray-900'>
            {title}
          </h3>
          <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
            <p>{contents}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section;
