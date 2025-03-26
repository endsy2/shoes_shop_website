import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailPic from '../Section/Detail/DetailPic';
import ShoesCard from '../Components/ShoesCard';
import { productCart } from '../Constants';
import axios from 'axios';
import api from '../api/api';

const Detail = () => {
    const { param } = useParams();
    const [detail, setDetail] = useState(null);
    const [product, setProduct] = useState([]);

    const fetchDataById = async () => {
        try {
            const fetch = await api.get(`http://localhost:3000/user/displayProductByID/${param}`);
            setDetail(fetch);  // Assuming the response has a 'data' field
        } catch (error) {
            console.log(error);
        }
    };

    const dataProduct = async () => {
        try {
            const fetch = await api.get('http://localhost:3000/user/displayProductAll');
            // console.log('Here are the images:');

            // // Assuming fetch.data is an array of products
            // fetch.forEach((element) => {
            //     console.log(element.productVariants[0]?.productimage[0]?.imageUrl);
            // });

            setProduct(fetch); // Set product list to state
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDataById();
        dataProduct();
    }, [param]);

    return (
        <main>
            <section className="flex gap-16  ">
                {detail ? <DetailPic detail={detail} /> : <p>Loading...</p>}
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pl-14 gap-16 mt-10">
                {product.length > 0 ? (
                    product.map((element, index) => (
                        <ShoesCard
                            productId={element.id}
                            productName={element.name}
                            productPrice={element?.productVariants[0]?.price}
                            productImage={element?.productVariants[0]?.productimage[0]?.imageUrl || 'fallback-image-url.jpg'}
                            key={index}
                        />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </section>
        </main>
    );
};

export default Detail;
