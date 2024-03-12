import ItemActions from ".";

export default {
  title: "Components / ItemActions"
};

export const Default = () => (
  <ItemActions
    item={{ id: "1", name: "Item 1" }}
    onAction={action => {
      alert(action);
    }}
  />
);
