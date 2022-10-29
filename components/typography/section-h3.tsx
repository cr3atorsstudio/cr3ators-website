import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SecttionH3 = ({ children }: Props) => {
  return (
    <div className='mb-4 text-2xl font-black text-gray-600'>{children}</div>
  );
};
