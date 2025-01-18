import React from 'react'
import AddColor from '../Section/Product/AddColor'
import AddProductHeader from '../Section/Product/AddProductHeader'

const AddColorPage = () => {
    return (
        <div>
            <div className="mt-10">
                <section>
                    <AddProductHeader
                        btn1="New brand"
                        btn2="New Category"
                        btn3="New Product"
                        btn4="New Detail"
                        route1="addBrand"
                        route2="addCategory"
                        route3="addProduct"
                        route4="addDetail"
                    />
                </section>
                <section>
                    <AddColor />
                </section>
            </div>
        </div>
    )
}

export default AddColorPage
