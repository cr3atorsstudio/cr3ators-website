export interface Props {
  text: string;
  link: string;
}

export const Button = ({ text, link }: Props) => {
  return (
    <div>
      <a href={link} target="_blank">
        <button
          className="rounded-full border border-black bg-gradient-to-r from-[#FFADDD] to-[#B6E6FF] px-[20px] py-[14px]
                text-base font-bold text-gray-900"
        >
          {text}
        </button>
      </a>
    </div>
  );
};
