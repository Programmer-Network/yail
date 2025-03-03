import Icon from "Components/Icon";

import { IconName } from "./types";

export default {
  title: "Core/Icons"
};

const Template = () => {
  // const AllIcons = Icons as Record<string, React.FC<IIconProps>>;

  return (
    <div>
      <div className='yl:grid yl:grid-cols-4 yl:gap-4'>
        {["IconAdd"].sort().map((iconName: string) => {
          // const Icon = AllIcons[iconName];

          // if (!Icon) {
          //   return null;
          // }

          return (
            <div
              key={iconName}
              className='yl:flex yl:flex-col yl:items-center yl:justify-center yl:gap-2 yl:p-8'
            >
              <Icon
                iconName={iconName as IconName}
                className='yl:h-16 yl:w-16 yl:text-white'
              />
              <span className='yl:font-bold yl:text-text'>{iconName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
