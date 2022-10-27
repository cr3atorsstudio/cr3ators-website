import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SecttionH2 = ({ children }: Props) => {
  return (
    <div className='mb-10 text-center text-3xl font-black text-gray-600'>
      {children}
    </div>
  );
};
