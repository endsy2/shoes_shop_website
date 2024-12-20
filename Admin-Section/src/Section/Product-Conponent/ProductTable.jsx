import { Inventory_sum } from "../../Utils/Product/InventoryOperation";

const ProductTable = () => {
  return (
    <section className="flex flex-col bg-lightGray py-10 px-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-primary text-xl font-Roboto font-bold">{`Inventories(${Inventory_sum()})`}</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="p-3 rounded-xl w-64"
          />
          <button className="green-btn h-10 rounded-xl">Export</button>
        </div>
      </div>
    </section>
  );
};

export default ProductTable;
