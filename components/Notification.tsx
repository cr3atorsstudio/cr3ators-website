export interface Props {
  process: { show: boolean; message: string };
  onClickAction: () => void;
}

export const Notification = ({ process, onClickAction }: Props) => {
  return (
    <div
      className={`absolute bottom-0 ${
        process.show && "animate-slideIn"
      } py-4 text-center`}
    >
      <div
        className="flex items-center bg-indigo-800 p-5 leading-none text-indigo-100 lg:inline-flex"
        role="alert"
      >
        <span className="mr-2 flex-auto text-left font-semibold">
          {process.message}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 cursor-pointer"
          onClick={onClickAction}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};
