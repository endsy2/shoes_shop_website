
import { useState } from 'react';
import { updateOrderItems } from '../../Fetch/FetchAPI';



const UpdateOrder = ({ order_items_id }) => {
    const [phone_name, setProductName] = useState();
    const [color, setProductColor] = useState();
    const [quantity, setQuantity] = useState();
    const handleSubmit = async () => {
        try {
            const value = {
                order_items_id,
                phone_name,
                color,
                quantity
            }
            const update = await updateOrderItems({ value })
            window.location.reload();
            return update;

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='p-10'>
            <h1 className='text-center text-2xl text-primary font-bold'>Order Update</h1>
            <form className='mt-10 lg:grid-cols-2 grid grid-cols-1 gap-5'>
                <div className='flex flex-col '>
                    <label className='text-sm font-medium text-primary mb-2'>Product Name</label>
                    <input type="text" className='input-style' onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div className='flex flex-col '>
                    <label className='text-sm font-medium text-primary mb-2'>Product Color</label>
                    <input type="color" className='h-10 w-full rounded-lg border text-primary p-1' onChange={(e) => setProductColor(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm font-medium text-primary mb-2'>Quantity</label>
                    <input type="text" className='input-style' onChange={(e => setQuantity(e.target.value))} />
                </div>

            </form>
            <div className='flex justify-start mt-10'>
                <button onClick={() => handleSubmit()} className='bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition max-w-sm' >Update</button>
            </div>
        </div>
    )
}

export default UpdateOrder
