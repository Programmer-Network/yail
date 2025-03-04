import {
  ComponentType,
  FC,
  LazyExoticComponent,
  SVGProps,
  Suspense,
  lazy,
  useMemo,
  useState
} from "react";

import { IIconProps } from "./types";

const iconCache: Record<
  string,
  LazyExoticComponent<ComponentType<SVGProps<SVGElement>>>
> = {};

const Icon: FC<IIconProps> = props => {
  const { iconName, className, onClick, dataTestId, ...rest } = props;

  const [error, setError] = useState<boolean>(false);

  const IconComponent = useMemo(() => {
    if (iconCache[iconName]) {
      return iconCache[iconName];
    }

    const Component = lazy(async () => {
      try {
        const module = await import(`../Icons/${String(iconName)}.tsx`);
        return module;
      } catch {
        setError(true);
        return { default: () => null };
      }
    });

    iconCache[iconName] = Component;
    return Component;
  }, [iconName]);

  if (error) {
    return null;
  }

  return (
    <Suspense>
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
