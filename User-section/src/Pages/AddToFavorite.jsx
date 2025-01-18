import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { productCart } from "../Constants";
import ShoesCard from "../Components/ShoesCard";

const AddToFavorite = () => {
  const [data, setData] = useState([])
  const favorite = useSelector(store => store.favorite.favorite);
  const findProduct = () => {
    setData(productCart.filter((element) => favorite.includes(element.id)))
  }
  useEffect(() => {
    findProduct();
  }, [favorite])
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-primary p-5 text-2xl font-Jaro">My Wish List</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-16">
        {data.map((element, index) => (
          <ShoesCard shoesData={element} key={index} />
        ))}
      </section>
    </div>
  )
}

export default AddToFavorite
