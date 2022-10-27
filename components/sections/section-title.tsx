import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SecttionTitle = ({ children }: Props) => {
  return (
    <h3 className='mb-10 text-center text-4xl font-black text-gray-600 xl:text-[2.5rem]'>
      {children}
    </h3>
  );
};
