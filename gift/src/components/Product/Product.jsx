import React from 'react'
import ProductDetails from './ProductDetails/ProductDetails'
import BestSales from './BestSales/BestSales'
import AdditionalDetails from './AdditionalDetails/AdditionalDetails'
function Product() {
    return (
        <>
            <ProductDetails/>
            <AdditionalDetails/>
            <BestSales/>
        </>
    )
}

export default Product