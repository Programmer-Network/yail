import classNames from 'classnames';
import { FC, useState } from 'react';
import { InputError } from '../Inputs';
import { IconStarEmpty, IconStarFilled } from '../Icons';

interface IStarsProps {
  name: string;
  stars?: number;
  onChange?: (value: Record<string, number>) => void;
  value?: number;
  error?: string;
}

const Stars: FC<IStarsProps> = ({
  name,
  stars = 0,
  onChange,
  value = 0,
  error,
}) => {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(value);

  return (
    <div>
      <div className="flex gap-2">
        {Array(5)
          .fill(null)
          .map((_, index) => {
            const Star =
              index < stars || index < selected || (onChange && index < hovered)
                ? IconStarFilled
                : IconStarEmpty;

            return (
              <Star
                key={index}
                onMouseEnter={() => setHovered(index + 1)}
                onMouseLeave={() => setHovered(0)}
                onClick={
                  onChange
                    ? () => {
                        if (selected === index + 1) {
                          onChange({ [name]: 0 });
                          return setSelected(0);
                        }

                        setSelected(index + 1);
                        onChange({ [name]: index + 1 });
                      }
                    : undefined
                }
                className={classNames('w-4 relative right-1', {
                  'fill-yellow-400 hover:cursor-pointer':
                    index < stars ||
                    index < selected ||
                    (onChange && index < hovered),
                })}
              />
            );
          })}
      </div>
      {error && <InputError error={error} />}
    </div>
  );
};

export default Stars;
