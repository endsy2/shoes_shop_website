import React from 'react';
import { logo } from '../assets';
import { footerImage, footerInfo } from '../Constants';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-darkGray py-16 mt-40 w-full border-t-2 border-black text-black">
            <div className="max-w-full mx-auto  sm:px-8 lg:px-16 flex flex-col md:flex-row justify-around max-md:items-center lg:gap-16 text-center">
                {/* Logo and Social Media Icons */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-40" />
                    </Link>
                    <ul className="flex justify-center gap-6 md:justify-start">
                        {footerImage.map((element, index) => (
                            <li key={index}>
                                <img
                                    src={element}
                                    alt={`footer-icon-${index}`}
                                    className="w-8 hover:opacity-80 transition-all"
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer Info Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-8 md:mt-0">
                    {footerInfo.map((element, index) => (
                        <section key={index} className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold">{element.header}</h3>
                            {element.body.map((item, idx) => (
                                <div key={idx}>
                                    {/* Render images if they exist */}
                                    {item.img && (
                                        <div className="">
                                            <ul className='flex flex-col gap-5'>
                                                {item.img.map((imgSrc, imgIdx) => (
                                                    <li key={imgIdx}>
                                                        <div className='flex justify-center'>
                                                            <Link
                                                                to={imgSrc.detail}
                                                                className="flex items-center gap-2 text-black hover:text-gray-500"
                                                            >
                                                                <p>{imgSrc.img}</p>
                                                                {/* <img
                                                                    src={imgSrc.imgBlack}
                                                                    alt={`image-${imgIdx}`}
                                                                    className="w-6 h-6"
                                                                /> */}
                                                                <span>{imgSrc.detail}</span>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Render text details */}
                                    <ul>
                                        {item.detail && item.detail.map((text, textIdx) => (
                                            <li key={textIdx}>
                                                <Link to={text} className="text-black hover:text-gray-500">
                                                    {text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>
                    ))}
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="text-center mt-16 text-sm text-black">
                <p>
                    &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
