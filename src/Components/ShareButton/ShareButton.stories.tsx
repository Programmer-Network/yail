import { action } from "storybook/actions";

import ShareButton from ".";
import Button from "../Button";

export default {
  title: "Components/ShareButton",

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
