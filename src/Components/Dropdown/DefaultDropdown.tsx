import { FC, MouseEvent, ReactNode } from "react";

interface IDropdownListItem {
  icon?: ReactNode;
  value?: string;
  onClick?: (e: MouseEvent, value: string) => void;
}

const DropdownListItem: FC<IDropdownListItem> = ({ icon, value, onClick }) => {
  return (
    <li
      className='p-2 capitalize text-primary-text-color hover:cursor-pointer hover:bg-primary-text-color/10 hover:text-primary'
      onClick={e => onClick && onClick(e, value || "")}
    >
      <div className='flex items-center'>
        {icon && <span className='mr-2'>{icon}</span>}
        {value}
      </div>
    </li>
  );
};

const DefaultDropdown: FC<{
  options: { icon?: ReactNode; value: string; onClick?: () => void }[];
}> = ({ options }) => {
  return (
    <ul className='p-2 text-primary-text-color'>
      {options.map((option, index) => (
        <DropdownListItem
          icon={option.icon}
          value={option.value}
          key={`${option.value}-${index}`}
          onClick={option.onClick}
        />
      ))}
    </ul>
  );
};

export default DefaultDropdown;
