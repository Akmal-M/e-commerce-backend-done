import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../../../actions/productActions";

const CartScreen = (props) => {

    const  productList = useSelector(state => state.productList);
    const { products: product, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());

        return () => {

        };
    }, [])

    return (
        loading ? <div>Loading...</div> :
            error ? <div>{error}</div> :
        <div className='products'>
            {
                product.map(product =>
                    <div className='products__li' key={product._id}>
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

export default CartScreen;