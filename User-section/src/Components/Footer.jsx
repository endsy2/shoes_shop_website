import React, { useContext } from 'react';
import { logo } from '../assets';
import { footerImage, footerInfo } from '../Constants';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

const Footer = () => {
    const { theme } = useContext(ThemeContext)
    return (

        <div className='bg-darkGray py-16 mt-40 w-full border-t-2  border-primary-600 h-full'>
            <div className='max-w-7xl mx-auto px-6 flex justify-around  '>
                {/* Logo and Social Media Icons */}
                <div className='flex flex-col items-center md:items-start md:flex-row md:justify-between gap-10'>
                    <div className='flex flex-col items-center md:items-start mr-32'>
                        <Link to='/'>
                            <img src={logo} alt="logo" className='w-40 mb-6' />
                        </Link>
                        <ul className='flex justify-center gap-6'>
                            {footerImage.map((element, index) => (
                                <li key={index}>
                                    <img src={element} alt={`footer-icon-${index}`} className='w-8 hover:opacity-80 transition-all' />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer Info Links */}
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
                        {footerInfo.map((element, index) => (
                            <section key={index} className='dark:text-[white] text-primary-600  flex flex-col gap-4'>
                                <ul className='flex flex-col gap-2'>
                                    <li className='text-xl font-bold'>{element.header}</li>
                                    {element.body.map((item, idx) => (
                                        <div key={idx}>
                                            {/* Render images if they exist */}
                                            {item.img && (
                                                <div className='flex flex-col gap-2'>
                                                    {item.img.map((imgSrc, imgIdx) => (
                                                        <li key={imgIdx}>
                                                            <Link to={imgSrc.detail} className='flex items-center gap-2 text-gray-400 '>
                                                                <img src={theme ? imgSrc.imgBlack : imgSrc.img} alt={`image-${imgIdx}`} className='w-6 h-6' />
                                                                <span>{imgSrc.detail}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Render text details */}
                                            {item.detail && item.detail.map((text, textIdx) => (
                                                <li key={textIdx} className=''>
                                                    <Link to={text} className='text-gray-400 dark:hover:text-white hover:text-primary-600'>{text}</Link>
                                                </li>
                                            ))}
                                        </div>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className='text-center mt-16 text-primary'>
                <p className='text-sm'>
                    &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
                </p>
            </div>
        </div>

    );
};

export default Footer;
