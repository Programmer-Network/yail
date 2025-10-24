import {
  ComponentType,
  FC,
  SVGProps,
  Suspense,
  lazy,
  useMemo,
  useState
} from "react";

import { IIconProps } from "./types";

const iconModules = import.meta.glob<{
  default: ComponentType<SVGProps<SVGElement>>;
}>("../Icons/*.tsx");

const iconCache: Record<
  string,
  React.LazyExoticComponent<ComponentType<SVGProps<SVGElement>>>
> = {};

const Icon: FC<IIconProps> = props => {
  const { iconName, className, onClick, dataTestId, ...rest } = props;
  const [error, setError] = useState(false);

  const IconComponent = useMemo(() => {
    if (iconCache[iconName]) {
      return iconCache[iconName];
    }

    const importer = iconModules[`../Icons/${iconName}.tsx`];
    if (!importer) {
      setError(true);
      return null;
    }

    const Component = lazy(importer);
    iconCache[iconName] = Component;
    return Component;
  }, [iconName]);

  if (error || !IconComponent) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <IconComponent
        {...rest}
        className={className}
        onClick={onClick}
        data-testid={dataTestId}
      />
    </Suspense>
  );
};

export default Icon;
