import React from 'react';
import './Main.css';
import ProductScreen from "../Screens/ProductScreen/ProductScreen";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import {Route} from "react-router-dom";
import CartScreen from "../Screens/CartScreen/CartScreen";

const Main = () => {
    return (
        <div className='main'>
            <div className='content'>
                <Route path='/product/:id' exact={true} component={ProductScreen}/>
                <Route path='/cart/:id?' component={CartScreen}/>
                <Route path='/' exact={true} component={HomeScreen}/>

            </div>
        </div>
    );
};

export default Main;