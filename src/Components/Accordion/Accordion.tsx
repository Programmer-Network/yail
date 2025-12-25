import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";

import { ArrayUtils } from "../../Utils/Array";
import { DraggableList } from "../DraggableList";
import { IDraggableListItem } from "../DraggableList/types";
import { Icon } from "../Icon";
import { Paragraph } from "../Typography";
import { AccordionOrderType, IAccordionProps, ISection } from "./types";

const Accordion: FC<IAccordionProps> = ({
  className,
  sections,
  sectionTitleClassName,
  onSectionItemClick,
  onSectionClick,
  onSorted,
  onSelected,
  onAddSection,
  addSectionLabel,
  onAddSectionItem,
  addSectionItemLabel,
  expanded,
  setExpanded,
  hasDraggableSections,
  hasDraggableSectionItems,
  defaultExpanded,
  selected,
  setSelectedSection,
  setSelectedItem
}) => {
  const hasInitialized = useRef(false);
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [draggedOverId, setDraggedOverId] = useState<number | null>(null);

  const toggleExpand = (sectionId: number) => {
    setExpanded(
      expanded.includes(sectionId)
        ? expanded.filter(id => id !== sectionId)
        : [...expanded, sectionId]
    );
  };

  useEffect(() => {
    if (defaultExpanded && sections.length > 0 && !hasInitialized.current) {
      setExpanded(sections.map(section => section.id));
      hasInitialized.current = true;
    }
  }, [defaultExpanded, sections, setExpanded]);

  const handleDrag = (
    _: React.DragEvent<Element>,
    item: IDraggableListItem
  ) => {
    if (hasDraggableSections) {
      setDraggedId(item.id);
    }
  };

  const handleSectionDrop = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedId != null && draggedOverId != null) {
      onSorted?.(
        AccordionOrderType.SECTIONS,
        ArrayUtils.reorder(
          sections,
          sections.findIndex(item => item.id === draggedId),
          sections.findIndex(item => item.id === draggedOverId)
        ),
        { sectionId: draggedId, items: [] }
      );
    }

    setDraggedId(null);
    setDraggedOverId(null);
  };

  return (
    <section
      onDragEnd={handleSectionDrop}
      className={classNames("yl:bg-background", className)}
    >
      {sections
        .toSorted((a: ISection, b: ISection) => a.order - b.order)
        .map((section: ISection, idx: number) => (
          <div
            key={section.id}
            draggable={hasDraggableSections && section.items.length > 0}
            onDrag={e => handleDrag(e, section)}
            onDragOver={() =>
              hasDraggableSections && setDraggedOverId(section.id)
            }
            className={classNames(
              "yl:border-border yl:border",
              {
                "yl:border-b-0": idx !== sections.length - 1,
                "yl:rounded-tl-md yl:rounded-tr-md": idx === 0,
                "yl:rounded-br-md yl:rounded-bl-md":
                  idx === sections.length - 1 && !onAddSection
              },
              {}
            )}
            role='presentation'
          >
            <h3
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                onSectionClick?.(section);
                setSelectedSection?.(section.id);
                setSelectedItem?.(null);
                toggleExpand(section.id);
              }}
              className={classNames(
                "yl:hover:text-primary yl:relative yl:flex yl:cursor-default yl:items-center yl:p-4 yl:font-semibold yl:capitalize yl:transition-colors yl:duration-400 yl:ease-in-out yl:select-none yl:hover:cursor-pointer",
                sectionTitleClassName,
                {
                  "yl:bg-text/2": expanded.includes(section.id),
                  "cursor-pointer": onSectionItemClick,
                  "yl:text-text":
                    selected?.sectionId !== section.id || !onSectionItemClick,
                  "yl:text-primary":
                    onSectionItemClick && selected?.sectionId === section.id
                }
              )}
              onKeyDown={e =>
                ["Enter", " "].includes(e.key) && toggleExpand(section.id)
              }
              tabIndex={0}
              role='button'
              aria-expanded={expanded.includes(section.id)}
            >
              {hasDraggableSections && (
                <div>
                  <Icon
                    iconName='IconDrag'
                    dataTestId='icon-drag'
                    className='yl:mr-1 yl:w-6 yl:opacity-50'
                  />
                </div>
              )}
              <div className='yl:flex yl:flex-col yl:gap-1 yl:overflow-hidden yl:text-base yl:text-ellipsis yl:whitespace-nowrap'>
                {expanded.includes(section.id) ? (
                  <Icon
                    iconName='IconExpandLess'
                    dataTestId='icon-expand-less'
                    className='yl:fill-primary yl:hover:fill-primary yl:absolute yl:right-2 yl:w-6 yl:cursor-pointer'
                  />
                ) : (
                  <Icon
                    iconName='IconExpandMore'
                    dataTestId='icon-expand-more'
                    className='yl:fill-primary yl:hover:fill-primary yl:absolute yl:right-2 yl:w-6 yl:cursor-pointer'
                  />
                )}
                {section.title}
                {section.description && (
                  <Paragraph className='yl:text-text/70 yl:text-xs'>
                    {section.description}
                  </Paragraph>
                )}
              </div>
            </h3>

            {expanded.includes(section.id) && (
              <>
                {section.items.length > 0 && (
                  <DraggableList
                    items={section.items}
                    onClick={(item: IDraggableListItem) => {
                      onSectionItemClick?.(item);
                      onSelected?.(item);
                      setSelectedItem?.(item.id);
                      setSelectedSection?.(
                        sections.find(s => s.items.includes(item))?.id ?? null
                      );
                    }}
                    onDragged={(items: IDraggableListItem[]) => {
                      onSorted?.(
                        AccordionOrderType.LECTURES,
                        [
                          ...sections.map(s =>
                            s.id === section.id ? { ...s, items } : s
                          )
                        ],
                        { sectionId: section.id, items }
                      );
                    }}
                    isDraggable={
                      hasDraggableSectionItems && section.items.length > 0
                    }
                    className='yl:flex yl:flex-col yl:gap-4 yl:py-4'
                    draggedOverClassName='yl:border-t-2 yl:border-border'
                    liClassName={(item: IDraggableListItem) =>
                      classNames(
                        "yl:cursor-default yl:break-words yl:leading-normal yl:px-4",
                        {
                          "yl:hover:cursor-pointer yl:hover:text-primary":
                            onSectionItemClick,
                          "yl:text-primary":
                            onSectionItemClick && selected?.itemId === item.id,
                          "yl:pl-5": section.items.length === 1
                        }
                      )
                    }
                  />
                )}
                {onAddSectionItem && (
                  <div
                    onClick={() => onAddSectionItem(section)}
                    className={classNames(
                      "group yl:border-border yl:hover:bg-text/1 yl:bg-text/3 yl:cursor-pointer"
                    )}
                    role='presentation'
                  >
                    <h3
                      className={classNames(
                        "yl:flex yl:flex-col yl:items-center yl:justify-center yl:p-4 yl:text-center yl:font-semibold yl:select-none"
                      )}
                      role='button'
                    >
                      <Paragraph className='yl:flex yl:items-center yl:gap-1'>
                        <Icon
                          iconName='IconAddCircle'
                          dataTestId='icon-add-circle'
                          className='yl:text-primary yl:w-6'
                        />
                        {addSectionItemLabel && (
                          <span className='yl:text-primary yl:text-sm'>
                            {addSectionItemLabel}
                          </span>
                        )}
                      </Paragraph>
                    </h3>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      {onAddSection && (
        <div
          onClick={onAddSection}
          className={classNames(
            "group yl:border-border yl:hover:bg-text/2 yl:bg-text/3 yl:cursor-pointer yl:rounded-br-md yl:rounded-bl-md yl:border yl:border-t-0"
          )}
          role='presentation'
        >
          <h3
            className={classNames(
              "yl:flex yl:flex-col yl:items-center yl:justify-center yl:p-4 yl:text-center yl:font-semibold yl:select-none"
            )}
            role='button'
          >
            <Paragraph className='yl:flex yl:items-center yl:gap-1'>
              <Icon
                iconName='IconAddCircle'
                dataTestId='icon-add-circle'
                className='yl:text-primary yl:w-6'
              />
              {addSectionLabel && (
                <span className='yl:text-primary yl:text-sm'>
                  {addSectionLabel}
                </span>
              )}
            </Paragraph>
          </h3>
        </div>
      )}
    </section>
  );
};

export { Accordion };
