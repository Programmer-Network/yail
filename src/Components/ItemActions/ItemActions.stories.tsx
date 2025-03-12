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

export const WithCustomOptions = () => (
  <ItemActions
    item={{ id: "1", name: "Item 1" }}
    options={[
      {
        icon: {
          iconName: "Edit1Solid",
          className: "yl:w-4"
        },
        value: "Edit",
        onClick: () => {
          alert("Share");
        }
      }
    ]}
    onAction={action => {
      alert(action);
    }}
  />
);
