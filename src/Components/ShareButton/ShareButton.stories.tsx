import { action } from "storybook/actions";

import Button from "Components/Button";

import ShareButton from ".";

export default {
  title: "Components/ShareButton",
  parameters: {
    layout: "centered"
  },
  component: ShareButton
};

export const UsingChildren = () => (
  <ShareButton
    data={{ url: "https://example.com" }}
    onCopied={() => action("copied")()}
    onError={error => action("error")(error)}
  >
    <Button>Share</Button>
  </ShareButton>
);

export const UsingRenderProp = () => (
  <ShareButton
    data={{ url: "https://example.com" }}
    onCopied={() => action("copied")()}
    onError={error => action("error")(error)}
    onShareLinkDialogOpened={data => action("share")(data)}
  >
    {onClick => <Button onClick={onClick}>Share</Button>}
  </ShareButton>
);
