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

// HMR: Self-accept this module so it reloads when icon files change
// This ensures the glob pattern is re-evaluated when new icons are added
// Note: Vite's import.meta.glob is evaluated once at module init, so new files
// added after dev server start require a module reload to be picked up
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    // Module will reload, causing glob to re-evaluate and pick up new files
    // Clear the cache to ensure new icons are loaded
    Object.keys(iconCache).forEach(key => delete iconCache[key]);
  });
}

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

export { Icon };
