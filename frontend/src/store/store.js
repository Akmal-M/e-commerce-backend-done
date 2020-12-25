import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {productListReducer} from "../reducers/productReducer";
import {productDetailsReducer} from "../reducers/productDetailsReducer";


const initialState = {}

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;