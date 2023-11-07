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
      <div className='flex gap-4'>
        {Object.keys(AllIcons)
          .sort()
          .map((iconName: string) => {
            const Icon = AllIcons[iconName];
            return (
              <div
                key={iconName}
                className='flex flex-col items-center justify-center gap-2 p-8'
              >
                <Icon className='h-12 w-12 text-gray-500' />
                <span className='font-bold text-gray-300'>{iconName}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
