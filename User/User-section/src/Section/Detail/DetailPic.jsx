import React from 'react';
import { pic1 } from '../../assets';
import { detailpic } from '../../Constants';

const DetailPic = () => {
    return (
        <section className='flex'>
            {/* Display images from detailpic array */}
            <div className='flex flex-col gap-5 mx-5 mt-2 '>
                {detailpic.map((element, index) => (
                    <div key={index} className=' w-20'>
                        <img src={element.pic} alt={element.pic} className='rounded-xl' />
                    </div>
                ))}
            </div>

            {/* Optional section for additional content */}
            <section>
                <div><img src={pic1} alt="Optional image" className='rounded-xl' /></div>
            </section>
        </section>
    );
};

export default DetailPic;
