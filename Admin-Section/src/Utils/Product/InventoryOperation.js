import { Inventory_items } from "../../Constants";

export const Inventory_sum = () => {
  return Inventory_items.reduce(
    (acc, item) => acc + parseInt(item.inventory),
    0,
  );
};
