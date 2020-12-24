import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import {Route} from "react-router-dom";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import React from "react";
import ProductScreen from "./Components/Screens/ProductScreen/ProductScreen";

function App() {
  return (
    <div className="grid-container">
      <Header/>
        <Route path='/' exact={true} component={HomeScreen}/>
        <Route path='/product/:id' exact={true} component={ProductScreen}/>
      <Footer/>
    </div>
  );
}

export default App;
