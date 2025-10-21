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
        <div className='absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full z-10' />
      )}

      {isFeatured && (
        <div className='absolute top-2 left-2 bg-primary text-background px-2 py-1 rounded text-xs font-semibold z-10'>
          Featured
        </div>
      )}
    </>
  );
};

export default CardStatusIndicators;
