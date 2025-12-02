import classNames from "classnames";
import { FC } from "react";

import { Dialog } from "../../Dialog";
import { Icon } from "../../Icon";
import { WRITING_GUIDELINES } from "./ZenWritingGuide.constants";
import { useZenWritingGuide } from "./ZenWritingGuide.hooks";
import { IZenWritingGuideProps } from "./ZenWritingGuide.types";

const ZenWritingGuide: FC<IZenWritingGuideProps> = ({ className }) => {
  const { isOpen, handleOpen, handleClose } = useZenWritingGuide();

  const buttonClasses = classNames(
    "yl:flex yl:items-center yl:justify-center",
    "yl:w-8 yl:h-8 yl:rounded-md",
    "yl:text-text/40",
    "yl:hover:bg-border/20 yl:hover:text-text/60",
    "yl:transition-all yl:duration-200",
    "yl:cursor-pointer",
    className
  );

  return (
    <>
      <button
        type='button'
        onClick={handleOpen}
        className={buttonClasses}
        aria-label='Writing guidelines'
        title='Writing guidelines'
      >
        <Icon iconName='QuestionOutline' className='yl:w-4 yl:h-4' />
      </button>

      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        className='yl:w-[500px] yl:max-w-[90vw] yl:p-0'
      >
        <div className='yl:w-[500px] yl:max-w-[90vw]'>
          <div className='yl:flex yl:items-center yl:justify-between yl:px-6 yl:py-4'>
            <h2 className='yl:text-base yl:font-semibold yl:text-text yl:m-0'>
              Writing Guidelines
            </h2>
            <button
              type='button'
              onClick={handleClose}
              className='yl:text-2xl yl:text-text/50 yl:hover:text-text yl:cursor-pointer yl:leading-none'
              aria-label='Close'
            >
              ×
            </button>
          </div>

          <div className='yl:border-t yl:border-border' />

          <div className='yl:overflow-y-auto yl:max-h-[60vh] yl:p-6 yl:flex yl:flex-col yl:gap-4'>
            {WRITING_GUIDELINES.map(guideline => (
              <div
                key={guideline.id}
                className='yl:p-4 yl:rounded-lg yl:border yl:border-border'
              >
                <div className='yl:text-sm yl:font-semibold yl:text-text yl:mb-2'>
                  {guideline.section}
                </div>
                <div className='yl:text-sm yl:text-text/70 yl:leading-relaxed'>
                  {guideline.description}
                </div>
                <div className='yl:mt-3 yl:text-xs yl:text-text/70 yl:font-mono yl:bg-text/5 yl:px-3 yl:py-2 yl:rounded'>
                  {guideline.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Dialog>
    </>
  );
};

ZenWritingGuide.displayName = "ZenWritingGuide";

export { ZenWritingGuide };
