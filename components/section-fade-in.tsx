type Props = {
  children?: React.ReactNode;
  bgColor?: string;
  isFading: boolean;
};

const SectionFadeIn = ({ children, bgColor, isFading }: Props) => {
  return (
    <div
      className={`${bgColor ? bgColor : "bg-neutral-50"} ${
        isFading &&
        "js-show-on-scroll flex h-4/5 w-full justify-center overflow-hidden rounded-lg shadow-lg xl:w-4/5"
      }`}
    >
      {children}
    </div>
  );
};

export default SectionFadeIn;
