import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './ProductScreen.css';
import {useDispatch, useSelector} from "react-redux";
import {detailsProducts} from "../../../actions/productActions";

const ProductScreen = (props) => {

    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProducts(props.match.params.id));
        return () => {
            //
        };
    }, [])

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }


    return (

        <div>
            <div className='details__backToResult'>
                <Link to='/'> Back to result </Link>
            </div>
            {loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :

                    (<div className='details'>
                        <div className='details__image'>
                            <img src={product.image} alt="product"/>
                        </div>

                        <div className='details__info'>
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    {product.rating} Stars ({product.numReviews} Reviews)
                                </li>
                                <li>
                                    Price: <b>${product.price}</b>
                                </li>
                                <li>
                                    Description:
                                    <div>
                                        {product.description}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='details__action'>
                            <ul>
                                <li>
                                    Price: {product.price}
                                </li>
                                <li>
                                    Status:  {product.countInStock > 0  ? "In Stock" : ""}
                                </li>
                                <li>
                                    Qty:
                                    <select name="" id="" value={qty}
                                            onChange={(e) => {setQty(e.target.value) }}>
                                        {[...Array(product.CountInStock).keys()].map(x=>
                                            <option key={x+1} value={x+1}>{x+1}</option>
                                        )}
                                    </select>
                                </li>
                                <li>
                                    {product.countInStock > 0  &&
                                    <button onClick={handleAddToCart} className='details__button'>Add To Cart</button>}
                                </li>
                            </ul>
                        </div>
                    </div>
                    )

            }
        </div>
    )
}

export default ProductScreen;