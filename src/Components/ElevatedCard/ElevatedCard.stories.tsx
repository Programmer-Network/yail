import { action } from "storybook/actions";

import { ElevatedCard } from ".";
import { Button } from "../Button";
import { ButtonVariantEnum } from "../Button/types";

export default {
  title: "Components/ElevatedCard",
  component: ElevatedCard,
  tags: ["autodocs"]
};

export const Basic = () => (
  <ElevatedCard
    title='Curated Resources'
    description='Explore our collection of tools, libraries, and tutorials to enhance your development workflow.'
  />
);

export const WithIcon = () => (
  <ElevatedCard
    title='Curated Resources'
    description='Explore our collection of tools, libraries, and tutorials to enhance your development workflow.'
    icon={{
      iconName: "IconBook",
      className: "yl:w-6 yl:h-6 yl:text-primary"
    }}
  />
);

export const WithChildren = () => (
  <ElevatedCard
    title='Curated Resources'
    description='Explore our collection of tools, libraries, and tutorials to enhance your development workflow.'
    icon={{
      iconName: "IconAddYoutube",
      className: "yl:w-6 yl:h-6 yl:text-primary"
    }}
  >
    <div className='yl:mt-4 yl:flex yl:gap-2'>
      <Button>Explore</Button>
      <Button variant={ButtonVariantEnum.SECONDARY}>Learn More</Button>
    </div>
  </ElevatedCard>
);

export const Clickable = () => (
  <ElevatedCard
    title='Curated Resources'
    description='Explore our collection of tools, libraries, and tutorials to enhance your development workflow.'
    icon={{
      iconName: "IconGroupWork",
      className: "yl:w-6 yl:h-6 yl:text-primary"
    }}
    onClick={() => action("Card clicked")()}
  />
);

export const CustomStyling = () => (
  <ElevatedCard
    title='Curated Resources'
    description='Explore our collection of tools, libraries, and tutorials to enhance your development workflow.'
    icon={{
      iconName: "IconSkull",
      className: "yl:w-6 yl:h-6 yl:text-primary"
    }}
    className='yl:bg-primary-50 yl:border-primary-100 yl:max-w-sm yl:border'
  />
);
