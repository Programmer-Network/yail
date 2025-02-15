import React from "react";

import * as Icons from "./";

export default {
  title: "Core/Icons"
};

const Template = () => {
  const AllIcons = Icons as Record<
    string,
    React.FC<React.SVGProps<SVGSVGElement>>
  >;

  return (
    <div>
      <div className='yl-grid yl-grid-cols-4 yl-gap-4'>
        {Object.keys(AllIcons)
          .sort()
          .map((iconName: string) => {
            const Icon = AllIcons[iconName];
            return (
              <div
                key={iconName}
                className='yl-flex yl-flex-col yl-items-center yl-justify-center yl-gap-2 yl-p8'
              >
                <Icon className='yl-h-16 yl-w-16 yl-text-white' />
                <span className='yl-font-bold yl-text-text'>{iconName}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
