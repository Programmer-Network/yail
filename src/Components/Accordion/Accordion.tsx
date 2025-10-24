import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";

import ArrayUtils from "../../Utils/Array";
import DraggableList from "../DraggableList";
import { IDraggableListItem } from "../DraggableList/types";
import Icon from "../Icon";
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
      className={classNames("bg-background", className)}
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
              "border-border border-2",
              {
                "border-b-0": idx !== sections.length - 1,
                "rounded-tl-md rounded-tr-md": idx === 0,
                "rounded-br-md rounded-bl-md":
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
                "hover:text-primary relative flex cursor-default items-center p-4 font-semibold capitalize transition-colors duration-400 ease-in-out select-none hover:cursor-pointer",
                sectionTitleClassName,
                {
                  "bg-text/2": expanded.includes(section.id),
                  "cursor-pointer": onSectionItemClick,
                  "text-text":
                    selected?.sectionId !== section.id || !onSectionItemClick,
                  "text-primary":
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
                    className='mr-1 w-6 opacity-50'
                  />
                </div>
              )}
              <div className='flex flex-col gap-1 overflow-hidden text-base text-ellipsis whitespace-nowrap'>
                {expanded.includes(section.id) ? (
                  <Icon
                    iconName='IconExpandLess'
                    dataTestId='icon-expand-less'
                    className='fill-primary hover:fill-primary absolute right-2 w-6 cursor-pointer'
                  />
                ) : (
                  <Icon
                    iconName='IconExpandMore'
                    dataTestId='icon-expand-more'
                    className='fill-primary hover:fill-primary absolute right-2 w-6 cursor-pointer'
                  />
                )}
                {section.title}
                {section.description && (
                  <Paragraph className='text-text/70 text-xs'>
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
                    className='flex flex-col gap-4 py-4'
                    draggedOverClassName='border-t-2 border-border'
                    liClassName={(item: IDraggableListItem) =>
                      classNames(
                        "cursor-default break-words leading-normal px-4",
                        {
                          "hover:cursor-pointer hover:text-primary":
                            onSectionItemClick,
                          "text-primary":
                            onSectionItemClick && selected?.itemId === item.id,
                          "pl-5": section.items.length === 1
                        }
                      )
                    }
                  />
                )}
                {onAddSectionItem && (
                  <div
                    onClick={() => onAddSectionItem(section)}
                    className={classNames(
                      "group border-border hover:bg-text/1 bg-text/3 cursor-pointer"
                    )}
                    role='presentation'
                  >
                    <h3
                      className={classNames(
                        "flex flex-col items-center justify-center p-4 text-center font-semibold select-none"
                      )}
                      role='button'
                    >
                      <Paragraph className='flex items-center gap-1'>
                        <Icon
                          iconName='IconAddCircle'
                          dataTestId='icon-add-circle'
                          className='text-primary w-6'
                        />
                        {addSectionItemLabel && (
                          <span className='text-primary text-sm'>
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
            "group border-border hover:bg-text/2 bg-text/3 cursor-pointer rounded-br-md rounded-bl-md border-2 border-t-0"
          )}
          role='presentation'
        >
          <h3
            className={classNames(
              "flex flex-col items-center justify-center p-4 text-center font-semibold select-none"
            )}
            role='button'
          >
            <Paragraph className='flex items-center gap-1'>
              <Icon
                iconName='IconAddCircle'
                dataTestId='icon-add-circle'
                className='text-primary w-6'
              />
              {addSectionLabel && (
                <span className='text-primary text-sm'>{addSectionLabel}</span>
              )}
            </Paragraph>
          </h3>
        </div>
      )}
    </section>
  );
};

export default Accordion;
