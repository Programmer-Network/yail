import { FC } from "react";

interface ICardStatusIndicators {
  isRead?: boolean;
  isFeatured?: boolean;
}

const CardStatusIndicators: FC<ICardStatusIndicators> = ({
  isRead,
  isFeatured
}) => {
  return (
    <>
      {isRead && (
        <div className='yl:absolute yl:top-2 yl:right-2 yl:z-10 yl:h-2 yl:w-2 yl:rounded-full yl:bg-blue-500' />
      )}

      {isFeatured && (
        <div className='yl:bg-primary yl:text-background yl:absolute yl:top-2 yl:left-2 yl:z-10 yl:px-2 yl:py-1 yl:text-xs yl:font-semibold yl:rounded'>
          Featured
        </div>
      )}
    </>
  );
};

export { CardStatusIndicators };
