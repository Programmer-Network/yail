import classNames from "classnames";
import { FC, useEffect, useState } from "react";

import DraggableList from "Components/DraggableList";
import { IDraggableListItem } from "Components/DraggableList/types";
import { IconDrag, IconExpandLess, IconExpandMore } from "Components/Icons";
import { Paragraph } from "Components/Typography";

import ArrayUtils from "Utils/Array";

import { IAccordionProps } from "./types";

const Accordion: FC<IAccordionProps> = ({
  className,
  sections,
  setSections,
  sectionTitleClassName,
  onSectionItemClick,
  onSectionClick,
  onSelected,
  expanded,
  setExpanded,
  selectedId,
  hasDraggableSections,
  hasDraggableSectionItems
}) => {
  const [selectedItemId, setSelectedItemId] = useState<
    number | null | undefined
  >(selectedId);
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [draggedOverId, setDraggedOverId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const toggleExpand = (sectionId: number) => {
    setExpanded(
      expanded.includes(sectionId)
        ? expanded.filter(id => id !== sectionId)
        : [...expanded, sectionId]
    );
  };

  useEffect(() => setSelectedItemId(selectedId), [selectedId]);

  const handleDrag = (
    e: React.DragEvent<Element>,
    item: IDraggableListItem
  ) => {
    if (hasDraggableSections) {
      setDraggedId(item.id);
    }
  };

  const handleSectionDrop = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    if (draggedId != null && draggedOverId != null) {
      setSections(
        ArrayUtils.reorder(
          sections,
          sections.findIndex(item => item.id === draggedId),
          sections.findIndex(item => item.id === draggedOverId)
        )
      );
    }

    setDraggedId(null);
    setDraggedOverId(null);
  };

  return (
    <section onDragEnd={handleSectionDrop} className={classNames(className)}>
      {sections.map((section, idx) => (
        <div
          key={section.id}
          onClick={() => onSectionClick?.(section)}
          draggable={hasDraggableSections}
          onDrag={e => handleDrag(e, section)}
          onDragOver={() =>
            hasDraggableSections && setDraggedOverId(section.id)
          }
          onMouseOver={() => hasDraggableSections && setHoveredId(section.id)}
          onMouseLeave={() => hasDraggableSections && setHoveredId(null)}
          className={classNames(
            "yl-border-2 yl-border-primary-text-color/20",
            {
              "yl-border-b-0": idx !== sections.length - 1,
              "yl-rounded-tl-md yl-rounded-tr-md": idx === 0,
              "yl-rounded-bl-md yl-rounded-br-md": idx === sections.length - 1
            },
            {
              "yl-bg-primary-text-color/5": draggedOverId === section.id,
              "yl-bg-primary-text-color/10":
                draggedId && hoveredId === section.id
            }
          )}
          role='presentation'
        >
          <h3
            className={classNames(
              "yl-relative yl-flex yl-cursor-pointer yl-select-none yl-items-center yl-font-semibold yl-capitalize yl-text-primary-text-color yl-p-4",
              sectionTitleClassName,
              { "yl-bg-primary-text-color/5": expanded.includes(section.id) }
            )}
            onClick={() => toggleExpand(section.id)}
            onKeyDown={e =>
              ["Enter", " "].includes(e.key) && toggleExpand(section.id)
            }
            tabIndex={0}
            role='button'
            aria-expanded={expanded.includes(section.id)}
          >
            {hasDraggableSections && (
              <div>
                <IconDrag className='yl-w-6 yl-opacity-50 yl-mr-1' />
              </div>
            )}
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
            <DraggableList
              items={section.items}
              onDragged={(items: IDraggableListItem[]) => {
                setSections([
                  ...sections.map(s =>
                    s.id === section.id ? { ...s, items } : s
                  )
                ]);
              }}
              isDraggable={hasDraggableSectionItems}
              className='yl-gap-4 yl-flex yl-flex-col yl-py-4'
              draggedOverClassName='yl-border-t-2 yl-border-primary'
              liClassName={(item: IDraggableListItem) =>
                classNames(
                  "yl-cursor-default hover:text-primary break-all leading-normal yl-px-4",
                  {
                    "yl-cursor-pointer": onSectionItemClick,
                    "yl-text-primary-text-color": selectedItemId !== item.id,
                    "yl-text-primary":
                      onSectionItemClick && selectedItemId === item.id,
                    "yl-pl-9": section.items.length === 1
                  }
                )
              }
              onClick={(item: IDraggableListItem) => {
                onSectionItemClick?.(item);
                onSelected?.(item);
                setSelectedItemId(item.id);
              }}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default Accordion;
