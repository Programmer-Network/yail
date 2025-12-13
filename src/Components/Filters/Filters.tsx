import classNames from "classnames";
import { FC, useState } from "react";

import { Button } from "../Button";
import { ButtonVariantEnum } from "../Button/types";
import { Input } from "../Inputs/Input";
import { Select } from "../Inputs/Select";
import { ViewToggle } from "../ViewToggle";
import { IFiltersProps } from "./types";

const Filters: FC<IFiltersProps> = ({
  search = {
    value: "",
    onChange: () => {}
  },
  tags,
  view,
  sorting,
  additional,
  className
}) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div
      className={classNames(
        "yl:flex yl:w-full yl:flex-col yl:gap-2",
        className
      )}
    >
      <div className='yl:flex yl:w-full yl:flex-col yl:gap-2 yl:md:flex-row yl:md:items-center'>
        <Input
          type='text'
          name='search'
          placeholder='Search...'
          onChange={input => search.onChange(input["search"] ?? "")}
          value={search.value}
          className='yl:h-12'
          inputWrapperClassName='yl:flex-1 yl:min-w-0 yl:w-full'
        />
        <div className='yl:flex yl:gap-4'>
          {sorting && sorting.options.length > 0 && (
            <div className='yl:flex yl:items-center yl:gap-1'>
              <Button
                variant={
                  sorting.value === "newest"
                    ? ButtonVariantEnum.PRIMARY
                    : ButtonVariantEnum.SECONDARY
                }
                onClick={() => {
                  sorting.onChange("newest");
                }}
                icon={{
                  iconName: "SortUpSolid",
                  iconClassName: "yl:w-6 yl:h-6",
                  iconPosition: "left"
                }}
              />
              <Button
                variant={
                  sorting.value === "oldest"
                    ? ButtonVariantEnum.PRIMARY
                    : ButtonVariantEnum.SECONDARY
                }
                className='yl:w-12 yl:h-12'
                onClick={() => {
                  sorting.onChange("oldest");
                }}
                icon={{
                  iconName: "SortDownSolid",
                  iconClassName: "yl:w-6 yl:h-6",
                  iconPosition: "left"
                }}
              />
            </div>
          )}

          {view && (
            <div className='yl:w-auto'>
              <ViewToggle
                data-testid='view-toggle'
                currentView={view.value}
                onViewChange={view.onChange}
              />
            </div>
          )}
          {(tags || additional) && (
            <Button
              variant={
                showFilters
                  ? ButtonVariantEnum.PRIMARY
                  : ButtonVariantEnum.SECONDARY
              }
              className='yl:w-12 yl:h-12'
              onClick={() => setShowFilters(v => !v)}
              icon={{
                iconName: "FilterOutline",
                iconClassName: "yl:w-6 yl:h-6",
                iconPosition: "left"
              }}
            />
          )}
        </div>
      </div>
      {showFilters && tags && (
        <div className='yl:mt-2 yl:flex yl:flex-wrap yl:items-start yl:gap-2'>
          {tags && tags?.options?.length > 0 && (
            <Select
              placeholder='Select tags...'
              name='tags'
              options={tags.options}
              value={tags.selected}
              isMulti
              isSearchable
              onChange={options => {
                if (!Array.isArray(options["tags"])) {
                  throw new Error("Options must be an array");
                }

                tags.onChange(options["tags"] as string[]);
              }}
              inputWrapperClassName='min-w-[200px]'
            />
          )}
          {Array.isArray(additional) ? (
            additional.map((item, index) => <div key={index}>{item}</div>)
          ) : (
            <div>{additional}</div>
          )}
        </div>
      )}
    </div>
  );
};

export { Filters };
