import classNames from "classnames";
import { FC, useEffect, useState } from "react";

import { IconExpandLess, IconExpandMore } from "Components/Icons";
import { Paragraph } from "Components/Typography";

import { IAccordionProps } from "./types";

const Accordion: FC<IAccordionProps> = ({
  className,
  sections,
  sectionTitleClassName,
  onSectionItemClick,
  onSelected,
  expanded,
  setExpanded,
  selectedId
}) => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(
    selectedId || null
  );

  const toggleExpand = (sectionId: number) => {
    if (expanded.includes(sectionId)) {
      setExpanded(expanded.filter(id => id !== sectionId));
    } else {
      setExpanded([...expanded, sectionId]);
    }
  };

  useEffect(() => {
    if (!selectedId) {
      return;
    }

    setSelectedItemId(selectedId);
  }, [selectedId]);

  return (
    <section className={classNames(className)}>
      {sections.map((section, idx) => (
        <div
          key={section.id}
          className={classNames("yl-border-2 yl-border-primary-text-color/20", {
            "yl-border-b-0": idx !== sections.length - 1,
            "yl-rounded-tl-md yl-rounded-tr-md": idx === 0,
            "yl-rounded-bl-md yl-rounded-br-md": idx === sections.length - 1
          })}
          role='presentation'
        >
          <h3
            className={classNames(
              "yl-relative yl-flex yl-cursor-pointer yl-select-none yl-items-center yl-justify-between yl-font-semibold yl-capitalize yl-text-primary-text-color  yl-py-4 yl-pl-4 yl-pr-8",
              sectionTitleClassName,
              {
                "yl-bg-primary-text-color/5": expanded.includes(section.id)
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
            <div className='yl-flex yl-flex-col yl-gap-1 yl-overflow-hidden yl-text-ellipsis yl-whitespace-nowrap yl-text-base'>
              {expanded.includes(section.id) ? (
                <IconExpandLess className='yl-absolute yl-right-2 yl-w-6 yl-cursor-pointer yl-fill-primary-text-color hover:yl-fill-primary' />
              ) : (
                <IconExpandMore className='yl-absolute yl-right-2 yl-w-6 yl-cursor-pointer yl-fill-primary-text-color hover:yl-fill-primary' />
              )}
              {section.title}
              {section.description && (
                <Paragraph className='yl-text-xs yl-text-primary-text-color/70 yl-w-full yl-truncate'>
                  {section.description}
                </Paragraph>
              )}
            </div>
          </h3>
          {expanded.includes(section.id) && (
            <ul
              className='animate-height-animation yl-leading-8'
              role='region'
              aria-labelledby={section.id.toString()}
            >
              {section.items.map(item => (
                <li
                  className={classNames("yl-text-primary-text-color", {
                    "yl-cursor-pointer": onSectionItemClick,
                    "yl-text-primary": selectedItemId === item.id
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
                  <div className='yl-flex yl-break-all yl-px-4 yl-py-2'>
                    <span
                      className={classNames({
                        "yl-text-primary": selectedItemId === item.id
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
