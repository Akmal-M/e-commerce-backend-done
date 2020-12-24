import React from 'react';
import './Main.css';
import ProductScreen from "../Screens/ProductScreen/ProductScreen";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import {Route} from "react-router-dom";

const Main = () => {
    return (
        <div className='main'>
            <div className='content'>
                <Route path='/products/:id' exact={true} component={ProductScreen}/>

              <HomeScreen/>
            </div>
        </div>
    );
};

export default Main;