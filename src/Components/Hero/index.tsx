import classNames from "classnames";
import { FC, ReactNode } from "react";

import Pill from "../Pill";
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
          "relative w-full rounded-lg",
          hasCover ? "flex items-end min-h-[300px]" : "bg-background",
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
          <div className={classNames("absolute top-4 right-4 z-20 flex gap-2")}>
            {actions.map((action: ReactNode, i: number) => (
              <div key={i}>{action}</div>
            ))}
          </div>
        )}
        <div className={classNames("w-full", hasCover ? "px-8 py-6" : "p-8")}>
          {/* Pills */}
          {pills.length > 0 && (
            <div className='flex items-center gap-2 mb-2'>
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

export default Hero;
