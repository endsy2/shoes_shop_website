import { Link } from 'react-router-dom'
import { slider1, sliderLetter } from '../assets'

const Sliders = () => {
    return (
        <div
            className=''
            style={{
                backgroundImage: `url(${slider1})`, backgroundSize: 'cover',
                backgroundPosition: 'center', width: '100%', height: '570px',
                display: 'flex',
                alignItems: 'center'
            }}>


            <div className='ml-2 sm:ml-14 lg:ml-20 xl:ml-20'>
                <img src={sliderLetter} className=' w-[200px] sm:w-[300px] lg:w-[380px] xl:w-[420px]' />
                <Link to='/product'><button className='px-5 md:px-8 lg:px-10 py-3 bg-black text-white font-bold font-OpenSans rounded-2xl mt-5 transition-transform hover:scale-110 duration-200'>Shop Now</button></Link>

            </div>
        </div>
    )
}

export default Sliders
