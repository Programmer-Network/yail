import { FC } from "react";

import { IDefaultDropdownProps, IDropdownListItem } from "./types";

const DropdownListItem: FC<IDropdownListItem> = ({
  icon,
  value,
  onClick,
  setIsOpen
}) => {
  return (
    <li
      className='p-2 capitalize text-primary-text-color hover:cursor-pointer hover:bg-primary-text-color/10 hover:text-primary'
      onClick={e => {
        onClick && onClick(e, value || "");
        setIsOpen(false);
      }}
    >
      <div className='flex items-center'>
        {icon && <span className='mr-2'>{icon}</span>}
        {value}
      </div>
    </li>
  );
};

const DefaultDropdown: FC<IDefaultDropdownProps> = ({ options, setIsOpen }) => {
  return (
    <ul className='p-2 text-primary-text-color'>
      {options.map((option, index) => (
        <DropdownListItem
          icon={option.icon}
          value={option.value}
          key={`${option.value}-${index}`}
          onClick={option.onClick}
          setIsOpen={setIsOpen}
        />
      ))}
    </ul>
  );
};

export default DefaultDropdown;
