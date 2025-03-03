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

// Create a cache to store loaded icon components
const iconCache: Record<
  string,
  LazyExoticComponent<ComponentType<SVGProps<SVGElement>>>
> = {};

const Icon: FC<IIconProps> = props => {
  const { iconName, className, onClick, ...rest } = props;

  const [error, setError] = useState<boolean>(false);

  // Memoize the lazy component creation
  const IconComponent = useMemo(() => {
    if (iconCache[iconName]) {
      return iconCache[iconName];
    }

    const Component = lazy(async () => {
      try {
        const module = await import(`../Icons/${String(iconName)}.tsx`);
        return module;
      } catch (err) {
        setError(true);
        console.error(`Failed to load icon: ${iconName}`, err);
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
      <IconComponent {...rest} className={className} onClick={onClick} />
    </Suspense>
  );
};

export default Icon;
