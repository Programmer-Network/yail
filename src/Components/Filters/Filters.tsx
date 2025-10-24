import classNames from "classnames";
import { FC, useState } from "react";

import Button from "../Button";
import { ButtonVariantEnum } from "../Button/types";
import Input from "../Inputs/Input";
import Select from "../Inputs/Select";
import ViewToggle from "../ViewToggle";
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
    <div className={classNames("flex w-full flex-col gap-2", className)}>
      <div className='flex w-full flex-col gap-2 md:flex-row md:items-center'>
        <Input
          type='text'
          name='search'
          placeholder='Search...'
          onChange={input => search.onChange(input["search"] ?? "")}
          value={search.value}
          inputWrapperClassName='flex-1 min-w-0 w-full'
        />
        <div className='flex gap-4'>
          {sorting && sorting.options.length > 0 && (
            <div className='flex items-center gap-1'>
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
                  iconClassName: "w-6 h-6",
                  iconPosition: "left"
                }}
              />
              <Button
                variant={
                  sorting.value === "oldest"
                    ? ButtonVariantEnum.PRIMARY
                    : ButtonVariantEnum.SECONDARY
                }
                onClick={() => {
                  sorting.onChange("oldest");
                }}
                icon={{
                  iconName: "SortDownSolid",
                  iconClassName: "w-6 h-6",
                  iconPosition: "left"
                }}
              />
            </div>
          )}

          {view && (
            <div className='w-auto'>
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
              onClick={() => setShowFilters(v => !v)}
              icon={{
                iconName: "FilterSolid",
                iconClassName: "w-6 h-6",
                iconPosition: "left"
              }}
            />
          )}
        </div>
      </div>
      {showFilters && (
        <div className='mt-2 flex flex-wrap items-start gap-2'>
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

export default Filters;
