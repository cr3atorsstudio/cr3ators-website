export interface Props {
  img: string;
  title: string;
  link: string;
  provider: string;
}

export const ArticleSection = ({ img, title, link, provider }: Props) => {
  return (
    <section className="mb-4 w-4/5 max-w-2xl rounded-lg bg-white p-2 shadow-sm hover:-translate-y-0.5 md:mx-2">
      <a href={link} target={"_blank"}>
        <div className="flex h-44 max-w-2xl items-center  lg:h-72">
          <img className="h-28 w-28 object-contain" src={img} />

          <h1 className="md:relaxed mb-4 overflow-hidden text-ellipsis font-sans-serif text-lg font-bold md:text-2xl">
            {title}
          </h1>
        </div>
      </a>
      <img
        className="ml-auto mr-2 h-10 w-20 object-contain"
        src={`${provider}.png`}
      />
    </section>
  );
};
