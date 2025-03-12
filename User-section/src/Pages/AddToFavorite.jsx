import { useSelector } from "react-redux";
import { productCart } from "../Constants";
import ShoesCard from "../Components/ShoesCard";
import { MdFavoriteBorder } from "react-icons/md"; // Importing icon for empty state

const AddToFavorite = () => {
  const favorite = useSelector(store => store.favorite.favorite);

  // Extract IDs if favorite contains objects
  const favoriteIds = favorite.map(item => item.productId);

  // Find products that match favorite IDs
  const data = productCart.filter(element => favoriteIds.includes(element.id));

  return (
    <div className="flex flex-col w-full items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-black p-5 text-3xl font-bold">My Wish List</h1>
      {data.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full max-w-6xl px-5">
          {data.map((element, index) => (
            <ShoesCard
              productId={element.id}
              productName={element.name}
              productPrice={element.price}
              productImage={element.pic}
              key={index}
            />
          ))}
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <MdFavoriteBorder className="text-gray-400 text-6xl" />
          <p className="text-gray-500 text-lg mt-2">Your wishlist is empty.</p>
        </div>
      )}

    </div>
  );
};

export default AddToFavorite;
