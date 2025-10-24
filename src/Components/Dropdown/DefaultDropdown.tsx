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
      className='text-text hover:bg-text/10 hover:text-text p-2 capitalize hover:cursor-pointer'
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
    <ul className='text-text p-2'>
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
