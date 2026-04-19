import React, { ReactElement, useMemo } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import { ShareButtonProps } from "./types";

const ShareButton: React.FC<ShareButtonProps> = ({
  data,
  children,
  onCopied,
  onError,
  onShareLinkDialogOpened
}) => {
  const canShare = useMemo(
    () =>
      typeof navigator !== "undefined" &&
      typeof navigator.canShare === "function" &&
      navigator.canShare(data),
    [data]
  );

  if (!data.url) {
    onError("Invalid URL");
    return;
  }

  const handleShareClick = async () => {
    await navigator.share(data);
    if (onShareLinkDialogOpened) {
      onShareLinkDialogOpened(data);
    }
  };

  const handleCopyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onCopied) {
      return;
    }

    onCopied();
  };

  const renderButton = (onClickHandler: (e: React.MouseEvent) => void) => {
    if (typeof children === "function") {
      return children(onClickHandler);
    }

    // eslint-disable-next-line @eslint-react/no-clone-element -- intentional: consumer passes an arbitrary trigger element and we inject onClick without constraining its props.
    return React.cloneElement(
      children as ReactElement<React.HTMLAttributes<HTMLElement>>,
      {
        onClick: onClickHandler
      }
    );
  };

  if (canShare) {
    return renderButton(handleShareClick);
  }

  return (
    <CopyToClipboard text={data?.url}>
      {renderButton(handleCopyClick)}
    </CopyToClipboard>
  );
};

export { ShareButton };
