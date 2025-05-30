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
        <div className='yl:absolute yl:top-2 yl:right-2 yl:w-2 yl:h-2 yl:bg-blue-500 yl:rounded-full yl:z-10' />
      )}

      {isFeatured && (
        <div className='yl:absolute yl:top-2 yl:left-2 yl:bg-primary yl:text-background yl:px-2 yl:py-1 yl:rounded yl:text-xs yl:font-semibold yl:z-10'>
          Featured
        </div>
      )}
    </>
  );
};

export default CardStatusIndicators;
