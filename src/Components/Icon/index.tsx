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

import { IconName } from "Components/Icons/types";

const Icon: FC<{
  iconName: IconName;
  className?: string;
  onClick?: () => void;
}> = ({ iconName, className = "w-4 text-indigo-500", onClick }) => {
  const [error, setError] = useState<boolean>(false);
  const [IconComponent, setIconComponent] = useState<LazyExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
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
      {IconComponent && (
        <IconComponent className={className} onClick={onClick} />
      )}
    </Suspense>
  );
};

export default Icon;
