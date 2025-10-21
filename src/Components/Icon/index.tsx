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

    const Component = lazy(() =>
      import(`../Icons/${iconName}.tsx`).catch(() => {
        setError(true);
        return { default: () => null };
      })
    );

    iconCache[iconName] = Component;
    return Component;
  }, [iconName]);

  if (error) {
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
