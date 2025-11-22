import classNames from "classnames";
import { FC, ReactNode } from "react";

import { Pill } from "../Pill";
import { IPillProps } from "../Pill/Pill.types";
import { H1, Paragraph } from "../Typography";
import { IHeroProps } from "./Hero.types";

const Hero: FC<IHeroProps> = ({
  coverImage,
  title,
  description,
  pills = [],
  actions = [],
  children,
  className
}) => {
  const hasCover = Boolean(coverImage);

  return (
    <>
      <div
        className={classNames(
          "yl:relative yl:w-full yl:rounded-lg",
          hasCover
            ? "yl:flex yl:min-h-[300px] yl:items-end"
            : "yl:bg-background",
          className
        )}
        style={
          hasCover
            ? {
                backgroundImage: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.7)), url('${coverImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }
            : undefined
        }
      >
        {/* Actions top right */}
        {actions.length > 0 && (
          <div
            className={classNames(
              "yl:absolute yl:top-4 yl:right-4 yl:z-20 yl:flex yl:gap-2"
            )}
          >
            {actions.map((action: ReactNode, i: number) => (
              <div key={i}>{action}</div>
            ))}
          </div>
        )}
        <div
          className={classNames(
            "yl:w-full",
            hasCover ? "yl:px-8 yl:py-6" : "yl:p-8"
          )}
        >
          {/* Pills */}
          {pills.length > 0 && (
            <div className='yl:mb-2 yl:flex yl:items-center yl:gap-2'>
              {pills.map((pill: IPillProps, idx: number) => (
                <Pill
                  key={idx}
                  variant={pill.variant}
                  size={pill.size}
                  className={pill.className}
                  icon={pill["icon"]}
                >
                  {pill["children"]}
                </Pill>
              ))}
            </div>
          )}
          {title && <H1>{title}</H1>}
          {description && <Paragraph>{description}</Paragraph>}
          {children}
        </div>
      </div>
    </>
  );
};

export { Hero };
