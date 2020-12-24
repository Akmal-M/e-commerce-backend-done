import React from 'react';
import data from "../../../data";
import {Link} from "react-router-dom";
import './ProductScreen.css';

const ProductScreen = (props) => {
    console.log(props.match.params.id)

    const product = data.products.find(x => x._id === props.match.params.id);

    return (
        <div>
            <div className='details__backToResult'>
                <Link to='/'> Back to result </Link>
            </div>

            <div className='details'>
                <div className='details__image'>
                    <img src={product.image} alt="product"/>
                    rasmi
                </div>

                <div className='details__info'>
                    <ul>
                        <li>
                            <h4>Mahsulot nomi datadan</h4>
                        </li>
                        <li>
                            4.5 Stars (10 Reviews)
                        </li>
                        <li>
                            Price: <b>$77</b>
                        </li>
                        <li>
                            Description:
                            <div>
                                desription datadan
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='details__action'>
                    <ul>
                        <li>
                            Price: 77
                        </li>
                        <li>
                            Status: 77
                        </li>
                        <li>
                            Qty:
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                        </li>
                        <li>
                            <button className='details__button'>Add To Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default ProductScreen;