import React, { ReactElement } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import { ShareButtonProps } from "./types";

const ShareButton: React.FC<ShareButtonProps> = ({
  data,
  children,
  onCopied,
  onError,
  onShareLinkDialogOpened
}) => {
  if (!data.url) {
    onError("Invalid URL");
    return;
  }

  const canShare = navigator && navigator.canShare && navigator.canShare(data);

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

    return React.cloneElement(children as ReactElement, {
      onClick: onClickHandler
    });
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

export default ShareButton;
