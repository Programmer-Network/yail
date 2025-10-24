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
        <div className='absolute top-2 right-2 z-10 h-2 w-2 rounded-full bg-blue-500' />
      )}

      {isFeatured && (
        <div className='bg-primary text-background absolute top-2 left-2 z-10 rounded px-2 py-1 text-xs font-semibold'>
          Featured
        </div>
      )}
    </>
  );
};

export default CardStatusIndicators;
