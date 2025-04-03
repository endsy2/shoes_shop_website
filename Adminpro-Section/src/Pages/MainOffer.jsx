import { useEffect, useState } from "react";
import TableProduct from "../Component/TableProduct";
import { productData, productDiscout } from "../Fetch/FetchAPI";
import HeadMainOffer from "../Section/MainOffer/HeadMainOffer";
import TableOffer from "../Component/TableOffer";

const MainOffer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await productDiscout();
                setItems(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <HeadMainOffer />
            <TableOffer title="Promotion" items={items} />
        </>
    );
};

export default MainOffer;