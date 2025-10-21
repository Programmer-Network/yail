import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";

import ArrayUtils from "../../Utils/Array";
import DraggableList from "../DraggableList";
import { IDraggableListItem } from "../DraggableList/types";
import Icon from "../Icon";
import { Paragraph } from "../Typography";
import { AccordionOrderType, IAccordionProps } from "./types";

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
        .toSorted((a, b) => a.order - b.order)
        .map((section, idx) => (
          <div
            key={section.id}
            draggable={hasDraggableSections && section.items.length > 0}
            onDrag={e => handleDrag(e, section)}
            onDragOver={() =>
              hasDraggableSections && setDraggedOverId(section.id)
            }
            className={classNames(
              "border-2 border-border",
              {
                "border-b-0": idx !== sections.length - 1,
                "rounded-tl-md rounded-tr-md": idx === 0,
                "rounded-bl-md rounded-br-md":
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
                "relative flex cursor-default select-none items-center font-semibold capitalize p-4 hover:text-primary transition-colors duration-400 ease-in-out hover:cursor-pointer",
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
                    className='w-6 opacity-50 mr-1'
                  />
                </div>
              )}
              <div className='flex flex-col gap-1 overflow-hidden text-ellipsis whitespace-nowrap text-base'>
                {expanded.includes(section.id) ? (
                  <Icon
                    iconName='IconExpandLess'
                    dataTestId='icon-expand-less'
                    className='absolute right-2 w-6 cursor-pointer fill-primary hover:fill-primary'
                  />
                ) : (
                  <Icon
                    iconName='IconExpandMore'
                    dataTestId='icon-expand-more'
                    className='absolute right-2 w-6 cursor-pointer fill-primary hover:fill-primary'
                  />
                )}
                {section.title}
                {section.description && (
                  <Paragraph className='text-xs text-text/70'>
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
                    className='gap-4 flex flex-col py-4'
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
                      "group border-border hover:bg-text/1 cursor-pointer bg-text/3"
                    )}
                    role='presentation'
                  >
                    <h3
                      className={classNames(
                        "flex flex-col items-center justify-center select-none font-semibold p-4 text-center"
                      )}
                      role='button'
                    >
                      <Paragraph className='flex items-center gap-1'>
                        <Icon
                          iconName='IconAddCircle'
                          dataTestId='icon-add-circle'
                          className='w-6 text-primary'
                        />
                        {addSectionItemLabel && (
                          <span className='text-sm text-primary'>
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
            "group border-2 border-t-0 border-border hover:bg-text/2 rounded-bl-md rounded-br-md cursor-pointer bg-text/3"
          )}
          role='presentation'
        >
          <h3
            className={classNames(
              "flex flex-col items-center justify-center select-none font-semibold p-4 text-center"
            )}
            role='button'
          >
            <Paragraph className='flex items-center gap-1'>
              <Icon
                iconName='IconAddCircle'
                dataTestId='icon-add-circle'
                className='w-6 text-primary'
              />
              {addSectionLabel && (
                <span className='text-sm text-primary'>{addSectionLabel}</span>
              )}
            </Paragraph>
          </h3>
        </div>
      )}
    </section>
  );
};

export default Accordion;
