import { FC } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

interface ITooltipProps {
  text: string;
  id: string;
  children: React.ReactNode;
  place?: "top" | "bottom" | "left" | "right";
}

const Tooltip: FC<ITooltipProps> = ({ text, children, id, place = "top" }) => {
  if (!text) {
    return children;
  }

  return (
    <div>
      <div data-tooltip-id={id}>{children}</div>
      <ReactTooltip id={id} place={place} content={text} />
    </div>
  );
};

export default Tooltip;
