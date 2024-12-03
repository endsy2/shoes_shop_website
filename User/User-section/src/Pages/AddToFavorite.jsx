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
    console.log(favorite);

  }, [favorite])
  return (
    <div className="flex flex-col justify-cente w-full items-center">
      <h1 className="text-primary p-5 text-2xl font-Jaro">My Wish List</h1>
      <ShoesCard shoesData={data} />
    </div>
  )
}

export default AddToFavorite
