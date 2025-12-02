import { FC } from "react";

const SlashMenuListEmpty: FC = () => (
  <div className='yl:bg-background yl:border-border/40 yl:text-text/60 yl:rounded-lg yl:border-2 yl:p-4 yl:shadow-xl'>
    <p className='yl:text-sm'>No matching commands</p>
  </div>
);

SlashMenuListEmpty.displayName = "SlashMenuListEmpty";

export { SlashMenuListEmpty };
