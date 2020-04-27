import React from 'react';
import ProductList from '../../components/Products/ProductList';
import products from '../../mocks/products';
const ProductContainer = () => {
    
    return(
        <ProductList data={products}/>
    )
}
export default ProductContainer;