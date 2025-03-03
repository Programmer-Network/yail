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
      className='yl:p-2 yl:capitalize yl:text-text yl:hover:cursor-pointer yl:hover:bg-text/10 yl:hover:text-text'
      onClick={e => {
        onClick && onClick(e, value || "");
        setIsOpen(false);
      }}
    >
      <div className='yl:flex yl:items-center'>
        {icon && <span className='yl:mr-2'>{icon}</span>}
        {value}
      </div>
    </li>
  );
};

const DefaultDropdown: FC<IDefaultDropdownProps> = ({ options, setIsOpen }) => {
  return (
    <ul className='yl:p-2 yl:text-text'>
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
