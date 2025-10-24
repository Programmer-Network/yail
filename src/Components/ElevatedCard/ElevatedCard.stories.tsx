import { action } from "storybook/actions";

import ElevatedCard from ".";
import Button from "../Button";
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
      className: "w-6 h-6 text-primary"
    }}
  />
);

export const WithChildren = () => (
  <ElevatedCard
    title='Curated Resources'
    description='Explore our collection of tools, libraries, and tutorials to enhance your development workflow.'
    icon={{
      iconName: "IconAddYoutube",
      className: "w-6 h-6 text-primary"
    }}
  >
    <div className='mt-4 flex gap-2'>
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
      className: "w-6 h-6 text-primary"
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
      className: "w-6 h-6 text-primary"
    }}
    className='bg-primary-50 border-primary-100 max-w-sm border'
  />
);
