import {
  ComponentType,
  FC,
  LazyExoticComponent,
  Suspense,
  lazy,
  useEffect,
  useState
} from "react";

import { IconName } from "Components/Icons/types";

const Icon: FC<{ iconName: IconName; className?: string }> = ({
  iconName,
  className = "w-4 text-indigo-500"
}) => {
  const [error, setError] = useState<boolean>(false);
  const [IconComponent, setIconComponent] = useState<LazyExoticComponent<
    ComponentType<any>
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
    return;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {IconComponent && <IconComponent className={className} />}
    </Suspense>
  );
};

export default Icon;
