import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailPic from '../Section/Detail/Detail';
import ShoesCard from '../Components/ShoesCard';
import { productCart } from '../Constants';
import axios from 'axios';

const Detail = () => {
    const { param } = useParams();
    const [detail, setDetail] = useState(null);

    const fetchDataById = async () => {
        try {
            // Assuming the base URL is http://localhost:3000 (change accordingly)
            const fetch = await api.get(`http://localhost:3000/user/displayProductByID/${param}`);
            console.log(fetch);
            setDetail(fetch.data);  // Set the response data to detail state
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDataById();
        console.log(param);
    }, [param]);  // Remove navigate from dependencies

    return (
        <main>
            <section className='flex gap-16 mt-10 mx-10'>
                {detail ? <DetailPic detail={detail} /> : <p>Loading...</p>}
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pl-14 gap-16">
                {productCart.map((element, index) => (
                    <ShoesCard
                        productId={element.id}
                        productName={element.name}
                        productPrice={element.price}
                        productImage={element.pic}
                        key={index}
                    />
                ))}
            </section>

        </main>
    );
};

export default Detail;
