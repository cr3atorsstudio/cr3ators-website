export interface Props {
  img: string;
  title: string;
  description: string;
  link: string;
  social?: JSX.Element;
  owners?: string[];
}

export const ProjectSection = ({
  img,
  title,
  description,
  link,
  social,
  owners,
}: Props) => {
  return (
    <div className="">
      <div className="h-full rounded-lg border-4 border-white bg-white">
        <a href={link} target="_blank">
          <div className="flex max-h-96 justify-center rounded-t-lg bg-blue-50 p-6 hover:bg-purple-50">
            <img className="h-auto w-auto object-contain" src={img} />
          </div>
        </a>

        <div className="p-8">
          <a href={link} target="_blank">
            <h1 className="md:relaxed mb-4 font-sans-serif text-2xl font-bold leading-10 hover:text-blue-50 md:text-3xl">
              {title}
            </h1>
          </a>

          <div className="mb-4 flex items-center">
            {owners?.map((owner) => (
              <img
                src={`/${owner}.png`}
                className="mr-2 cursor-pointer"
                width={30}
              />
            ))}
          </div>

          {social}
          <p className="md:text-md text-sm leading-loose md:tracking-wide ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
