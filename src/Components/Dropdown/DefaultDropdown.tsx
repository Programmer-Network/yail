import { FC } from "react";

import Icon from "../Icon";
import { IDefaultDropdownProps, IDropdownListItem } from "./types";

const DropdownListItem: FC<IDropdownListItem> = ({
  icon,
  value,
  onClick,
  setIsOpen
}) => {
  return (
    <li
      className='p-2 capitalize text-text hover:cursor-pointer hover:bg-text/10 hover:text-text'
      onClick={e => {
        onClick && onClick(e, value || "");
        setIsOpen(false);
      }}
    >
      <div className='flex items-center'>
        {icon && (
          <span className='mr-2'>
            <Icon
              iconName={icon.iconName}
              className={icon.className}
              dataTestId={icon.dataTestId}
            />
          </span>
        )}
        {value}
      </div>
    </li>
  );
};

const DefaultDropdown: FC<IDefaultDropdownProps> = ({ options, setIsOpen }) => {
  return (
    <ul className='p-2 text-text'>
      {options.map((option, index) => (
        <DropdownListItem
          icon={
            option.icon
              ? {
                  iconName: option.icon?.iconName,
                  className: option.icon?.className,
                  dataTestId: option.icon?.dataTestId
                }
              : undefined
          }
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
