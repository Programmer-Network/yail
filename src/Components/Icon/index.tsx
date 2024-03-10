import {
  ComponentType,
  FC,
  LazyExoticComponent,
  SVGProps,
  Suspense,
  lazy,
  useEffect,
  useState
} from "react";

import { IIconProps } from "./types";

const Icon: FC<IIconProps> = props => {
  const { iconName, className, onClick, ...rest } = props;

  const [error, setError] = useState<boolean>(false);
  const [IconComponent, setIconComponent] = useState<LazyExoticComponent<
    ComponentType<SVGProps<SVGElement>>
  > | null>(null);

  useEffect(() => {
    const Component = lazy(() => {
      return import(`../Icons/${iconName}.tsx`).catch(() => {
        setError(true);
      });
    });

    setIconComponent(Component);
  }, [iconName]);

  if (error) {
    return null;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {IconComponent && (
        <IconComponent {...rest} className={className} onClick={onClick} />
      )}
    </Suspense>
  );
};

export default Icon;
