import classNames from "classnames";
import { FC, useState } from "react";

import { IconExpandLess, IconExpandMore } from "Components/Icons";

import { IAccordionProps } from "./types";

const Accordion: FC<IAccordionProps> = ({
  className,
  sections,
  sectionTitleClassName,
  itemsLabelText,
  onSectionItemClick,
  onSelected,
  expanded,
  setExpanded
}) => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const toggleExpand = (sectionId: number) => {
    if (expanded.includes(sectionId)) {
      setExpanded(expanded.filter(id => id !== sectionId));
    } else {
      setExpanded([...expanded, sectionId]);
    }
  };

  const getItemsLabelText = (items: number) =>
    `${items} ${items === 1 ? itemsLabelText : `${itemsLabelText}s`}`;

  return (
    <section className={classNames(className)}>
      {sections.map((section, idx) => (
        <div
          key={section.id}
          className={classNames("border border-primary-text-color p-2", {
            "mb-0 border-b-0": idx !== sections.length - 1
          })}
          role='presentation'
        >
          <h3
            className={classNames(
              "flex cursor-pointer select-none items-center justify-between capitalize text-primary-text-color",
              sectionTitleClassName,
              {
                "mb-2 border-b border-primary-text-color pb-2":
                  expanded.includes(section.id)
              }
            )}
            onClick={() => toggleExpand(section.id)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                toggleExpand(section.id);
              }
            }}
            tabIndex={0}
            role='button'
            aria-expanded={expanded.includes(section.id)}
          >
            <div className='flex items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap text-base'>
              {expanded.includes(section.id) ? (
                <IconExpandLess className='w-8 cursor-pointer fill-primary-text-color hover:fill-primary' />
              ) : (
                <IconExpandMore className='w-8 cursor-pointer fill-primary-text-color hover:fill-primary' />
              )}
              {section.title}
            </div>
            {itemsLabelText && (
              <div>
                <span className='whitespace-nowrap text-sm lowercase text-primary-text-color'>
                  {getItemsLabelText(section.items.length)}
                </span>
              </div>
            )}
          </h3>
          {expanded.includes(section.id) && (
            <ul
              className='ml-[10px] animate-height-animation leading-8'
              role='region'
              aria-labelledby={section.id.toString()}
            >
              {section.items.map((item, index) => (
                <li
                  className={classNames("mb-2 text-primary-text-color", {
                    "cursor-pointer": onSectionItemClick,
                    "text-primary": selectedItemId === item.id
                  })}
                  key={item.id}
                  onClick={() => {
                    if (typeof onSectionItemClick !== "function") {
                      return;
                    }

                    onSectionItemClick(item);
                    onSelected ? onSelected(item) : null;
                    setSelectedItemId(item.id);
                  }}
                >
                  <div className='flex gap-2 break-all'>
                    <span
                      className={classNames(
                        "capitalize text-primary-text-color"
                      )}
                    >{`${index + 1}.`}</span>
                    <span
                      className={classNames({
                        "text-primary": selectedItemId === item.id
                      })}
                    >
                      {item.title}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default Accordion;
