import Icon from "Components/Icon";

const ItemActions = <T,>({
  item,
  onEdit,
  onDelete
}: {
  item: T;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}): JSX.Element => {
  return (
    <div className='flex items-center gap-2'>
      {onEdit && (
        <Icon
          iconName='IconEdit'
          className='w-5 cursor-pointer text-primary-text-color hover:text-primary'
          onClick={e => {
            e.stopPropagation();
            onEdit(item);
          }}
        />
      )}
      {onDelete && (
        <Icon
          iconName='IconDeleteBin'
          className='w-5 cursor-pointer text-primary-text-color hover:text-primary'
          onClick={e => {
            e.stopPropagation();
            onDelete(item);
          }}
        />
      )}
    </div>
  );
};

export default ItemActions;
