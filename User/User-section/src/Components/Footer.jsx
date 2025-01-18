import React from 'react';
import { logo } from '../assets';
import { footerImage, footerInfo } from '../Constants';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='flex gap-56 py-16 mt-40  w-full border-y-2 border-[white]'>
            <div className='ml-10 mt-2 flex flex-col items-center'>
                <img src={logo} alt="logo" className='w-40' />
                <ul className='flex justify-center items-center gap-6 mt-10'>
                    {footerImage.map((element, index) => (
                        <li key={index}><img src={element} alt="" className='w-8' /></li>
                    ))}
                </ul>
            </div>
            <section className='grid grid-cols-4 gap-20'>
                {footerInfo.map((element, index) => (
                    <section key={index} className='w-40'>
                        <ul className='text-[white] flex flex-col items-start gap-2'>
                            <li className='text-xl font-bold font-OpenSans'>{element.header}</li>
                            {element.body.map((item, idx) => (
                                <div key={idx}>
                                    {/* Render images if they exist */}
                                    {item.img && (
                                        <div className='flex flex-col gap-2'>
                                            {item.img.map((imgSrc, imgIdx) => (
                                                <li key={imgIdx}><Link to={imgSrc.detail} className='flex items-center gap-2'><img src={imgSrc.img} alt={`image-${imgIdx}`} className='w-6 h-6' />{imgSrc.detail}</Link></li>
                                            ))}
                                        </div>
                                    )}
                                    {/* Render text details */}
                                    {item.detail.map((text, textIdx) => (
                                        <li key={textIdx}><Link to={text}>{text}</Link></li>
                                    ))}
                                </div>
                            ))}
                        </ul>
                    </section>
                ))}
            </section>

        </section>
    );
};

export default Footer;
