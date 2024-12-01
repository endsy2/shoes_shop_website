import React from 'react';
import DetailPic from '../Section/Detail/DetailPic';
import DetailText from '../Section/Detail/DetailText';
import ShoesCard from '../Components/ShoesCard';
import { productCart } from '../Constants';
import NavBar from '../Components/NavBar';


const Detail = () => {
    return (
        <main>
            <section className='flex gap-16 mt-10 mx-10'>
                <DetailPic />
                <DetailText />
            </section>
            <ShoesCard shoesData={productCart} />

        </main>
    );
};

export default Detail;
