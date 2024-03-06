import { FC, ReactNode } from "react";

interface IDropdownListItem {
  icon?: ReactNode;
  value?: string;
}

const DropdownListItem: FC<IDropdownListItem> = ({ icon, value }) => {
  return (
    <li className='p-2 capitalize text-primary-text-color hover:cursor-pointer hover:bg-primary hover:text-primary-background-color'>
      <div className='flex items-center'>
        {icon && <span className='mr-2'>{icon}</span>}
        {value}
      </div>
    </li>
  );
};

const DefaultDropdown: FC<{
  options: { icon?: ReactNode; value: string }[];
}> = ({ options }) => {
  return (
    <ul className='p-2 text-primary-text-color'>
      {options.map((option, index) => (
        <DropdownListItem
          icon={option.icon}
          value={option.value}
          key={`${option.value}-${index}`}
        />
      ))}
    </ul>
  );
};

export default DefaultDropdown;
