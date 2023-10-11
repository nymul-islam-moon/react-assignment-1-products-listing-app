/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

export default function Products ( { products } ) {
    return (
        <div className='products'>
            {products.map( (product, i) => (
                <Product key={i} product={product} />
            ) )}
        </div>
    );
}