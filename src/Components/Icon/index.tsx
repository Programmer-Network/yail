import {
  ComponentType,
  FC,
  LazyExoticComponent,
  MouseEvent,
  SVGProps,
  Suspense,
  lazy,
  useEffect,
  useState
} from "react";

import { IconName } from "Components/Icons/types";

const Icon: FC<{
  iconName: IconName;
  className?: string;
  onClick: (e: MouseEvent<SVGElement>) => void;
}> = props => {
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
