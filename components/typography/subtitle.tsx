import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Subtitle = ({ children }: Props) => {
  return (
    <div className='mb-4 text-3xl font-black text-gray-600'>{children}</div>
  );
};
