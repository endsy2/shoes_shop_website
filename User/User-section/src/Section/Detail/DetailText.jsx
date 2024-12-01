import React from 'react'
import { productCart } from '../../Constants'
import ShoesCard from '../../Components/ShoesCard'

const DetailText = () => {
    return (

        <div className='flex flex-col'>
            <section>
                <h1 className='text-main font-bold text-4xl mb-5'>Shoes Name</h1>
                <p className='text-main mb-5 text-3xl'>Price</p>
                <p className='text-main mb-5 text-2xl'>Color</p>
                <p className='text-main mb-5 text-2xl'>Size</p>
                <p className='text-main mb-5 text-2xl'>Detail</p>
            </section>
            <section className='flex gap-16 '>
                <button className='blue-btn'>Add To Cart</button>
                <button className='white-btn w-40'>Favorite</button>
            </section>

        </div>

    )
}

export default DetailText
