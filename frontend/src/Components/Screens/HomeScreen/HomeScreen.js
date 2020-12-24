import React from 'react';
import data from "../../../data";
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div className='products'>
            {
                data.products.map(product =>
                    <div className='products__li'>
                        <div className='product'>
                            <Link to={'/product/' + product._id}>
                                <img className='products__image' src={product.image} alt='product'/>
                            </Link>
                            <div className='product__name'>
                                {product.name}
                            </div>
                            <div className='product__brand'>
                                {product.brand}
                            </div>
                            <div className='product__price'>${product.price}</div>
                            <div className='product__rating'>{product.rating} Stars
                                ({product.numReviews} Reviews)
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default HomeScreen;